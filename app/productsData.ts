// app/productsData.ts
// Fichier de données pur — pas de "use client", importable côté serveur

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  usage: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "boule-totale",
    name: "Boule totale",
    category: "Alimentation",
    image: "/unga.webp",
    shortDesc: "Une semoule fortifiée à base de maïs local, conçue pour toute la famille.",
    fullDesc: "La Boule totale est une semoule fortifiée fabriquée à partir de maïs local soigneusement sélectionné. Enrichie en vitamines A, B, C et en minéraux essentiels tels que le fer et le zinc, elle couvre les besoins nutritionnels quotidiens de toute la famille. Sa texture fine et sa préparation rapide en font un repas complet idéal pour les familles rurales et urbaines.",
    benefits: [
      "Riche en vitamines A, B et C",
      "Fortifiée en fer et zinc",
      "Facile et rapide à préparer",
      "Adaptée à toutes les tranches d'âge",
      "Produit local de haute qualité",
    ],
    usage: "Diluer 3 à 4 cuillères à soupe dans de l'eau chaude. Mélanger jusqu'à obtenir une consistance homogène. Servir chaud avec du lait ou des légumes.",
    tags: ["Maïs local", "Fortifiée", "Toute la famille", "Vitamines"],
  },
  {
    id: 2,
    slug: "mwisho-mam",
    name: "Mwisho MAM",
    category: "Nutrition thérapeutique",
    image: "/mamunga.webp",
    shortDesc: "Intrant nutritionnel spécialement formulé pour la prise en charge de la malnutrition aiguë modérée.",
    fullDesc: "Mwisho MAM est un supplément nutritionnel thérapeutique développé spécifiquement pour la prise en charge de la malnutrition aiguë modérée (MAM). Sa formulation équilibrée apporte les macro et micronutriments nécessaires à la récupération rapide et durable des enfants et adultes en état de malnutrition.",
    benefits: [
      "Formule équilibrée en macro et micronutriments",
      "Favorise la récupération nutritionnelle rapide",
      "Adapté aux enfants et adultes",
      "Contrôle qualité rigoureux",
      "Recommandé par les professionnels de santé",
    ],
    usage: "À administrer sous supervision médicale. Dosage selon le protocole MAM en vigueur. Consulter un professionnel de santé avant utilisation.",
    tags: ["MAM", "Thérapeutique", "Enfants", "Récupération"],
  },
  {
    id: 3,
    slug: "uji-total",
    name: "Uji - total",
    category: "Alimentation infantile",
    image: "/uji.webp",
    shortDesc: "Aliment de complément destiné aux enfants à partir de 6 mois, ainsi qu'aux femmes enceintes et allaitantes.",
    fullDesc: "Uji Total est un aliment de complément enrichi, spécialement conçu pour soutenir la croissance des nourrissons dès 6 mois et la santé des femmes enceintes et allaitantes. Sa composition en micronutriments essentiels favorise le développement cognitif et physique optimal de l'enfant tout en renforçant la santé maternelle.",
    benefits: [
      "Adapté dès 6 mois",
      "Soutient la croissance infantile",
      "Enrichi pour les femmes enceintes",
      "Développement cognitif et physique",
      "Micronutriments essentiels",
    ],
    usage: "Pour les nourrissons : 2 à 3 cuillères dans de l'eau tiède. Pour les adultes : 4 à 5 cuillères dans de l'eau ou du lait chaud. Servir 2 fois par jour.",
    tags: ["Dès 6 mois", "Complément", "Femmes enceintes", "Micronutriments"],
  },
  {
    id: 4,
    slug: "grain-de-cacao",
    name: "Grain de cacao",
    category: "Agriculture",
    image: "/unf.jpeg",
    shortDesc: "Renforce la résistance des plantes face aux conditions extrêmes.",
    fullDesc: "Le Grain de cacao d'Olidor est un produit agricole sélectionné parmi les meilleures variétés, connu pour sa résistance exceptionnelle aux conditions climatiques difficiles. Il favorise une croissance vigoureuse, améliore la productivité des plantations et garantit une récolte de qualité supérieure, même dans les zones à stress hydrique.",
    benefits: [
      "Résistance aux conditions extrêmes",
      "Productivité élevée",
      "Qualité supérieure de la récolte",
      "Adapté aux zones à stress hydrique",
      "Variétés sélectionnées",
    ],
    usage: "Planter dans un sol bien drainé avec exposition partielle au soleil. Arroser régulièrement les 3 premiers mois. Fertiliser avec un engrais organique adapté.",
    tags: ["Haute qualité", "Résistance", "Cultures", "Productivité"],
  },
  {
    id: 5,
    slug: "intrants-pec",
    name: "Autres intrants PEC",
    category: "Matériel médical",
    image: "/07bB0-02.webp",
    shortDesc: "Intrants et équipements pour la prise en charge complète de la malnutrition.",
    fullDesc: "Cette gamme d'intrants et équipements couvre l'ensemble des besoins pour la prise en charge de la malnutrition (PEC) en milieu communautaire et hospitalier. Elle inclut du matériel anthropométrique de précision, des équipements de diagnostic, et des fournitures pour le suivi nutritionnel continu des patients.",
    benefits: [
      "Matériel de mesure anthropométrique",
      "Équipements de diagnostic fiables",
      "Adapté au milieu hospitalier et communautaire",
      "Normes internationales respectées",
      "Suivi nutritionnel continu",
    ],
    usage: "Utiliser selon les protocoles de prise en charge de la malnutrition en vigueur. Formation du personnel recommandée avant utilisation.",
    tags: ["PEC", "Malnutrition", "Équipements", "Diagnostic"],
  },
  {
    id: 6,
    slug: "f100-f75",
    name: "F100 et F75",
    category: "Nutrition thérapeutique",
    image: "/F100-2.webp",
    shortDesc: "Laits thérapeutiques utilisés dans la prise en charge de la malnutrition aiguë sévère.",
    fullDesc: "F100 et F75 sont des laits thérapeutiques de référence internationale pour le traitement de la malnutrition aiguë sévère (MAS) en milieu hospitalier. Le F75 est utilisé en phase de stabilisation pour prévenir les complications, tandis que le F100 accompagne la phase de récupération nutritionnelle intensive.",
    benefits: [
      "Protocole OMS respecté",
      "F75 pour la stabilisation",
      "F100 pour la récupération",
      "Formule haute densité énergétique",
      "Résultats cliniques prouvés",
    ],
    usage: "Strictement sous supervision médicale. Préparer selon les instructions cliniques OMS. Administrer en petites quantités fréquentes selon le stade de la prise en charge.",
    tags: ["MAS", "F75 stabilisation", "F100 récupération", "Lait thérapeutique"],
  },
  {
    id: 7,
    slug: "plumpy-nut",
    name: "Plumpy-nut",
    category: "Nutrition thérapeutique",
    image: "/PLUMP.webp",
    shortDesc: "Aliment thérapeutique prêt à l'emploi pour la prise en charge communautaire de la malnutrition sévère.",
    fullDesc: "Plumpy-nut est l'aliment thérapeutique prêt à l'emploi (ATPE) le plus utilisé dans le monde pour le traitement communautaire de la malnutrition aiguë sévère. À base de pâte d'arachide enrichie en vitamines et minéraux, il permet une prise en charge en dehors de l'hôpital, réduisant ainsi la charge sur les systèmes de santé.",
    benefits: [
      "Prêt à l'emploi, sans préparation",
      "Traitement possible à domicile",
      "Riche en énergie et nutriments",
      "Longue durée de conservation",
      "Reconnu par l'OMS et l'UNICEF",
    ],
    usage: "Administrer 1 à 3 sachets par jour selon le poids de l'enfant. Accompagner d'une quantité suffisante d'eau potable. Suivi médical régulier recommandé.",
    tags: ["ATPE", "Arachide", "Communautaire", "Prêt à l'emploi"],
  },
  {
    id: 8,
    slug: "kit-pci",
    name: "Kit PCI",
    category: "Hygiène hospitalière",
    image: "/PCI.webp",
    shortDesc: "Prévention et contrôle des infections en milieu hospitalier et dans les communautés.",
    fullDesc: "Le Kit PCI (Prévention et Contrôle des Infections) regroupe l'ensemble des équipements et fournitures nécessaires pour prévenir et contrôler la propagation des infections dans les établissements de santé et les communautés. Il comprend des équipements de protection individuelle (EPI), du matériel de stérilisation, et des fournitures de gestion sécurisée des déchets biomédicaux.",
    benefits: [
      "Protection individuelle complète (EPI)",
      "Matériel de stérilisation certifié",
      "Gestion sécurisée des déchets biomédicaux",
      "Réduction du risque de contamination croisée",
      "Normes OMS respectées",
    ],
    usage: "Utiliser selon les protocoles de prévention des infections en vigueur dans votre établissement. Former le personnel à l'utilisation correcte des EPI avant déploiement.",
    tags: ["Prévention", "Infections", "EPI", "Déchets biomédicaux"],
  },
];