# 📊 Struktura Google Sheet dla Kompopolex CMS

## ✅ Wymagana struktura arkusza

Twój Google Sheet musi mieć **4 zakładki** (tabs) o dokładnie takich nazwach:

1. `Kim_Jesteśmy`
2. `Repertuar`
3. `Wydarzenia`
4. `Galeria`

---

## 1️⃣ Zakładka: `Kim_Jesteśmy`

**Nagłówki (rząd 1):**
```
| A      | B          | C    | D            |
|--------|------------|------|--------------|
| Imię   | Instrument | Opis | Zdjęcie_URL  |
```

**Przykładowe dane (rząd 2+):**
```
| Aleksandra Gołaj | perkusja  | Opis... | /assets/images/aleksandra.png |
| Rafał Łuc        | akordeon  | Opis... | /assets/images/rafal.png      |
| Jacek Sotomski   | komputery | Opis... | /assets/images/jacek.png      |
```

**Uwagi:**
- Kolumna **Imię**: Imię i nazwisko (może być z spacją)
- Kolumna **Instrument**: Dokładnie: `perkusja`, `akordeon`, lub `komputery` (małe litery!)
- Kolumna **Opis**: Opcjonalna (obecnie nie używana w HTML, ale zarezerwowana na przyszłość)
- Kolumna **Zdjęcie_URL**: Ścieżka do zdjęcia (np. `/assets/images/imie.png`)

---

## 2️⃣ Zakładka: `Repertuar`

**Nagłówki (rząd 1):**
```
| A          | B      | C   |
|------------|--------|-----|
| Kompozytor | Utwór  | Rok |
```

**Przykładowe dane (rząd 2+):**
```
| John Cage          | Music of Changes         | 1951    |
| Carola Bauckholt   | Geräusche               | 1992    |
| Piotr Bednarczyk   | triggered ^             | 2020    |
| Jorge Sanchez-Chiong | Salt Water            | 2014/15 |
```

**Uwagi:**
- Kolumna **Kompozytor**: Pełne imię i nazwisko kompozytora (może zawierać daty urodzenia w nawiasach)
- Kolumna **Utwór**: Tytuł utworu (może zawierać ^ dla oznaczenia "written for us")
- Kolumna **Rok**: Rok lub przedział lat (np. `2014/15`, `1951`)

---

## 3️⃣ Zakładka: `Wydarzenia`

**Nagłówki (rząd 1):**
```
| A     | B     | C          | D       |
|-------|-------|------------|---------|
| Data  | Nazwa | Lokalizacja| Godzina |
```

**Format daty:** `YYYY-MM-DD` (np. `2025-12-15`)

**Przykładowe dane (rząd 2+):**
```
| 2025-12-15 | Koncert Świąteczny          | Filharmonia Narodowa, Warszawa | 19:00 |
| 2025-12-22 | Wieczór Jazzowy             | Blue Note Jazz Club, Poznań    | 20:00 |
| 2026-01-10 | Festiwal Muzyki Współczesnej | Kraków, CSW                   | 18:30 |
```

**Uwagi:**
- Kolumna **Data**: Format **YYYY-MM-DD** (WAŻNE! Nie DD-MM-YYYY!)
  - Przykłady poprawne: `2025-12-15`, `2026-01-10`
  - Przykłady niepoprawne: `15-12-2025`, `15.12.2025`
- Kolumna **Nazwa**: Nazwa wydarzenia
- Kolumna **Lokalizacja**: Miejsce wydarzenia (miasto, sala)
- Kolumna **Godzina**: Godzina rozpoczęcia (np. `19:00`)

**Konwersja miesięcy:**
System automatycznie zamieni miesiące na polskie skróty:
- `01` → STY, `02` → LUT, `03` → MAR, `04` → KWI
- `05` → MAJ, `06` → CZE, `07` → LIP, `08` → SIE
- `09` → WRZ, `10` → PAŹ, `11` → LIS, `12` → GRU

---

## 4️⃣ Zakładka: `Galeria`

**Nagłówki (rząd 1):**
```
| A            | B     |
|--------------|-------|
| Zdjęcie_URL  | Opis  |
```

**Przykładowe dane (rząd 2+):**
```
| /assets/images/kompopolex-og.jpg                                      | Ensemble Kompopolex - zdjęcie zespołu |
| /assets/images/308156979_1810738999286985_843370628643729199_n.jpg   | Koncert w Warszawie                   |
| /assets/images/482021337_1212677594198729_7223523797011891504_n.jpg  | Występ w Filharmonii                  |
```

**Uwagi:**
- Kolumna **Zdjęcie_URL**: Pełna ścieżka do zdjęcia
- Kolumna **Opis**: Alt text dla zdjęcia (SEO, accessibility)
- System automatycznie alternuje klasy CSS dla różnorodności layoutu (tall, wide)

---

## 🔍 Jak sprawdzić czy struktura jest poprawna?

### Checklist przed uruchomieniem buildu:

1. ☐ **4 zakładki** o dokładnie takich nazwach (case-sensitive!):
   - `Kim_Jesteśmy` (z podkreślnikiem!)
   - `Repertuar`
   - `Wydarzenia`
   - `Galeria`

2. ☐ **Nagłówki w rzędzie 1** każdej zakładki

3. ☐ **Dane zaczynają się od rzędu 2**

4. ☐ **Format dat w "Wydarzenia"**: `YYYY-MM-DD`

5. ☐ **Instrumenty w "Kim_Jesteśmy"**: małe litery (`perkusja`, `akordeon`, `komputery`)

6. ☐ **Arkusz udostępniony** service account: `kompopolex-sheets-reader@kompopolex-cms.iam.gserviceaccount.com`

---

## 🚨 Częste błędy

### ❌ Błąd 1: Niepoprawne nazwy zakładek
```
❌ Kim Jesteśmy (spacja zamiast podkreślnika)
✅ Kim_Jesteśmy
```

### ❌ Błąd 2: Niepoprawny format daty
```
❌ 15-12-2025
❌ 15.12.2025
✅ 2025-12-15
```

### ❌ Błąd 3: Brak nagłówków
```
❌ Dane zaczynają się od rzędu 1
✅ Rząd 1: nagłówki, Rząd 2+: dane
```

### ❌ Błąd 4: Niepoprawne nazwy instrumentów
```
❌ Perkusja (duża litera)
❌ percussion (po angielsku)
✅ perkusja (małe litery, po polsku)
```

---

## 📝 Przykładowy Screenshot struktury

```
Zakładki u dołu arkusza:
┌──────────────┬──────────┬──────────┬─────────┐
│ Kim_Jesteśmy │ Repertuar│ Wydarzenia│ Galeria │
└──────────────┴──────────┴──────────┴─────────┘

Widok zakładki "Kim_Jesteśmy":
┌────────────────┬────────────┬─────────┬───────────────────────────────┐
│ Imię           │ Instrument │ Opis    │ Zdjęcie_URL                   │ ← RZĄD 1
├────────────────┼────────────┼─────────┼───────────────────────────────┤
│ Aleksandra ... │ perkusja   │ ...     │ /assets/images/aleksandra.png │ ← RZĄD 2
│ Rafał Łuc      │ akordeon   │ ...     │ /assets/images/rafal.png      │ ← RZĄD 3
│ Jacek Sotomski │ komputery  │ ...     │ /assets/images/jacek.png      │ ← RZĄD 4
└────────────────┴────────────┴─────────┴───────────────────────────────┘
```

---

## ✅ Gotowe!

Gdy Twój arkusz ma tę strukturę, możesz uruchomić build:
```bash
npm run build
```

Lub testowo:
```bash
node scripts/build-from-sheets.js
```

---

**Pytania?** Sprawdź sekcję "Częste błędy" powyżej lub uruchom build - skrypt powie Ci dokładnie ile danych pobrał z każdej zakładki!
