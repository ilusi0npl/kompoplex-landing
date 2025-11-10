# 📝 Przewodnik: Jak edytować treści na stronie Kompopolex

## 👋 Witaj!

Ta strona używa **Google Sheets jako system zarządzania treścią** (CMS). To znaczy, że możesz edytować wszystkie treści na stronie używając zwykłego arkusza kalkulacyjnego Google - bez znajomości HTML czy programowania!

---

## 🎯 Co możesz edytować?

Możesz zmieniać 4 sekcje strony:

1. **Kim Jesteśmy** - członkowie zespołu (imiona, instrumenty, zdjęcia)
2. **Repertuar** - lista utworów muzycznych
3. **Nadchodzące Wydarzenia** - kalendarz koncertów
4. **Galeria** - zdjęcia zespołu

---

## 📂 Twój arkusz Google

🔗 **Link do arkusza:**
```
https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
```

**Arkusz ma 4 zakładki** (dolny pasek):
```
[Kim_Jesteśmy] [Repertuar] [Wydarzenia] [Galeria]
```

---

## ✏️ Jak edytować treści?

### KROK 1: Otwórz Google Sheet

Kliknij w link powyżej lub otwórz zakładkę z arkuszem w przeglądarce.

---

### KROK 2: Wybierz zakładkę do edycji

Kliknij na zakładkę u dołu arkusza (np. "Repertuar").

---

### KROK 3: Edytuj dane

**Reguły:**
- ❌ **NIE ZMIENIAJ** nagłówków (pierwszy rząd z tytułami kolumn)
- ❌ **NIE USUWAJ** kolumn
- ✅ **MOŻESZ** edytować komórki z danymi (od rzędu 2 w dół)
- ✅ **MOŻESZ** dodawać nowe rzędy
- ✅ **MOŻESZ** usuwać rzędy z danymi

---

### KROK 4: Zapisz zmiany

Google Sheets zapisuje automatycznie! Gdy zobaczysz "Wszystkie zmiany zapisane w Dysku" u góry - gotowe!

---

### KROK 5: Opublikuj na stronie

**Opcja A - Manualna (bookmark):**

1. Kliknij bookmark w przeglądarce: **"🔄 Opublikuj Kompopolex"**
2. Zobaczysz krótki komunikat lub puste okno - to OK!
3. Poczekaj **2-3 minuty**
4. Odśwież stronę kompopolex.pl

**Opcja B - Automatyczna (jeśli skonfigurowana):**

Nic nie musisz robić! Zmiany pojawią się na stronie w ciągu **5 minut** od zapisania.

---

## 📋 Instrukcje dla każdej sekcji

### 1️⃣ Zakładka: Kim_Jesteśmy

**Kolumny:**
```
| Imię           | Instrument | Opis | Zdjęcie_URL                   |
| Aleksandra ... | perkusja   | ...  | /assets/images/aleksandra.png |
```

**Jak edytować:**
- **Imię i Nazwisko**: Wpisz pełne imię i nazwisko
- **Instrument**: Wpisz małymi literami: `perkusja`, `akordeon`, lub `komputery`
- **Opis**: Obecnie nie wyświetlany (zarezerwowane na przyszłość)
- **Zdjęcie_URL**: Ścieżka do zdjęcia (np. `/assets/images/imie.png`)

**⚠️ Uwagi:**
- Instrumenty MUSZĄ być małymi literami: `perkusja` nie `Perkusja`
- Zdjęcia muszą być najpierw dodane do folderu `/assets/images/` przez developera

---

### 2️⃣ Zakładka: Repertuar

**Kolumny:**
```
| Kompozytor         | Utwór              | Rok     |
| John Cage          | Music of Changes   | 1951    |
```

**Jak edytować:**
- **Kompozytor**: Pełne imię, nazwisko (opcjonalnie daty urodzenia)
- **Utwór**: Tytuł utworu (możesz dodać ^ na końcu jeśli utwór był napisany specjalnie dla was)
- **Rok**: Rok lub przedział lat (np. `2014/15`)

**💡 Tips:**
- Możesz dodawać nowe utwory - po prostu wypełnij nowy rząd
- Możesz usuwać utwory - skasuj cały rząd
- Kolejność na stronie = kolejność w arkuszu

---

### 3️⃣ Zakładka: Wydarzenia

**Kolumny:**
```
| Data       | Nazwa                    | Lokalizacja        | Godzina |
| 2025-12-15 | Koncert Świąteczny       | Filharmonia, W-wa  | 19:00   |
```

**Jak edytować:**
- **Data**: Format **YYYY-MM-DD** (rok-miesiąc-dzień)
  - ✅ Dobrze: `2025-12-15`
  - ❌ Źle: `15-12-2025` lub `15.12.2025`
- **Nazwa**: Nazwa wydarzenia
- **Lokalizacja**: Miejsce (sala, miasto)
- **Godzina**: Godzina rozpoczęcia (np. `19:00`)

**⚠️ WAŻNE - Format daty:**

Jeśli wpiszesz datę niepoprawnie, wydarzenie może się nie wyświetlić!

**Przykłady poprawnych dat:**
```
2025-01-15  (15 stycznia 2025)
2025-12-25  (25 grudnia 2025)
2026-03-10  (10 marca 2026)
```

**Miesiące automatycznie zamienią się na polskie skróty:**
- 01 → STY, 02 → LUT, 03 → MAR, 04 → KWI
- 05 → MAJ, 06 → CZE, 07 → LIP, 08 → SIE
- 09 → WRZ, 10 → PAŹ, 11 → LIS, 12 → GRU

---

### 4️⃣ Zakładka: Galeria

**Kolumny:**
```
| Zdjęcie_URL                     | Opis                    |
| /assets/images/koncert1.jpg     | Koncert w Warszawie     |
```

**Jak edytować:**
- **Zdjęcie_URL**: Ścieżka do zdjęcia
- **Opis**: Krótki opis zdjęcia (wyświetla się jako "alt text")

**⚠️ Uwagi:**
- Zdjęcia muszą być najpierw dodane do folderu `/assets/images/` przez developera
- Kolejność zdjęć w galerii = kolejność w arkuszu

---

## ❓ Częste pytania

### 1. Jak dodać nowe zdjęcie członka zespołu lub do galerii?

**Odpowiedź:** Zdjęcia muszą być najpierw przesłane na serwer przez developera.

**Kroki:**
1. Wyślij zdjęcie developerowi
2. Developer doda je do `/assets/images/`
3. Dostaniesz ścieżkę (np. `/assets/images/nowe-zdjecie.jpg`)
4. Wklej tę ścieżkę do kolumny "Zdjęcie_URL"

---

### 2. Jak zmienić kolejność utworów w repertuarze?

**Odpowiedź:** Po prostu przeciągnij rząd w inne miejsce w arkuszu!

**Kroki:**
1. Kliknij na numer rzędu (po lewej stronie)
2. Przeciągnij rząd w górę lub w dół
3. Zapisz (automatycznie)
4. Opublikuj zmiany

---

### 3. Jak usunąć wydarzenie, które już się odbyło?

**Odpowiedź:** Po prostu usuń cały rząd z tym wydarzeniem.

**Kroki:**
1. Kliknij prawym na numer rzędu
2. Wybierz "Usuń rząd"
3. Opublikuj zmiany

---

### 4. Zrobiłem błąd! Jak cofnąć zmiany?

**Odpowiedź:** Google Sheets ma historię wersji!

**Kroki:**
1. **Plik** → **Historia wersji** → **Zobacz historię wersji**
2. Wybierz wcześniejszą wersję z listy (po prawej)
3. Kliknij **Przywróć tę wersję**

---

### 5. Jak sprawdzić czy zmiany są już na stronie?

**Odpowiedź:** Otwórz stronę w przeglądarce i odśwież (Ctrl+Shift+R lub Cmd+Shift+R).

Jeśli zmian nie widać:
1. Sprawdź czy minęły 2-3 minuty od kliknięcia "Opublikuj"
2. Spróbuj odświeżyć stronę z czyszczeniem cache (Ctrl+Shift+R)
3. Otwórz stronę w trybie incognito

---

### 6. Co jeśli coś się zepsuło?

**Odpowiedź:** Napisz do developera lub:

1. Sprawdź czy nie usunąłeś przypadkowo nagłówków (rząd 1)
2. Sprawdź format dat w "Wydarzenia" (YYYY-MM-DD)
3. Sprawdź nazwy instrumentów (małe litery: perkusja, akordeon, komputery)
4. Przywróć poprzednią wersję przez historię wersji

---

## 🎯 Quick Reference - Co i gdzie zmienić?

| Chcę zmienić...                  | Zakładka         | Co edytować              |
|----------------------------------|------------------|--------------------------|
| Nazwisko muzyka                  | Kim_Jesteśmy     | Kolumna "Imię"           |
| Instrument muzyka                | Kim_Jesteśmy     | Kolumna "Instrument"     |
| Dodać/usunąć utwór              | Repertuar        | Dodaj/usuń rząd          |
| Zmienić datę koncertu           | Wydarzenia       | Kolumna "Data"           |
| Dodać nowy koncert              | Wydarzenia       | Dodaj nowy rząd          |
| Usunąć stary koncert            | Wydarzenia       | Usuń rząd                |
| Zmienić kolejność zdjęć         | Galeria          | Przeciągnij rzędy        |

---

## ✅ Checklist przed publikacją

Przed kliknięciem "Opublikuj" sprawdź:

- [ ] Czy wszystkie daty są w formacie YYYY-MM-DD?
- [ ] Czy instrumenty są małymi literami?
- [ ] Czy nie usunąłeś nagłówków (rząd 1)?
- [ ] Czy Google Sheets pokazuje "Wszystkie zmiany zapisane"?

**Jeśli wszystko OK → Kliknij bookmark "Opublikuj" i poczekaj 2-3 minuty!**

---

## 🆘 Pomoc

**Jeśli coś nie działa:**
1. Przeczytaj sekcję "Częste pytania" powyżej
2. Sprawdź `GOOGLE_SHEET_STRUCTURE.md` dla szczegółów technicznych
3. Napisz do developera

**Kontakt do developera:**
[Tutaj wstaw swój kontakt lub sposób na zgłaszanie problemów]

---

**🎉 To wszystko! Teraz możesz samodzielnie zarządzać treściami na stronie!**

Pamiętaj:
1. ✏️ Edytujesz w Google Sheet
2. 💾 Zapisujesz (automatycznie)
3. 🔄 Publikujesz (bookmark lub auto)
4. ⏱️ Czekasz 2-3 minuty
5. ✅ Zmiany są live!
