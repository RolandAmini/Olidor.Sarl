"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

// Type pour les produits
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  weights: { weight: string; price: number }[];
}

// Données des produits
const products: Product[] = [
  {
    id: 1,
    name: "Mwisho-MAM",
    price: 0.00,
    image: "/mamunga.webp",
    weights: [
      { weight: "5kg", price: 3.20 },
      { weight: "10kg", price: 6.40 },
      { weight: "25kg", price: 16.00 }
    ]
  },
  {
    id: 2,
    name: "UJI-TOTAL",
    price: 0.00,
    image: "/uji.webp",
    weights: [
      { weight: "1kg", price: 2.50 },
      { weight: "5kg", price: 12.00 },
      { weight: "10kg", price: 23.00 }
    ]
  },
    {
    id: 4,
    name: "PPN",
    price: 0.00,
    image: "/PLUMP.webp",
    weights: [
      { weight: "2.8kg", price: 5.00 },
      { weight: "5kg", price: 8.50 }
    ]
  },
  {
    id: 3,
    name: "Boule Totale",
    price: 0.00,
    image: "/cacaosrl.jpeg",
    weights: [
      { weight: "5kg", price: 3.20 },
      { weight: "10kg", price: 6.40 },
      { weight: "15kg", price: 9.60 },
      { weight: "25kg", price: 16.00 }
    ]
  },

  {
    id: 5,
    name: "F-100-",
    price: 0.00,
    image: "/F100-2.webp",
    weights: [
      { weight: "1kg", price: 4.20 },
      { weight: "5kg", price: 20.00 }
    ]
  },
  {
    id: 6,
    name: "F-75",
    price: 0.00,
    image: "/f-75.webp",
    weights: [
      { weight: "1kg", price: 3.80 },
      { weight: "5kg", price: 18.00 }
    ]
  }
];

export default function ProductsCatalog() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeights, setSelectedWeights] = useState({
    "1kg": false,
    "12kg": false,
    "5kg": false,
    "10kg": false,
    "15kg": false,
    "25kg": false,
    "2.8kg": false,
    "11.2kg": false
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  // Filtrer les produits
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-20 bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
      Votre partenaire de confiance pour l'innovation
    </h1>
    <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
      Production d'aliments de complément, solutions nutritionnelles et services logistiques intégrés
    </h2>
  </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            
            {/* Poids Filter */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <button className="flex items-center justify-between w-full mb-4">
                <h3 className="font-bold text-gray-900">Poids</h3>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              
              <div className="space-y-2">
                {Object.keys(selectedWeights).map((weight) => (
                  <label key={weight} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedWeights[weight as keyof typeof selectedWeights]}
                      onChange={(e) => setSelectedWeights({
                        ...selectedWeights,
                        [weight]: e.target.checked
                      })}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    <span className="text-gray-700">{weight}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white rounded-lg shadow p-6">
              <button className="flex items-center justify-between w-full mb-4">
                <h3 className="font-bold text-gray-900">Price Range</h3>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-600">$ {priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-600">$ {priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Search and Controls Bar */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                {/* Sort By */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 whitespace-nowrap">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                >
                  {/* Product Image with Zoom Effect */}
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-emerald-600 font-bold text-xl">$ {product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <Footer />
    </>
  );
}

// Page de détails du produit (à créer dans /app/product/[id]/page.tsx)
export function ProductDetailPage({ productId }: { productId: number }) {
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<any[]>([]);

  const product = products.find(p => p.id === productId);
  
  if (!product) return <div>Product not found</div>;

  const currentPrice = product.weights[selectedWeight].price;

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      weight: product.weights[selectedWeight].weight,
      price: currentPrice,
      quantity: quantity,
      total: currentPrice * quantity
    };
    
    setCart([...cart, cartItem]);
    alert(`${product.name} (${product.weights[selectedWeight].weight}) ajouté au panier!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
          <a href="/products" className="text-blue-600 hover:underline">All Products</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md ml-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
          
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-3xl font-bold text-emerald-600">$ {currentPrice.toFixed(2)}</p>

            {/* Weight Selection */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">POIDS</h3>
              <div className="space-y-3">
                {product.weights.map((weightOption, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="weight"
                      checked={selectedWeight === index}
                      onChange={() => setSelectedWeight(index)}
                      className="w-5 h-5 text-emerald-600"
                    />
                    <span className="text-gray-700 font-medium">{weightOption.weight}</span>
                    <span className="text-emerald-600 font-semibold border border-emerald-600 rounded-full px-3 py-1 text-sm">
                      + $ {weightOption.price.toFixed(2)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                Add to cart
              </button>
            </div>

            {/* Terms */}
            <div className="border-t border-gray-200 pt-6 space-y-2">
              <a href="#" className="text-blue-600 hover:underline block">Terms and Conditions</a>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}