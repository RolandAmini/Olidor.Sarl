"use client" ;

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { products } from '../productsData';

export default function ProduitsPage() {
  const firstProducts = products.slice(0, 4);
  const secondProducts = products.slice(4, 8);

  return (
    <>
      
      <Navbar />

      <div className="bg-gray-50 min-h-screen">

        {/* ─── SECTION 1 : PRODUCTION AGROALIMENTAIRE ─────────────────── */}
        <section className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="bg-emerald-100 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Production agroalimentaire
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ─── DIVIDER ──────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200" />
        </div>

        {/* ─── SECTION 2 : COMMERCIALISATION & DISTRIBUTION ────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Commercialisation & distribution
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ─── CTA CONTACT ──────────────────────────────────────────────── */}
        <section className="bg-green-700 py-16 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Besoin d'un produit spécifique ?
          </h2>
          <p className="text-emerald-200 text-base mb-8 max-w-lg mx-auto">
            Contactez notre équipe pour un devis personnalisé ou pour plus d'informations sur nos produits.
          </p>
          <Link
            href="/cotation"
            className="inline-block bg-white text-green-700 font-bold py-3.5 px-8 rounded-full hover:bg-emerald-50 transition-colors duration-200"
          >
            Nous contacter
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

// ─── Carte produit ─────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Link
      href={`/produits/${product.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-700 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-green-700 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
          {product.shortDesc}
        </p>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          Plus d'information
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}