"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const { dict } = useLanguage();

  if (!dict) return null;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-cyan-50 py-6 sm:py-8 lg:py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Side - Image ronde */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-2xl">
             <Image
  src="/aboutimg.png"
  alt="Olidor Logo"
  fill
  sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 550px"
  className="object-contain"
/>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-blue-700 leading-tight">
              {dict.about.title}
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-700">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {dict.about.p1}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {dict.about.p2}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/Apropos"
                className="group px-8 py-3 border-2 border-green-700 text-green-700 font-bold rounded-full hover:bg-blue-700 hover:text-white transition-all flex items-center gap-2"
              >
                {dict.about.button || dict.about.readMore || "En savoir plus"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}