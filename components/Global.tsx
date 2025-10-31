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
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
    Votre partenaire de confiance pour l’innovation
  </h1>
</div>

</section>


      {/* =========================
          📊 STATS SECTION
      ========================== */}
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
  <div className="absolute inset-0 bg-green-900"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-400"></div>
  
 <div className="relative z-10 max-w-3xl mx-auto space-y-4 px-4 sm:px-6 mb-8 sm:mb-12 text-center">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl leading-snug sm:leading-tight">
    Notre gamme des produits
  </h1>
</div>

   
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {[
      {
        img: "/unga.webp",
        title: "Boule totale ",
        text: "Une semoule fortifiée à base de maïs local, conçue pour toute la famille.",
       
      },
      {
        img: "/mamunga.webp",
        title: "Mwisho MAM ",
        text: "Intrant nutritionnel spécialement formulé pour la prise en charge de la malnutrition aiguë modérée.",
       
      },
      {
        img: "/uji.webp",
        title: " Uji - total",
        text: " Aliment de complément destiné aux enfants à partir de 6 mois, ainsi qu aux femmes enceintes et allaitantes.",
       
      },
      {
        img: "/cocoasrl.png",
        title: " grain de cacao  ",
        text: "Renforce la résistance des plantes face aux conditions extrêmes.",
        
      },
    ].map((product, i) => (
      <div
        key={i}
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700"
      >
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-44 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-white">{product.title}</h3>
          <p className="text-gray-300 text-sm">{product.text}</p>
          <button className="mt-2 bg-green-700 hover:bg-green-400 text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-300">
            Acheter
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
<section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-green-900 to-green-400 px-6 py-20">
   <div className="max-w-3xl mx-auto space-y-4 px-4 sm:px-6 text-center">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-green-300 drop-shadow-2xl leading-snug sm:leading-tight">
    Autres produits disponibles chez Olidor Sarl
  </h1>
  <p className="text-base sm:text-lg text-white/90">
    Olidor Sarl propose également des intrants spécialisés destinés aux organismes humanitaires et partenaires de santé publique.
  </p>
</div>

    
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {[
      {
        img: "/07bB0-02.webp",
        title: "Equipements pour la prise en charge de la malnutrition",
        text: "Olidor a des partenariats avec des firmes et entreprises accréditées au niveau international dans la production des intrants nutritionnels.",
       
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
        title: "AKit PCI  ",
        text: "Prévention et contrôle des infections en milieu hospitalier et dans les zones d’interventions. ",
        
      },
    ].map((product, i) => (
      <div
        key={i}
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-700"
      >
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-44 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-white">{product.title}</h3>
          <p className="text-gray-300 text-sm">{product.text}</p>
          <button className="mt-2 bg-green-400 hover:bg-green-700 text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-300">
            Acheter
          </button>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Page 3 - Transport & Logistique (02) */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden py-20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 400 800" className="w-full h-full">
          <circle cx="300" cy="200" r="150" fill="currentColor" className="text-green-600" />
          <circle cx="250" cy="500" r="100" fill="currentColor" className="text-amber-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-green-700 mb-6 leading-tight">
            Nos Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
           Fidèle à notre mission de faciliter vos activités, chez Olidor sarl nous vous offrons une gamme complète de
         services logistiques adaptés à chaque besoin 
          </p>
        </div>

        {/* ISO Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* ISO 14001:2015 */}
          <div className="flex flex-col items-center text-center space-y-6 group">
            {/* ISO Badge */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border-8  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* Inner Content */}
        
               {/* ✅ Image à la place du texte */}
               <img
                  src="/voituresrl.jpg" // Mets ton image dans le dossier public/
                 alt="Certified Company"
                  className="w-full h-full object-cover rounded-full"
           />
         </div>

              {/* Decorative Arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle 
                  cx="100" 
                  cy="100" 
                  r="95" 
                  fill="none" 
                  stroke="#1e40af" 
                  strokeWidth="3"
                  strokeDasharray="300 300"
                  className="opacity-30"
                />
              </svg>
            </div>
            
            {/* Label */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-green-700 uppercase tracking-wide">
             Location de véhicules :
              </h3>
              <p className="text-base font-semibold text-gray-700">
                Des véhicules confortables et performants pour vos activités.
              </p>
            </div>
          </div>

          {/* ISO 45001:2018 */}
          <div className="flex flex-col items-center text-center space-y-6 group">
            {/* ISO Badge */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer Circle */}
             <div className="absolute inset-0 rounded-full border-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
               {/* ✅ Image à la place du texte */}
               <img
                  src="/transmed.jpg" // Mets ton image dans le dossier public/
                   alt="Certified Company"
                   className="w-full h-full object-cover rounded-full"
                />
                   </div>

                   {/* Decorative Arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle 
                  cx="100" 
                  cy="100" 
                  r="95" 
                  fill="none" 
                  stroke="#1e40af" 
                  strokeWidth="3"
                  strokeDasharray="300 300"
                  className="opacity-30"
                />
              </svg>
            </div>
            
            {/* Label */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-green-700 uppercase tracking-wide">
               Transport de marchandises et de médicaments :
              </h3>
              <p className="text-base font-semibold text-gray-700">
                Safety Management Systems
              </p>
            </div>
          </div>

          {/* ISO 9001:2015 */}
          <div className="flex flex-col items-center text-center space-y-6 group">
            {/* ISO Badge */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border-8  flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
  {/* ✅ Image à la place du texte */}
  <img
    src="/container.jpg" // Mets ton image dans le dossier public/
    alt="Certified Company"
    className="w-full h-full object-cover rounded-full"
  />
</div>
              {/* Decorative Arc */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle 
                  cx="100" 
                  cy="100" 
                  r="95" 
                  fill="none" 
                  stroke="#1e40af" 
                  strokeWidth="3"
                  strokeDasharray="300 300"
                  className="opacity-30"
                />
              </svg>
            </div>
            
            {/* Label */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-green-700 uppercase tracking-wide">
                Prestations logistiques sur mesure :
              </h3>
              <p className="text-base font-semibold text-gray-700">
                Systems
              </p>
            </div>
          </div>

        </div>

        {/* Optional CTA Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-green-700 hover:bg-green-400 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform text-lg">
              <Link 
            href="/realisation" 
            className="text-white font-medium hover:text-green-700 transition-colors"
          >
           voir nos Realisation
          </Link>
          </button>
        </div>

      </div>
    </section>
      {/* Page 4 - Solutions Nutritionnelles (03) */}
     

    </main>
  );
}