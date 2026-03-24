"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Side - O Shape Logo Design with Images */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">

              {/* Large O Shape - Outer Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative">
                  <img
                    src="/home1.jpg"
                    alt="Oil & Gas Operations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Inner White Circle - Creates the O shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[65%] bg-gradient-to-br from-gray-50 to-white rounded-full shadow-inner"></div>
              </div>

              {/* Center - Olidor Logo Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-white rounded-full shadow-2xl flex items-center justify-center z-10 p-4 sm:p-5 lg:p-6">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center z-10 p-2">
                        <img
                          src="/cercle.png"
                          alt="Olidor Logo"
                          className="w-full h-full object-cover rounded-full object-[15%_30%] scale-[1.8] transition-transform"
                        />
                      </div>
                    </div>

                    {/* Points décoratifs internes */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-green-700 rounded-full shadow-lg animate-pulse"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-700 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* Decorative dots around the O */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-10 lg:right-10 w-3 h-3 sm:w-4 sm:h-4 bg-green-700 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-700 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-blue-700 leading-tight">
              À propos de Olidor sarl
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-700">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Olidor Sarl est une entreprise engagée dans la production, la transformation, la commercialisation et la distribution d&#39;intrants nutritionnels et agroalimentaires, ainsi que dans la fourniture de services de location de véhicules, de transport et de logistique.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Forte d'une expertise locale et d'une approche innovante, Olidor s'impose comme un acteur clé pour répondre aux besoins variés des ménages, des organismes humanitaires et des entreprises de la région.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-green-700 text-gray-800 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Link
                  href="/Apropos"
                  className="text-sm sm:text-base lg:text-lg text-black font-medium hover:text-white transition-colors"
                >
                  Lire plus
                </Link>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}