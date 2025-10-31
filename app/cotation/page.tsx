"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    userType: 'organisation',
    civilite: '',
    ville: '',
    noms: '',
    pays: 'République démocratique du Congo',
    telephone: '',
    organisation: '',
    fonction: '',
    siteWeb: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      userType: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
       
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mt-24 text-green-700 mb-6">
            Demande de cotation
          </h1>
          <p className="text-green-700 text-base mb-4">
            Pour obtenir une cotation, merci de remplir ce formulaire. Les champs marqués d'un astérisque (*) sont obligatoires.
          </p>
          <p className="text-green-700 text-base">
            En renseignant le plus précisément possible les informations descriptives du programme / projet dans lequel vous comptez utiliser les produits de Innofaso, vous permettrez à nos équipes de répondre rapidement et d'orienter au mieux votre demande.
          </p>
        </div>

        <div className="border-t-2 border-gray-300 pt-8"></div>

        {/* Form */}
        <div className="space-y-8 mt-12">
          
          {/* User Type Radio Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="font-semibold text-green-700">Etes-vous</div>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="particulier"
                  checked={formData.userType === 'particulier'}
                  onChange={() => handleRadioChange('particulier')}
                  className="w-5 h-5 text-green-700"
                />
                <span className="text-green-700">Particulier</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="organisation"
                  checked={formData.userType === 'organisation'}
                  onChange={() => handleRadioChange('organisation')}
                  className="w-5 h-5 text-teal-600"
                />
                <span className="text-green-700">Organisation /Société</span>
              </label>
            </div>
          </div>

          {/* Civilité & Ville */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-green-700 font-medium mb-2">Civilité</label>
              <select
                name="civilite"
                value={formData.civilite}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              >
                <option value="">- Cliquer pour selectionner -</option>
                <option value="M.">M.</option>
                <option value="Mme">Mme</option>
                <option value="Mlle">Mlle</option>
              </select>
            </div>
            <div>
              <label className="block text-green-700 font-medium mb-2">Ville *</label>
              <input
                type="text"
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                placeholder="Ville"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
          </div>

          {/* Noms & Pays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-green-700 font-medium mb-2">Noms *</label>
              <input
                type="text"
                name="noms"
                value={formData.noms}
                onChange={handleChange}
                placeholder="Nom et prénom"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-green-700 font-medium mb-2">Pays</label>
              <select
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              >
                <option value="République démocratique du Congo">République démocratique du Congo</option>
                <option value="France">France</option>
                <option value="Belgique">Belgique</option>
                <option value="Canada">Canada</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>

          {/* Téléphone & Organisation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-green-700 font-medium mb-2">Téléphone *</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-green-700 font-medium mb-2">Organisation /Sté *</label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Préciser le nom de votre organisation/société"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
          </div>

          {/* Fonction & Site Web */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-green-700 font-medium mb-2">Fonction</label>
              <input
                type="text"
                name="fonction"
                value={formData.fonction}
                onChange={handleChange}
                placeholder="Votre fonction ou poste dans votre organisation"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-green-700 font-medium mb-2">Site Web</label>
              <input
                type="url"
                name="siteWeb"
                value={formData.siteWeb}
                onChange={handleChange}
                placeholder="votre site web"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-green-700 font-medium mb-2">E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre adresse email privé ou professionnelle"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
              />
            </div>
          </div>

          {/* Description - Full Width */}
          <div>
            <label className="block text-green-700 font-medium mb-2">
              Description de votre projet / programme *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              placeholder="Décrivez votre projet en détail..."
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="px-12 py-4 bg-green-400 hover:bg-teal-800 text-white font-bold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Envoyer la demande
            </button>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}