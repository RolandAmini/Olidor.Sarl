"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Types pour nos médias
interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  category: string;
  url: string;
  thumbnail: string;
}

export default function MediaPage() {
  const { dict } = useLanguage();
  const t = dict.media; // Assure-toi d'ajouter une section "media" dans tes fichiers de dictionnaire

  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  // Exemple de données (À remplacer par tes vrais assets ou un appel API)
  const mediaData: MediaItem[] = [
    { id: 1, type: 'image', title: 'Excellence en Logistique Humanitaire : Votre partenaire fiable pour des livraisons sécurisées.', category: 'Logistique', url: '/images/img1.jpg', thumbnail: '/1x.jpeg' },
    
  ];

  const filteredMedia = filter === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.type === filter);

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen mt-25 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
    <Image
      src="/olilo.png" // Chemin vers votre image
      alt="Background"
      fill
      className="object-cover"
      priority // Charge l'image en priorité
    />
    {/* Overlay pour la lisibilité du texte */}
    <div className="absolute inset-0  backdrop-blur-sm"></div>
  </div>
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t?.title || "Espace Média"}
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
              {t?.description || "Découvrez nos dernières activités, événements et reportages en images et vidéos."}
            </p>
          </div>

          {/* Filtres / Onglets */}
          <div className="flex justify-center gap-4 mb-10">
            {['all', 'image', 'video'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as 'all' | 'image' | 'video')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === f 
                  ? 'bg-emerald-200 text-white shadow-md' 
                  : 'bg-white text-blue-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f === 'all' ? 'Tous' : f === 'image' ? 'Photos' : 'Vidéos'}
              </button>
            ))}
          </div>

          {/* Grille de Médias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden">
                <Image
  src={item.thumbnail}
  alt={item.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
/>
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full shadow-lg">
                        <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4.516 7.548c0-.443.3-.606.666-.363l5.353 3.528c.366.241.366.634 0 .874l-5.353 3.528c-.366.241-.666.077-.666-.363V7.548z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* État vide si aucun média */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Aucun contenu disponible pour le moment.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}