"use client";

import { ShoppingCart, Truck, Leaf } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image'; // Importation ajoutée
import { useLanguage } from "@/contexts/LanguageContext";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { dict } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!dict) return null;

  // Correction : Ajout de "key" sur les éléments du tableau d'icônes
  const icons = [
    <Leaf key="icon-leaf" className="w-10 h-10" />, 
    <ShoppingCart key="icon-cart" className="w-10 h-10" />, 
    <Truck key="icon-truck" className="w-10 h-10" />
  ];

  const renderReasons = (
    <ul className="space-y-4 text-gray-700">
      {dict.about.reasons.map((reason, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>
            {index === 1 ? (
              <>
                {reason.split("voir")[0]}
                <a
                  href="https://actionofthefuture.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-bold hover:text-blue-800 transition-colors"
                >
                  voir
                </a>
                {reason.split("voir")[1]}
              </>
            ) : (
              reason
            )}
          </span>
        </li>
      ))}
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
                {dict.about.title}
              </h1>
              <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-cyan-50">
                {dict.about.heroSubtitle}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>{dict.about.p1}</p>
                  <p>{dict.about.p2}</p>

                  <h2 className="text-2xl font-bold mb-3">{dict.about.whyChooseUs}</h2>

                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[1000px]" : "max-h-28"}`}>
                    {renderReasons}
                  </div>

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-green-700 mt-2 font-semibold hover:underline flex items-center gap-1"
                  >
                    {isExpanded ? dict.about.readLess : dict.about.readMore}
                  </button>
                </div>
              </div>

              {/* Correction : Utilisation du composant Image de Next.js */}
              <div className="relative">
                <div className="relative aspect-square bg-gradient-to-br from-cyan-100 to-green-100 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/TEAM3.webp"
                    alt="Olidor Operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
                {dict.about.servicesTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {dict.about.servicesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dict.about.servicesList.map((service, index) => (
                <div
                  key={`service-${index}`} // Clé unique ajoutée
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center text-white mb-6">
                    {icons[index]}
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
              {dict.about.cta.title}
            </h2>
            <p className="text-xl text-gray-300">
              {dict.about.cta.subtitle}
            </p>
            <a
              href="/cotation"
              className="inline-block px-10 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-green-800 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              {dict.about.cta.button}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}