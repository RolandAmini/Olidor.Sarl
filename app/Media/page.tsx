"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  category: string;
  date: string;
  thumbnail: string;
}

export default function MediaPage() {
  const { dict } = useLanguage();
  const t = dict.media;

  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  // Données enrichies et structurées de manière "Corporate"
  const mediaData: MediaItem[] = [
    { 
      id: 1, 
      type: 'image', 
      title: 'La RDC possède un potentiel agricole remarquable, et le cacao en fait partie.', 
      category: 'Grain de cacao : la qualité congolaise qui fait la différence', 
      date: 'Mai 2026',
      thumbnail: '/pain.png' // Remplace par ton vrai chemin d'image (ex: l'image du van Olidor)
    },
    { 
      id: 2, 
      type: 'image', 
      title: '​Fidèles à notre engagement Sains & Efficaces, nous innovons chaque jour pour le bien-être nutritionnel en RDC.', 
      category: 'Ugali Tamu Boule Tota', 
      date: 'Avril 2026',
      thumbnail: '/gtt.png' // Remplace par ton vrai chemin d'image (ex: l'image de l'usine)
    },
    { 
      id: 3, 
      type: 'image', 
      title: 'Suivi rigoureux et traçabilité de nos stocks d’intrants nutritionnels.', 
      category: 'Infrastructures & Production', 
      date: 'Mars 2026',
      thumbnail: '/1x.jpeg' 
    }
  ];

  const filteredMedia = filter === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.type === filter);

  return (
    <>
      <Navbar />
      
      {/* Container Principal ajusté pour le header fixe */}
      <div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Section avec Overlay Sombre Professionnel */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/olilo.png" 
            alt="Olidor Background"
            fill
            className="object-cover"
            priority 
          />
          {/* Overlay dégradé pour garantir un excellent contraste textuel (Fini le fond noir plat) */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950/85 to-slate-900/90 backdrop-blur-[3px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section En-tête (Copywriting Institutionnel) */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t?.title || "Nos Activités sur le Terrain"}
            </h1>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
              {t?.description || "Suivez l'impact de nos interventions à travers la RDC. Découvrez nos infrastructures de production moderne, la traçabilité de nos intrants et le quotidien de nos équipes."}
            </p>
          </div>

          {/* Filtres UI épurés (Style Boutons Corporate Actifs/Inactifs) */}
          <div className="flex justify-center items-center gap-3 mb-14">
            {(['all', 'image', 'video'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 border ${
                  filter === f 
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-900/30' 
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md'
                }`}
              >
                {f === 'all' ? 'Tous' : f === 'image' ? 'Photos' : 'Vidéos'}
              </button>
            ))}
          </div>

          {/* Grille de Cartes Médias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) => (
              <div 
                key={item.id} 
                className="group bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-emerald-500/30 hover:bg-slate-900/60 shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Bloc Image / Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge de Type de Média en Overlay discret */}
                  <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-emerald-400 px-2.5 py-1 rounded-md border border-white/5">
                    {item.type === 'image' ? 'Photo' : 'Vidéo'}
                  </div>

                  {/* Overlay Icône Play si Vidéo */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors">
                      <div className="bg-emerald-600/90 text-white p-3.5 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 fill-current pl-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bloc d'Informations */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-white leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* État vide si aucun média n'est trouvé */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-24 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <svg className="mx-auto h-12 w-12 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-300 text-lg font-medium">Aucun contenu disponible dans cette catégorie.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}