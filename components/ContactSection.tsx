"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

export default function RealisationsPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid Layout - 2 colonnes sur desktop */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Colonne Gauche - Texte */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Réalisations
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                  Nos performances témoignent de notre engagement à fournir des solutions nutritionnelles et logistiques de qualité.
                </p>
                <p className="text-base text-gray-700">
                  Découvrez les résultats concrets qui renforcent la confiance de nos clients et partenaires.
                </p>
              </div>

              {/* Section 1 - Nutrition */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Nutrition – 85% de satisfaction client
                </h2>
                
                <div className="space-y-3 text-gray-700">
                  <p>
                    Olidor Sarl enregistre un taux de satisfaction de 90% dans la fourniture de produits nutritionnels.
                  </p>
                  <p>
                    Nos clients apprécient la qualité, la conformité et l'efficacité de nos solutions validées par les autorités.
                  </p>
                  <p>
                    Nous restons engagés à répondre aux besoins nutritionnels avec rigueur et innovation.
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              {/* Section 2 - Logistique */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Logistique – 80% de satisfaction
                </h2>
                
                <div className="space-y-3 text-gray-700">
                  <p>
                    Nos services logistiques atteignent un taux de satisfaction de 85%, grâce à une offre fiable et flexible.
                  </p>
                  <p>
                    Les clients reconnaissent notre réactivité, même en zones difficiles d'accès.
                  </p>
                  <p>
                    Olidor continue d'optimiser ses opérations pour renforcer la performance et la confiance.
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite - Statistique visuelle */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg w-full max-w-lg">
                
                {/* Graphique circulaire */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-64 h-64">
                    {/* SVG Circle Chart */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      {/* Background Circle */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="20"
                      />
                      {/* Progress Circle - 87.5% */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="20"
                        strokeDasharray={`${2 * Math.PI * 80 * 0.875} ${2 * Math.PI * 80}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-bold text-gray-900">87.5%</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    Avec un <span className="font-semibold text-gray-900">taux de satisfaction client de 85%</span>, Olidor Sarl confirme la confiance accordée par ses partenaires dans les domaines de la nutrition et de la logistique.
                  </p>
                  <p className="text-base leading-relaxed">
                    Ce chiffre reflète la qualité de nos produits, la fiabilité de nos services et notre capacité à répondre aux besoins spécifiques de chaque client.
                  </p>
                  <p className="text-base leading-relaxed">
                    Nous restons engagés à améliorer continuellement nos prestations pour viser une satisfaction encore plus élevée.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}