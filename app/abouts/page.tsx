"use client";

import React from 'react';
import { Building2, Target, Users, Award, Leaf, Truck, ShoppingCart, Globe } from 'lucide-react';
import Link from 'next/link';       
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services et produits"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Engagement",
      description: "Nous sommes engagés envers nos clients et partenaires"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualité",
      description: "La qualité est au cœur de nos opérations quotidiennes"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous innovons pour répondre aux besoins émergents"
    }
  ];

  const services = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Production Agroalimentaire",
      description: "Production et transformation d'intrants nutritionnels de haute qualité pour répondre aux besoins des ménages et des entreprises."
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Commercialisation",
      description: "Distribution et commercialisation de produits agroalimentaires avec un réseau étendu dans toute la région."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Transport & Logistique",
      description: "Services de location de véhicules, transport et solutions logistiques adaptées à vos besoins spécifiques."
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-400 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
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
                  Aujourd'hui, nous servons fièrement les ménages, les organismes humanitaires et les entreprises à travers la région, contribuant au développement économique local.
                </p>
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-700 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
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
                <div className="w-16 h-16 bg-green-400 rounded-xl flex items-center justify-center text-white mb-6">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-green-400  rounded-full flex items-center justify-center text-white mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-green-400 0 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
            <Building2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Notre Mission
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-cyan-50">
            Fournir des produits agroalimentaires de qualité supérieure et des services logistiques fiables, tout en contribuant au développement durable et à la sécurité alimentaire de notre région.
          </p>
        </div>
      </section>

      {/* Nos Clients */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Qui Nous Servons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos solutions s'adressent à une clientèle diversifiée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ménages</h3>
              <p className="text-gray-700">
                Des produits nutritionnels de qualité pour les familles et les communautés locales.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organismes Humanitaires</h3>
              <p className="text-gray-700">
                Solutions adaptées pour les programmes d'aide alimentaire et de développement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Entreprises</h3>
              <p className="text-gray-700">
                Services professionnels de transport, logistique et approvisionnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Prêt à Travailler Avec Nous ?
          </h2>
          <p className="text-xl text-gray-300">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins
          </p>
          <button className="px-10 py-4 bg-green-400 text-white font-semibold rounded-full hover:from-green-400 hover:to-white transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
             <Link
      href="/contact"
      className="inline-block px-10 py-4 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
    >
      Nous Contacter
    </Link>
          </button>
        </div>
      </section>
    </div>
    <Footer />  
    </>
  );
}