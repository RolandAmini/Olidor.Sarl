"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useLanguage } from "../contexts/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, dict } = useLanguage(); // Utilisation du dictionnaire
  const { cart, isOpen: cartOpen, setIsOpen: setCartOpen, getCartCount, getCartTotal, updateQuantity, removeFromCart } = useCart();

  const navLinks = [
    { href: "/", label: dict.navbar.home },
    { href: "/produits", label: dict.navbar.products },
    { href: "/cotation", label: dict.navbar.quotation },
    { href: "/Apropos", label: dict.navbar.about },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.jpg" alt="Logo" className="h-9 sm:h-11 lg:h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm font-medium hover:text-green-600 transition-colors">
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Sélecteur de Langue */}
              <div className="hidden lg:block">
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value)}
                  className="text-xs border rounded px-2 py-1 outline-none"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>

              <Link href="/cotation" className="hidden sm:inline-flex bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                {dict.navbar.contact}
              </Link>

              {/* ... Reste du code (Panier & Mobile Menu) ... */}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-2">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="block py-2 text-sm">{label}</Link>
            ))}
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="w-full mt-2 p-2 border rounded"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        )}
      </nav>

      {/* Cart Panel (Exemple de traduction) */}
      {cartOpen && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white z-50 p-5 shadow-xl">
           <h2 className="text-lg font-bold">{dict.navbar.cart}</h2>
           {cart.length === 0 && <p>{dict.navbar.emptyCart}</p>}
           {/* ... reste du panier ... */}
           <button className="w-full bg-green-600 text-white py-3 rounded-xl mt-4">
             {dict.navbar.checkout}
           </button>
        </div>
      )}
    </>
  );
}

export default Navbar;