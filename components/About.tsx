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
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Outer octagon segments - dashed pattern */}
                      <g>
                        {/* Top segment */}
                        <path d="M70 35 L130 35" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Top-right segment */}
                        <path d="M135 40 L165 70" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Right segment */}
                        <path d="M170 75 L170 125" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Bottom-right segment */}
                        <path d="M165 130 L135 160" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Bottom segment */}
                        <path d="M130 165 L70 165" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Bottom-left segment */}
                        <path d="M65 160 L35 130" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Left segment */}
                        <path d="M30 125 L30 75" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                        {/* Top-left segment */}
                        <path d="M35 70 L65 40" stroke="#059669" strokeWidth="8" strokeLinecap="round" strokeDasharray="5 8" />
                      </g>
                      
                      {/* Inner diagonal cross lines */}
                      <line x1="60" y1="60" x2="140" y2="140" stroke="#10b981" strokeWidth="5" opacity="0.6" />
                      <line x1="140" y1="60" x2="60" y2="140" stroke="#10b981" strokeWidth="5" opacity="0.6" />
                      
                      {/* Horizontal and vertical lines */}
                      <line x1="100" y1="50" x2="100" y2="150" stroke="#10b981" strokeWidth="5" opacity="0.6" />
                      <line x1="50" y1="100" x2="150" y2="100" stroke="#10b981" strokeWidth="5" opacity="0.6" />
                      
                      {/* Center small circle */}
                      <circle cx="100" cy="100" r="20" fill="none" stroke="#059669" strokeWidth="6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative dots around the O */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-cyan-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-4 h-4 bg-green-500 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
             À propos de Olidor sarl
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
               Olidor Sarl est une entreprise engagée dans la production, la transformation, la commercialisation et la distribution d&#39;intrants nutritionnels et agroalimentaires, ainsi que dans la fourniture de services de location de véhicules, de transport et de logistique.
              </p>

              <p className="leading-relaxed">
              Forte d'une expertise locale et d'une approche innovante, Olidor s'impose comme un acteur clé pour répondre aux besoins variés des ménages, des organismes humanitaires et des entreprises de la région.
              </p>
            </div>

            <button className="px-10 py-4 border-3 border-cyan-500 text-gray-900 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 text-lg">
                 <Link 
            href="/abouts" 
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
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