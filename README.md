# Olidor SARL - Plateforme de Logistique et d'Export

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Odoo](https://img.shields.io/badge/Integration-Odoo_ERP-875A7B?style=flat-square&logo=odoo)

##  Présentation du Projet
Olidor SARL est une solution numérique dédiée à la gestion logistique et à l'exportation. Cette plateforme permet de digitaliser les processus métiers, d'optimiser le suivi des marchandises et de centraliser la communication avec les clients.

**Statut :** En cours de développement (Phase d'intégration ERP).

##  Stack Technique
- **Frontend :** Next.js 15 (App Router), React 19, Tailwind CSS.
- **Backend :** Next.js API Routes.
- **Base de données / ERP :** Intégration Odoo via API XML-RPC / JSON-RPC.
- **Sécurité :** Validation des données avec Zod, Protection contre XSS et SQL Injection.

##  Architecture & Bonnes Pratiques (Engineering)
Ce projet suit les standards de l'industrie pour garantir la scalabilité :
- **Layered Architecture :** Séparation claire entre les composants UI, la logique métier (Services), et les appels API.
- **Type Safety :** Utilisation stricte de TypeScript pour minimiser les erreurs en production.
- **Performance :** Optimisation des images (Next/Image) et chargement différé pour un temps de réponse < 2s.

## Installation
1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/RolandAmini/Olidor.Sarl.git](https://github.com/RolandAmini/Olidor.Sarl.git)
2. Installez les dépendances :
   npm install
3.Configurez les variables d'environnement (voir .env.example).
4.Lancez le serveur de développement :
   npm run dev

  
 

