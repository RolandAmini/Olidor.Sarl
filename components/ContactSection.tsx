"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RealisationsPage() {
  const { dict } = useLanguage();
  const t = dict.realisations; // Accès direct à tes nouvelles clés

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
                  {t.title}
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                  {t.description}
                </p>
                <p className="text-base text-gray-700">
                  {t.subtitle}
                </p>
              </div>

              {/* Section 1 - Nutrition */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t.nutrition.title}
                </h2>
                
                <div className="space-y-3 text-gray-700">
                  <p>{t.nutrition.p1}</p>
                  <p>{t.nutrition.p2}</p>
                  <p>{t.nutrition.p3}</p>
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
                  {t.logistics.title}
                </h2>
                
                <div className="space-y-3 text-gray-700">
                  <p>{t.logistics.p1}</p>
                  <p>{t.logistics.p2}</p>
                  <p>{t.logistics.p3}</p>
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
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="20"
                      />
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
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-bold text-gray-900">87.5%</span>
                    </div>
                  </div>
                </div>

                {/* Description du graphique */}
                <div className="text-center space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    {t.chart.p1}
                  </p>
                  <p className="text-base leading-relaxed">
                    {t.chart.p2}
                  </p>
                  <p className="text-base leading-relaxed">
                    {t.chart.p3}
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