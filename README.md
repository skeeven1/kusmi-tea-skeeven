# kusmi-tea-skeevenKusmi Tea Skeeven

Projet : Landing Page Kusmi Tea

Page d’opération responsive intégrée en HTML, CSS & JavaScript, avec un carrousel produits et un modal.

📝 Présentation

Cette landing page met en avant :

Une section Nos Bestsellers (4 cartes produit)

Un bloc central CTA (image + titre, description, bouton)

Une section Nos Accessoires avec un carrousel scrollable (9 cartes produit)

Un modal (popup) déclenché par le CTA « JE DÉCOUVRE »

Effet zoom on hover sur chaque image produit

La page est responsive :

Mobile : menu en colonne, carrousel scrollable au doigt, titre mobile, sans overflow horizontal

Tablette : zoom images réduit, position des flèches optimisée

Desktop : disposition en grille, zoom plus prononcé, flèches hors du carrousel

🚀 Fonctionnalités

Carrousel Produits

Navigation par flèches rondes (SVG) en dehors du conteneur

Scroll fluide calculé en fonction de la largeur de carte + gap

Masquage de la scrollbar native

Modal Popup

Apparition au clic sur « JE DÉCOUVRE »

Fermeture par croix ou touche Esc

Gestion focus pour accessibilité

Zoom au Survol

scale(1.1) sur desktop, scale(1.05) sur tablette, désactivé sur mobile

Double Titre CTA

Titre desktop vs titre mobile masqués/affichés par media-query

Responsive Layout

Media-queries pour 768px et 1024px

Flexbox / Grid pour les sections

Suppression de tout overflow-x global (sauf carousel-track)

📁 Structure du projet

kusmi-tea-skeeven/
├── index.html       # Page principale
├── style.css        # Styles globaux
├── script.js        # JS carrousel & modal
├── assets/          # Images produits (PNG, WEBP)
│   ├── 1.png … 4.png
│   ├── banner1.png
│   ├── carou1.webp … carou9.webp
└── README.md        # Ce fichier

⚙️ Installation & Déploiement

Cloner le repo

git clone https://github.com/<votre-username>/kusmi-tea-skeeven.git
cd kusmi-tea-skeeven

Ouvrir en local

Double-cliquez sur index.html ou utilisez un serveur local (Live Server VSCode).

Pousser vos modifs

git add .
git commit -m "Votre message"
git push

🛠️ Stack technique

HTML5

CSS3 (Flexbox, Grid, Media Queries)

JavaScript ES6 (Vanilla)

SVG pour flèches personnalisées

Font : Lato (Google Fonts)

👤 Auteur

Skeeven1 — Étudiant Efrei Paris / Alternance 2025

Bonne dégustation et bon code !

