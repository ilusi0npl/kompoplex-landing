# Ensemble Kompopolex - Landing Page Design Document

**Date:** 2025-11-09
**Project:** Modern, responsive landing page for Ensemble Kompopolex
**Goal:** Prestige and artistic portfolio showcase

---

## Design Overview

### Design Philosophy
- **Aesthetic:** Contemporary artystyczna - odważne kolory, asymetria, nowoczesne fonty, dynamiczne layouty
- **Primary Goal:** Budowanie prestiżu - strona jako portfolio artystyczne, nacisk na elegancję, repertuar i osiągnięcia zespołu
- **Approach:** Świeży start - całkowicie nowy design, zainspirowany obecną stroną ale z nową identyfikacją wizualną
- **Animation Level:** Dynamiczne i ekspresyjne - odważniejsze animacje (parallax, transformations, scroll-triggered reveals) z "wow factor"

---

## Visual Identity

### Color Palette (Cool Contemporary)
```css
--primary-dark: #1a1f2e;      /* Deep slate, prawie czarny */
--secondary-dark: #2d3748;    /* Ciemny slate gray */
--accent-blue: #4a90e2;       /* Deep vibrant blue */
--metallic: #c0c5ce;          /* Platinum/silver */
--background: #0f1419;        /* Bardzo ciemny, prawie czarny */
--light: #e8eaed;             /* Off-white */
```

### Typography
- **H1-H2 (Main Headings):** Archivo Black - bold, impactowe, uppercase dla głównych nagłówków
- **H3-H4 (Subheadings):** Bebas Neue - wysokie, eleganckie
- **Body Text:** Epilogue (400/500 weights) - wysoka czytelność
- **Accents/CTA:** Plus Jakarta Sans (600/700 weights)

### Grid System
- 12-column responsive grid
- Asymetryczne splits: 7/5, 8/4 zamiast klasycznego 6/6
- Vertical spacing: minimum 120px między sekcjami
- Dużo whitespace, breathing room

---

## Section-by-Section Design

### 1. Navigation (Sticky Header)

**Specifications:**
- Position: Fixed top
- Height: 80px (desktop), 60px (mobile)
- Background: Transparent z backdrop blur (12px) przy scroll
- Semi-transparent background pojawia się przy scroll

**Layout:**
- Left: Logo "KOMPOPOLEX" (Archivo Black, 24px)
- Right: Menu items (Epilogue 500, 16px, letter-spacing 0.5px)
  - Desktop: Horizontal - Home | Kalendarz | Ensemble | Repertuar | Kontakt | Fundacja
  - Mobile: Hamburger → Full-screen overlay menu

**Interactions:**
- Hover: Underline animation slide-in from left
- Active section: Subtle blue accent line pod aktywnym linkiem
- Mobile menu: Stagger animation przy otwarciu

---

### 2. Hero Section

**Layout:**
- Height: 100vh
- Split: Asymetryczny 60/40 (left/right)

**Left Side (60% width):**
- "ENSEMBLE" (Bebas Neue, 180px, vertical spacing)
- "KOMPOPOLEX" (Archivo Black, 120px, blue accent color)
- Tagline: "Pasja. Muzyka. Elegancja." (Plus Jakarta Sans, 24px, platinum, letter-spacing 2px)
- CTA Button: "ODKRYJ REPERTUAR" (56px height, blue accent)
  - Hover: Lift effect + glow
- Scroll indicator na dole (animated chevron)

**Right Side (40% width):**
- Abstract geometric shape animation (CSS/Canvas)
- Inspiracja: nuty/fale dźwiękowe
- Delikatny parallax effect przy scroll
- Gradient overlay w kolorach palety

**Entry Animations:**
1. "ENSEMBLE": fade-in + slide-up (0s)
2. "KOMPOPOLEX": fade-in + slide-up (0.2s delay)
3. Tagline: fade-in (0.6s delay)
4. CTA: scale-in (0.9s delay)
5. Geometric shape: continuous subtle animation (rotation + morph)

---

### 3. Ensemble Section

**Layout:** 7/5 asymmetric split

**Left Side (7 cols) - Team Grid:**
- Grid: 3-column (desktop), 2-column (tablet), 1-column (mobile)
- Card size: 380px × 480px (portretowe)
- Card design:
  - Image: Grayscale default → color on hover
  - Overlay: Nazwisko + instrument
  - Hover: Scale 1.05 + blue accent border + text slide-up reveal

**Right Side (5 cols) - About:**
- Sticky podczas scroll sekcji
- Heading: "KIM JESTEŚMY" (Bebas Neue, 72px)
  - Opcjonalnie: vertical text orientation
- Opis zespołu (Epilogue, 18px, line-height 1.8, max-width 520px)
- Stats cards:
  - "15+ LAT"
  - "200+ KONCERTÓW"
  - "3 KONTYNENTY"
  - Style: Plus Jakarta Sans, bold
  - Animation: Counter animation on scroll into view

**Scroll Animations:**
- Cards: Fade-in + stagger delay (każda 0.15s)
- Stats: Counter animation przy wejściu w viewport

---

### 4. Repertuar Section

**Background:** Full-width dark section (deep slate) dla kontrastu

**Layout:**
- Heading: "REPERTUAR" (Archivo Black, 96px, centered)
- Filter tabs: "WSZYSTKO" | "KLASYKA" | "JAZZ" | "WSPÓŁCZESNE"
  - Horizontal scroll na mobile
  - Active tab: Blue accent underline z smooth slide animation

**Grid:**
- Masonry layout (Pinterest-style, organiczne wysokości)
- Desktop: 3 kolumny, Tablet: 2, Mobile: 1

**Card Design:**
- Kompozytor/Tytuł (Bebas Neue, 32px)
- Opis/epoka (Epilogue, 14px, platinum)
- Duration badge (opcjonalnie)
- Hover: Lift effect + blue glow border + "play" icon fade-in

**Animations:**
- Filter: Filtered-out items fade-out + scale-down, pozostałe re-arrange
- Background: Subtle animated gradient mesh

---

### 5. Kalendarz Section

**Design:** Contemporary timeline (nie tradycyjna lista)

**Heading:**
- "NADCHODZĄCE WYDARZENIA" (Archivo Black, 84px, split na 2 linie)

**Desktop Timeline:**
- Centralna niebieska linia (2px, blue accent, vertical)
- Events na przemian lewo/prawo od linii
- Event card:
  - Data: Duży circle badge (120px diameter) na linii
  - Content (400px width):
    - Nazwa wydarzenia (Bebas Neue, 36px)
    - Lokalizacja (Plus Jakarta Sans)
    - Czas
  - CTA: "DOWIEDZ SIĘ WIĘCEJ" (ghost button, blue outline)
  - Hover: Card lift + blue glow, date badge pulse

**Mobile:**
- Horizontal scroll carousel
- Cards: 320px width
- Swipe gesture + snap scroll

**Empty State:**
"BRAK ZAPLANOWANYCH WYDARZEŃ - WKRÓTCE NOWE DATY"

**Scroll Animation:**
Cards fade-in from left/right w miarę scrollowania

---

### 6. Galeria Section

**Layout:** Full-width, full-bleed asymmetryczny masonry grid

**Specifications:**
- Label: "GALERIA" (Plus Jakarta Sans, 14px, uppercase, tracking 3px) w górnym rogu
- Grid: Asymmetryczny masonry (Pinterest-style)
  - Mix sizes: 1x1, 2x1, 1x2 ratio variants
  - Desktop: 4 kolumny, Tablet: 3, Mobile: 2
  - Gap: Minimal (8px) lub zero gap (full-bleed)

**Interactions:**
- Hover: Subtle overlay fade-in + image scale 1.02
- Click: Lightbox modal
  - Full-screen dark overlay (90% opacity)
  - Large centered image
  - Prev/next arrows
  - Image counter "3 / 12"
  - ESC lub click outside zamyka
  - Smooth fade transitions

**Scroll Animation:**
Images lazy-load z fade-in + slight scale effect

**Placeholder Images:**
6-9 zdjęć z Unsplash (koncerty, instrumenty, performance shots)

---

### 7. Fundacja Section

**Layout:** Single-column centered (max-width 900px)

**Structure:**
- Heading: "FUNDACJA" (Bebas Neue, 64px, centered)
- Subheading: "MISJA I CELE" (Plus Jakarta Sans, 18px, uppercase, letter-spacing 2px, blue accent)
- Content: 2-column grid (desktop) / 1-column (mobile)
  - Left: Opis misji (Epilogue, 18px, line-height 1.9)
  - Right: Lista celów (custom blue accent bullets)
- CTA: "DOWIEDZ SIĘ WIĘCEJ" (200px width, centered)
- Background: Subtle gradient od dark slate do primary

---

### 8. Kontakt Section

**Layout:** 6/6 split (desktop), stacked (mobile)

**Left Side - Formularz:**
- Heading: "SKONTAKTUJ SIĘ" (Bebas Neue, 56px)
- Fields (elegant floating labels):
  1. Imię i Nazwisko
  2. Email
  3. Telefon
  4. Typ zapytania (dropdown):
     - "Booking koncertu"
     - "Współpraca"
     - "Pytanie ogólne"
     - "Wsparcie fundacji"
  5. Wiadomość (textarea, min-height 180px)
- Submit: "WYŚLIJ WIADOMOŚĆ" (full-width, blue accent)

**Input Styling:**
- Dark inputs z subtle blue border
- Focus: Bright blue + glow
- Real-time validation z delikatnymi error messages

**Loading States:**
- Submit: Button spinner
- Success: Green checkmark + "Wiadomość wysłana!"
- Error: Red message + retry option

**Right Side - Contact Info:**
- Email icon + clickable mailto:
- Phone icon + clickable tel:
- Address icon + adres
- Social media icons (48px):
  - Facebook, Instagram, YouTube
  - Hover: Scale 1.1 + blue accent color
  - Vertical alignment, 24px spacing

---

### 9. Footer

**Specifications:**
- Background: #0f1419 (najciemniejszy)
- Height: 200px (desktop), auto (mobile)

**Layout:** 3 równe kolumny (1/3 każda)

**Left - Logo + Copyright:**
- "KOMPOPOLEX" (Archivo Black, 24px)
- "© 2025 Ensemble Kompopolex. Wszelkie prawa zastrzeżone."

**Center - Quick Links:**
- Home | Kalendarz | Ensemble | Repertuar | Kontakt
- Hover: Blue accent underline

**Right - Social + Privacy:**
- Social icons (32px)
- "Polityka prywatności" link

**Mobile:** Stacked vertically, centered

**Scroll-to-Top Button:**
- Position: Fixed bottom-right (40px od krawędzi)
- Appearance: Po scroll >800px
- Design: Blue accent circle z arrow up icon
- Action: Smooth scroll do góry

---

## Technical Specifications

### Animations & Interactions

**Global Animation Principles:**
- Dynamiczne i ekspresyjne (parallax, transformations, scroll-triggered reveals)
- Timing: ease-out dla wejść, ease-in-out dla transitions
- Duration: 0.3-0.6s dla większości efektów
- Stagger delays: 0.1-0.2s między elementami

**Scroll Animations:**
- Intersection Observer API do wykrywania viewport
- Threshold: 0.2 (trigger przy 20% visibility)
- Animations: fade-in, slide-up, scale, counter animations

**Hover Effects:**
- Lift: translateY(-4px) + box-shadow increase
- Glow: box-shadow z blue accent
- Scale: transform: scale(1.05)
- Color transitions: 0.3s ease

### Responsiveness

**Breakpoints:**
```css
--mobile: 320px - 767px
--tablet: 768px - 1023px
--desktop: 1024px - 1439px
--large: 1440px+
```

**Mobile-First Approach:**
- Base styles dla mobile
- Progressive enhancement dla większych ekranów
- Touch-friendly targets (min 44px)
- Hamburger menu poniżej 768px

### Performance

**Optimization:**
- Lazy loading dla images
- Intersection Observer dla scroll animations
- CSS containment dla izolacji layout
- Will-change dla animowanych elementów
- Debounce/throttle dla scroll handlers

**Loading Strategy:**
- Critical CSS inline
- Deferred JavaScript
- Preload kluczowych fontów
- Optimized images (WebP + fallback)

### SEO

**Meta Tags:**
```html
<title>Ensemble Kompopolex - Prestiżowy Zespół Muzyczny</title>
<meta name="description" content="Ensemble Kompopolex - pasja, muzyka, elegancja. Odkryj nasz repertuar, poznaj zespół i zarezerwuj koncert.">
<meta property="og:title" content="Ensemble Kompopolex">
<meta property="og:description" content="Prestiżowy zespół muzyczny">
<meta property="og:image" content="[URL do social share image]">
```

**Semantic HTML:**
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy (h1 → h6)
- ARIA labels dla interaktywnych elementów
- Alt text dla wszystkich images

---

## File Structure

```
/kompoplex-experiment
├── index.html
├── css/
│   ├── styles.css
│   ├── reset.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── animations.js
│   └── form-handler.js
├── assets/
│   ├── images/
│   └── icons/
├── docs/
│   └── plans/
│       └── 2025-11-09-kompopolex-landing-design.md
├── README.md
├── .gitignore
└── vercel.json
```

---

## Content Placeholders

### Ensemble Section
- 6-8 team members
- Placeholder images z Unsplash (muzyczne, portretowe)
- Lorem ipsum dla opisów

### Repertuar Section
- 12-15 utworów
- Mix kategorii: Klasyka, Jazz, Współczesne
- Placeholder composers i tytuły

### Kalendarz Section
- 3-5 nadchodzących wydarzeń
- Placeholder daty, lokalizacje

### Galeria Section
- 6-9 placeholder images
- Unsplash: concert, instruments, performance

### Fundacja Section
- Placeholder misja i cele
- 3-4 punkty w liście celów

### Kontakt Section
- Placeholder email: kontakt@kompopolex.pl
- Placeholder telefon: +48 XXX XXX XXX
- Social media: Facebook, Instagram, YouTube

---

## Deployment

**Platform:** Vercel

**Configuration:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ]
}
```

**Steps:**
1. Push to GitHub repository
2. Import projekt w Vercel
3. Auto-deploy on push to main branch
4. Custom domain setup (kompopolex.pl)

---

## Next Steps

1. ✅ Design document completed
2. Initialize git repository
3. Create HTML structure
4. Implement CSS styling
5. Add JavaScript interactions
6. Optimize & test
7. Deploy to Vercel

---

**Design Status:** ✅ Approved
**Ready for Implementation:** Yes
