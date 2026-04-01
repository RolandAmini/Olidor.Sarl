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
  siteWeb?: string;
  civilite?: string;
  userType: 'particulier' | 'organisation';
  categorie: string;
  preciserProduits: 'oui' | 'non';
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: LeadFormData = await request.json();

    // 1. Validation des données
    if (!formData.sujet || !formData.nom || !formData.email) {
      return NextResponse.json(
        { success: false, error: 'Sujet, nom et email sont requis' },
        { status: 400 }
      );
    }

    // 2. Configuration Odoo
    const ODOO_URL = process.env.ODOO_URL;
    const ODOO_DB = process.env.ODOO_DB;
    const ODOO_USERNAME = process.env.ODOO_USERNAME;
    const ODOO_PASSWORD = process.env.ODOO_PASSWORD; // Utilisez votre API KEY ici

    if (!ODOO_URL || !ODOO_DB || !ODOO_USERNAME || !ODOO_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Configuration Odoo manquante dans le .env' },
        { status: 500 }
      );
    }

    const host = new URL(ODOO_URL).hostname;

    // Étape 3: Authentification pour obtenir l'UID
    const commonClient = xmlrpc.createSecureClient({ host, port: 443, path: '/xmlrpc/2/common' });
    
    const uid = await new Promise<number>((resolve, reject) => {
      commonClient.methodCall('authenticate', [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {}], (error: any, value: any) => {
        if (error) reject(new Error(`Auth failure: ${error}`));
        else if (!value) reject(new Error('UID non valide'));
        else resolve(value);
      });
    });

    const objectClient = xmlrpc.createSecureClient({ host, port: 443, path: '/xmlrpc/2/object' });

    // Étape 4: Créer le Partenaire (Client) dans Odoo
    const partnerId = await new Promise<number>((resolve, reject) => {
      objectClient.methodCall('execute_kw', [
        ODOO_DB, uid, ODOO_PASSWORD,
        'res.partner', 'create',
        [{
          name: formData.nom,
          email: formData.email,
          phone: formData.telephone || false,
          city: formData.ville || false,
          country_id: getCountryId(formData.pays),
          company_type: formData.userType === 'organisation' ? 'company' : 'person',
          function: formData.fonction || false,
          website: formData.siteWeb || false,
          comment: `Organisation: ${formData.organisation}`
        }]
      ], (error: any, value: any) => {
        if (error) reject(new Error(`Erreur Partner: ${error}`));
        else resolve(value);
      });
    });

    // Étape 5: Créer le Devis (Sale Order)
    const orderId = await new Promise<number>((resolve, reject) => {
      const descriptionMessage = `
--- Détails du Site Web ---
Catégorie: ${formData.categorie}
Préciser produits: ${formData.preciserProduits}
Message du client: ${formData.message}
      `.trim();

      objectClient.methodCall('execute_kw', [
        ODOO_DB, uid, ODOO_PASSWORD,
        'sale.order', 'create',
        [{
          partner_id: partnerId,
          origin: 'Site Web Olidor Sarl',
          note: descriptionMessage,
        }]
      ], (error: any, value: any) => {
        if (error) reject(new Error(`Erreur Order: ${error}`));
        else resolve(value);
      });
    });

    // Étape 6: Ajouter une ligne d'article descriptive (pour que le devis ne soit pas vide)
    await new Promise((resolve, reject) => {
      objectClient.methodCall('execute_kw', [
        ODOO_DB, uid, ODOO_PASSWORD,
        'sale.order.line', 'create',
        [{
          order_id: orderId,
          name: `Demande de cotation : ${formData.sujet}`,
          product_uom_qty: 1,
          price_unit: 0.0, // Le boss fixera le prix dans Odoo
        }]
      ], (error: any, value: any) => {
        if (error) reject(error);
        else resolve(value);
      });
    });

    console.log(`✅ Devis Olidor Sarl créé: ID ${orderId}`);

    return NextResponse.json({
      success: true,
      message: 'Votre demande a été envoyée avec succès',
      orderId
    });

  } catch (error: any) {
    console.error('❌ Erreur Odoo:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Erreur interne au serveur' },
      { status: 500 }
    );
  }
}

// Mapping des pays (vérifiez les IDs dans votre Odoo spécifique)
function getCountryId(countryName: string): number | false {
  const countryMapping: Record<string, number> = {
    'République démocratique du Congo': 49,
    'France': 75,
    'Belgique': 21,
    'Canada': 39,
  };
  return countryMapping[countryName] || false;
}