# 📖 Przewodnik: Setup Google Sheets API dla Kompopolex

## ✅ Wymagania
- Konto Google (Gmail)
- 15 minut czasu
- Zero kosztów

---

## KROK 1: Utwórz Google Cloud Project

### 1.1 Otwórz Google Cloud Console
🔗 **Link:** https://console.cloud.google.com/

**Co zobaczysz:**
- Jeśli to pierwsze użycie: ekran powitalny "Welcome to Google Cloud"
- Jeśli masz już projekty: dashboard z listą projektów

---

### 1.2 Utwórz nowy projekt

**Gdzie kliknąć:**
1. U góry strony zobaczysz przycisk z nazwą aktualnego projektu (lub "Select a project")
2. **Kliknij** na ten przycisk
3. Otworzy się modalne okno "Select a project"
4. W prawym górnym rogu kliknij **"NEW PROJECT"**

**Ekran tworzenia projektu:**

```
┌─────────────────────────────────────┐
│ New Project                         │
├─────────────────────────────────────┤
│ Project name: *                     │
│ [kompopolex-cms              ]      │
│                                     │
│ Location:                           │
│ [ No organization           ▼]      │
│                                     │
│         [CANCEL]      [CREATE]      │
└─────────────────────────────────────┘
```

**Wypełnij:**
- **Project name:** `kompopolex-cms` (lub dowolna nazwa)
- **Location:** Zostaw "No organization"

**Kliknij:** `[CREATE]`

⏱️ **Czekaj:** ~30 sekund. Zobaczysz notyfikację "Creating project kompopolex-cms"

✅ **Gotowe!** Zostaniesz przekierowany do dashboard nowego projektu.

---

## KROK 2: Włącz Google Sheets API

### 2.1 Otwórz API Library

**Gdzie kliknąć:**
1. W lewym menu (☰ hamburger menu) znajdź sekcję **"APIs & Services"**
2. Rozwiń ją jeśli jest zwinięta
3. Kliknij na **"Library"**

**Lub bezpośredni link:**
🔗 https://console.cloud.google.com/apis/library

---

### 2.2 Znajdź i włącz Google Sheets API

**Co zobaczysz:**
- Pole wyszukiwania u góry
- Kafelki z popularnymi API

**Wyszukaj:**
1. W polu wyszukiwania wpisz: `sheets`
2. Zobaczysz kafelek **"Google Sheets API"** (ikona zielonego arkusza)
3. **Kliknij** na ten kafelek

**Na stronie API:**
```
Google Sheets API
━━━━━━━━━━━━━━━━━━━━
Google

Reads and writes Google Sheets.

          [ENABLE]          ← KLIKNIJ TO
```

**Kliknij:** niebieski przycisk `[ENABLE]`

⏱️ **Czekaj:** ~10 sekund. API zostanie włączone.

✅ **Gotowe!** Zostaniesz przekierowany do dashboard API.

---

## KROK 3: Utwórz Service Account

### 3.1 Otwórz Credentials

**Gdzie kliknąć:**
1. W lewym menu: **"APIs & Services"** → **"Credentials"**

**Lub bezpośredni link:**
🔗 https://console.cloud.google.com/apis/credentials

---

### 3.2 Utwórz Service Account

**Co zobaczysz:**
- Górny pasek z przyciskami "+ CREATE CREDENTIALS"

**Kliknij:**
1. `[+ CREATE CREDENTIALS]` (niebieski przycisk u góry)
2. Z rozwijanego menu wybierz: **"Service account"**

---

### 3.3 Wypełnij dane Service Account

**Krok 1/3 - Service account details:**

```
┌───────────────────────────────────────────────┐
│ Service account details (1/3)                 │
├───────────────────────────────────────────────┤
│ Service account name: *                       │
│ [kompopolex-sheets-reader            ]        │
│                                               │
│ Service account ID: *                         │
│ [kompopolex-sheets-reader            ]        │
│ (auto-generated)                              │
│                                               │
│ Service account description:                  │
│ [Read-only access to Sheets CMS      ]        │
│                                               │
│         [CANCEL]  [CREATE AND CONTINUE]       │
└───────────────────────────────────────────────┘
```

**Wypełnij:**
- **Service account name:** `kompopolex-sheets-reader`
- **Service account ID:** (wygeneruje się automatycznie)
- **Description:** `Read-only access to Sheets CMS`

**Kliknij:** `[CREATE AND CONTINUE]`

---

**Krok 2/3 - Grant this service account access to project:**

```
┌───────────────────────────────────────────────┐
│ Grant this service account access (2/3)       │
├───────────────────────────────────────────────┤
│ Select a role:                                │
│ [ Quick access              ▼]                │
│                                               │
│ ℹ️ Optional: This can be configured later     │
│                                               │
│         [CANCEL]      [CONTINUE]  [DONE]      │
└───────────────────────────────────────────────┘
```

**Pomiń ten krok!**
- Nie wybieraj żadnej roli
- **Kliknij:** `[CONTINUE]` (lub `[DONE]`)

---

**Krok 3/3 - Grant users access:**

```
┌───────────────────────────────────────────────┐
│ Grant users access to this service acct (3/3) │
├───────────────────────────────────────────────┤
│ ℹ️ Optional: Give users access permissions    │
│                                               │
│         [CANCEL]               [DONE]         │
└───────────────────────────────────────────────┘
```

**Pomiń też ten krok!**
- **Kliknij:** `[DONE]`

✅ **Gotowe!** Service Account został utworzony.

---

## KROK 4: Pobierz JSON Key (credentials)

### 4.1 Znajdź swój Service Account

**Co zobaczysz:**
- Lista "Service Accounts" z Twoim nowym kontem

```
Service Accounts for project "kompopolex-cms"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name                          Email
kompopolex-sheets-reader      kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com
```

**Kliknij:** na email service account (cała linia jest klikalna)

---

### 4.2 Utwórz i pobierz key

**Zobaczysz:**
- Szczegóły service account z tabami u góry

**Kliknij na tab:** `KEYS`

```
┌─────────────────────────────────────┐
│ DETAILS  PERMISSIONS  KEYS  METRICS │ ← Kliknij "KEYS"
├─────────────────────────────────────┤
│ No keys yet                         │
│                                     │
│         [ADD KEY ▼]                 │
└─────────────────────────────────────┘
```

**Utwórz key:**
1. **Kliknij:** `[ADD KEY]` dropdown
2. Wybierz: **"Create new key"**

**Modalne okno:**
```
┌─────────────────────────────────┐
│ Create private key              │
├─────────────────────────────────┤
│ Key type:                       │
│  ○ P12                          │
│  ● JSON           ← ZAZNACZ     │
│                                 │
│    [CANCEL]      [CREATE]       │
└─────────────────────────────────┘
```

**Wybierz:**
- ✅ **JSON** (powinno być domyślnie zaznaczone)

**Kliknij:** `[CREATE]`

---

### 4.3 Zapisz pobrany plik!

⬇️ **Automatycznie zostanie pobrany plik:**
```
kompopolex-cms-abc123def456.json
```

**⚠️ WAŻNE:**
- Ten plik to **SECRET CREDENTIALS** - NIE UDOSTĘPNIAJ GO NIKOMU!
- Zapisz go w bezpiecznym miejscu
- NIE COMMITUJ tego pliku do git!

📋 **Skopiuj email z tego pliku:**
Otwórz plik w edytorze i znajdź:
```json
{
  "client_email": "kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com",
  ...
}
```

**Skopiuj ten email** - będzie potrzebny w następnym kroku! ✂️

✅ **Gotowe!** Masz credentials do Google Sheets API.

---

## KROK 5: Utwórz Google Sheet

### 5.1 Utwórz nowy arkusz

🔗 **Przejdź do:** https://sheets.google.com

**Kliknij:**
- Duży kolorowy `[+]` (Blank spreadsheet)
- Lub: `Blank` w galerii szablonów

---

### 5.2 Nazwij arkusz

**U góry zobaczysz:** "Untitled spreadsheet"

**Kliknij na to** i zmień na:
```
Kompopolex CMS
```

---

### 5.3 Skopiuj ID arkusza

**Spójrz na URL w pasku adresu:**
```
https://docs.google.com/spreadsheets/d/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4/edit
                                      └──────────────────────────────────────┘
                                                  To jest SHEET ID
```

**Skopiuj ten ID!** Przykład:
```
1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4
```

📋 Zapisz go - będzie potrzebny później!

---

### 5.4 Udostępnij arkusz Service Account

**⚠️ KLUCZOWY KROK - bez tego nie będzie działać!**

**Kliknij:** zielony przycisk `[Share]` w prawym górnym rogu

**W oknie Share:**
```
┌─────────────────────────────────────────────┐
│ Share "Kompopolex CMS"                      │
├─────────────────────────────────────────────┤
│ Add people, groups, and calendar events:    │
│ [                                         ] │ ← Wklej email
│                                             │
│                      [Send]                 │
└─────────────────────────────────────────────┘
```

**Wklej email service account:**
```
kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com
```
(ten skopiowany z JSON pliku w kroku 4.3)

**Uprawnienia:**
- Upewnij się że jest ustawione na **"Viewer"** (ikona oka 👁️)
- **NIE** "Editor" - tylko do odczytu!

**Kliknij:** `[Send]`

**Jeśli pojawi się ostrzeżenie:**
```
"kompopolex-sheets-reader@... isn't a Google Account"
```

**Kliknij:** `[Share anyway]` - to normalne dla service accounts!

✅ **SUPER!** Arkusz jest udostępniony API!

---

## KROK 6: Struktura arkusza

Teraz utworzysz strukturę danych. W tym samym Google Sheet utwórz 4 zakładki (arkusze).

### 6.1 Utwórz zakładki

**U dołu zobaczysz:** zakładkę "Sheet1"

**Zmień nazwę:**
1. Kliknij prawym na "Sheet1" → Rename
2. Zmień na: `Kim_Jesteśmy`

**Dodaj kolejne zakładki:**
1. Kliknij `[+]` obok zakładki
2. Nazwij: `Repertuar`
3. Powtórz dla: `Wydarzenia`
4. Powtórz dla: `Galeria`

**Będziesz miał 4 zakładki:**
```
[Kim_Jesteśmy] [Repertuar] [Wydarzenia] [Galeria]
```

---

### 6.2 Wypełnij zakładkę "Kim_Jesteśmy"

**Kliknij na zakładkę:** `Kim_Jesteśmy`

**Nagłówki (rząd 1):**
```
| A             | B          | C                   | D                               |
|---------------|------------|---------------------|---------------------------------|
| Imię          | Instrument | Opis                | Zdjęcie_URL                     |
```

**Przykładowe dane (rząd 2):**
```
| Aleksandra Gołaj | perkusja | Wpisz tutaj opis | /assets/images/aleksandra.png |
```

**Przykładowe dane (rząd 3):**
```
| Rafał Łuc | akordeon | Wpisz tutaj opis | /assets/images/rafal.png |
```

**Przykładowe dane (rząd 4):**
```
| Jacek Sotomski | komputery | Wpisz tutaj opis | /assets/images/jacek.png |
```

💡 **Tip:** Opisy możesz skopiować z obecnego index.html!

---

### 6.3 Wypełnij zakładkę "Repertuar"

**Kliknij na zakładkę:** `Repertuar`

**Nagłówki (rząd 1):**
```
| A               | B                    | C    |
|-----------------|----------------------|------|
| Kompozytor      | Utwór                | Rok  |
```

**Przykładowe dane (rząd 2):**
```
| John Cage | Music of Changes | 1951 |
```

**Przykładowe dane (rząd 3):**
```
| Morton Feldman | Piano Piece | 1952 |
```

💡 **Tip:** Skopiuj wszystkie utwory z obecnej strony!

---

### 6.4 Wypełnij zakładkę "Wydarzenia"

**Kliknij na zakładkę:** `Wydarzenia`

**Nagłówki (rząd 1):**
```
| A          | B                | C          | D       |
|------------|------------------|------------|---------|
| Data       | Nazwa            | Lokalizacja| Godzina |
```

**Format daty:** `YYYY-MM-DD` (np. `2025-12-15`)

**Przykładowe dane (rząd 2):**
```
| 2025-12-15 | Koncert w Filharmonii | Warszawa | 19:00 |
```

**Przykładowe dane (rząd 3):**
```
| 2026-01-20 | Festiwal Muzyki Współczesnej | Kraków | 18:00 |
```

---

### 6.5 Wypełnij zakładkę "Galeria"

**Kliknij na zakładkę:** `Galeria`

**Nagłówki (rząd 1):**
```
| A                                  | B              |
|------------------------------------|----------------|
| Zdjęcie_URL                        | Opis           |
```

**Przykładowe dane (rząd 2):**
```
| /assets/images/koncert1.jpg | Koncert w Warszawie |
```

**Przykładowe dane (rząd 3):**
```
| /assets/images/koncert2.jpg | Występ w Krakowie |
```

---

## ✅ GOTOWE! Podsumowanie

Teraz masz:
- ✅ Google Cloud Project z włączonym Sheets API
- ✅ Service Account z JSON credentials
- ✅ Google Sheet ze strukturą danych
- ✅ Arkusz udostępniony service account

---

## 📋 Informacje do zapisania:

**Zapisz te dane - będą potrzebne do kodu:**

1. **GOOGLE_SHEET_ID:**
   ```
   1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4
   ```
   (Twój rzeczywisty ID)

2. **GOOGLE_SERVICE_ACCOUNT_JSON:**
   - Całą zawartość pliku `.json` pobranego w kroku 4

---

## 🔒 Bezpieczeństwo

**NIGDY NIE COMMITUJ DO GIT:**
- ❌ `*.json` z credentials
- ❌ Environment variables z kluczami

**W `.gitignore` dodamy:**
```
google-credentials.json
.env.local
```

---

## 🆘 Pomoc

Jeśli coś nie działa:
1. Sprawdź czy API jest enabled: https://console.cloud.google.com/apis/dashboard
2. Sprawdź czy arkusz jest udostępniony service account
3. Sprawdź czy service account email jest poprawny

---

**Gotowy? Powiedz mi jak poszło, a ja przygotuję kod! 🚀**
