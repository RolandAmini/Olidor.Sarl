"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../app/productsData';

export default function GlobalPresencePage() {
  // ✅ Suppression de scrollY et _getParallaxStyle (code inutilisé supprimé)

  const firstProducts = [
    { ...products[0], img: "/unga.webp" },
    { ...products[1], img: "/mamunga.webp" },
    { ...products[2], img: "/uji.webp" },
    { ...products[3], img: "/unf.jpeg" },
  ];

  const secondProducts = [
    { ...products[4], img: "/07bB0-02.webp" },
    { ...products[5], img: "/F100-2.webp" },
    { ...products[6], img: "/PLUMP.webp" },
    { ...products[7], img: "/PCI.webp" },
  ];

  return (
    <main className="text-white">

      {/* ========================= GLOBAL PRESENCE ========================== */}
      <section className="sticky top-0 h-[30vh] sm:h-[40vh] w-full overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/olilo.png"
            alt="Oil & Gas Operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-8">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] leading-snug">
            Production agroalimentaire
          </h1>
        </div>
      </section>

      {/* ========================= SECTION 1 : GAMME PRODUITS ========================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="absolute inset-0 bg-green-700"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 px-4 sm:px-6 mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
            Notre gamme des produits
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {firstProducts.map((product, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700 flex flex-col h-full"
            >
              <div className="relative w-full h-44">
                <Image src={product.img} alt={product.name} fill className="object-cover" />
              </div>

              <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed line-clamp-3">
                    {product.shortDesc}
                  </p>
                </div>

                <Link
                  href={`/produits/${product.slug}`}
                  className="mt-4 inline-block bg-blue-600 hover:bg-emerald-200 hover:text-gray-900 text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-300 self-center"
                >
                  Plus d&apos;information
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= TRANSITION ========================== */}
      <section className="sticky top-0 h-[30vh] sm:h-[60vh] flex items-center justify-center overflow-hidden relative bg-emerald-900">
        <Image 
          src="/olidoresarl.webp" 
          alt="Transition background" 
          fill 
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] leading-snug text-center max-w-5xl">
            Commercialisation et distribution
          </h1>
        </div>
      </section>

      {/* ========================= SECTION 2 : AUTRES PRODUITS ========================== */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-green-900 via-green-800 to-green-500 px-6 py-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
            Autres produits disponibles
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-4">
          {secondProducts.map((product, i) => (
            <div
              key={i}
              className="flex flex-col h-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:scale-105 hover:border-emerald-400 transition-transform duration-300"
            >
              <div className="relative w-full h-52">
                <Image src={product.img} alt={product.name} fill className="object-cover" />
              </div>

              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed line-clamp-3">
                    {product.shortDesc}
                  </p>
                </div>

                <Link
                  href={`/produits/${product.slug}`}
                  className="mt-4 inline-block bg-blue-600 hover:bg-emerald-600 text-white font-medium py-1.5 px-4 rounded-full transition-all duration-300 self-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= SECTION 3 : TRANSPORT & LOGISTIQUE ========================== */}
      <section className="relative min-h-screen bg-green-700 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Services de transport, location de véhicules et logistique
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl">
            Fidèle à sa mission de faciliter vos activités, Olidor sarl offre une gamme complète de services logistiques adaptés à chaque besoin
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Card 1 */}
          <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-56 sm:h-64 md:h-72 relative">
              <Image src="/olicar.jpeg" alt="Location de véhicules" fill className="object-cover" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center text-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Location de véhicules</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">
                Des véhicules confortables et robustes (Land-Cruiser, Prado), disponibles pour tous vos déplacements...
              </p>
              <Link href="/transport" className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2">
                En savoir plus
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="p-6 sm:p-8 flex flex-col justify-center order-2 md:order-1 text-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Transport de marchandises</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">
                Nous assurons le transport sécurisé de vos marchandises et médicaments...
              </p>
              <Link href="/transport" className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2">
                En savoir plus
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="h-56 sm:h-64 md:h-72 order-1 md:order-2 relative">
              <Image src="/transmed.jpg" alt="Transport" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}