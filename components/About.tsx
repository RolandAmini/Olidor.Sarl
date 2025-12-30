"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - O Shape Logo Design with Images */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              
              {/* Large O Shape - Outer Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Circle Background with Image */}
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative">
                  <img 
                    src="/home1.jpg" 
                    alt="Oil & Gas Operations"
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Inner White Circle - Creates the O shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[65%] bg-gradient-to-br from-gray-50 to-white rounded-full shadow-inner"></div>
              </div>

              {/* Center - Olidor Logo Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center z-10 p-6">
                  {/* Olidor Logo - Green Octagon Pattern */}
                  <div className="relative w-full h-full">
                   <div className="absolute inset-0 flex items-center justify-center">
  {/* Conteneur circulaire blanc */}
 <div className="w-48 h-60 bg-white rounded-full shadow-2xl flex items-center justify-center z-10 p-4">
  <img 
    src="/cercle.png" 
    alt="Olidor Logo"
    className="w-full h-full object-cover rounded-full object-[25%_40%] scale-[1.8] transition-transform" 
  />
</div>


  
</div>

{/* Points décoratifs conservés */}
<div className="absolute top-10 right-10 w-4 h-4 bg-green-700 rounded-full shadow-lg animate-pulse"></div>
<div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-700 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>

              {/* Decorative dots around the O */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-green-700 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-700 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl  font-bold text-blue-700 leading-tight">
             À propos de Olidor sarl
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p className=" text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
               Olidor Sarl est une entreprise engagée dans la production, la transformation, la commercialisation et la distribution d&#39;intrants nutritionnels et agroalimentaires, ainsi que dans la fourniture de services de location de véhicules, de transport et de logistique.
              </p>
              

              <p className=" text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Forte d'une expertise locale et d'une approche innovante, Olidor s'impose comme un acteur clé pour répondre aux besoins variés des ménages, des organismes humanitaires et des entreprises de la région.
              </p>
            </div>

            <button className="px-10 py-4 border-3 border-green-700 text-gray-800 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                 <Link 
            href="/abouts" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-medium hover:text-white transition-colors"
          >
           lire plus 
          </Link>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}