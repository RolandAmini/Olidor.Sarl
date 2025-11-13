import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GlobalPresencePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const getParallaxStyle = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
    willChange: 'transform'
  });

  return (
    <main className="bg-black text-white">
      {/* =========================
          🌍 GLOBAL PRESENCE SECTION
      ========================== */}
      <section className="sticky top-0 h-screen flex flex-col items-center justify-center px-8 overflow-hidden relative">
  {/* Image de fond avec effet Parallax */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bg1.jpg')", // 📸 ton image dans /public/bg1.jpg
      transform: 'translateY(-20%)',
      willChange: 'transform',
    }}
  />

  {/* Overlay dégradé sombre pour lisibilité */}
  <div className="absolute inset-0 bg-gradient-to-b from-green/80 via-green/50 to-transparent z-0" />

  {/* Carte SVG avec opacité */}
  <div
    className="absolute inset-0 flex items-center justify-center opacity-40"
    style={{
      transform: 'translateY(-10%)', // léger mouvement pour parallax
      transition: 'transform 0.2s ease-out',
    }}
  >
    <svg viewBox="0 0 1200 600" className="w-full h-full">
      {/* Continents */}
      <path d="M550 180 L580 200 L600 250 L590 320 L560 350 L540 360 L520 340 L510 280 L520 220 Z"
        fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />
      <path d="M600 200 L640 210 L660 240 L650 270 L630 280 L610 260 L600 230 Z"
        fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />
      <path d="M520 120 L560 130 L580 150 L570 180 L540 170 L520 150 Z"
        fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />
      <path d="M650 140 L750 160 L820 180 L850 220 L830 260 L780 280 L720 270 L680 240 L660 200 Z"
        fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />
      <path d="M180 180 L220 200 L240 260 L250 340 L230 400 L200 420 L180 380 L170 300 L160 240 Z"
        fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />
      <path d="M850 380 L900 390 L920 420 L910 450 L870 460 L840 440 L840 400 Z"
        fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />

      {/* Markers */}
      {[
        { cx: 640, cy: 250, name: "Kinshasa" },
        { cx: 635, cy: 235, name: "Masisi" },
        { cx: 620, cy: 245, name: "Butembo" },
        { cx: 655, cy: 265, name: "Benie" },
        { cx: 530, cy: 290, name: "DRC congo" },
        { cx: 540, cy: 350, name: "Goma" },
      ].map((loc, i) => (
        <g key={i}>
          <circle cx={loc.cx} cy={loc.cy} r="4" fill="#00d9ff" className="animate-pulse" />
          <text x={loc.cx + 15} y={loc.cy - 10} fill="white" fontSize="14">{loc.name}</text>
        </g>
      ))}
    </svg>
  </div>

  {/* Texte au premier plan */}
  <div className="relative z-10 text-center space-y-4 px-4 sm:px-6 max-w-3xl mx-auto">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
    Votre partenaire de confiance pour l’innovation
  </h1>
</div>

</section>


      {/* =========================
          📊 STATS SECTION
      ========================== */}
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">

  <div className="absolute inset-0 bg-green-700"></div>
  
 <div className="relative z-10 max-w-3xl mx-auto space-y-4 px-4 sm:px-6 mb-8 sm:mb-12 text-center">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
    Notre gamme des produits
  </h1>
</div>

   
 <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
  {[
    {
      img: "/unga.webp",
      title: "Boule totale",
      text: "Une semoule fortifiée à base de maïs local, conçue pour toute la famille.",
    },
    {
      img: "/mamunga.webp",
      title: "Mwisho MAM",
      text: "Intrant nutritionnel spécialement formulé pour la prise en charge de la malnutrition aiguë modérée.",
    },
    {
      img: "/uji.webp",
      title: "Uji - total",
      text: "Aliment de complément destiné aux enfants à partir de 6 mois, ainsi qu’aux femmes enceintes et allaitantes.",
    },
    {
      img: "/cocoasrl.png",
      title: "Grain de cacao",
      text: "Renforce la résistance des plantes face aux conditions extrêmes.",
    },
  ].map((product, i) => (
    <div
      key={i}
      className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700 flex flex-col h-full"
    >
      {/* Image */}
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-44 object-cover"
      />

      {/* Contenu */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
            {product.title}
          </h3>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed line-clamp-3">
  {product.text}
</p>
        </div>

        <button className="mt-4 bg-blue-600 hover:bg-emerald-200 text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-300 self-center">
          Plus d'information
        </button>
      </div>
    </div>
  ))}
</div>

</section>


      {/* =========================
          Page 1 - Nos Capacités
      ========================== */}
   <section
  className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-gray-50 to-cyan-50 to-emerald-900"
>
  {/* Image de fond - Essayez ces différentes options */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
    style={{
      backgroundImage: "url('/olidoresarl.webp')", // Option 1
      // backgroundImage: "url('./olidor.webp')", // Option 2
      // backgroundImage: "url('olidor.webp')", // Option 3
    }}
  ></div>


  
</section>
     {/* Page 2 - Location & Vente (01) */}
<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-900 via-green-800 to-green-500 px-6 py-24">
  {/* Section Title */}
  <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] leading-snug">
      Autres produits disponibles chez Olidor Sarl
    </h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
      Olidor Sarl propose également des intrants spécialisés destinés aux organismes humanitaires et partenaires de santé publique.
    </p>
  </div>

  {/* Product Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-4">
    {[
      {
        img: "/07bB0-02.webp",
        title: "Équipements pour malnutrition",
        text: "Olidor collabore avec des entreprises accréditées à l’international dans la production des intrants nutritionnels.",
      },
      {
        img: "/F100-2.webp",
        title: "F100 et F75",
        text: "Laits thérapeutiques utilisés dans la prise en charge de la malnutrition aiguë sévère chez les enfants.",
      },
      {
        img: "/PLUMP.webp",
        title: "Plumpy-nut",
        text: "Aliment thérapeutique prêt à l’emploi pour la prise en charge de la malnutrition aiguë sévère.",
      },
      {
        img: "/PCI.webp",
        title: "Kit PCI",
        text: "Prévention et contrôle des infections en milieu hospitalier et dans les zones d’interventions.",
      },
    ].map((product, i) => (
      <div
        key={i}
        className="flex flex-col h-full bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:scale-105 hover:border-emerald-400 transition-transform duration-300"
      >
        {/* Image */}
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-52 object-cover"
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow p-5">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              {product.title}
            </h3>
       <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed line-clamp-3">
  {product.text}
</p>
        </div>

        <button className="mt-4 bg-blue-600 hover:bg-emerald-600 text-white font-medium py-1.5 px-4 rounded-full transition-all duration-300 self-center">
       <Link href="/nos-produits">
        En savoir plus
       </Link>
  </button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Page 3 - Transport & Logistique (02) */}
      <section className="relative min-h-screen bg-green-700 py-20 px-6 md:px-12">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Services de transport, location de véhicules et logistique
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-4xl">
          Fidèle à sa mission de faciliter vos activités, Olidor sarl offre une gamme complète de services logistiques adaptés à chaque besoin :
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Service 1 - Location de véhicules */}
        <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
    {/* Image Left */}
    <div className="bg-gray-200 h-56 sm:h-64 md:h-72">
      <img
        src="/voituresrl.jpg"
        alt="Location de véhicules"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Right */}
    <div className="p-6 sm:p-8 flex flex-col justify-center text-gray-800">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
        Location de véhicules :
      </h3>
      <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">
        Des véhicules confortables et robustes (Land-Cruiser, Prado), disponibles pour tous vos déplacements, que ce soit en ville ou en milieu rural. Olidor Sarl propose des véhicules adaptés et bien entretenus pour garantir sécurité et sérénité à chaque trajet.
      </p>
      <a
        href="#"
        className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 transition-colors"
      >
        En savoir plus
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>

  {/* Service 2 - Transport de marchandises */}
  <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
    {/* Content Left */}
    <div className="p-6 sm:p-8 flex flex-col justify-center order-2 md:order-1 text-gray-800">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
        Transport de marchandises et de médicaments :
      </h3>
      <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">
        Nous assurons le transport sécurisé de vos marchandises et médicaments, en respectant les normes de sécurité et de qualité. Notre flotte et notre équipe garantissent une livraison fiable et dans les délais.
      </p>
      <a
        href="#"
        className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 transition-colors"
      >
        En savoir plus
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>

    {/* Image Right */}
    <div className="bg-gray-200 h-56 sm:h-64 md:h-72 order-1 md:order-2">
      <img
        src="/transmed.jpg"
        alt="Transport de marchandises"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Service 3 - Prestations logistiques */}
  <div className="grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
    {/* Image Left */}
    <div className="bg-gray-200 h-56 sm:h-64 md:h-72">
      <img
        src="/container.jpg"
        alt="Prestations logistiques"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Right */}
    <div className="p-6 sm:p-8 flex flex-col justify-center text-gray-800">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
        Prestations logistiques sur mesure :
      </h3>
      <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-700">
        Que vous ayez besoin de solutions de stockage, de gestion de chaîne d'approvisionnement ou de services logistiques personnalisés, nous mettons notre expertise à votre service pour optimiser vos opérations et réduire vos coûts.
      </p>
      <a
        href="#"
        className="text-blue-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 transition-colors"
      >
        En savoir plus
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
      </div>

     

    </section>
      {/* Page 4 - Solutions Nutritionnelles (03) */}
     

    </main>
  );
}