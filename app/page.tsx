"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Global from '../components/Global';
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from '../components/Footer';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
    const { lang, setLang, dict } = useLanguage();

  const images = [
    '/home1.jpg',
    '/olidoresarl.webp',
    '/TEAM3.webp',
    '/mamunga.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

return (
  <>
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat brightness-105 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Navbar - Garde sa place en haut */}
      <div className="relative z-20">
        <Navbar /> 
      </div>

      {/* Hero Content - Modifié pour le centrage parfait */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-center space-y-6 sm:space-y-8">
          {/* Main Heading */}
         <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            <span className="block animate-fade-in-up">Olidor Sarl</span>
            <span className="block mt-2 sm:mt-3 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-emerald-200 font-semibold animate-fade-in-up delay-200">
              {/* Utilisation de la traduction */}
              {dict.hero.subtitle}
            </span>
          </h1>

          {/* Description */}
         <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-md max-w-xs sm:max-w-xl md:max-w-3xl mx-auto animate-fade-in-up delay-300">
            {/* Utilisation de la traduction */}
            {dict.hero.description}
          </p>
        </div>
      </div>
    </div>

    <About />   
    <Global /> 
    <ContactSection /> 
    <Footer />   
  </>
);
}