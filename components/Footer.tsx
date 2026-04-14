import React from 'react';
import Link from 'next/link'; // Déjà bien importé

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Olidor Sarl</h3>
              <p className="text-gray-400 text-sm"> Plus sains, plus efficaces!</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
               Votre partenaire de confiance pour l&apos;innovation dans la production des aliments de complément, solutions nutritionnelles et les services logistiques intégrés. 
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570966918203" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Racourci</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 font-medium hover:text-green-700 transition-colors whitespace-nowrap">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/cotation" className="text-gray-300 font-medium hover:text-green-700 transition-colors whitespace-nowrap">
                  Cotation
                </Link>
              </li>
              <li>
                <Link href="/Apropos" className="text-gray-300 font-medium hover:text-green-700 transition-colors whitespace-nowrap">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/produits" className="text-gray-300 font-medium hover:text-green-700 transition-colors whitespace-nowrap">
                  Produits
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#rental" className="text-gray-300 hover:text-green-700 transition-colors">
                  À propos de Olidor sarl
                </Link>
              </li>
              <li>
                <Link href="#rental" className="text-gray-300 hover:text-green-700 transition-colors">
                  Notre gamme des produits
                </Link>
              </li>
              <li>
                <Link href="#sales" className="text-gray-300 hover:text-green-700 transition-colors">
                  Autres produits disponibles
                </Link>
              </li>
              <li>
                <Link href="#drilling" className="text-gray-300 hover:text-green-700 transition-colors">
                  Services de transport, location de véhicules et logistique
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Notre adresse: Goma, North-Kivu, DR Congo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-700 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {/* Pour les emails et téléphones, il est préférable d'utiliser <a> classique */}
                <a href="mailto:info@olidor.sarl" className="text-gray-300 hover:text-green-700 transition-colors">
                  info@olidor.sarl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+243999209710" className="text-gray-300 hover:text-green-700 transition-colors">
                  +243 999 209 710
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Olidor Sarl. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}