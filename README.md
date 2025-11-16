# Construction Michael Aubut

Site web moderne et responsive pour Construction Michael Aubut, recréé avec Next.js 14 et Tailwind CSS.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **React** - Bibliothèque UI

## 📋 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation mobile avec menu hamburger
- ✅ Effet parallax sur les images de fond
- ✅ Pages de services détaillées:
  - Construction résidentielle et commerciale
  - Rénovation
  - Excavation
  - Matériaux en vrac avec calculateur
- ✅ Formulaire de contact
- ✅ Page bureau avec informations de contact
- ✅ Animations fluides
- ✅ Optimisation des performances
- ✅ Accessibilité améliorée

## 🎨 Design

Le site utilise une palette de couleurs professionnelle:
- **Gris foncé** (#424242) - Fond principal
- **Amber** (#FFC107) - Couleur d'accent
- **Blanc** - Contenu et cartes
- **Gris 900** (#1F2937) - En-tête et pied de page

## 🏗️ Structure du projet

```
ma.construction/
├── app/
│   ├── layout.tsx              # Layout principal avec header et footer
│   ├── page.tsx                # Page d'accueil
│   ├── globals.css             # Styles globaux
│   ├── contact/
│   │   └── page.tsx            # Page de contact
│   ├── bureau/
│   │   └── page.tsx            # Page bureau
│   └── services/
│       ├── construction/
│       │   └── page.tsx        # Page construction
│       ├── renovation/
│       │   └── page.tsx        # Page rénovation
│       ├── excavation/
│       │   └── page.tsx        # Page excavation
│       └── materiaux-en-vrac/
│           └── page.tsx        # Page vrac avec calculateur
├── components/
│   ├── ContactSection.tsx      # Section contact réutilisable
│   ├── MobileMenu.tsx          # Menu mobile
│   ├── ParallaxSection.tsx     # Section avec effet parallax
│   └── ServiceCard.tsx         # Carte de service
└── public/
    └── images/                 # Images du site
```

## 🚀 Installation et démarrage

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Build pour la production
npm run build

# Démarrage en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📱 Pages disponibles

- `/` - Page d'accueil avec présentation des services
- `/services/construction` - Construction résidentielle et commerciale
- `/services/renovation` - Services de rénovation
- `/services/excavation` - Services d'excavation
- `/services/materiaux-en-vrac` - Matériaux en vrac et calculateur
- `/contact` - Formulaire de contact
- `/bureau` - Informations sur le bureau

## 🎯 Fonctionnalités clés

### Calculateur de vrac
La page des matériaux en vrac inclut un calculateur interactif qui permet aux clients de:
- Entrer les dimensions (largeur, longueur, profondeur)
- Calculer automatiquement les verges cubiques nécessaires
- Inclut un surplus de 10% automatiquement

### Effet Parallax
Les sections avec images de fond utilisent un effet parallax pour une expérience visuelle moderne et engageante.

### Menu mobile
Navigation intuitive sur mobile avec menu hamburger animé et overlay.

## 🔧 Personnalisation

Les couleurs principales peuvent être modifiées dans `tailwind.config.ts`:

```typescript
colors: {
  'amber': {
    400: '#ffc107',
    500: '#ffb300',
  }
}
```

## 📞 Contact

- **Téléphone**: 1-819-560-1882
- **Adresse**: 1100 rue Galt Est, Sherbrooke (Québec) J1G 1Y5

## 📄 Licence

© 2024 Construction Michael Aubut. Tous droits réservés.
