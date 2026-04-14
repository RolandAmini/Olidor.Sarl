"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Importation pour optimisation
import { useParams } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products,  Product } from "../app/productsData";

function SmallProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produits/${product.slug}`}>
      <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative h-36 bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-2 left-2 z-10 bg-white/90 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2">{product.shortDesc}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ProductDetailPage({ initialProductSlug }: { initialProductSlug: string }) {
  const params = useParams();
  const currentSlug = initialProductSlug || (params?.slug as string);

  // Recherche du produit pour l'état initial
  const foundProduct = products.find((p) => p.slug === currentSlug) || products[0];
  const [selectedProduct] = useState<Product>(foundProduct);

  // Synchronisation si le slug change (via navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSlug]); // Se déclenche uniquement quand l'URL change

  const otherProducts = products.filter((p) => p.id !== selectedProduct.id);

  return (
    <>
      <div className="relative min-h-screen bg-gray-50">
        <div className="relative h-64 sm:h-72 bg-emerald-900 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-700"
            style={{ backgroundImage: `url('${selectedProduct.image}')` }}
          />
          <div className="absolute inset-0 bg-green-700" />
          <div className="relative z-20"><Navbar /></div>
          <div className="relative z-10 flex items-end h-full pb-8 px-6 sm:px-10 lg:px-16">
            <nav className="flex items-center gap-2 text-white/70 text-sm">
              <span className="text-white font-medium">{selectedProduct.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-full min-h-80 bg-emerald-50">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
              <div className="p-8 sm:p-10">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{selectedProduct.name}</h1>
                <p className="text-gray-500 text-lg mb-8">{selectedProduct.fullDesc}</p>
                
                <div className="mb-8">
                  <h2 className="text-sm font-semibold text-green-700 uppercase mb-4">Bénéfices clés</h2>
                  <ul className="space-y-2">
                    {selectedProduct.benefits?.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="text-green-700 font-bold">✓</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex gap-3">
                  <Link 
                    href="/cotation"
                    className="flex-1 bg-green-700 text-center text-white font-semibold py-3 px-6 rounded-xl hover:bg-emerald-700 transition"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-6">
              Découvrir d&apos;autres produits
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {otherProducts.slice(0, 4).map((p) => (
                <SmallProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}