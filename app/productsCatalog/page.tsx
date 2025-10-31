"use client";


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ProductsCatalogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample data - Replace with your actual data
  const products = [
    {
      id: 1,
      name: 'Conteneur Offshore DNV 2.7-1',
      category: 'equipment',
      price: 'Sur devis',
      image: '/placeholder-container.jpg',
      description: 'Conteneur certifié pour opérations offshore',
      specs: ['Certifié DNV', 'Résistant aux intempéries', 'Capacité: 20ft']
    },
    {
      id: 2,
      name: 'Générateur Diesel 500kVA',
      category: 'equipment',
      price: 'Sur devis',
      image: '/placeholder-generator.jpg',
      description: 'Générateur haute performance pour sites isolés',
      specs: ['500kVA', 'Faible consommation', 'Support 24/7']
    },
    {
      id: 3,
      name: 'Equipement de Forage',
      category: 'equipment',
      price: 'Sur devis',
      description: 'Outils de forage professionnels',
      specs: ['Haute précision', 'Résistant', 'Maintenance incluse']
    }
  ];

  const vehicles = [
    {
      id: 4,
      name: 'Toyota Land Cruiser 4x4',
      category: 'vehicles',
      price: '$150/jour',
      image: '/placeholder-landcruiser.jpg',
      description: 'Véhicule tout-terrain avec chauffeur',
      specs: ['7 places', 'Climatisé', 'GPS inclus']
    },
    {
      id: 5,
      name: 'Camion de Transport 20T',
      category: 'vehicles',
      price: '$300/jour',
      image: '/placeholder-truck.jpg',
      description: 'Transport lourd pour équipements',
      specs: ['20 tonnes', 'Grue hydraulique', 'Assurance complète']
    },
    {
      id: 6,
      name: 'Mini-Bus 15 Places',
      category: 'vehicles',
      price: '$120/jour',
      image: '/placeholder-minibus.jpg',
      description: 'Transport de personnel',
      specs: ['15 places', 'Climatisé', 'Confortable']
    }
  ];

  const team = [
    {
      id: 7,
      name: 'Jean Kabongo',
      category: 'team',
      role: 'Responsable Logistique',
      image: '/placeholder-person1.jpg',
      description: '15 ans d\'expérience dans le secteur Oil & Gas',
      specs: ['Certifié HSE', 'Bilingue FR/EN', 'Disponible 24/7']
    },
    {
      id: 8,
      name: 'Marie Tshiala',
      category: 'team',
      role: 'Coordinatrice Transport',
      image: '/placeholder-person2.jpg',
      description: 'Spécialiste en logistique internationale',
      specs: ['10 ans d\'expérience', 'Gestion de flotte', 'Optimisation routes']
    },
    {
      id: 9,
      name: 'notre groupe',
      category: 'team',
      role: 'Technicien Senior',
      image: '/TEAM3.webp',
      description: 'Expert en maintenance équipements',
      specs: ['Certifié ISO', 'Formation continue', 'Réactivité 24h']
    }
  ];

  const allItems = [...products, ...vehicles, ...team];
  const filteredItems = activeCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', name: 'Tous', icon: '🏢' },
    { id: 'equipment', name: 'Équipements', icon: '⚙️' },
    { id: 'vehicles', name: 'Véhicules', icon: '🚗' },
    { id: 'team', name: 'Équipe Logistique', icon: '👥' }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100">
      
      
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Notre Catalogue
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            Découvrez nos équipements certifiés, notre flotte de véhicules et notre équipe logistique dédiée
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-green-400 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-green-700 hover:bg-gray-300'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
                  {item.category === 'equipment' && '⚙️'}
                  {item.category === 'vehicles' && '🚗'}
                  {item.category === 'team' && '👤'}
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category === 'equipment' && 'Équipement'}
                    {item.category === 'vehicles' && 'Véhicule'}
                    {item.category === 'team' && 'Équipe'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-green-700 mb-1 group-hover:text-green-400 transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                 
                  <p className="text-green-700 text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>

                {/* Specs/Features - Show only 2 */}
                <div className="space-y-1">
                  {item.specs.slice(0, 2).map((spec, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-green-700">
                      <svg className="w-4 h-4 text-green-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="line-clamp-1">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="pt-3 border-t border-gray-200">
                  <button className="w-full px-4 py-2 bg-green-700 hover:bg-green-400 text-white font-semibold rounded-lg transition-all duration-300 text-sm shadow-sm hover:shadow-md">
                    {item.category === 'team' ? 'Contacter' : 'Devis'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun résultat</h3>
            <p className="text-green-600">Aucun élément ne correspond à cette catégorie pour le moment.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-green-400 text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Besoin d'une solution personnalisée ?</h2>
          <p className="text-xl text-teal-100">
            Contactez notre équipe pour discuter de vos besoins spécifiques en équipements, véhicules ou logistique.
          </p>
          <button className="px-10 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
            Demander un devis personnalisé
          </button>
        </div>
      </div>

    </div>
    </>
  );
}