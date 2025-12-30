// app/api/create-lead/route.ts
import { NextResponse, NextRequest } from 'next/server';
import xmlrpc from 'xmlrpc';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Configuration Odoo - REMPLACEZ CES VALEURS PAR VOS INFORMATIONS
    const ODOO_URL = process.env.ODOO_URL || 'https://votre-instance.odoo.com';
    const ODOO_DB = process.env.ODOO_DB || 'votre_base_de_donnees';
    const ODOO_USERNAME = process.env.ODOO_USERNAME || 'votre_email@example.com';
    const ODOO_PASSWORD = process.env.ODOO_PASSWORD || 'votre_mot_de_passe';

    // Étape 1: Authentification avec Odoo
    const commonClient = xmlrpc.createSecureClient({
      host: new URL(ODOO_URL).hostname,
      port: 443,
      path: '/xmlrpc/2/common'
    });

    const uid = await new Promise((resolve, reject) => {
      commonClient.methodCall('authenticate', [
        ODOO_DB,
        ODOO_USERNAME,
        ODOO_PASSWORD,
        {}
      ], (error, value) => {
        if (error) reject(error);
        else resolve(value);
      });
    });

    if (!uid) {
      throw new Error('Échec de l\'authentification Odoo');
    }

    // Étape 2: Créer le Lead/Opportunité dans Odoo
    const objectClient = xmlrpc.createSecureClient({
      host: new URL(ODOO_URL).hostname,
      port: 443,
      path: '/xmlrpc/2/object'
    });

    // Préparer les données du Lead
    const leadData = {
      name: formData.sujet, // Titre de l'opportunité
      contact_name: formData.nom,
      email_from: formData.email,
      phone: formData.telephone,
      partner_name: formData.organisation,
      street: formData.ville,
      country_id: getCountryId(formData.pays), // À mapper avec l'ID pays dans Odoo
      function: formData.fonction || false,
      website: formData.siteWeb || false,
      description: `
Type: ${formData.userType === 'organisation' ? 'Organisation/Société' : 'Particulier'}
Civilité: ${formData.civilite || 'Non spécifié'}
Ville: ${formData.ville}
Pays: ${formData.pays}
Catégorie: ${formData.categorie}
Préciser produits: ${formData.preciserProduits}

Message:
${formData.message}
      `.trim(),
      type: 'opportunity', // Type: opportunité
      stage_id: 1, // ID de l'étape (à adapter selon votre configuration)
      // Vous pouvez ajouter des champs personnalisés ici
      // x_studio_categorie: formData.categorie,
      // x_studio_preciser_produits: formData.preciserProduits === 'oui',
    };

    // Créer le Lead dans Odoo
    const leadId = await new Promise((resolve, reject) => {
      objectClient.methodCall('execute_kw', [
        ODOO_DB,
        uid,
        ODOO_PASSWORD,
        'crm.lead',
        'create',
        [leadData]
      ], (error, value) => {
        if (error) reject(error);
        else resolve(value);
      });
    });

    console.log('Lead créé avec succès dans Odoo, ID:', leadId);

    return NextResponse.json({
      success: true,
      message: 'Lead créé avec succès',
      leadId: leadId
    });

  } catch (error: unknown) {
    console.error('Erreur lors de la création du lead:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
}

// Fonction helper pour mapper les pays avec leurs IDs Odoo
function getCountryId(countryName: string): number | false {
  const countryMapping: Record<string, number> = {
    'République démocratique du Congo': 49, // CD
    'France': 75, // FR
    'Belgique': 21, // BE
    'Canada': 39, // CA
  };
  
  return countryMapping[countryName] || false;
}