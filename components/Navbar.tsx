"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext.";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart,
    isOpen: cartOpen,
    setIsOpen: setCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">

            {/* ── Logo ── */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Olidor Sarl Logo"
                className="h-9 sm:h-11 lg:h-14 w-auto object-contain"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {[
                { href: "/", label: "Accueil" },
                { href: "/produits", label: "Nos produits" },
                { href: "/cotation", label: "Cotation" },
                { href: "/Apropos", label: "À propos" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm xl:text-base text-gray-700 font-medium hover:text-green-600 transition-colors whitespace-nowrap relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green-500 rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* ── Right side ── */}
            <div className="flex items-center gap-1 sm:gap-2">

              {/* Cart */}
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                aria-label="Panier"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {getCartCount() > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-0.5">
                    {getCartCount()}
                  </span>
                )}
              </button>

              {/* Language — desktop only */}
              <div className="hidden lg:block">
                <select className="text-xs xl:text-sm text-gray-600 bg-transparent border border-gray-200 rounded-md px-2 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-gray-300 transition-colors">
                  <option>Français</option>
                  <option>English (US)</option>
                </select>
              </div>

              {/* CTA — hidden on xs */}
              <Link
                href="/cotation"
                className="hidden sm:inline-flex items-center bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 rounded-lg hover:bg-blue-700 active:scale-95 transition-all font-medium text-xs sm:text-sm whitespace-nowrap"
              >
                Contact
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
            {[
              { href: "/", label: "Accueil" },
              { href: "/produits", label: "Nos produits" },
              { href: "/cotation", label: "Cotation" },
              { href: "/Apropos", label: "À propos" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center text-sm text-gray-700 font-medium hover:text-green-600 hover:bg-green-50 py-2.5 px-3 rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
              <select className="flex-1 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Français</option>
                <option>English (US)</option>
              </select>
              <Link
                href="/cotation"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Cart Panel ── */}
      {cartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 flex-shrink-0">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Mon Panier
                <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {getCartCount()}
                </span>
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4 pb-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Votre panier est vide</h3>
                  <p className="text-sm text-gray-500 mb-6">Ajoutez des produits pour commencer</p>
                  <Link
                    href="/Boutique"
                    onClick={() => setCartOpen(false)}
                    className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                  >
                    Voir la boutique
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-xl flex-shrink-0 bg-gray-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder-product.jpg";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
                        <p className="text-xs text-gray-400 mb-2">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-gray-900">${item.price}</span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-colors"
                            >
                              −
                            </button>
                            <span className="text-sm font-semibold w-6 text-center tabular-nums">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-100 text-gray-600 font-medium transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="mt-1.5 text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="flex-shrink-0 px-5 py-4 border-t border-gray-200 bg-gray-50 space-y-3">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Sous-total</span>
                  <span className="font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-green-600">${getCartTotal().toFixed(2)}</span>
                </div>
                <button
                  onClick={() => { setCartOpen(false); window.location.href = "/checkout"; }}
                  className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 active:scale-95 transition-all font-semibold text-sm"
                >
                  Passer la commande →
                </button>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full bg-white text-gray-700 border border-gray-200 py-2.5 rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm"
                >
                  Continuer mes achats
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;