// app/api/create-lead/route.ts
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

    // Validation des données requises
    if (!formData.sujet || !formData.nom || !formData.email) {
      return NextResponse.json(
        { success: false, error: 'Sujet, nom et email sont requis' },
        { status: 400 }
      );
    }

    // Configuration Odoo avec variables d'environnement
    const ODOO_URL = process.env.ODOO_URL;
    const ODOO_DB = process.env.ODOO_DB;
    const ODOO_USERNAME = process.env.ODOO_USERNAME;
    const ODOO_PASSWORD = process.env.ODOO_PASSWORD;

    if (!ODOO_URL || !ODOO_DB || !ODOO_USERNAME || !ODOO_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Configuration Odoo manquante' },
        { status: 500 }
      );
    }

    // Étape 1: Authentification Odoo
    const commonClient = xmlrpc.createSecureClient({
      host: new URL(ODOO_URL).hostname,
      port: 443,
      path: '/xmlrpc/2/common'
    });

    const uid = await new Promise<number>((resolve, reject) => {
      commonClient.methodCall('authenticate', [
        ODOO_DB,
        ODOO_USERNAME,
        ODOO_PASSWORD,
        {}
      ], (error: any, value: any) => {
        if (error) reject(new Error(`Authentification échouée: ${error}`));
        else if (!value) reject(new Error('UID vide reçu'));
        else resolve(value);
      });
    });

    // Étape 2: Créer le Lead dans Odoo
    const objectClient = xmlrpc.createSecureClient({
      host: new URL(ODOO_URL).hostname,
      port: 443,
      path: '/xmlrpc/2/object'
    });

    // Mapper les pays
    const countryId = getCountryId(formData.pays);

    // Préparer les données du Lead
    const leadData = {
      name: formData.sujet,
      contact_name: formData.nom,
      email_from: formData.email,
      phone: formData.telephone || false,
      partner_name: formData.organisation || false,
      street: formData.ville || false,
      country_id: countryId || false,
      function: formData.fonction || false,
      website: formData.siteWeb || false,
      description: `
Type: ${formData.userType === 'organisation' ? 'Organisation/Société' : 'Particulier'}
Civilité: ${formData.civilite || 'Non spécifié'}
Ville: ${formData.ville || 'Non spécifié'}
Pays: ${formData.pays || 'Non spécifié'}
Catégorie: ${formData.categorie || 'Non spécifiée'}
Préciser produits: ${formData.preciserProduits === 'oui' ? 'Oui' : 'Non'}

Message:
${formData.message || 'Aucun message'}
      `.trim(),
      type: 'opportunity',
      stage_id: 1, // Adapter selon votre configuration Odoo
      team_id: 1, // Optionnel: équipe de vente
      user_id: false // Assigner à l'utilisateur connecté par défaut
    };

    // Créer le lead
    const leadId = await new Promise<number>((resolve, reject) => {
      objectClient.methodCall('execute_kw', [
        ODOO_DB,
        uid,
        ODOO_PASSWORD,
        'crm.lead',
        'create',
        [leadData]
      ], (error: any, value: any) => {
        if (error) reject(new Error(`Erreur création lead: ${error}`));
        else resolve(value);
      });
    });

    console.log('✅ Lead créé avec succès dans Odoo, ID:', leadId);

    return NextResponse.json({
      success: true,
      message: 'Lead créé avec succès dans Odoo',
      leadId: leadId
    });

  } catch (error: unknown) {
    console.error('❌ Erreur création lead:', error);
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

// Mapping pays Odoo (IDs à vérifier dans votre instance)
function getCountryId(countryName: string): number | false {
  const countryMapping: Record<string, number> = {
    'République démocratique du Congo': 49, // RDC
    'France': 75,
    'Belgique': 21,
    'Canada': 39,
    'Congo': 49, // Alias RDC
    'RDC': 49
  };
  
  return countryMapping[countryName] || false;
}
