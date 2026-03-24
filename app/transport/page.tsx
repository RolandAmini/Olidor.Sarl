import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SERVICES_DATA = [
  {
    title: 'Location de véhicules',
    subtitle: 'Confort & fiabilité',
    description: "Des véhicules confortables et robustes (Land-Cruiser, Prado), disponibles pour tous vos déplacements, que ce soit en ville ou en milieu rural. Olidor Sarl garantit sécurité et sérénité à chaque trajet.",
    points: [
      'Flotte Land-Cruiser & Prado',
      'Disponible en ville et en milieu rural',
      'Véhicules régulièrement entretenus',
      'Conducteurs professionnels disponibles',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 5h2l2.5 9h9L19 7H7" />
      </svg>
    ),
  },
  {
    title: 'Transport de marchandises',
    subtitle: 'Sûr, rapide & traçable',
    description: "Grâce à une flotte de camions dédiés, Olidor Sarl assure un acheminement fiable et rapide de vos marchandises et équipements médicaux en respectant les normes de traçabilité.",
    points: [
      'Flotte de camions dédiés',
      "Transport d'équipements médicaux",
      'Respect des normes de sécurité',
      'Traçabilité complète des livraisons',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17H7a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v3m0 0h2l3 4v3h-2m-3-7v7m0 0a2 2 0 104 0 2 2 0 00-4 0z" />
      </svg>
    ),
  },
  {
    title: 'Prestations logistiques',
    subtitle: 'Organisation & planification',
    description: "Organisation et réalisation de vos opérations logistiques complexes avec une équipe expérimentée répondant aux exigences des ONG et institutions internationales.",
    points: [
      'Solutions adaptées aux ONG',
      'Planification complète',
      'Équipe logistique expérimentée',
      'Optimisation des coûts',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

export default function TransportPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-emerald-500/30">
      <Navbar />

      {/* ── HERO SECTION ── */}
     <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <img
          src="/transmed.jpg"
          alt="Transport Olidor Sarl"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
         

           <h1 className="text-5xl sm:text-6xl  lg:text-8xl font-black leading-none mb-6 tracking-tight">
            Transport
            <br />
            <span className="text-green-700">&amp; Logistique</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Fidèle à sa mission, Olidor Sarl offre une gamme complète de services logistiques 
            et de transport robustes adaptés aux défis de la RDC.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 py-16 border-t border-white/5 items-start"
            >
              {/* Infos Gauche */}
              <div className="space-y-4">
              
                
              </div>

              {/* Contenu Droite */}
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold group-hover:text-green-700 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full" />
                      <span className="text-gray-300 text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/cotation"
                  className="inline-flex items-center gap-3 text-white bg-green-700 hover:bg-green-600 px-6 py-3 rounded-full transition-all text-sm font-bold"
                >
                  Demander une cotation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-6 sm:px-10 lg:px-16 pb-32">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-green-700 p-12 sm:p-20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Prêt à organiser <br /> votre transport ?
              </h2>
              <p className="text-emerald-100 text-lg opacity-80">
                Contactez notre équipe logistique pour une solution sur mesure.
              </p>
            </div>
            <Link
              href="/cotation"
              className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Contactez-nous
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32" />
        </div>
      </section>

      <Footer />
    </div>
  );
}