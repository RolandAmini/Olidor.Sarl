"use client";

import { Globe, ShoppingCart, Truck,Leaf } from 'lucide-react';
import React, { useState } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {

  const services = [
    {
      icon: <Leaf className="w-10 h-10" />,
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

  // Utilisation de JSX avec un vrai lien <a>
  const text = (
   <ul className="space-y-4 text-gray-700">
  <li className="flex items-start gap-3">
    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
    <span>
      Expertise locale et savoir-faire reconnu, pour une transformation et une distribution des produits de qualité.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
    <span>
      Engagement social : Lutte contre la malnutrition et appui aux actions humanitaires à travers sa structure mère{" "}
      <a
        href="https://actionofthefuture.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-bold hover:text-blue-800 transition-colors"
      >
        voir
      </a>{" "}
      dans l'objectif de concrétiser la responsabilité sociale.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
    <span>
      Services souples et personnalisés, adaptés à chaque client et chaque contexte.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
    <span>
     Réactivité et fiabilité dans la gestion logistique et le transport, aussi bien en milieu urbain qu’en zones rurales.
    </span>
  </li>
</ul>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-10 bg-white">
        {/* Hero Section */}
        <section className="relative bg-green-700 text-white py-20 px-4 sm:px-6 lg:px-8">
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
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Olidor Sarl est une entreprise engagée dans la production, la transformation, la commercialisation et la distribution des intrants nutritionnels et agroalimentaires, ainsi que dans la fourniture de services de location véhicules, de transport et de logistique.
                  </p>
                  <p>
                    Forte d'une expertise locale et d'une approche innovante, Olidor s'impose comme un acteur clé pour répondre aux besoins variés des ménages, des organismes humanitaires et des entreprises de la région.
                  </p>

                  <h2 className="text-2xl font-bold mb-3">Pourquoi choisir Olidor Sarl ?</h2>

                
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[1000px]" : "max-h-28"}`}>
                    {text}
                  </div>

                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-green-700 mt-2 font-semibold hover:underline"
                  >
                    {isExpanded ? "Lire moins ▲" : "Lire plus ▼"}
                  </button>
                </div>
              </div>

              {/* Image Section */}
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

        {/* Call to Action */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-xl text-gray-300">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins
            </p>
            <a
              href="/cotation"
              className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demander une Cotation
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}