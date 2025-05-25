# kusmi-tea-skeeven

## Kusmi Tea Skeeven

**Projet :** Landing Page Kusmi Tea

Page d’opération responsive intégrée en **HTML**, **CSS** & **JavaScript**, avec un carrousel produits et un modal.

---

## 📝 Présentation

Cette landing page met en avant :

- **Nos Bestsellers** : 4 cartes produit  
- **Bloc CTA** : image + titre + description + bouton  
- **Nos Accessoires** : carrousel scrollable avec différentes images  
- **Modal Popup** : déclenché par le bouton “JE DÉCOUVRE”  
- **Effet Zoom** : zoom on hover sur chaque image

**Responsive :**  
- **Mobile** : menu en colonne, carrousel tactile, titre mobile, pas d’overflow horizontal, zoom image réduit, différents niveaux de grilles pour les colonnes 
---

## 🚀 Fonctionnalités

### 1. Carrousel Produits
- Navigation par flèches 
- Scroll disponible 
- Masquage de la scrollbar native

### 2. Modal Popup
- Ouverture au clic sur **JE DÉCOUVRE**  
- Fermeture par croix ou touche `Esc`  

### 3. Zoom au Survol
- `scale(1.1)` sur **desktop**  
- `scale(1.05)` sur **tablette**  
- **Désactivé** sur mobile

### 4. Double Titre CTA
- Version desktop vs version mobile  
- Affichage contrôlé par media-queries

### 5. Responsive Layout
- Media-queries à **768px** et **1024px**  
- **Flexbox** et **Grid** pour la mise en page  
- Suppression de tout `overflow-x` global (sauf `.carousel-track`)

---

## 📁 Structure du projet

kusmi-tea-skeeven/
├── index.html # Page principale
├── style.css # Styles globaux
├── script.js # JS carrousel & modal
├── assets/ # Images produits (PNG, WebP)
│ ├── 1.png … 4.png
│ ├── banner1.png
│ └── carou1.webp … carou9.webp
└── README.md # Ce fichier

## 🛠️ Stack technique
- HTML

- CSS

- JavaScript

- SVG pour flèches personnalisées

- Font : Lato (Google Fonts)

👤 Auteur
skeeven1 — Étudiant Efrei Paris / Alternance 2025
   

