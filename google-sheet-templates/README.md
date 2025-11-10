# 📋 Szablony danych dla Google Sheet

Ten folder zawiera pliki CSV z przykładowymi danymi, które możesz skopiować i wkleić do swojego Google Sheet.

---

## 🚀 Jak użyć?

### Metoda 1: Import CSV bezpośrednio do Google Sheet

1. Otwórz Google Sheet: https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
2. Utwórz nową zakładkę (jeśli nie istnieje) z odpowiednią nazwą (np. `O_Nas`)
3. Kliknij **Plik** → **Import**
4. Wybierz plik CSV z tego folderu
5. Wybierz **"Wstaw nowe arkusze"** lub **"Zastąp dane w bieżącym arkuszu"**
6. Kliknij **Importuj dane**

---

### Metoda 2: Kopiuj i wklej ręcznie

1. Otwórz plik CSV w edytorze tekstu (VS Code, Notepad++, etc.)
2. Zaznacz wszystkie dane (Ctrl+A)
3. Skopiuj (Ctrl+C)
4. Otwórz Google Sheet
5. Kliknij na komórkę A1 w odpowiedniej zakładce
6. Wklej (Ctrl+V)

**Google Sheet automatycznie rozpozna format CSV i rozdzieli dane na kolumny.**

---

## 📂 Dostępne szablony

### 1. `O_Nas.csv`

**Zakładka:** `O_Nas`

**Struktura:**
```
| Akapit_1                                      | Akapit_2                                      |
|-----------------------------------------------|-----------------------------------------------|
| Ensemble Kompopolex to zespół muzyki...      | Specjalizujemy się w wykonawstwie...         |
```

**Uwagi:**
- Tylko 1 rząd danych (rząd 2)
- 2 kolumny z akapitami opisu zespołu

---

### 2. `Kim_Jestesmy.csv` (TODO)

**Zakładka:** `Kim_Jesteśmy`

**Struktura:**
```
| Imię           | Instrument | Opis | Zdjęcie_URL                   |
|----------------|------------|------|-------------------------------|
| Aleksandra ... | perkusja   | ...  | /assets/images/aleksandra.png |
```

---

### 3. `Repertuar.csv` (TODO)

**Zakładka:** `Repertuar`

**Struktura:**
```
| Kompozytor    | Utwór              | Rok  |
|---------------|--------------------|------|
| John Cage     | Music of Changes   | 1951 |
```

---

### 4. `Wydarzenia.csv` (TODO)

**Zakładka:** `Wydarzenia`

**Struktura:**
```
| Data       | Nazwa                    | Lokalizacja        | Godzina |
|------------|--------------------------|--------------------|---------|
| 2025-12-15 | Koncert Świąteczny       | Filharmonia, W-wa  | 19:00   |
```

---

### 5. `Galeria.csv` (TODO)

**Zakładka:** `Galeria`

**Struktura:**
```
| Zdjęcie_URL                     | Opis                    |
|---------------------------------|-------------------------|
| /assets/images/koncert1.jpg     | Koncert w Warszawie     |
```

---

## ✅ Po zaimportowaniu

1. Sprawdź czy nazwy kolumn (rząd 1) są poprawne
2. Sprawdź czy dane są w odpowiednich kolumnach
3. Edytuj dane według potrzeb
4. Kliknij **🎵 Kompopolex** → **🚀 Opublikuj zmiany**
5. Poczekaj 2-3 minuty
6. Odśwież stronę - zmiany są live!

---

## 🐛 Troubleshooting

### Problem: CSV importuje się jako jedna kolumna

**Rozwiązanie:**
- Google Sheet może nie rozpoznać separatora (przecinka)
- Podczas importu wybierz **"Separator: przecinek"**
- Lub użyj **"Wykryj automatycznie"**

---

### Problem: Polskie znaki wyświetlają się niepoprawnie (ą, ę, etc.)

**Rozwiązanie:**
- Plik CSV musi mieć kodowanie **UTF-8**
- Podczas importu wybierz **"UTF-8"** jako encoding
- Lub skopiuj i wklej ręcznie (Metoda 2)

---

**Pytania?** Zobacz `GOOGLE_SHEET_STRUCTURE.md` lub `README_CMS.md`
