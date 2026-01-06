"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Olidor Sarl Logo"
              className="h-12 w-auto object-contain sm:h-16 md:h-20 lg:h-24"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Page d'accueil
            </Link>
            <Link
              href="/nos-produits"
              className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Nos produits
            </Link>
            <Link
              href="/cotation"
              className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Cotation
            </Link>
            <Link
              href="/shop"
              className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Boutique
            </Link>
            <button className="text-gray-700 hover:text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors relative p-1 sm:p-2"
              aria-label="Shopping cart"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* Search Icon */}
            <button className="hidden sm:block text-gray-700 hover:text-green-600 transition-colors p-1 sm:p-2" aria-label="Search">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Phone Icon */}
            <button className="hidden md:block text-gray-700 hover:text-green-600 transition-colors p-1 sm:p-2" aria-label="Contact">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>

            {/* Language Selector */}
            <div className="hidden lg:block">
              <select className="text-xs xl:text-sm text-gray-700 bg-transparent border-none cursor-pointer focus:outline-none">
                <option>English (US)</option>
                <option>Français</option>
              </select>
            </div>

            {/* Contact Button */}
            <Link
              href="/cotation"
              className="hidden md:block bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 rounded hover:bg-blue-700 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-1 sm:p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-lg shadow-lg py-3 sm:py-4 px-4 sm:px-6 space-y-2 sm:space-y-3 border border-gray-200">
            <Link 
              href="/" 
              className="block text-sm sm:text-base text-gray-700 font-medium hover:text-green-700 transition-colors py-1" 
              onClick={() => setIsOpen(false)}
            >
              Page d'accueil
            </Link>
            <Link 
              href="/nos-produits" 
              className="block text-sm sm:text-base text-gray-700 font-medium hover:text-green-700 transition-colors py-1" 
              onClick={() => setIsOpen(false)}
            >
              Nos produits
            </Link>
            <Link
              href="/cotation"
              className="block text-sm sm:text-base text-gray-700 font-medium hover:text-green-700 transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              Cotation
            </Link>
            <Link 
              href="/shop" 
              className="block text-sm sm:text-base text-gray-700 font-medium hover:text-green-700 transition-colors py-1" 
              onClick={() => setIsOpen(false)}
            >
              Boutique
            </Link>
            <div className="pt-2">
              <select className="w-full text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English (US)</option>
                <option>Français</option>
              </select>
            </div>
            <Link 
              href="/cotation" 
              className="block bg-blue-600 text-white px-4 py-2.5 rounded hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base text-center mt-3" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Cart Overlay */}
      {cartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setCartOpen(false)}
          />
          
          {/* Cart Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
                <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 whitespace-nowrap">Review Order</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Delivery</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Payment</span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-2"
                  aria-label="Close cart"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Order Overview Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Order overview</h2>

              {/* Empty Cart Message */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base text-cyan-700">
                Your cart is empty!
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;