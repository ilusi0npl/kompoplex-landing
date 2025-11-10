# 🎵 Ensemble Kompopolex - Website + Google Sheets CMS

Oficjalna strona internetowa zespołu **Ensemble Kompopolex** z systemem zarządzania treścią opartym o Google Sheets.

**🌐 Live:** https://kompoplex-landing.vercel.app

---

## 📖 Spis treści

- [Szybki start dla użytkownika](#-szybki-start-dla-użytkownika)
- [Jak edytować treści](#-jak-edytować-treści)
- [Struktura Google Sheet](#-struktura-google-sheet)
- [Instalacja przycisku "Opublikuj"](#-instalacja-przycisku-opublikuj-w-google-sheet)
- [Dla developerów](#-dla-developerów)
- [Architektura](#-architektura)
- [Deployment na Vercel](#-deployment-na-vercel)
- [Troubleshooting](#-troubleshooting)

---

# 🚀 Szybki start dla użytkownika

## Czym jest ten system?

To strona internetowa z **prostym CMS** (Content Management System), który pozwala **bez znajomości programowania** edytować treści strony za pomocą Google Sheets.

## Co możesz edytować?

Możesz zmieniać 5 sekcji strony:

1. **O Nas** - 2 akapity z opisem zespołu
2. **Kim Jesteśmy** - członkowie zespołu (imiona, instrumenty, zdjęcia)
3. **Repertuar** - lista utworów muzycznych
4. **Nadchodzące Wydarzenia** - kalendarz koncertów
5. **Galeria** - zdjęcia zespołu

---

# ✏️ Jak edytować treści

## 1. Otwórz Google Sheet

```
https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
```

**Arkusz ma 5 zakładek:**
```
[O_Nas] [Kim_Jesteśmy] [Repertuar] [Wydarzenia] [Galeria]
```

## 2. Edytuj dane

**Reguły:**
- ❌ **NIE ZMIENIAJ** nagłówków (pierwszy rząd z tytułami kolumn)
- ❌ **NIE USUWAJ** kolumn
- ✅ **MOŻESZ** edytować komórki z danymi (od rzędu 2 w dół)
- ✅ **MOŻESZ** dodawać nowe rzędy
- ✅ **MOŻESZ** usuwać rzędy z danymi

## 3. Zapisz zmiany

Google Sheets zapisuje automatycznie! Gdy zobaczysz **"Wszystkie zmiany zapisane w Dysku"** u góry - gotowe!

## 4. Opublikuj na stronie

**Kliknij menu w Google Sheet:** `🎵 Kompopolex` → `🚀 Opublikuj zmiany`

Zobaczysz dialog potwierdzenia - kliknij **TAK**.

**Poczekaj 2-3 minuty**, a następnie odśwież stronę:
```
https://kompoplex-landing.vercel.app
```

**Zmiany są live!** ✅

---

# 📊 Struktura Google Sheet

## Zakładka 1: O_Nas

**2 akapity z opisem zespołu**

| Akapit_1 | Akapit_2 |
|----------|----------|
| Ensemble Kompopolex to zespół muzyki... | Specjalizujemy się w wykonawstwie... |

**Uwagi:**
- **TYLKO 1 rząd danych** (rząd 2)
- Możesz używać HTML tagów: `<strong>tekst</strong>` dla pogrubienia

**Przykład z pogrubieniem:**
```html
Ensemble Kompopolex to zespół muzyki współczesnej i kameralnej. W jego skład wchodzą <strong>Aleksandra Gołaj</strong> (perkusja), <strong>Rafał Łuc</strong> (akordeon) i <strong>Jacek Sotomski</strong> (komputery).
```

---

## Zakładka 2: Kim_Jesteśmy

**Członkowie zespołu**

| Imię | Instrument | Opis | Zdjęcie_URL |
|------|------------|------|-------------|
| Aleksandra Gołaj | perkusja | ... | /assets/images/aleksandra.png |
| Rafał Łuc | akordeon | ... | /assets/images/rafal.png |
| Jacek Sotomski | komputery | ... | /assets/images/jacek.png |

**Uwagi:**
- **Instrument**: Małymi literami: `perkusja`, `akordeon`, `komputery`
- **Zdjęcie_URL**: Ścieżka do zdjęcia (zdjęcia muszą być najpierw dodane przez developera)

---

## Zakładka 3: Repertuar

**Lista utworów muzycznych**

| Kompozytor | Utwór | Rok |
|------------|-------|-----|
| John Cage | Music of Changes | 1951 |
| Carola Bauckholt | Geräusche | 1992 |
| Piotr Bednarczyk | triggered ^ | 2020 |

**Uwagi:**
- **Kompozytor**: Pełne imię i nazwisko
- **Utwór**: Tytuł (możesz dodać ^ dla oznaczenia "written for us")
- **Rok**: Rok lub przedział lat (np. `2014/15`)

---

## Zakładka 4: Wydarzenia

**Kalendarz koncertów**

| Data | Nazwa | Lokalizacja | Godzina |
|------|-------|-------------|---------|
| 2025-12-15 | Koncert Świąteczny | Filharmonia, Warszawa | 19:00 |
| 2025-12-22 | Wieczór Jazzowy | Blue Note, Poznań | 20:00 |

**⚠️ WAŻNE - Format daty:**
```
YYYY-MM-DD
```

**Przykłady poprawne:**
- ✅ `2025-12-15` (15 grudnia 2025)
- ✅ `2026-01-10` (10 stycznia 2026)

**Przykłady niepoprawne:**
- ❌ `15-12-2025`
- ❌ `15.12.2025`

**Miesiące automatycznie zamienią się na polskie skróty:**
- 01 → STY, 02 → LUT, 03 → MAR, 04 → KWI
- 05 → MAJ, 06 → CZE, 07 → LIP, 08 → SIE
- 09 → WRZ, 10 → PAŹ, 11 → LIS, 12 → GRU

---

## Zakładka 5: Galeria

**Zdjęcia zespołu**

| Zdjęcie_URL | Opis |
|-------------|------|
| /assets/images/koncert1.jpg | Koncert w Warszawie |
| /assets/images/koncert2.jpg | Występ w Filharmonii |

**Uwagi:**
- **Zdjęcie_URL**: Ścieżka do zdjęcia
- **Opis**: Alt text dla zdjęcia (SEO, accessibility)
- Kolejność zdjęć w galerii = kolejność w arkuszu
- Zdjęcia muszą być najpierw dodane przez developera

---

# 🚀 Instalacja przycisku "Opublikuj" w Google Sheet

Po zainstalowaniu pojawi się menu **🎵 Kompopolex** z przyciskiem **🚀 Opublikuj zmiany** bezpośrednio w Google Sheet!

## Krok po kroku:

### 1. Otwórz Google Sheet
```
https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
```

### 2. Otwórz edytor Apps Script

Kliknij: **Rozszerzenia** → **Apps Script**

### 3. Usuń domyślny kod

Zaznacz cały kod i usuń (Ctrl+A, Delete)

### 4. Wklej nowy kod

Otwórz plik w repozytorium: `google-apps-script.js`

Skopiuj **CAŁY kod** i wklej do edytora Apps Script

### 5. Zapisz projekt

Kliknij ikonę dyskietki lub naciśnij `Ctrl+S`

Nazwa projektu (opcjonalnie): `Kompopolex Publisher`

### 6. Zamknij edytor i odśwież arkusz

Zamknij kartę z Apps Script, wróć do Google Sheet i odśwież stronę (F5)

### 7. Zezwól na uprawnienia (PIERWSZY RAZ)

Po odświeżeniu zobaczysz nowe menu: **🎵 Kompopolex**

Kliknij na menu, wybierz **🚀 Opublikuj zmiany**

Google zapyta o uprawnienia:
1. Kliknij **"Przeglądaj uprawnienia"**
2. Wybierz swoje konto Google
3. Google pokaże ostrzeżenie **"Aplikacja niezweryfikowana"**
   - Kliknij **"Zaawansowane"**
   - Kliknij **"Przejdź do Kompopolex Publisher (unsafe)"**
4. Kliknij **"Zezwól"**

⚠️ To normalne! Google pokazuje to dla wszystkich niestandardowych skryptów. Twój skrypt jest bezpieczny.

### 8. Gotowe! 🎉

Teraz w Google Sheet u góry zobaczysz menu: **🎵 Kompopolex**

W menu znajdziesz:
- 🚀 **Opublikuj zmiany** ← GŁÓWNA FUNKCJA
- 📊 Status ostatniego deployment
- ℹ️ Pomoc

---

## 🎯 Jak używać przycisku?

1. ✏️ **Edytujesz** dane w Google Sheet
2. 💾 **Zapisujesz** (automatycznie)
3. 🎵 **Klikasz** menu "🎵 Kompopolex"
4. 🚀 **Wybierasz** "Opublikuj zmiany"
5. ✅ **Potwierdzasz** w dialogu
6. ⏳ **Czekasz** 2-3 minuty
7. 🌐 **Odświeżasz** stronę
8. 🎉 **Zmiany są live!**

---

# 💻 Dla developerów

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
2. Trigger (przycisk lub webhook) wywołuje Vercel Deploy Hook
3. Vercel uruchamia `npm run build`
4. Build script pobiera dane z Google Sheets API
5. Generuje nowy `index.html` z aktualnymi danymi
6. Vercel deployuje zaktualizowaną stronę
7. Zmiany są live! 🎉

---

## 📂 Struktura projektu

```
kompoplex-experiment/
├── index.html                      # Główny plik HTML (GENEROWANY)
├── index.backup.html               # Backup poprzedniej wersji (auto)
├── package.json                    # Dependencies (googleapis)
├── google-credentials.json         # Google Service Account (GITIGNORED!)
│
├── css/
│   └── styles.css                  # Style strony
│
├── js/
│   └── main.js                     # JavaScript (animacje, lightbox)
│
├── assets/
│   └── images/                     # Zdjęcia zespołu, galeria
│
├── scripts/
│   └── build-from-sheets.js        # 🔨 BUILD SCRIPT - główna logika
│
├── google-sheet-templates/
│   ├── O_Nas.csv                   # Szablon CSV dla zakładki O_Nas
│   └── README.md                   # Instrukcje importu
│
├── google-apps-script.js           # Skrypt dla Google Sheet (przycisk)
│
└── docs/
    └── archive/                    # Stare wersje dokumentacji
```

---

## 🚀 Quick Start (development)

### 1. Sklonuj repozytorium
```bash
git clone <repo-url>
cd kompoplex-experiment
```

### 2. Zainstaluj dependencies
```bash
npm install
```

### 3. Pobierz credentials

Upewnij się że masz plik `google-credentials.json` w głównym katalogu projektu.

**⚠️ NIGDY NIE COMMITUJ tego pliku!** (jest w `.gitignore`)

### 4. Build
```bash
npm run build
```

### 5. Testuj lokalnie

Otwórz `index.html` w przeglądarce lub użyj live-server:
```bash
npx live-server
```

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

**Service Account:**
```
kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com
```

**Sheet ID:**
```
1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8
```

---

### Environment Variables (Vercel)

**Wymagane zmienne w Vercel Settings → Environment Variables:**

```env
GOOGLE_SHEET_ID=1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8
GOOGLE_SERVICE_ACCOUNT_JSON={...cały JSON credentials...}
```

**Jak dodać:**
1. Otwórz Vercel Dashboard → Projekt → Settings → Environment Variables
2. Kliknij **Add New**
3. **Key:** `GOOGLE_SHEET_ID`
   **Value:** `1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8`
4. Kliknij **Add New** ponownie
5. **Key:** `GOOGLE_SERVICE_ACCOUNT_JSON`
   **Value:** Wklej cały plik `google-credentials.json` (z nawiasami klamrowymi)
6. Kliknij **Save**

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
Node.js Version: 18.x
```

---

# 🌐 Deployment na Vercel

## Automatyczny deployment (przez Git)

```bash
git add .
git commit -m "Update content"
git push
```

Vercel automatycznie zbuduje i wdroży.

---

## Deploy Hook (bookmark lub przycisk)

### URL Deploy Hook:
```
https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
```

### Użycie:

**Opcja A - Przycisk w Google Sheet:**
Po zainstalowaniu `google-apps-script.js` kliknij: **🎵 Kompopolex** → **🚀 Opublikuj zmiany**

**Opcja B - Bookmark w przeglądarce:**
1. Stwórz nową zakładkę
2. URL: `https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ`
3. Nazwa: `🔄 Opublikuj Kompopolex`
4. Kliknij zakładkę aby opublikować

**Opcja C - Curl:**
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
```

---

## Sprawdź status deployment:

**Vercel Dashboard:**
```
https://vercel.com/ilusi0npl/kompoplex-landing/deployments
```

**Status:**
- 🟡 **Building** - w trakcie
- 🟢 **Ready** - gotowe, live!
- 🔴 **Error** - błąd (sprawdź logi)

---

# 🐛 Troubleshooting

## Build fails lokalnie

**Problem:** "Error initializing Google Sheets API"

**Rozwiązanie:**
1. Sprawdź czy plik `google-credentials.json` istnieje
2. Sprawdź czy ma poprawny format JSON
3. Sprawdź czy service account ma dostęp do arkusza

---

## Build fails na Vercel

**Problem:** "Error fetching data from range"

**Rozwiązanie:**
1. Sprawdź czy dodałeś env vars w Vercel Settings
2. Sprawdź czy `GOOGLE_SERVICE_ACCOUNT_JSON` to cały JSON (z {})
3. Sprawdź czy arkusz jest udostępniony service account:
   ```
   kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com
   ```
4. Sprawdź logi buildu w Vercel Dashboard

---

## Dane nie aktualizują się

**Problem:** Strona pokazuje stare treści

**Rozwiązanie:**
1. Sprawdź czy minęły 2-3 minuty od triggera
2. Wyczyść cache przeglądarki (Ctrl+Shift+R)
3. Sprawdź Vercel Deployments - czy build się wykonał?
4. Sprawdź build logs - czy pobrał nowe dane?
5. Otwórz stronę w trybie incognito

---

## Błąd "Unable to parse range: O_Nas!A2:B2"

**Problem:** Zakładka O_Nas nie istnieje lub ma niepoprawną nazwę

**Rozwiązanie:**
1. Sprawdź czy zakładka nazywa się DOKŁADNIE `O_Nas` (z podkreślnikiem)
2. Nie `O Nas` (spacja), nie `o_nas` (małe litery)
3. Zobacz instrukcje w sekcji **"Dodaj zakładkę O_Nas"** poniżej

---

## Format daty niepoprawny w "Wydarzenia"

**Problem:** Wydarzenia nie wyświetlają się

**Rozwiązanie:**
Użyj formatu `YYYY-MM-DD`:
- ✅ `2025-12-15`
- ❌ `15-12-2025`
- ❌ `15.12.2025`

---

## Przycisk "Opublikuj" w Google Sheet nie działa

**Problem:** Menu się nie pojawia lub przycisk nic nie robi

**Rozwiązanie:**
1. Sprawdź czy zapisałeś skrypt (Ctrl+S)
2. Odśwież arkusz (F5)
3. Sprawdź czy zezwoliłeś na uprawnienia (przy pierwszym uruchomieniu)
4. Sprawdź "Executions" w Apps Script edytorze - czy są błędy?

---

# 📝 Dodatkowe instrukcje

## Jak dodać zakładkę O_Nas do Google Sheet

Jeśli zakładka `O_Nas` nie istnieje:

### 1. Dodaj nową zakładkę
Kliknij **"+"** u dołu arkusza

### 2. Zmień nazwę na `O_Nas`
Kliknij prawym → **"Zmień nazwę"** → wpisz `O_Nas`

⚠️ **DOKŁADNIE:** `O_Nas` (z podkreślnikiem, duże O, duże N)

### 3. Dodaj nagłówki (rząd 1)

| A        | B        |
|----------|----------|
| Akapit_1 | Akapit_2 |

### 4. Dodaj dane (rząd 2)

**Komórka A2:**
```
Ensemble Kompopolex to zespół muzyki współczesnej i kameralnej. W jego skład wchodzą Aleksandra Gołaj (perkusja), Rafał Łuc (akordeon) i Jacek Sotomski (komputery).
```

**Komórka B2:**
```
Specjalizujemy się w wykonawstwie współczesnych kompozycji, często w premierowych wykonaniach utworów polskich i zagranicznych kompozytorów. Nasz repertuar obejmuje utwory na różnorodne składy instrumentalne, z naciskiem na eksperymentalne podejście do dźwięku i formy.
```

**Lub zaimportuj gotowy szablon:**
Plik → Import → `google-sheet-templates/O_Nas.csv`

---

## Jak dodać pogrubienie w tekście

Użyj HTML tagu `<strong>`:

```html
Ensemble Kompopolex to zespół muzyki współczesnej i kameralnej. W jego skład wchodzą <strong>Aleksandra Gołaj</strong> (perkusja), <strong>Rafał Łuc</strong> (akordeon) i <strong>Jacek Sotomski</strong> (komputery).
```

**Inne tagi:**
- Pogrubienie: `<strong>tekst</strong>` lub `<b>tekst</b>`
- Kursywa: `<em>tekst</em>` lub `<i>tekst</i>`
- Łamanie linii: `tekst<br>nowa linia`

---

## Jak dodać nowe zdjęcie

Zdjęcia muszą być najpierw przesłane na serwer przez developera.

**Workflow:**
1. Wyślij zdjęcie developerowi
2. Developer doda je do `/assets/images/`
3. Dostaniesz ścieżkę (np. `/assets/images/nowe-zdjecie.jpg`)
4. Wklej tę ścieżkę do kolumny "Zdjęcie_URL" w Google Sheet
5. Opublikuj zmiany

---

## Jak zmienić kolejność utworów/zdjęć

**W Google Sheet:**
1. Kliknij na numer rzędu (po lewej stronie)
2. Przeciągnij rząd w górę lub w dół
3. Zapisz (automatycznie)
4. Opublikuj zmiany

Kolejność na stronie = kolejność w arkuszu!

---

## Jak cofnąć zmiany (rollback)

### Opcja 1 - Przywróć przez Google Sheets:
1. **Plik** → **Historia wersji** → **Zobacz historię wersji**
2. Wybierz wcześniejszą wersję z listy
3. Kliknij **Przywróć tę wersję**
4. Opublikuj ponownie

### Opcja 2 - Przywróć przez Vercel:
1. Otwórz Vercel Dashboard → Deployments
2. Znajdź poprzedni deployment
3. Kliknij **... (menu)** → **Promote to Production**

### Opcja 3 - Przywróć przez Git:
```bash
cp index.backup.html index.html
git add index.html
git commit -m "Restore from backup"
git push
```

---

# 🔐 Bezpieczeństwo

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

# 📞 Support

**Pytania użytkowników (edycja treści):**
- Zobacz sekcję "Jak edytować treści" powyżej
- Sprawdź sekcję "Troubleshooting"

**Pytania techniczne (development):**
- Zobacz sekcję "Dla developerów"
- Open GitHub issue

---

# 📄 License

MIT License - See LICENSE file for details

---

**🎵 Ensemble Kompopolex - Pasja, muzyka, elegancja.**

*Website powered by Google Sheets CMS - Simple. Powerful. Free.*

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
