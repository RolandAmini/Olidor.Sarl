// lib/products.js
export const products = [
  {
    id: 1,
    name: "Mwisho MAM",
    category: "Nutrition infantile",
    description: "Super-céréal enrichi pour nourrissons et jeunes enfants",
    price: 15.99,
    currency: "USD",
    image: "/products/mwisho-mam.jpg",
    inStock: true,
    nutritionalInfo: {
      proteins: "15g",
      vitamins: "A, D, E, K",
      minerals: "Fer, Zinc, Calcium"
    }
  },
  {
    id: 2,
    name: "Uji-total",
    category: "Nutrition infantile",
    description: "Lait du Kivu thérapeutique pour enfants",
    price: 12.99,
    currency: "USD",
    image: "/products/uji-total.jpg",
    inStock: true,
    nutritionalInfo: {
      proteins: "12g",
      vitamins: "B12, D",
      minerals: "Calcium, Phosphore"
    }
  },
  {
    id: 3,
    name: "Huile végétale",
    category: "Alimentation",
    description: "Huile végétale de qualité supérieure",
    price: 8.99,
    currency: "USD",
    image: "/products/huile.jpg",
    inStock: true,
    volume: "1L"
  },
  {
    id: 4,
    name: "Farine de maïs",
    category: "Alimentation",
    description: "Farine de maïs local de première qualité",
    price: 5.99,
    currency: "USD",
    image: "/products/farine.jpg",
    inStock: true,
    weight: "2kg"
  }
];

export const categories = [
  "Tous les produits",
  "Nutrition infantile",
  "Alimentation",
  "Céréales",
  "Produits laitiers"
];