# 🚀 Deployment Guide - Ensemble Kompopolex

## Quick Deploy na Vercel (RECOMMENDED)

### Opcja 1: Deploy przez Vercel Dashboard (Najprostsza)

1. **Zaloguj się na Vercel:**
   - Idź na [vercel.com](https://vercel.com)
   - Zaloguj się kontem GitHub

2. **Import projektu:**
   - Kliknij "Add New Project"
   - Wybierz repository: `kompoplex-landing`
   - Kliknij "Import"

3. **Configure Project:**
   - **Framework Preset**: Other (lub None)
   - **Root Directory**: ./
   - **Build Command**: (zostaw puste)
   - **Output Directory**: (zostaw puste)
   - Kliknij "Deploy"

4. **Gotowe!**
   - Po 30-60 sekundach strona będzie live
   - Otrzymasz URL: `kompoplex-landing.vercel.app`
   - Każdy push do main branch = auto-deploy

### Opcja 2: Deploy przez Vercel CLI

1. **Zainstaluj Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
cd /home/ilusi0n/repo/kompoplex-experiment
vercel
```

4. **Production Deploy:**
```bash
vercel --prod
```

## Deploy na Netlify

### Opcja 1: Netlify Dashboard

1. **Zaloguj się na Netlify:**
   - Idź na [netlify.com](https://netlify.com)
   - Zaloguj się kontem GitHub

2. **Import projektu:**
   - Kliknij "Add new site" → "Import an existing project"
   - Wybierz GitHub
   - Wybierz repository: `kompoplex-landing`

3. **Configure:**
   - **Build command**: (zostaw puste)
   - **Publish directory**: ./
   - Kliknij "Deploy site"

4. **Gotowe!**
   - Po minucie strona będzie live
   - URL: `kompoplex-landing.netlify.app`

### Opcja 2: Netlify CLI

1. **Zainstaluj Netlify CLI:**
```bash
npm i -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Deploy:**
```bash
cd /home/ilusi0n/repo/kompoplex-experiment
netlify deploy
```

4. **Production Deploy:**
```bash
netlify deploy --prod
```

## Deploy na GitHub Pages

1. **Settings → Pages:**
   - Idź na https://github.com/ilusi0npl/kompoplex-landing/settings/pages
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
   - Save

2. **Poczekaj 2-3 minuty**

3. **Strona dostępna pod:**
   - https://ilusi0npl.github.io/kompoplex-landing/

## Custom Domain Setup

### Vercel

1. **Settings → Domains:**
   - Dodaj domenę: `kompopolex.pl`
   - Dodaj DNS records u providera:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

2. **SSL:**
   - Automatycznie konfigurowane przez Vercel
   - Let's Encrypt certificate

### Netlify

1. **Site settings → Domain management:**
   - Add custom domain: `kompopolex.pl`
   - Dodaj DNS records:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5

     Type: CNAME
     Name: www
     Value: your-site-name.netlify.app
     ```

2. **SSL:**
   - Automatycznie konfigurowane przez Netlify

## Environment Variables (jeśli będą potrzebne w przyszłości)

### Vercel
1. Settings → Environment Variables
2. Dodaj zmienne:
   - `CONTACT_EMAIL`
   - `API_URL`
   - etc.

### Netlify
1. Site settings → Environment variables
2. Dodaj zmienne

## Performance Optimization dla Production

### 1. Image Optimization

Zamień Unsplash URLs na optimized images:
```bash
# Download i optimize obrazy
# Użyj narzędzi jak:
- ImageOptim (Mac)
- Squoosh (Web)
- TinyPNG (Web)
```

### 2. Lazy Loading

Już zaimplementowane w `js/main.js` dla galerii

### 3. Caching

Headers już skonfigurowane w `vercel.json`

### 4. Lighthouse Score

Uruchom audyt:
```bash
# Chrome DevTools → Lighthouse
# Target: 90+ na wszystkich metrics
```

## Monitoring & Analytics

### Google Analytics (Opcjonalnie)

Dodaj przed `</head>` w `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

1. Dashboard → Analytics
2. Enable Vercel Analytics
3. Auto-tracking bez dodatkowego kodu

## Troubleshooting

### Problem: Strona nie ładuje się

**Solution:**
- Sprawdź czy `index.html` jest w root directory
- Sprawdź build logs w dashboard
- Upewnij się że wszystkie pliki są committed i pushed

### Problem: CSS nie działa

**Solution:**
- Sprawdź ścieżki w `<link>` tagach
- Upewnij się że `css/styles.css` istnieje
- Clear browser cache

### Problem: JavaScript errors

**Solution:**
- Otwórz Console w DevTools
- Sprawdź czy wszystkie skrypty są załadowane
- Sprawdź ścieżki do `js/main.js`

### Problem: Images nie ładują się

**Solution:**
- Sprawdź URLs w `<img>` tagach
- Unsplash URLs muszą być dostępne
- Rozważ hosting własnych obrazów

## Post-Deployment Checklist

- [ ] Strona ładuje się poprawnie
- [ ] Wszystkie sekcje są widoczne
- [ ] Navigation działa (smooth scroll, mobile menu)
- [ ] Hero canvas animation działa
- [ ] Ensemble cards hover effects działają
- [ ] Repertuar filter działa
- [ ] Kalendarz timeline wyświetla się poprawnie
- [ ] Galeria lightbox działa
- [ ] Formularz kontaktowy validuje
- [ ] Footer linki działają
- [ ] Scroll-to-top button pojawia się
- [ ] Mobile responsive (test na 3+ devices)
- [ ] Performance score 90+ (Lighthouse)
- [ ] SEO meta tags są obecne
- [ ] Social media preview działa (OpenGraph)

## Continuous Deployment

### Auto-deploy na każdy push:

1. **Vercel/Netlify:**
   - Automatycznie skonfigurowane
   - Push do `main` = instant deploy
   - Preview deploys dla innych branchy

2. **GitHub Actions (opcjonalnie):**
   - Możesz dodać CI/CD pipeline
   - Automated testing przed deploy
   - Lighthouse CI dla performance monitoring

## Next Steps

Po deployment:
1. Test na różnych urządzeniach
2. Poproś o feedback
3. Monitor analytics
4. Iteruj i ulepsz

---

**Happy Deploying! 🚀**

Strona jest gotowa do produkcji i zoptymalizowana pod kątem performance i SEO.
