"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../app/productsData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GlobalPresencePage() {
  // On récupère le dictionnaire (dict) depuis ton contexte
  const { dict } = useLanguage();
  
  // On cible la section globalPresence de ton JSON
  const t = dict.globalPresence;

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

      {/* ========================= GLOBAL PRESENCE (HERO) ========================== */}
      <section className="sticky top-0 h-[30vh] sm:h-[40vh] w-full overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/olilo.png"
            alt={t.heroTitle}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-8">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] leading-snug">
            {t.heroTitle}
          </h1>
        </div>
      </section>

      {/* ========================= SECTION 1 : GAMME PRODUITS ========================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-green-700">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
            {t.productsTitle}
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {firstProducts.map((product, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700 flex flex-col h-full">
              <div className="relative w-full h-44">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">{product.shortDesc}</p>
                </div>
                <Link href={`/produits/${product.slug}`} className="mt-4 inline-block bg-blue-600 hover:bg-emerald-200 hover:text-gray-900 text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-300 self-center">
                  {t.moreInfo}
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
          alt={t.distributionTitle}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] text-center max-w-5xl">
            {t.distributionTitle}
          </h1>
        </div>
      </section>

      {/* ========================= SECTION 2 : AUTRES PRODUITS ========================== */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-green-900 via-green-800 to-green-500 px-6 py-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
            {t.otherProductsTitle}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {secondProducts.map((product, i) => (
            <div key={i} className="flex flex-col h-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:scale-105 hover:border-emerald-400 transition-transform duration-300">
              <div className="relative w-full h-52">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">{product.shortDesc}</p>
                </div>
                <Link href={`/produits/${product.slug}`} className="mt-4 inline-block bg-blue-600 hover:bg-emerald-600 text-white font-medium py-1.5 px-4 rounded-full self-center">
                  {t.learnMore}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= SECTION 3 : LOGISTIQUE ========================== */}
      <section className="relative min-h-screen bg-green-700 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t.logistics.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl">
            {t.logistics.description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Location Véhicules */}
          <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-56 sm:h-64 md:h-72 relative">
              <Image
                src="/olicar.jpeg"
                alt={t.logistics.rentalTitle}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center text-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{t.logistics.rentalTitle}</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">{t.logistics.rentalDesc}</p>
              <Link href="/transport" className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2">
                {t.learnMore}
              </Link>
            </div>
          </div>

          {/* Transport Marchandises */}
          <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6 sm:p-8 flex flex-col justify-center order-2 md:order-1 text-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{t.logistics.transportTitle}</h3>
              <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">{t.logistics.transportDesc}</p>
              <Link href="/transport" className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2">
                {t.learnMore}
              </Link>
            </div>
            <div className="h-56 sm:h-64 md:h-72 order-1 md:order-2 relative">
              <Image
                src="/transmed.jpg"
                alt={t.logistics.transportTitle}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}