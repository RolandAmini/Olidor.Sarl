"use client"

import React, { useState, createContext, useContext } from 'react';

// Cart Context
const CartContext = createContext<any>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find((item: any) => item.id === product.id);
      if (existing) {
        return prev.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const cartCount = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

// ─── Welcome Screen ───────────────────────────────────────────────────────────
function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-600 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-md w-full md:max-w-2xl lg:max-w-3xl">
        {/* Floating Product Images */}
        <div className="relative h-64 md:h-96 mb-8 md:mb-12">
          <div className="absolute top-0 left-8 md:left-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center text-3xl md:text-5xl lg:text-6xl">
              🍋
            </div>
          </div>
          <div className="absolute top-4 right-8 md:right-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-red-500 rounded-full shadow-xl flex items-center justify-center text-4xl md:text-6xl lg:text-7xl">
              🍅
            </div>
          </div>
          <div className="absolute bottom-12 left-16 md:left-28 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-green-400 rounded-full shadow-xl flex items-center justify-center text-2xl md:text-4xl lg:text-5xl">
              🥬
            </div>
          </div>
          <div className="absolute bottom-8 right-12 md:right-24 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
            <div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-orange-400 rounded-full shadow-xl flex items-center justify-center text-3xl md:text-5xl lg:text-6xl">
              🥕
            </div>
          </div>

          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="text-6xl md:text-8xl lg:text-9xl">🛒</div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center text-white mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Épicerie Fraîche
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Livrée Chaque Jour
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-green-100 leading-relaxed px-4">
            Des produits locaux frais livrés avec soin depuis des fermes voisines jusqu&apos;à chez vous.
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-8 h-2 md:w-12 md:h-3 bg-white rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white/40 rounded-full"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-white/40 rounded-full"></div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-white text-green-700 py-3 md:py-5 rounded-full text-base md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

// ─── Home Screen ──────────────────────────────────────────────────────────────
function HomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Fruits",        icon: "🍎", color: "bg-red-100" },
    { name: "Légumes",       icon: "🥬", color: "bg-green-100" },
    { name: "Viandes",       icon: "🍖", color: "bg-orange-100" },
    { name: "Fruits de mer", icon: "🦐", color: "bg-blue-100" },
    { name: "Laitiers",      icon: "🥛", color: "bg-yellow-100" },
    { name: "Boulangerie",   icon: "🍞", color: "bg-amber-100" },
    { name: "Boissons",      icon: "🥤", color: "bg-purple-100" },
    { name: "Snacks",        icon: "🍿", color: "bg-pink-100" },
  ];

  const featuredProducts = [
    { id: 1, name: "Oranges bio",     image: "🍊", price: 3.99 },
    { id: 2, name: "Tomates fraîches", image: "🍅", price: 2.49 },
    { id: 3, name: "Brocoli",          image: "🥦", price: 1.99 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 md:px-8 lg:px-12 pt-8 md:pt-12 pb-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-xl md:text-2xl text-green-600">📍</span>
              <div>
                <p className="text-xs md:text-sm text-gray-500">Votre position</p>
                <p className="text-sm md:text-base font-semibold text-gray-900">Nairobi, Kenya</p>
              </div>
            </div>
            <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-xl md:text-2xl">👤</span>
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des produits ou marques"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-gray-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
            />
            <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg md:text-xl">🔍</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Featured Banner */}
        <div className="px-4 md:px-8 lg:px-12 py-6 md:py-8">
          <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-white shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
                  Choix frais de cette semaine
                </h3>
                <p className="text-sm md:text-base text-green-100 mb-4 md:mb-6">
                  100% produits biologiques livrés en 3 heures
                </p>
                <button className="bg-white text-green-700 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-bold hover:shadow-lg transition-shadow">
                  Acheter maintenant
                </button>
              </div>
              <div className="flex justify-center md:justify-end gap-2 md:gap-3">
                {featuredProducts.map(p => (
                  <div key={p.id} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl flex items-center justify-center text-3xl md:text-4xl lg:text-5xl shadow-lg">
                    {p.image}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 md:px-8 lg:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Acheter par catégorie</h3>
            <button
              onClick={() => onNavigate('categories')}
              className="text-green-600 text-sm md:text-base font-semibold hover:text-green-700 transition-colors"
            >
              Voir tout →
            </button>
          </div>

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 lg:gap-6">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => onNavigate('categories')}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform hover:opacity-80"
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 ${cat.color} rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-4xl lg:text-5xl shadow-sm hover:shadow-md transition-shadow`}>
                  {cat.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center line-clamp-2">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Banner */}
        <div className="mx-4 md:mx-8 lg:mx-12 my-4 md:my-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl md:text-3xl">
              🚚
            </div>
            <div>
              <p className="font-bold text-sm md:text-base lg:text-lg">Livraison dans la journée</p>
              <p className="text-xs md:text-sm text-green-100">Commandez avant 14h</p>
            </div>
          </div>
          <button className="bg-white text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold hover:shadow-lg transition-shadow">
            Suivre
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav active="home" onNavigate={onNavigate} cartCount={cartCount} />
    </div>
  );
}

// ─── Categories Screen ────────────────────────────────────────────────────────
function CategoriesScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const allCategories = [
    { name: "Fruits",          icon: "🍎", image: "🍎🍊🍌", products: 24 },
    { name: "Légumes",         icon: "🥬", image: "🥬🥕🥦", products: 31 },
    { name: "Viandes",         icon: "🍖", image: "🥩🍗🥓", products: 18 },
    { name: "Fruits de mer",   icon: "🦐", image: "🦐🐟🦞", products: 15 },
    { name: "Laitiers & Œufs", icon: "🥛", image: "🥛🧀🥚", products: 22 },
    { name: "Boulangerie",     icon: "🍞", image: "🍞🥐🥖", products: 28 },
    { name: "Boissons",        icon: "🥤", image: "🥤🧃☕",  products: 35 },
    { name: "Snacks",          icon: "🍿", image: "🍿🍪🍫", products: 42 },
  ];

  const recentlyViewed = [
    { id: 1, name: "Pommes bio",   price: 4.99, image: "🍎" },
    { id: 2, name: "Lait frais",   price: 3.49, image: "🥛" },
    { id: 3, name: "Pain complet", price: 2.99, image: "🍞" },
    { id: 4, name: "Tomates",      price: 2.49, image: "🍅" },
    { id: 5, name: "Bananes",      price: 1.99, image: "🍌" },
    { id: 6, name: "Fromage",      price: 5.99, image: "🧀" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 md:px-8 lg:px-12 pt-8 md:pt-12 pb-6 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate('home')}
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg md:text-xl">←</span>
            </button>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Catégories</h1>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-lg md:text-xl">🌐</span>
              </button>
              <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center relative hover:bg-gray-200 transition-colors">
                <span className="text-lg md:text-xl">🛒</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-600 text-white text-xs md:text-sm rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des produits ou marques"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-gray-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
            />
            <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg md:text-xl">🔍</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Quick Filters */}
        <div className="px-4 md:px-8 lg:px-12 py-4 md:py-6 flex gap-2 md:gap-3 overflow-x-auto">
          <button className="px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded-full text-sm md:text-base font-semibold whitespace-nowrap hover:bg-green-700 transition-colors">
            Toutes catégories
          </button>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-gray-100 text-gray-700 rounded-full text-sm md:text-base font-semibold whitespace-nowrap hover:bg-gray-200 transition-colors">
            Cuisine rapide
          </button>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-gray-100 text-gray-700 rounded-full text-sm md:text-base font-semibold whitespace-nowrap hover:bg-gray-200 transition-colors">
            Vie saine
          </button>
        </div>

        {/* Categories Grid */}
        <div className="px-4 md:px-8 lg:px-12 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allCategories.map(cat => (
              <button
                key={cat.name}
                className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow active:scale-95"
              >
                <div className="w-full h-32 md:h-40 lg:h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">
                  {cat.image}
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {cat.products} produits
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="px-4 md:px-8 lg:px-12 py-4 md:py-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            Vus récemment
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {recentlyViewed.map(product => (
              <button
                key={product.id}
                className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow active:scale-95"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center text-3xl md:text-4xl lg:text-5xl mb-2">
                  {product.image}
                </div>
                <p className="text-xs md:text-sm font-semibold text-gray-900 mb-1 truncate">
                  {product.name}
                </p>
                <p className="text-sm md:text-base font-bold text-green-600">
                  ${product.price}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav active="categories" onNavigate={onNavigate} cartCount={cartCount} />
    </div>
  );
}

// ─── Shared Bottom Nav ────────────────────────────────────────────────────────
function BottomNav({
  active,
  onNavigate,
  cartCount,
}: {
  active: string;
  onNavigate: (screen: string) => void;
  cartCount: number;
}) {
  const items = [
    { key: 'home',       icon: '🏠', label: 'Accueil' },
    { key: 'categories', icon: '📁', label: 'Catégories' },
    { key: 'cart',       icon: '🛒', label: 'Panier', badge: cartCount },
    { key: 'orders',     icon: '📋', label: 'Commandes' },
    { key: 'profile',    icon: '👤', label: 'Profil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 md:px-8 py-3 md:py-4 shadow-lg z-50">
      <div className="flex justify-around items-center max-w-7xl mx-auto">
        {items.map(item => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`flex flex-col items-center gap-1 hover:scale-110 transition-all relative ${
              active === item.key ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <span className="text-2xl md:text-3xl">{item.icon}</span>
            {item.badge && item.badge > 0 ? (
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {item.badge}
              </span>
            ) : null}
            <span className={`text-xs md:text-sm ${active === item.key ? 'font-semibold' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  return (
    <CartProvider>
      <div className="w-full min-h-screen bg-white">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onNext={() => setCurrentScreen('home')} />
        )}
        {currentScreen === 'home' && (
          <HomeScreen onNavigate={setCurrentScreen} />
        )}
        {currentScreen === 'categories' && (
          <CategoriesScreen onNavigate={setCurrentScreen} />
        )}
      </div>
    </CartProvider>
  );
}