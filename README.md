# 🎵 Ensemble Kompopolex - Website + Google Sheets CMS

Oficjalna strona internetowa zespołu **Ensemble Kompopolex** z systemem zarządzania treścią opartym o Google Sheets.

---

## 🎯 Czym jest ten projekt?

To strona internetowa zespołu muzycznego z **prostym CMS** (Content Management System), który pozwala użytkownikom **bez znajomości programowania** edytować treści strony za pomocą Google Sheets.

**Zalety:**
- ✅ Edycja treści przez Google Sheets (jak Excel)
- ✅ Bez potrzeby dostępu do kodu
- ✅ Automatyczne buildy i deployment
- ✅ Historia zmian i rollback przez Google Sheets
- ✅ Zero kosztów hostingu (Vercel Free Tier)

---

## 🏗️ Architektura

```
┌─────────────────┐
│  Google Sheet   │  ← Użytkownik edytuje treści
│  (CMS)          │
└────────┬────────┘
         │
         │ (API pobiera dane)
         ▼
┌─────────────────┐
│  Build Script   │  ← Node.js + googleapis
│  (build.js)     │     Generuje HTML
└────────┬────────┘
         │
         │ (zapisuje index.html)
         ▼
┌─────────────────┐
│  Static Site    │  ← index.html + CSS + JS + assets
│  (Vercel)       │
└─────────────────┘
```

**Workflow:**
1. Użytkownik edytuje Google Sheet
2. Trigger (bookmark lub cron) wywołuje Vercel Deploy Hook
3. Vercel uruchamia `npm run build`
4. Build script pobiera dane z Google Sheets API
5. Generuje nowy `index.html` z aktualnymi danymi
6. Vercel deployuje zaktualizowaną stronę
7. Zmiany są live! 🎉

---

## 📂 Struktura projektu

```
kompoplex-experiment/
├── index.html                      # Główny plik HTML (GENEROWANY przez build)
├── index.original.html             # Backup oryginalnego HTML
├── index.backup.html               # Backup poprzedniej wersji (auto)
├── package.json                    # Dependencies (googleapis)
├── google-credentials.json         # Google Service Account (GITIGNORED!)
│
├── css/
│   └── styles.css                  # Style strony
│
├── js/
│   └── main.js                     # JavaScript (animacje, lightbox, etc.)
│
├── assets/
│   └── images/                     # Zdjęcia zespołu, galeria
│
├── scripts/
│   └── build-from-sheets.js        # 🔨 BUILD SCRIPT - główna logika
│
└── [Dokumentacja]
    ├── README_CMS.md                # Przewodnik dla użytkownika (jak edytować Sheet)
    ├── GOOGLE_SHEET_STRUCTURE.md    # Wymagana struktura arkusza
    ├── GOOGLE_CLOUD_SETUP.md        # Setup Google Cloud Project
    └── VERCEL_DEPLOYMENT.md         # Deployment na Vercel
```

---

## 🚀 Quick Start

### Dla użytkownika (edycja treści)

📖 **Przeczytaj:** `README_CMS.md`

1. Otwórz Google Sheet: https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
2. Edytuj dane w odpowiednich zakładkach
3. Kliknij bookmark "🔄 Opublikuj Kompopolex"
4. Poczekaj 2-3 minuty
5. Odśwież stronę - zmiany są live!

---

### Dla developera (local development)

#### 1. Sklonuj repozytorium
```bash
git clone <repo-url>
cd kompoplex-experiment
```

#### 2. Zainstaluj dependencies
```bash
npm install
```

#### 3. Pobierz credentials
Upewnij się że masz plik `google-credentials.json` w głównym katalogu projektu.

#### 4. Build
```bash
npm run build
```

#### 5. Testuj lokalnie
Otwórz `index.html` w przeglądarce lub użyj live-server:
```bash
npx live-server
```

---

## 📚 Dokumentacja

### Dla użytkowników końcowych:
- **[README_CMS.md](README_CMS.md)** - Jak edytować treści przez Google Sheets
- **[GOOGLE_SHEET_STRUCTURE.md](GOOGLE_SHEET_STRUCTURE.md)** - Wymagana struktura arkusza

### Dla developerów:
- **[GOOGLE_CLOUD_SETUP.md](GOOGLE_CLOUD_SETUP.md)** - Setup Google Cloud Project
- **[VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)** - Deployment na Vercel

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5 + CSS3 (Custom Properties)
- Vanilla JavaScript (ES6+)
- Canvas API (particle animations)
- Intersection Observer API (scroll animations)

**CMS:**
- Google Sheets API (v4)
- Node.js build script
- googleapis npm package

**Hosting:**
- Vercel (Free Tier)
- Automatic deployments from git
- Serverless build environment

---

## 🔧 Konfiguracja

### Google Sheets API

**Wymagane:**
- Google Cloud Project z włączonym Sheets API
- Service Account z read-only access
- Google Sheet udostępniony service account

📖 **Szczegóły:** `GOOGLE_CLOUD_SETUP.md`

---

### Environment Variables (Vercel)

**Wymagane zmienne:**
```
GOOGLE_SHEET_ID=1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8
GOOGLE_SERVICE_ACCOUNT_JSON={...cały JSON credentials...}
```

📖 **Szczegóły:** `VERCEL_DEPLOYMENT.md`

---

### Build Configuration

**package.json scripts:**
```json
{
  "build": "node scripts/build-from-sheets.js",
  "dev": "npm run build",
  "vercel-build": "npm run build"
}
```

**Vercel Build Settings:**
```
Build Command: npm run build
Output Directory: .
Install Command: npm install
```

---

## 🎨 Edytowalne sekcje

Użytkownik może edytować 4 sekcje strony przez Google Sheets:

### 1. **Kim Jesteśmy** (Ensemble)
- Członkowie zespołu
- Imiona, nazwiska
- Instrumenty
- Zdjęcia

### 2. **Repertuar**
- Lista utworów
- Kompozytorzy
- Tytuły utworów
- Lata powstania

### 3. **Nadchodzące Wydarzenia** (Kalendarz)
- Lista koncertów
- Daty (YYYY-MM-DD)
- Nazwy wydarzeń
- Lokalizacje
- Godziny

### 4. **Galeria**
- Zdjęcia zespołu
- Opisy (alt text)
- Automatyczny layout (tall/wide/normal)

---

## 🔐 Bezpieczeństwo

**Co jest gitignored:**
```
google-credentials.json
*-credentials.json
.env
.env.local
node_modules/
```

**⚠️ NIGDY NIE COMMITUJ:**
- Google Service Account credentials
- Environment variables z kluczami
- `.env` files

**Credentials są:**
- ✅ W lokalnym pliku `google-credentials.json` (gitignored)
- ✅ W Vercel Environment Variables (encrypted)
- ❌ Nigdy w git repository

---

## 🐛 Troubleshooting

### Build fails lokalnie

**Problem:** "Error initializing Google Sheets API"

**Rozwiązanie:**
1. Sprawdź czy plik `google-credentials.json` istnieje
2. Sprawdź czy ma poprawny format JSON
3. Sprawdź czy service account ma dostęp do arkusza

---

### Build fails na Vercel

**Problem:** "Error fetching data from range"

**Rozwiązanie:**
1. Sprawdź czy dodałeś env vars w Vercel Settings
2. Sprawdź czy `GOOGLE_SERVICE_ACCOUNT_JSON` to cały JSON (z {})
3. Sprawdź czy arkusz jest udostępniony service account
4. Sprawdź logi buildu w Vercel Dashboard

---

### Dane nie aktualizują się

**Problem:** Strona pokazuje stare treści

**Rozwiązanie:**
1. Sprawdź czy minęły 2-3 minuty od triggera
2. Wyczyść cache przeglądarki (Ctrl+Shift+R)
3. Sprawdź Vercel Deployments - czy build się wykonał?
4. Sprawdź build logs - czy pobrał nowe dane?

---

## 📦 Deployment

### Automatyczny (przez Git)
```bash
git add .
git commit -m "Update content"
git push
```
Vercel automatycznie zbuduje i wdroży.

---

### Przez Deploy Hook (bookmark)

1. Kliknij bookmark "Opublikuj Kompopolex"
2. Poczekaj 2-3 minuty
3. Gotowe!

---

### Przez Vercel Dashboard

1. Deployments → ...  (menu)
2. Redeploy
3. Gotowe!

---

## 🤝 Dla contributorów

### Jak dodać nową sekcję edytowalną?

1. Dodaj nową zakładkę w Google Sheet
2. Zaktualizuj `CONFIG.RANGES` w `scripts/build-from-sheets.js`
3. Napisz funkcję `build{Nazwa}HTML(data)` dla nowej sekcji
4. Dodaj regex replace w `buildHTMLFile()`
5. Zaktualizuj dokumentację

---

### Jak zmienić HTML strukturę?

**⚠️ UWAGA:** Build script używa regex do znajdowania i zamiany sekcji HTML.

**Struktura musi być:**
```html
<div class="sekcja__grid">
    <!-- Tutaj będą wstawione dane -->
</div></div></section>
```

Jeśli zmienisz strukturę, zaktualizuj regex w `buildHTMLFile()`.

---

## 📝 Notatki deweloperskie

### Backup system

Build automatycznie tworzy backup przed każdym rebuild:
- `index.backup.html` - backup poprzedniej wersji
- `index.original.html` - oryginalna wersja (manualna)

### Rollback

**Opcja 1 - Przywróć z backupu:**
```bash
cp index.backup.html index.html
git add index.html
git commit -m "Restore from backup"
git push
```

**Opcja 2 - Przywróć przez Vercel:**
Dashboard → Deployments → Previous deploy → Promote to Production

**Opcja 3 - Przywróć przez Git:**
```bash
git log --oneline
git revert <commit-hash>
git push
```

---

## 🎉 Credits

**Website:** Ensemble Kompopolex
**CMS System:** Google Sheets + Node.js
**Hosting:** Vercel
**Development:** Claude Code + Human Collaboration

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🆘 Support

**Pytania użytkowników (edycja treści):**
- Zobacz `README_CMS.md`
- Sprawdź sekcję FAQ

**Pytania techniczne (development):**
- Zobacz dokumentację w głównym katalogu
- Open GitHub issue

---

**🎵 Ensemble Kompopolex - Pasja, muzyka, elegancja.**

*Website powered by Google Sheets CMS - Simple. Powerful. Free.*
