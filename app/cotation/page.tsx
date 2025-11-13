"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    userType: "organisation",
    civilite: "",
    ville: "",
    noms: "",
    pays: "République démocratique du Congo",
    telephone: "",
    organisation: "",
    fonction: "",
    siteWeb: "",
    email: "",
    sujet: "",
    message: "",
    categorie: "",
    preciserProduits: "non",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      
      {/* Section principale */}
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-5xl mx-auto">
          
          {/* En-tête */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
              Demande de cotation
            </h1>
            <p className="text-gray-700 text-base mb-3">
              Pour obtenir une cotation, merci de remplir ce formulaire. Les champs marqués d'un astérisque (*) sont obligatoires.
            </p>
            <p className="text-gray-700 text-sm">
              En renseignant le plus précisément possible les informations descriptives du programme / projet dans lequel vous comptez utiliser les produits de Innofaso, vous permettrez à nos équipes de répondre rapidement et d'orienter au mieux votre demande.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Ligne séparatrice */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Radio: Etes-vous */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="font-medium text-gray-800">Etes-vous</div>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="particulier"
                    checked={formData.userType === "particulier"}
                    onChange={() => handleRadioChange("userType", "particulier")}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <span className="text-gray-700">Particulier</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="organisation"
                    checked={formData.userType === "organisation"}
                    onChange={() => handleRadioChange("userType", "organisation")}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <span className="text-gray-700">Organisation /Société</span>
                </label>
              </div>
            </div>

            {/* Civilité & Ville */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">Civilité</label>
                <select
                  name="civilite"
                  value={formData.civilite}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="">- Cliquer pour sélectionner -</option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">
                  Ville <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Ville"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Noms & Pays */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">
                  Noms <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="noms"
                  value={formData.noms}
                  onChange={handleChange}
                  placeholder="Nom et prénom"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">Pays</label>
                <select
                  name="pays"
                  value={formData.pays}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Numéro de téléphone"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">
                  Organisation /Sté <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Préciser le nom de votre organisation/soc"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Fonction & Site Web */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">Fonction</label>
                <input
                  type="text"
                  name="fonction"
                  value={formData.fonction}
                  onChange={handleChange}
                  placeholder="Votre fonction ou poste dans votre organi"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-800 font-medium">Site Web</label>
                <input
                  type="url"
                  name="siteWeb"
                  value={formData.siteWeb}
                  onChange={handleChange}
                  placeholder="votre site web"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre adresse email privé ou professionnc"
                className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Sujet/Objet */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Sujet /Objet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                placeholder="Renseignez ici l'objet de votre message"
                className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Votre Message */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Votre Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Saisissez votre message ici."
                className="w-full px-4 py-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
              />
            </div>

            {/* Catégorie des produits/Service */}
            <div className="space-y-2">
              <label className="block text-gray-800 font-medium">
                Catégorie des produits /Service <span className="text-red-500">*</span>
              </label>
              <select
                name="categorie"
                value={formData.categorie}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value=""></option>
                <option value="nutrition">Nutrition</option>
                <option value="logistique">Logistique</option>
                <option value="transport">Transport</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Souhaitez-vous préciser les produits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="font-medium text-gray-800">Souhaitez-vous préciser les produits</div>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preciserProduits"
                    value="oui"
                    checked={formData.preciserProduits === "oui"}
                    onChange={() => handleRadioChange("preciserProduits", "oui")}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <span className="text-gray-700">Oui</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preciserProduits"
                    value="non"
                    checked={formData.preciserProduits === "non"}
                    onChange={() => handleRadioChange("preciserProduits", "non")}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <span className="text-gray-700">Non</span>
                </label>
              </div>
            </div>

            {/* Bouton d'envoi */}
            <div className="flex justify-end pt-6">
              <button
                onClick={handleSubmit}
                className="px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-all duration-300 shadow-lg"
              >
                Envoyer le formulaire
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}