"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useLanguage } from "../contexts/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, dict } = useLanguage();

  const navLinks = [
    { href: "/", label: dict.navbar.home },
    { href: "/produits", label: dict.navbar.products },
    { href: "/cotation", label: dict.navbar.quotation },
    { href: "/Apropos", label: dict.navbar.about },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <Image
  src="/logo.jpg"
  alt="Olidor Sarl"
  width={200} // Ajoutez une largeur de base (en pixels)
  height={60}  // Ajoutez une hauteur de base (en pixels)
  className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  priority // Optionnel : charge le logo plus rapidement
/>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative px-4 py-2 text-sm font-semibold tracking-wide text-blue-600 hover:text-green-700 transition-colors duration-300 rounded-full group"
                >
                  {label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Language Selector - Desktop */}
              <div className="hidden lg:flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1 bg-white/80 backdrop-blur-sm">
                <button
                  onClick={() => setLang("fr" as "fr" | "en")}
                  className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-200 ${
                    lang === "fr" ? "bg-green-700 text-white" : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("en" as "fr" | "en")}
                  className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-200 ${
                    lang === "en" ? "bg-green-700 text-white" : "text-blue-600 hover:text-gray-700"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* CTA Button */}
              <Link
                href="/cotation"
                className="hidden sm:inline-flex items-center gap-2 bg-green-700 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-green-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {dict.navbar.contact}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Hamburger - Mobile */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-blue-600 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                  <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-blue-600 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all duration-200 group"
              >
                {label}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Language + CTA mobile */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1">
                <button
                  onClick={() => setLang("fr" as "fr" | "en")}
                  className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-200 ${
                    lang === "fr" ? "bg-green-700 text-white" : "text-blue-600"
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang("en" as "fr" | "en")}
                  className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-200 ${
                    lang === "en" ? "bg-green-700 text-white" : "text-blue-600"
                  }`}
                >
                  EN
                </button>
              </div>

              <Link
                href="/cotation"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center bg-green-700 hover:bg-green-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              >
                {dict.navbar.contact}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;