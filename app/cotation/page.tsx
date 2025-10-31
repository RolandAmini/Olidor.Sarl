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
    description: "",
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

  const handleRadioChange = (value: string) => {

    setFormData((prev) => ({
      ...prev,
      userType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      

      {/* Section principale */}
          <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-700 to-green-500 text-white py-16 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 text-gray-800">
          {/* Titre */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Demande de cotation
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Veuillez remplir ce formulaire avec soin. Les champs marqués d’un
              astérisque (*) sont obligatoires.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Radio Boutons */}
            <div>
              <span className="block text-green-800 font-semibold mb-3">
                Êtes-vous :
              </span>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="particulier"
                    checked={formData.userType === "particulier"}
                    onChange={() => handleRadioChange("particulier")}
                    className="w-5 h-5 text-green-700"
                  />
                  <span className="text-gray-700">Particulier</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="organisation"
                    checked={formData.userType === "organisation"}
                    onChange={() => handleRadioChange("organisation")}
                    className="w-5 h-5 text-green-700"
                  />
                  <span className="text-green-400">Organisation / Société</span>
                </label>
              </div>
            </div>

            {/* Civilité & Ville */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Civilité
                </label>
                <select
                  name="civilite"
                  value={formData.civilite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                >
                  <option value="">Sélectionnez</option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </select>
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Ville 
                </label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Ville"
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Noms & Pays */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Noms 
                </label>
                <input
                  type="text"
                  name="noms"
                  value={formData.noms}
                  onChange={handleChange}
                  placeholder="Nom et prénom"
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Pays
                </label>
                <select
                  name="pays"
                  value={formData.pays}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                >
                  <option value="République démocratique du Congo">
                    République démocratique du Congo
                  </option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Canada">Canada</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Téléphone & Organisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Téléphone 
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Numéro de téléphone"
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Organisation / Société 
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Nom de votre organisation"
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Fonction & Site Web */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Fonction
                </label>
                <input
                  type="text"
                  name="fonction"
                  value={formData.fonction}
                  onChange={handleChange}
                  placeholder="Votre poste ou fonction"
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-green-800 font-medium mb-2">
                  Site Web
                </label>
                <input
                  type="url"
                  name="siteWeb"
                  value={formData.siteWeb}
                  onChange={handleChange}
                  placeholder="www.votresite.com"
                  className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-green-800 font-medium mb-2">
                E-mail 
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre adresse e-mail"
                className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-green-800 font-medium mb-2">
                Description du projet / programme 
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                placeholder="Décrivez votre projet en détail..."
                className="w-full px-4 py-3 border border-green-400 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Bouton d’envoi */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
              >
                Envoyer la demande
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
     
    </>
  );
}
