import { NextResponse, NextRequest } from 'next/server';
import xmlrpc from 'xmlrpc';

interface LeadFormData {
  sujet: string;
  nom: string;
  email: string;
  telephone: string;
  organisation: string;
  ville: string;
  pays: string;
  fonction?: string;
  message: string;
  userType: 'particulier' | 'organisation';
  categorie: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: LeadFormData = await request.json();

    if (!formData.sujet || !formData.nom || !formData.email) {
      return NextResponse.json(
        { success: false, error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    const ODOO_URL = process.env.ODOO_URL;
    const ODOO_DB = process.env.ODOO_DB;
    const ODOO_USERNAME = process.env.ODOO_USERNAME;
    const ODOO_PASSWORD = process.env.ODOO_PASSWORD;

    if (!ODOO_URL || !ODOO_DB || !ODOO_USERNAME || !ODOO_PASSWORD) {
      throw new Error('Configuration Odoo manquante');
    }

    const host = new URL(ODOO_URL).hostname;
    const commonClient = xmlrpc.createSecureClient({ host, port: 443, path: '/xmlrpc/2/common' });
    const objectClient = xmlrpc.createSecureClient({ host, port: 443, path: '/xmlrpc/2/object' });

    // 3. Authentification
    const uid = await new Promise<number>((resolve, reject) => {
      commonClient.methodCall(
        'authenticate',
        [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {}],
        (error: unknown, value: unknown) => { // ✅ Utilisation de unknown
          if (error) {
            reject(error instanceof Error ? error : new Error(String(error)));
          } else if (typeof value !== 'number') {
            reject(new Error('Authentification échouée'));
          } else {
            resolve(value);
          }
        }
      );
    });

    const descriptionMessage = `
--- Demande Site Web Olidor SARL ---
Organisation: ${formData.organisation || 'N/A'}
Ville: ${formData.ville}
Pays: ${formData.pays}
Message: ${formData.message}
    `.trim();

    // 5. Création de la Piste
    // 5. Création de la Piste / Opportunité
const leadId = await new Promise<number>((resolve, reject) => {
  objectClient.methodCall(
    'execute_kw',
    [
      ODOO_DB, uid, ODOO_PASSWORD,
      'crm.lead', 'create',
      [// ... dans ton bloc de création
{
  name: `[SITE WEB] ${formData.sujet}`,
  contact_name: formData.nom,
  email_from: formData.email,
  phone: formData.telephone || false,
  description: descriptionMessage,
  // C'EST CETTE LIGNE QUI EST LA PLUS SÛRE :
  type: 'opportunity',
  company_id: 4, 
  priority: '2',
}]
    ],
    (error: unknown, value: unknown) => {
      if (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      } else {
        // Log de debug pour voir ce que Odoo renvoie exactement
        console.log('✅ Odoo Response ID:', value);
        resolve(value as number);
      }
    }
  );
});

    return NextResponse.json({ success: true, id: leadId });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    console.error('❌ Erreur Odoo:', errorMessage);
    return NextResponse.json({ success: false, error: 'Erreur technique' }, { status: 500 });
  }
}