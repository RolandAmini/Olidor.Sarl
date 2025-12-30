"use client";

import { Building2, Target, Users, Award, Leaf, Truck, ShoppingCart, Globe } from 'lucide-react';
import Link from 'next/link'; 
import React, { useState } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function AboutPage() {


  const services = [

    {
      icon: <Globe className="w-10 h-10" />,
      title: "Production agroalimentaire",
      description: "Distribution et commercialisation de produits agroalimentaires avec un réseau étendu dans toute la région."
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Commercialisation et distribution",
      description: "Services de location de véhicules, transport et solutions logistiques adaptées à vos besoins spécifiques."
    },

    {
      icon: <Truck className="w-10 h-10" />,
      title: "Services de transport, location de véhicules et logistique",
      description: "Prestations logistiques complètes pour les organismes humanitaires et les entreprises."
    }
  ];
   const [isExpanded, setIsExpanded] = useState(false);

  const text = `
  Expertise locale et savoir-faire reconnu, pour une transformation et une distribution de produits de qualité.
  Engagement social : Lutte contre la malnutrition et appui aux initiatives humanitaires à travers sa structure mère dans l‘objectif de concrétiser la Responsabilité sociale.
  Services souples et personnalisés, adaptés à chaque client et chaque contexte.
  Réactivité et fiabilité dans la gestion logistique et le transport, aussi bien en milieu urbain qu’en zones rurales.
  `;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-700  text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-3xl mt-5 sm:text-5xl md:text-6xl font-bold">
              À Propos de Olidor SARL
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-cyan-50">
              Votre partenaire de confiance en agroalimentaire et logistique
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'}}></div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Olidor SARL a été fondée avec une vision claire : devenir un acteur majeur dans le secteur agroalimentaire et logistique en offrant des solutions innovantes et durables.
                </p>
                <p>
                  Depuis notre création, nous avons construit une réputation solide basée sur la qualité de nos produits, la fiabilité de nos services et notre engagement envers nos clients.
                </p>
                <p>
                  Aujourd'hui, nous servons fièrement les ménages, les organisations humanitaires et les entreprises à travers la région, contribuant au développement économique local.
                </p>
                 <h2 className="text-2xl font-bold mb-3">Pourquoi choisir Olidor Sarl ?</h2>

                  <p className={`transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
        {text}
      </p>

      {/* Bouton Lire plus / Lire moins */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-green-700 mt-2 font-semibold hover:underline"
      >
        {isExpanded ? "Lire moins ▲" : "Lire plus ▼"}
      </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-100 to-green-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/TEAM3.webp" 
                  alt="Olidor Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-700 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-700 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-16 sm:py-20 mt-0 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
     
      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Prêt à Travailler Avec Nous ?
          </h2>
          <p className="text-xl text-gray-300">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins
          </p>
          <button className="px-10 py-4 bg-emerald-200 text-white font-semibold rounded-full hover:from-green-700 hover:to-white transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
             <a
      href="https://www.olidor.sarl/en/cotation"
      className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
       target="_blank"
       rel="noopener noreferrer"
    >
      Demander une Cotation 
    </a>
          </button>
        </div>
      </section>
    </div>
    <Footer />  
    </>
  );
}