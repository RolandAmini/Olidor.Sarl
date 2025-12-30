"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

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

  // ✅ CORRIGÉ - Type explicite pour handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ CORRIGÉ - Type explicite pour handleSubmit + intégration API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Lead créé avec succès dans Odoo!');
        // Reset form
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
        alert(`❌ Erreur: ${result.error}`);
      }
    } catch (error) {
      alert('❌ Erreur réseau. Vérifiez votre connexion.');
      console.error('Submit error:', error);
    }
  };

  return (
     <>
        <Navbar />
    <div className="min-h-screen mt-20 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-600 px-6 py-8 rounded-t-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Demande de cotation
          </h1>
        </div>

        {/* Description */}
        <div className="px-6 py-6 bg-gray-50 border-b border-gray-200">
          <p className="text-gray-700 mb-4">
            Pour obtenir une cotation, merci de remplir ce formulaire. Les champs marqués d'un astérisque (*) sont obligatoires.
          </p>
          <p className="text-gray-700">
            En renseignant le plus précisément possible les informations descriptives du programme / projet dans lequel vous comptez utiliser les produits de Ihnofaso, vous permettrez à nos équipes de répondre rapidement et d'orienter au mieux votre demande.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-8">
          {/* User Type Selection */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-4">
              Êtes-vous
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="particulier"
                  checked={formData.userType === 'particulier'}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-600"
                />
                <span className="ml-2 text-gray-700">Particulier</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="userType"
                  value="organisation"
                  checked={formData.userType === 'organisation'}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-600"
                />
                <span className="ml-2 text-gray-700">Organisation /Société</span>
              </label>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Civilité */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Civilité
              </label>
              <select
                name="civilite"
                value={formData.civilite}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">- Cliquer pour sélectionner -</option>
                <option value="mr">Monsieur</option>
                <option value="mme">Madame</option>
                <option value="mlle">Mademoiselle</option>
              </select>
            </div>

            {/* Ville */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Ville <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                placeholder="Ville"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Nom */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Noms <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Nom et prénom"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Pays */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Pays
              </label>
              <select
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="République démocratique du Congo">République démocratique du Congo</option>
                <option value="France">France</option>
                <option value="Belgique">Belgique</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Organisation */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Organisation /Sté <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Préciser le nom de votre organisation/soc"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Fonction */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Fonction
              </label>
              <input
                type="text"
                name="fonction"
                value={formData.fonction}
                onChange={handleChange}
                placeholder="Votre fonction ou poste dans votre organi"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Site Web */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Site Web
              </label>
              <input
                type="url"
                name="siteWeb"
                value={formData.siteWeb}
                onChange={handleChange}
                placeholder="votre site web"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Full Width Fields */}
          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre adresse email privé ou professionnelle"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Sujet */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Sujet /Objet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              placeholder="Renseignez ici l'objet de votre message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Votre Message <span className="text-red-500">*</span>
            </label>
           <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Saisissez votre message ici."
  required
  rows={6}  // ← Nombre sans guillemets
  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
></textarea>

          </div>

          {/* Catégorie */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Catégorie des produits /Service <span className="text-red-500">*</span>
            </label>
            <select
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value=""></option>
              <option value="logiciels">Logiciels</option>
              <option value="materiel">Matériel informatique</option>
              <option value="services">Services</option>
              <option value="formation">Formation</option>
            </select>
          </div>

          {/* Préciser les produits */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-4">
              Souhaitez-vous préciser les produits
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preciserProduits"
                  value="oui"
                  checked={formData.preciserProduits === 'oui'}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-600"
                />
                <span className="ml-2 text-gray-700">Oui</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="preciserProduits"
                  value="non"
                  checked={formData.preciserProduits === 'non'}
                  onChange={handleChange}
                  className="w-4 h-4 text-teal-600"
                />
                <span className="ml-2 text-gray-700">Non</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Envoyer le formulaire
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
        </>
    
  );
  
}