"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50 px-4 py-2 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Olidor Sarl Logo"
            className="h-10 w-auto object-contain md:h-14"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-gray-200 rounded-full px-6 py-3 gap-8">
          <Link
            href="/"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            Acceille
          </Link>
          <Link
            href="/cotation"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            Cotation
          </Link>
          <a
            href="/abouts"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors whitespace-nowrap"
          >
           À Propos
          </a>
          <Link
            href="/productsCatalog"
            className="text-gray-900 font-medium hover:text-cyan-500 transition-colors"
          >
            Produits
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon when open
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-gray-100 rounded-lg shadow-lg py-4 px-6 space-y-3 text-center">
          <Link
            href="/"
            className="block text-gray-900 font-medium hover:text-cyan-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/cotation"
            className="block text-gray-900 font-medium hover:text-cyan-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Cotation
          </Link>
          <a
            href="/abouts"
            className="block text-gray-900 font-medium hover:text-cyan-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About us
          </a>
          <Link
            href="/productsCatalog"
            className="block text-gray-900 font-medium hover:text-cyan-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
