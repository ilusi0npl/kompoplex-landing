# ➕ Jak dodać zakładkę "O_Nas" do Google Sheet

## 📋 Krok po kroku

### 1. Otwórz Google Sheet
```
https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
```

---

### 2. Dodaj nową zakładkę

**Kliknij** na **"+"** (plus) u dołu arkusza, obok istniejących zakładek.

Lub:

**Kliknij prawym przyciskiem** na istniejącą zakładkę → **"Wstaw nowy arkusz"**

---

### 3. Zmień nazwę zakładki

**Kliknij prawym przyciskiem** na nowo utworzoną zakładkę → **"Zmień nazwę"**

**Wpisz DOKŁADNIE:**
```
O_Nas
```

**⚠️ WAŻNE:**
- Nazwa MUSI być `O_Nas` (z podkreślnikiem!)
- NIE `O Nas` (spacja) - NIE ZADZIAŁA!
- NIE `o_nas` (małe litery) - NIE ZADZIAŁA!
- Dokładnie: `O` (duże), `_` (podkreślnik), `Nas` (duże N)

---

### 4. Przenieś zakładkę na pierwsze miejsce

**Kliknij i przeciągnij** zakładkę `O_Nas` na **pierwsze miejsce** (najbardziej na lewo).

**Kolejność powinna być:**
```
[O_Nas] [Kim_Jesteśmy] [Repertuar] [Wydarzenia] [Galeria]
```

---

### 5. Dodaj nagłówki (rząd 1)

W zakładce `O_Nas`, **w rzędzie 1** wpisz nagłówki:

| A        | B        |
|----------|----------|
| Akapit_1 | Akapit_2 |

**Kliknij na komórkę A1** i wpisz: `Akapit_1`

**Kliknij na komórkę B1** i wpisz: `Akapit_2`

---

### 6. Dodaj dane (rząd 2)

**W rzędzie 2** wklej 2 akapity z opisem zespołu:

#### Sposób A - Skopiuj z pliku CSV:

1. Otwórz plik: `google-sheet-templates/O_Nas.csv`
2. Skopiuj rząd 2 (z danymi, bez nagłówków)
3. Wklej do Google Sheet w komórce A2

#### Sposób B - Wklej ręcznie:

**Komórka A2** (Akapit_1):
```
Ensemble Kompopolex to zespół muzyki współczesnej i kameralnej. W jego skład wchodzą Aleksandra Gołaj (perkusja), Rafał Łuc (akordeon) i Jacek Sotomski (komputery).
```

**Komórka B2** (Akapit_2):
```
Specjalizujemy się w wykonawstwie współczesnych kompozycji, często w premierowych wykonaniach utworów polskich i zagranicznych kompozytorów. Nasz repertuar obejmuje utwory na różnorodne składy instrumentalne, z naciskiem na eksperymentalne podejście do dźwięku i formy.
```

---

### 7. Sprawdź

Twoja zakładka `O_Nas` powinna wyglądać tak:

```
┌────────────────────────────────────────────────┬────────────────────────────────────────────────┐
│ Akapit_1                                       │ Akapit_2                                       │ ← RZĄD 1
├────────────────────────────────────────────────┼────────────────────────────────────────────────┤
│ Ensemble Kompopolex to zespół muzyki...        │ Specjalizujemy się w wykonawstwie...           │ ← RZĄD 2
└────────────────────────────────────────────────┴────────────────────────────────────────────────┘
```

**⚠️ TYLKO 2 RZĘDY:**
- Rząd 1: Nagłówki (`Akapit_1`, `Akapit_2`)
- Rząd 2: Dane (2 akapity tekstu)

**Nie dodawaj rzędu 3, 4, itd.** - tylko pierwszy rząd danych będzie użyty.

---

### 8. Zapisz

Google Sheet zapisuje automatycznie. Poczekaj aż zobaczysz:
```
"Wszystkie zmiany zapisane w Dysku"
```

---

### 9. Opublikuj

**Kliknij menu:** `🎵 Kompopolex` → `🚀 Opublikuj zmiany`

**Poczekaj 2-3 minuty**

**Odśwież stronę:** https://kompoplex-landing.vercel.app

**Gotowe!** Nowe akapity są teraz widoczne w sekcji "Kim Jesteśmy"! 🎉

---

## ✅ Checklist

Przed opublikowaniem sprawdź:

- [ ] Nazwa zakładki to dokładnie `O_Nas` (z podkreślnikiem, duże O, duże N)
- [ ] Zakładka jest na pierwszym miejscu (najbardziej na lewo)
- [ ] Rząd 1 ma nagłówki: `Akapit_1`, `Akapit_2`
- [ ] Rząd 2 ma 2 akapity tekstu
- [ ] Nie ma rzędu 3 (tylko 2 rzędy: nagłówki + dane)
- [ ] Google Sheet pokazuje "Wszystkie zmiany zapisane"

---

## 🐛 Troubleshooting

### Problem: Build fails z błędem "Unable to parse range: O_Nas!A2:B2"

**Przyczyna:**
Zakładka `O_Nas` nie istnieje lub ma niepoprawną nazwę.

**Rozwiązanie:**
1. Sprawdź czy zakładka nazywa się DOKŁADNIE `O_Nas` (z podkreślnikiem)
2. Sprawdź czy nazwa ma duże litery: `O` i `N`
3. Spróbuj usunąć zakładkę i utworzyć ją od nowa

---

### Problem: Akapity nie wyświetlają się na stronie

**Przyczyna:**
Dane są w złym miejscu lub build się nie wykonał.

**Rozwiązanie:**
1. Sprawdź czy dane są w rzędzie 2 (nie 3, nie 4)
2. Sprawdź czy nagłówki są w rzędzie 1
3. Kliknij "Opublikuj zmiany" ponownie
4. Poczekaj pełne 3 minuty
5. Wyczyść cache przeglądarki (Ctrl+Shift+R)

---

### Problem: Widzę tylko "<!-- Brak danych O Nas -->" w kodzie źródłowym

**Przyczyna:**
Build pobrał pustą zakładkę lub zakładka nie istnieje.

**Rozwiązanie:**
1. Sprawdź czy rząd 2 ma dane (nie pusty)
2. Sprawdź czy komórki A2 i B2 zawierają tekst
3. Kliknij "Opublikuj zmiany" ponownie

---

## 📄 Gotowy szablon

Jeśli chcesz szybko wypełnić zakładkę gotowymi danymi:

### Metoda: Import CSV

1. Otwórz plik: `google-sheet-templates/O_Nas.csv`
2. Kliknij **Plik** → **Import** w Google Sheet
3. Wybierz plik `O_Nas.csv`
4. Wybierz **"Zastąp bieżący arkusz"**
5. Kliknij **Importuj dane**
6. Gotowe! Nagłówki i dane są już wstawione.

---

**🎉 To wszystko! Teraz możesz edytować opis zespołu bezpośrednio w Google Sheet!**

**Pytania?** Zobacz `README_CMS.md` sekcja "1️⃣ Zakładka: O_Nas"
