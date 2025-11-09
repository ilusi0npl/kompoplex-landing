# 🎵 Ensemble Kompopolex - Landing Page

Nowoczesny, responsywny landing page dla prestiżowego zespołu muzycznego Ensemble Kompopolex.

![Ensemble Kompopolex](https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&h=400&fit=crop)

## ✨ Cechy

- **Contemporary Artystyczna Estetyka** - Odważne kolory, asymetryczne layouty, dynamiczne animacje
- **W pełni Responsywny** - Mobile-first design, działa na wszystkich urządzeniach
- **Dynamiczne Animacje** - Scroll-triggered reveals, parallax effects, smooth transitions
- **SEO Optimized** - Semantic HTML5, meta tags, structured data
- **Performance** - Lazy loading, optimized animations, fast load times
- **Accessibility** - ARIA labels, keyboard navigation, high contrast

## 🎨 Design

### Paleta Kolorów (Cool Contemporary)
```css
--primary-dark: #1a1f2e      /* Deep slate */
--secondary-dark: #2d3748    /* Ciemny slate gray */
--accent-blue: #4a90e2       /* Deep vibrant blue */
--metallic: #c0c5ce          /* Platinum/silver */
--background: #0f1419        /* Bardzo ciemny */
--light: #e8eaed             /* Off-white */
```

### Typografia
- **Headings**: Archivo Black - Bold, impactowe
- **Subheadings**: Bebas Neue - Wysokie, eleganckie
- **Body**: Epilogue - Czytelne, nowoczesne
- **Accents**: Plus Jakarta Sans - Dla CTA i labels

## 🚀 Technologie

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+, Intersection Observer API, Canvas API
- **Google Fonts** - Archivo Black, Bebas Neue, Epilogue, Plus Jakarta Sans
- **Unsplash** - Placeholder images

## 📁 Struktura Projektu

```
kompoplex-experiment/
├── index.html              # Główna strona HTML
├── css/
│   └── styles.css          # Wszystkie style CSS
├── js/
│   └── main.js             # Wszystkie interakcje JavaScript
├── assets/
│   ├── images/             # Zdjęcia i grafiki
│   └── icons/              # Ikony i favicon
├── docs/
│   └── plans/
│       └── 2025-11-09-kompopolex-landing-design.md
├── README.md               # Ten plik
├── .gitignore              # Git ignore file
└── vercel.json             # Konfiguracja Vercel
```

## 🛠️ Instalacja i Uruchomienie

### Wymagania
- Przeglądarka internetowa (Chrome, Firefox, Safari, Edge)
- Opcjonalnie: Live Server dla local development

### Lokalne Uruchomienie

1. **Sklonuj repozytorium:**
```bash
git clone https://github.com/yourusername/kompoplex-experiment.git
cd kompoplex-experiment
```

2. **Otwórz w przeglądarce:**
```bash
# Opcja 1: Bezpośrednio
open index.html

# Opcja 2: Z Live Server (VSCode)
# Zainstaluj Live Server extension
# Kliknij prawym na index.html → "Open with Live Server"

# Opcja 3: Python HTTP Server
python -m http.server 8000
# Otwórz http://localhost:8000
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Zainstaluj Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Production Deploy:**
```bash
vercel --prod
```

### Netlify

1. **Zainstaluj Netlify CLI:**
```bash
npm i -g netlify-cli
```

2. **Deploy:**
```bash
netlify deploy
```

3. **Production Deploy:**
```bash
netlify deploy --prod
```

### GitHub Pages

1. **Push do GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Settings → Pages:**
- Source: Deploy from branch
- Branch: main
- Folder: / (root)

## 📱 Sekcje Strony

### 1. Navigation
- Sticky header z blur effect
- Hamburger menu na mobile
- Active section indicator
- Smooth scroll do sekcji

### 2. Hero Section
- Full viewport height
- Animated canvas visualization
- Dynamic typography
- CTA button z hover effects

### 3. Ensemble (O Zespole)
- Grid z członkami zespołu
- Hover effects na zdjęciach
- Sticky sidebar z opisem
- Animated statistics counters

### 4. Repertuar
- Filterable grid (Wszystko, Klasyka, Jazz, Współczesne)
- Smooth filter animations
- Hover effects z glow
- Gradient mesh background

### 5. Kalendarz
- Vertical timeline design
- Alternating event cards
- Date badges z pulse animation
- Ghost button CTAs

### 6. Galeria
- Asymmetric masonry grid
- Full-screen lightbox
- Keyboard navigation
- Lazy loading images

### 7. Fundacja
- Centered layout
- Mission statement
- Bullet-point goals
- CTA do kontaktu

### 8. Kontakt
- Floating label form
- Real-time validation
- Loading states
- Social media links

### 9. Footer
- Quick links
- Social media icons
- Privacy policy link
- Copyright notice

### Dodatkowo
- Scroll-to-top button
- Parallax effects
- Scroll reveal animations

## 🎯 Features & Funkcjonalności

### Animations
- **Entry animations** - Hero section fade-in/slide-up
- **Scroll reveals** - Intersection Observer dla sekcji
- **Hover effects** - Lift, glow, scale transforms
- **Counter animations** - Stats w sekcji Ensemble
- **Canvas animation** - Generative art w Hero
- **Parallax** - Subtle movement przy scroll

### Interaktivity
- **Mobile menu** - Full-screen overlay z hamburger
- **Repertuar filter** - Dynamic grid filtering
- **Lightbox gallery** - Full-screen image viewer
- **Form validation** - Real-time feedback
- **Smooth scroll** - Do wszystkich sekcji
- **Active links** - Highlight przy scroll

### Optimization
- **Lazy loading** - Images load on demand
- **Intersection Observer** - Animations tylko gdy visible
- **CSS containment** - Izolacja layout dla performance
- **Debounced scroll** - Optimized scroll handlers
- **Minimal JS** - Vanilla JS, zero dependencies

## 📊 Performance

- ✅ Mobile-first responsive design
- ✅ Semantic HTML5 dla SEO
- ✅ Optimized animations (GPU-accelerated)
- ✅ Lazy-loaded images
- ✅ Minimal external dependencies
- ✅ Fast load time (<3s on 3G)

## 🎨 Customization

### Zmiana Kolorów
Edytuj CSS variables w `css/styles.css`:
```css
:root {
  --primary-dark: #twój-kolor;
  --accent-blue: #twój-kolor;
  /* ... */
}
```

### Zmiana Treści
1. **Teksty**: Edytuj bezpośrednio w `index.html`
2. **Zdjęcia**: Zamień URLe w `<img>` tagach
3. **Repertuar**: Dodaj/usuń `.repertuar__card` elementy
4. **Wydarzenia**: Dodaj/usuń `.kalendarz__event` elementy

### Zmiana Fontów
Edytuj w `<head>` w `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Potem w CSS:
```css
:root {
  --font-heading: 'YourFont', sans-serif;
}
```

## 🐛 Known Issues / TODO

- [ ] Dodać prawdziwy backend dla formularza kontaktowego
- [ ] Dodać CMS dla łatwej edycji treści
- [ ] Dodać audio player dla przykładów repertuaru
- [ ] Dodać blog/news section
- [ ] Dodać multilingual support (EN/PL)
- [ ] Dodać PWA features
- [ ] Dodać dark/light mode toggle

## 📝 License

MIT License - feel free to use for your own projects!

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📧 Contact

Ensemble Kompopolex
- Email: kontakt@kompopolex.pl
- Phone: +48 123 456 789
- Website: [kompopolex.pl](https://kompopolex.pl)

---

**Made with ❤️ and 🎵 for Ensemble Kompopolex**

*Design & Development: 2025*
