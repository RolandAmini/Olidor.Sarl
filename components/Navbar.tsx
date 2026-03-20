"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    cart, 
    isOpen: cartOpen, 
    setIsOpen: setCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartCount 
  } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.jpg"
                alt="Olidor Sarl Logo"
                className="h-12 w-auto object-contain sm:h-16 md:h-20 lg:h-24 cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Accueil 
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
              href="/Apropos"
              className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap"
            >
              Apropos
            </Link> 
            <button className="text-gray-700 hover:text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Cart Icon with Badge */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors relative p-1 sm:p-2"
              aria-label="Shopping cart"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
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
                <option>Français</option>
                <option>English (US)</option>
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
              Accueil
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
              href="/Boutique" 
              className="block text-sm sm:text-base text-gray-700 font-medium hover:text-green-700 transition-colors py-1" 
              onClick={() => setIsOpen(false)}
            >
              Boutique
            </Link>
            <div className="pt-2">
              <select className="w-full text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Français</option>
                <option>English (US)</option>
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
                <div className="flex items-center gap-1 sm:gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    Mon Panier ({getCartCount()})
                  </h2>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                  aria-label="Close cart"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Votre panier est vide</h3>
                  <p className="text-sm text-gray-500 mb-4">Ajoutez des produits pour commencer vos achats</p>
                  <Link 
                    href="/Boutique"
                    onClick={() => setCartOpen(false)}
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Voir la boutique
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-[calc(100vh-350px)] overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-3 sm:gap-4 border-b border-gray-200 pb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                          onError={(e) => {
                            e.target.src = '/placeholder-product.jpg';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.category}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm sm:text-base font-bold text-gray-900">${item.price}</p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-sm"
                              >
                                -
                              </button>
                              <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-sm"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-2 text-xs sm:text-sm text-red-600 hover:text-red-700 font-medium"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total and Checkout */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Sous-total:</span>
                      <span className="text-base font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-base font-bold text-gray-900">Total:</span>
                      <span className="text-xl sm:text-2xl font-bold text-green-600">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setCartOpen(false);
                        // Redirect to checkout page
                        window.location.href = '/checkout';
                      }}
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
                    >
                      Passer la commande
                    </button>
                    <button 
                      onClick={() => setCartOpen(false)}
                      className="w-full mt-2 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                    >
                      Continuer mes achats
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;