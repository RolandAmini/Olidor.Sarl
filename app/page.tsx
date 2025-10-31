
"use client";


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Global from '../components/Global';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Hero Section Component
export default function HeroSection() {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-105"
        style={{
          backgroundImage: "url('/home1.jpg')",
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-green-900/40 to-transparent" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center h-full px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl space-y-8">

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-5xl mt-20 lg:text-6xl xl:text-7xl font-extrabold  text-white leading-tight">
              <span className="block drop-shadow-2xl">Olidor Sarl</span>
              <span className="block text-white/70  drop-shadow-2xl mt-0">
                Plus sain, plus efficace
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
              Nous fournissons des solutions locales aux défis nutritionnels, et sommes un acteur clé dans le transport et la logistique en RDC.
            </p>

          </div>
        </div>

        {/* Right Side - Background showcase */}
        <div className="hidden lg:flex items-center justify-center h-full relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-900/20" />
        </div>
      </div>
      

     
     
    </div>
    <About />
     <Global />
     <Contact/>
     <Footer />
    </>
  );
}