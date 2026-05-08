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

    const host = "odoo.actionofthefuture.org";
    const commonClient = xmlrpc.createSecureClient({ host, port: 443, path: '/xmlrpc/2/common' });
    const objectClient = xmlrpc.createSecureClient({ host, port: 443, path: '/xmlrpc/2/object' });

    // Test de connexion
const version = await new Promise((resolve, reject) => {
  commonClient.methodCall('version', [], (error: unknown, value: unknown) => {
    if (error) reject(error);
    else resolve(value);
  });
});
console.log('🔍 Odoo version:', JSON.stringify(version));

    // 3. Authentification
    const uid = await new Promise<number>((resolve, reject) => {
      commonClient.methodCall(
        'authenticate',
        [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {}],
        (error: unknown, value: unknown) => { // ✅ Utilisation de unknown
           console.log('🔍 Auth response type:', typeof value, '| value:', value);


          if (error) {
            reject(error instanceof Error ? error : new Error(String(error)));
          
          } else if (!value || value === false) {
           reject(new Error(`Authentification échouée - Odoo a retourné: ${JSON.stringify(value)}`));
           } else if (typeof value !== 'number') {
        reject(new Error(`Type inattendu: ${typeof value} - valeur: ${JSON.stringify(value)}`));
      } else {
        resolve(value);
      }
        }
      );
    });

    // 2. Génération du titre avec numéro de cotation (ex: COT-12345)
    const cotationNumber = Math.floor(10000 + Math.random() * 90000);
    const titreFinal = `Demande de cotation N° ${cotationNumber} - ${formData.sujet}`;

    

    // 5. Création de la Piste
    // 5. Création de la Piste / Opportunité
// 3. Création de l'Opportunité avec champs structurés
    const leadId = await new Promise<number>((resolve, reject) => {
      objectClient.methodCall(
        'execute_kw',
        [
          ODOO_DB, uid, ODOO_PASSWORD,
          'crm.lead', 'create',
          [{
            name: titreFinal,               // Nouveau Titre
            contact_name: formData.nom,     // Nom du client
            partner_name: formData.organisation || false, // Organisation (au même niveau que l'email)
            email_from: formData.email,     // Email
            phone: formData.telephone,      // Téléphone
            city: formData.ville,           // Ville (affichée dans les infos contact)
            street: formData.pays,          // Pays (mis dans l'adresse pour être visible)
            function: formData.fonction || false, // Fonction/Poste
            
            // On laisse le champ description UNIQUEMENT pour le message
            description: `MESSAGE DU CLIENT :\n\n${formData.message}`,
            
            type: 'opportunity',
            company_id: 4,                  // Olidor SARL
            priority: '3',                  // Haute importance
          }]
        ],
        (error: unknown, value: unknown) => {
          if (error) {
            reject(error instanceof Error ? error : new Error(String(error)));
          } else {
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