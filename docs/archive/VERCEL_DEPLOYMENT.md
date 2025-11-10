# 🚀 Deployment na Vercel - Kompopolex CMS

## 📋 Przegląd

Ten przewodnik pomoże Ci skonfigurować automatyczne buildy na Vercel, które będą pobierać dane z Google Sheets i generować stronę.

---

## KROK 1: Dodaj Google Credentials do Vercel

### 1.1 Otwórz Dashboard Vercel
🔗 **Link:** https://vercel.com/dashboard

### 1.2 Wybierz projekt
- Kliknij na projekt `kompopolex-experiment`
- Przejdź do **Settings**

### 1.3 Dodaj Environment Variables

**Lokalizacja:** Settings → Environment Variables

**Dodaj 2 zmienne:**

#### ➊ Variable 1: `GOOGLE_SHEET_ID`
```
Key:   GOOGLE_SHEET_ID
Value: 1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

#### ➋ Variable 2: `GOOGLE_SERVICE_ACCOUNT_JSON`

**⚠️ WAŻNE:** To jest **cały plik JSON** jako string!

Otwórz plik `google-credentials.json` i skopiuj **całą** zawartość:

```json
{
  "type": "service_account",
  "project_id": "kompopolex-cms",
  "private_key_id": "cf7e1f0bdade072fcc0961348beae4fc6ac739cb",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADAN...",
  "client_email": "kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com",
  ...
}
```

**W Vercel:**
```
Key:   GOOGLE_SERVICE_ACCOUNT_JSON
Value: [WKLEJ CAŁY PLIK JSON]
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

**Kliknij:** `[Save]`

---

## KROK 2: Zaktualizuj Build Script dla Vercel

Build script musi odczytywać credentials z environment variables na Vercel zamiast z lokalnego pliku.

✅ **To już jest zrobione!** Skrypt automatycznie wykrywa środowisko Vercel.

---

## KROK 3: Dodaj Build Command do Vercel

### 3.1 Otwórz Settings projektu

**Lokalizacja:** Settings → General → Build & Development Settings

### 3.2 Skonfiguruj Build Settings

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
.
```
(Kropka - oznacza root directory, bo index.html jest w głównym katalogu)

**Install Command:**
```bash
npm install
```

**Framework Preset:**
```
Other
```

**Kliknij:** `[Save]`

---

## KROK 4: Utwórz Deploy Hook

Deploy Hook to specjalny URL, który możesz wywołać (np. przez browser bookmark), żeby wywołać rebuild strony.

### 4.1 Otwórz Settings → Git

**Lokalizacja:** Settings → Git → Deploy Hooks

### 4.2 Utwórz nowy hook

**Kliknij:** `[Create Hook]`

**Wypełnij:**
```
Hook Name: Google Sheets Update
Branch: main
```

**Kliknij:** `[Create Hook]`

### 4.3 Skopiuj URL

Dostaniesz URL wyglądający tak:
```
https://api.vercel.com/v1/integrations/deploy/prj_XXX/YYY
```

**ZAPISZ TEN URL!** 📋

---

## KROK 5: Testowy deploy

### 5.1 Trigger manual deploy

**Opcja A - Przez Dashboard:**
1. Przejdź do **Deployments**
2. Kliknij **...** (menu)
3. Wybierz **Redeploy**

**Opcja B - Przez Git:**
```bash
git add .
git commit -m "feat: Add Google Sheets CMS"
git push
```

**Opcja C - Przez Deploy Hook:**
Otwórz URL deploy hook w przeglądarce (ten skopiowany w kroku 4.3)

### 5.2 Sprawdź logi budowania

1. Przejdź do **Deployments**
2. Kliknij na najnowszy deployment
3. Kliknij **View Function Logs** lub **Build Logs**

**Powinieneś zobaczyć:**
```
🚀 Starting build from Google Sheets...
📡 Connecting to Google Sheets API...
✅ Connected successfully!
📥 Fetching data from sheets...
  ✓ Kim Jesteśmy: X członków
  ✓ Repertuar: X utworów
  ✓ Wydarzenia: X wydarzeń
  ✓ Galeria: X zdjęć
🔨 Building HTML sections...
✅ index.html generated successfully!
🎉 Build completed!
```

### 5.3 Sprawdź stronę

Kliknij **Visit** żeby zobaczyć deployed website!

---

## KROK 6: Automatyzacja (Opcjonalne)

### Opcja A: Manualne triggerowanie (NAJPROSTSZE)

**Utworzysz browser bookmark:**

1. Skopiuj Deploy Hook URL
2. W przeglądarce: Dodaj nową zakładkę/bookmark
3. **Nazwa:** "🔄 Opublikuj Kompopolex"
4. **URL:** [Wklej Deploy Hook URL]

**Użycie:**
1. ✏️ Edytujesz Google Sheet
2. 🔄 Klikasz bookmark "Opublikuj Kompopolex"
3. ⏱️ Czekasz ~2 minuty
4. ✅ Strona zaktualizowana!

---

### Opcja B: Automatyczne triggery co 5 minut (ZAAWANSOWANE)

Użyj darmowego serwisu **cron-job.org** do automatycznego sprawdzania zmian.

#### 6.1 Utwórz konto na cron-job.org
🔗 https://cron-job.org/en/signup/

#### 6.2 Utwórz nowy Cron Job

**Kliknij:** Create Cronjob

**Wypełnij:**
```
Title: Kompopolex Auto Deploy
URL: [Twój Deploy Hook URL]
Execution: Every 5 minutes
```

**Uwaga:** To będzie triggerowało build CO 5 MINUT, nawet jeśli nie było zmian!

---

### Opcja C: Zapier/Make.com (PRO)

Użyj Zapier lub Make.com żeby monitorować zmiany w Google Sheet i triggerować Deploy Hook tylko gdy coś się zmieni.

**Zapier Workflow:**
1. Trigger: Google Sheets "Updated Spreadsheet Row"
2. Action: Webhooks "POST" → Deploy Hook URL

**Make.com (darmowy plan wystarczy):**
1. Google Sheets → Watch Changes
2. HTTP → Make a Request → Deploy Hook URL

---

## 🎯 Workflow użytkownika (finalne)

### Z manualnym triggerem (bookmark):
1. ✏️ Użytkownik edytuje Google Sheet
2. 💾 Zapisuje zmiany (Ctrl+S / auto-save)
3. 🔄 Klika bookmark "Opublikuj Kompopolex"
4. ⏱️ Czeka ~2-3 minuty (Vercel rebuild)
5. ✅ Odświeża stronę - zmiany są live!

### Z automatycznym (cron-job.org):
1. ✏️ Użytkownik edytuje Google Sheet
2. 💾 Zapisuje zmiany
3. ⏱️ Czeka max 5 minut (następny scheduled cron)
4. ✅ Zmiany automatycznie są live!

---

## ❓ FAQ & Troubleshooting

### ❌ Build fails: "Error initializing Google Sheets API"

**Przyczyna:** Brak lub błędne credentials w Vercel.

**Rozwiązanie:**
1. Sprawdź czy dodałeś `GOOGLE_SERVICE_ACCOUNT_JSON` w Vercel Settings
2. Upewnij się, że skopiowałeś **CAŁY** plik JSON (z nawiasami klamrowymi)
3. Zrób redeploy po dodaniu env vars

---

### ❌ Build succeeds ale dane są puste

**Przyczyna:** Google Sheet nie jest udostępniony lub ma błędną strukturę.

**Rozwiązanie:**
1. Sprawdź czy arkusz jest udostępniony dla: `kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com`
2. Sprawdź strukturę według `GOOGLE_SHEET_STRUCTURE.md`
3. Sprawdź nazwy zakładek (case-sensitive!): `Kim_Jesteśmy`, `Repertuar`, `Wydarzenia`, `Galeria`

---

### ❌ Deploy Hook nie działa

**Przyczyna:** Nieprawidłowy URL lub uprawnienia.

**Rozwiązanie:**
1. Skopiuj URL ponownie z Vercel Settings → Git → Deploy Hooks
2. Sprawdź czy URL zaczyna się od `https://api.vercel.com/v1/integrations/deploy/`
3. Spróbuj otworzyć URL w przeglądarce - powinieneś zobaczyć JSON response

---

### ❓ Jak cofnąć zmiany?

**Opcja 1: Przez Vercel Dashboard**
1. Deployments → znajdź poprzedni deployment
2. Kliknij **...** → **Promote to Production**

**Opcja 2: Przywróć backup lokalnie**
```bash
cp index.backup.html index.html
git add index.html
git commit -m "revert: Restore previous version"
git push
```

---

### ❓ Jak sprawdzić co pobrał build?

**W Vercel:**
1. Deployments → kliknij deployment
2. **Build Logs** → Zobacz output:
```
✓ Kim Jesteśmy: 3 członków
✓ Repertuar: 27 utworów
...
```

**Lokalnie:**
```bash
npm run build
```

---

## 📚 Pliki dokumentacji

Po skonfigurowaniu, zapoznaj się z:

- `README_CMS.md` - Przewodnik dla użytkownika końcowego (jak edytować Sheet)
- `GOOGLE_SHEET_STRUCTURE.md` - Wymagana struktura arkusza
- `GOOGLE_CLOUD_SETUP.md` - Setup Google Cloud (już zrobione!)

---

## ✅ Checklist końcowy

Przed uznaniem że wszystko działa, sprawdź:

- [ ] Environment variables dodane w Vercel (2 variables)
- [ ] Build command ustawiony: `npm run build`
- [ ] Deploy Hook utworzony i URL zapisany
- [ ] Testowy build przeszedł pomyślnie
- [ ] Strona wyświetla dane z Google Sheets
- [ ] Bookmark utworzony (lub cron-job skonfigurowany)
- [ ] Użytkownik wie jak edytować Sheet

---

**🎉 Gotowe! Teraz masz działający CMS oparty o Google Sheets!**

Użytkownik może edytować treści bez znajomości HTML/kodu, a Ty możesz w każdej chwili wrócić do normalnego developmentu przez git.
