"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import { QuoteSchema } from '@/lib/validations/quote';
import Link from 'next/link';

interface FormData {
  userType: 'organisation' | 'particulier';
  civilite: string;
  ville: string;
  nom: string;
  pays: string;
  telephone: string;
  organisation: string;
  fonction: string;
  siteWeb: string;
  email: string;
  sujet: string;
  message: string;
  categorie: string;
  preciserProduits: 'oui' | 'non';
}

export default function QuoteRequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Changement : État pour le succès
  const [formData, setFormData] = useState<FormData>({
    userType: 'organisation',
    civilite: '',
    ville: '',
    nom: '',
    pays: 'République démocratique du Congo',
    telephone: '',
    organisation: '',
    fonction: '',
    siteWeb: '',
    email: '',
    sujet: '',
    message: '',
    categorie: '',
    preciserProduits: 'non'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const validation = QuoteSchema.safeParse(formData);
    
    if (!validation.success) {
      console.log("DÉTAILS DES ERREURS ZOD:", validation.error.format());
      const errorMsg = Object.values(validation.error.flatten().fieldErrors)[0]?.[0] || "Erreur de validation";
      alert(`⚠️ ${errorMsg}`);
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true); // Changement : On active la vue de succès au lieu de l'alert
        setFormData({
          userType: 'organisation',
          civilite: '',
          ville: '',
          nom: '',
          pays: 'République démocratique du Congo',
          telephone: '',
          organisation: '',
          fonction: '',
          siteWeb: '',
          email: '',
          sujet: '',
          message: '',
          categorie: '',
          preciserProduits: 'non'
        });
      } else {
        alert(`❌ Erreur Odoo: ${result.error}`);
      }
    } catch (error) {
      alert('❌ Erreur réseau. Impossible de contacter le serveur.');
      console.error('Submit error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- LOGIQUE DE LA PAGE DE SUCCÈS ---
  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen mt-25 flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-2xl w-full bg-white p-12 rounded-lg shadow-sm text-center">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Merci !</h2>
            <p className="text-xl text-gray-600 mb-10">
              Votre demande de cotation a été envoyée avec succès.<br />
              L&apos;équipe d&apos;Olidor SARL reviendra vers vous très prochainement.
            </p>
            <Link href="/" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-25 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="bg-green-700 px-6 py-8 rounded-t-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Demande de cotation
            </h1>
          </div>

          {/* Description */}
          <div className="px-6 py-6 bg-gray-50 border-b border-gray-200">
            <p className="text-gray-700 mb-4 font-medium">
              Pour obtenir une cotation, merci de remplir ce formulaire. Les champs marqués d&apos;un astérisque (*) sont obligatoires.
            </p>
            <p className="text-sm text-gray-600">
              En renseignant précisément ces informations, vous permettrez à nos équipes de répondre rapidement à votre demande pour Olidor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8">
            {/* Type d'utilisateur */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-4">Êtes-vous</label>
              <div className="flex gap-6">
                {['particulier', 'organisation'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value={type}
                      checked={formData.userType === type}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700 capitalize">
                      {type === 'organisation' ? 'Organisation / Société' : 'Particulier'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Civilité */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Civilité</label>
                <select
                  name="civilite"
                  value={formData.civilite}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">- Sélectionner -</option>
                  <option value="mr">Monsieur</option>
                  <option value="mme">Madame</option>
                  <option value="mlle">Mademoiselle</option>
                </select>
              </div>

              {/* Ville */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Ville *</label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Ex: Goma"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Nom */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Noms *</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Nom complet"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Pays */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pays</label>
                <select
                  name="pays"
                  value={formData.pays}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="République démocratique du Congo">République démocratique du Congo</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gabon">Gabon</option>
                </select>
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Téléphone *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+243 ..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* CHAMPS CONDITIONNELS : Masqués si Particulier */}
              {formData.userType === 'organisation' && (
                <>
                  {/* Organisation */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Organisation *</label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="Nom de la société"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>

                  {/* Fonction */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Fonction</label>
                    <input
                      type="text"
                      name="fonction"
                      value={formData.fonction}
                      onChange={handleChange}
                      placeholder="Votre poste"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>

                  {/* Site Web */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Site Web</label>
                    <input
                      type="url"
                      name="siteWeb"
                      value={formData.siteWeb}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Email & Sujet */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@exemple.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Sujet / Objet *</label>
              <input
                type="text"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                placeholder="Objet de votre demande"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Votre Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Détails de votre demande de cotation..."
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* Catégorie */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Catégorie *</label>
              <select
                name="categorie"
                value={formData.categorie}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="nutrition">Intrant nutritionnels</option>
                <option value="pci">Kit PCI</option>
                <option value="medical">Équipement médicaux</option>
                <option value="vehicules">Location de véhicules</option>
                <option value="transport">Transport de marchandises</option>
              </select>
            </div>

            {/* Préciser les produits */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-4">Souhaitez-vous préciser les produits ?</label>
              <div className="flex gap-4">
                {['oui', 'non'].map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="preciserProduits"
                      value={option}
                      checked={formData.preciserProduits === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-green-600 focus:ring-green-500"
                    />
                    <span className="ml-2 text-gray-700 capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-8 py-3 rounded-md font-semibold text-white transition-all duration-200 ${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 shadow-md'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : 'Envoyer le formulaire'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}