"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

export default function RealisationsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-12">
        <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Réalisations
          </h1>
          <p className="text-xl text-green-700 leading-relaxed max-w-3xl">
            Nos performances témoignent de notre engagement à fournir des solutions nutritionnelles et logistiques de qualité.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Découvrez les résultats concrets qui renforcent la confiance de nos clients et partenaires.
          </p>
        </div>

        {/* Nutrition Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nutrition – 85% de satisfaction client
            </h2>
            
            <div className="space-y-4 text-green-700">
              <p className="text-lg leading-relaxed">
                Olidor Sarl enregistre un taux de satisfaction de 90% dans la fourniture de produits nutritionnels.
              </p>
              <p className="leading-relaxed">
                Nos clients apprécient la qualité, la conformité et l'efficacité de nos solutions validées par les autorités.
              </p>
              <p className="leading-relaxed">
                Nous restons engagés à répondre aux besoins nutritionnels avec rigueur et innovation.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="pt-4">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-600 to-green-500 rounded-full transition-all duration-1000"
                  style={{ width: '85%' }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>0%</span>
                <span className="font-bold text-green-600">85%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Circular Chart */}
          <div className="flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl">
            <div className="relative">
              {/* Circular Progress */}
              <svg className="w-80 h-80 transform -rotate-90">
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="#e5e7eb"
                  strokeWidth="24"
                  fill="none"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient)"
                  strokeWidth="24"
                  fill="none"
                  strokeDasharray="880"
                  strokeDashoffset="132"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-7xl font-bold text-gray-900">87.5%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="bg-white border-l-4 border-green-600 rounded-2xl p-8 shadow-lg mb-20">
          <p className="text-gray-700 leading-relaxed">
            Avec un <span className="font-bold text-green-600">taux de satisfaction client de 85%</span>, Olidor Sarl confirme la confiance accordée par ses partenaires dans les domaines de la nutrition et de la logistique. Ce chiffre reflète la qualité de nos produits, la fiabilité de nos services et notre engagement continu envers l'excellence.
          </p>
        </div>

        {/* Logistique Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Logistique – 80% de satisfaction
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Nos services logistiques atteignent un taux de satisfaction de 85%, démontrant notre capacité à gérer efficacement les chaînes d'approvisionnement.
              </p>
              <p className="leading-relaxed">
                Grâce à notre réseau étendu et à notre expertise en transport, nous assurons des livraisons ponctuelles et sécurisées sur tout le territoire.
              </p>
              <p className="leading-relaxed">
                Cette performance reflète notre engagement à offrir des solutions logistiques fiables et adaptées aux besoins de nos clients.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="pt-4">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full transition-all duration-1000"
                  style={{ width: '80%' }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>0%</span>
                <span className="font-bold text-amber-600">80%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-green-100">Livraisons mensuelles</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-amber-100">Livraisons à temps</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-teal-100">Provinces desservies</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support client</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez comment Olidor Sarl peut transformer vos défis en succès avec nos solutions éprouvées.
          </p>
          <button className="px-10 py-4 bg-white text-green-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 transform">
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
}