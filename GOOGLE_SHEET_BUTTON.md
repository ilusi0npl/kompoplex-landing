# 🚀 Jak dodać przycisk "Opublikuj" w Google Sheet

## 📋 Krok po kroku

### 1. Otwórz Google Sheet
```
https://docs.google.com/spreadsheets/d/1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8/edit
```

---

### 2. Otwórz edytor Apps Script

**Kliknij:**
```
Rozszerzenia → Apps Script
```

**Lub:**
```
Extensions → Apps Script
```

**📸 Znajdziesz to w górnym menu arkusza.**

---

### 3. Usuń domyślny kod

W edytorze zobaczysz:
```javascript
function myFunction() {

}
```

**Zaznacz cały ten kod i usuń go (Ctrl+A, Delete)**

---

### 4. Wklej nowy kod

**Otwórz plik w repozytorium:**
```
google-apps-script.js
```

**Skopiuj CAŁY kod** (Ctrl+A, Ctrl+C)

**Wklej do edytora Apps Script** (Ctrl+V)

---

### 5. Zapisz projekt

**Kliknij ikonę dyskietki** u góry lub naciśnij `Ctrl+S`

**Nazwa projektu (opcjonalnie):**
```
Kompopolex Publisher
```

---

### 6. Zamknij edytor i odśwież arkusz

**Zamknij kartę** z Apps Script edytorem

**Wróć do Google Sheet**

**Odśwież stronę** (F5 lub Ctrl+R)

---

### 7. Zezwól na uprawnienia (TYLKO PIERWSZY RAZ)

Po odświeżeniu zobaczysz **nowe menu u góry arkusza:**

```
🎵 Kompopolex
```

**Kliknij na to menu**, a następnie kliknij:
```
🚀 Opublikuj zmiany
```

**Google zapyta o uprawnienia:**

1. Kliknij **"Przeglądaj uprawnienia"** lub **"Review permissions"**
2. Wybierz swoje konto Google
3. Google pokaże ostrzeżenie **"Aplikacja niezweryfikowana"**
   - Kliknij **"Zaawansowane"** lub **"Advanced"**
   - Kliknij **"Przejdź do Kompopolex Publisher (unsafe)"**
4. Kliknij **"Zezwól"** lub **"Allow"**

**⚠️ To normalne!** Google pokazuje to dla wszystkich niestandardowych skryptów. Twój skrypt jest bezpieczny.

---

### 8. Gotowe! 🎉

Teraz w Google Sheet u góry zobaczysz nowe menu:

```
🎵 Kompopolex
```

**W menu znajdziesz:**
- 🚀 **Opublikuj zmiany** ← GŁÓWNA FUNKCJA
- 📊 Status ostatniego deployment
- ℹ️ Pomoc

---

## 🎯 Jak używać?

### Workflow:

1. ✏️ **Edytujesz** dane w Google Sheet
2. 💾 **Zapisujesz** (automatycznie)
3. 🎵 **Klikasz** menu "🎵 Kompopolex"
4. 🚀 **Wybierasz** "Opublikuj zmiany"
5. ✅ **Potwierdzasz** w dialogu
6. ⏳ **Czekasz** 2-3 minuty
7. 🌐 **Odświeżasz** stronę https://kompoplex-landing.vercel.app
8. 🎉 **Zmiany są live!**

---

## 📸 Jak to wygląda?

### Przed kliknięciem:
```
[File] [Edit] [View] [Insert] [Format] [Data] [Tools] [Extensions] [🎵 Kompopolex] [Help]
                                                                      ▲
                                                                   NOWE MENU!
```

### Po kliknięciu:
```
┌─────────────────────────────────┐
│ 🎵 Kompopolex                   │
├─────────────────────────────────┤
│ 🚀 Opublikuj zmiany             │
│ ───────────────────────         │
│ 📊 Status ostatniego deployment │
│ ℹ️ Pomoc                        │
└─────────────────────────────────┘
```

---

## 🔔 Komunikaty

### Po kliknięciu "Opublikuj zmiany":

**1. Dialog potwierdzenia:**
```
┌──────────────────────────────────────┐
│ 🚀 Opublikować zmiany?               │
│                                      │
│ Czy na pewno chcesz opublikować      │
│ aktualne dane na stronie?            │
│                                      │
│ Zmiany będą widoczne za 2-3 minuty.  │
│                                      │
│            [TAK]  [NIE]              │
└──────────────────────────────────────┘
```

**2. Toast notification (dolny prawy róg):**
```
⏳ Publikowanie
Wysyłanie żądania do Vercel...
```

**3. Dialog sukcesu:**
```
┌─────────────────────────────────────────┐
│ ✅ Sukces!                              │
│                                         │
│ Deployment rozpoczęty!                  │
│                                         │
│ 📋 Job ID: dpl_ABC123XYZ                │
│ 📊 Status: PENDING                      │
│                                         │
│ ⏱️ Poczekaj 2-3 minuty, a następnie    │
│ odśwież stronę:                         │
│ https://kompoplex-landing.vercel.app    │
│                                         │
│ 📊 Śledź postęp:                        │
│ https://vercel.com/.../deployments      │
│                                         │
│                [OK]                     │
└─────────────────────────────────────────┘
```

**4. Toast notification (po sukcesie):**
```
✅ Opublikowano
Deployment rozpoczęty! Zmiany będą live za 2-3 minuty.
```

---

## ⚙️ Co robi skrypt?

### Funkcja `publishChanges()`:

1. **Pokazuje dialog potwierdzenia** - "Czy na pewno?"
2. **Wywołuje Vercel Deploy Hook** - POST request do API
3. **Czeka na odpowiedź** - Otrzymuje Job ID i Status
4. **Pokazuje komunikat sukcesu** - lub błędu jeśli coś poszło nie tak
5. **Wyświetla toast notification** - mały komunikat w rogu ekranu

### Bezpieczeństwo:

- ✅ Skrypt **TYLKO ODCZYTUJE** dane z arkusza (nie modyfikuje!)
- ✅ Skrypt **TYLKO WYWOŁUJE** Vercel Deploy Hook (nic więcej!)
- ✅ Deploy Hook URL jest publiczny (ale można go zregenerować w Vercel)
- ✅ Nie wysyła danych nigdzie indziej

---

## 🐛 Troubleshooting

### Problem: Nie widzę menu "🎵 Kompopolex"

**Rozwiązanie:**
1. Sprawdź czy zapisałeś skrypt (Ctrl+S)
2. Odśwież arkusz (F5)
3. Poczekaj 10 sekund i odśwież ponownie
4. Sprawdź czy jesteś w poprawnym arkuszu

---

### Problem: Menu jest, ale "Opublikuj zmiany" nic nie robi

**Rozwiązanie:**
1. Kliknij "Rozszerzenia" → "Apps Script"
2. Otwórz "Wykonania" (Executions) w lewym menu
3. Sprawdź czy są błędy
4. Jeśli tak - skopiuj błąd i napisz do developera

---

### Problem: Google mówi "Aplikacja niezweryfikowana"

**Rozwiązanie:**
To normalne! Google pokazuje to dla WSZYSTKICH niestandardowych skryptów.

**Bezpiecznie pomiń to:**
1. Kliknij **"Zaawansowane"** (Advanced)
2. Kliknij **"Przejdź do Kompopolex Publisher (unsafe)"**
3. Kliknij **"Zezwól"** (Allow)

Twój skrypt jest bezpieczny - to Twój własny kod!

---

### Problem: "Exception: Request failed... status code 404"

**Rozwiązanie:**
Deploy Hook URL jest niepoprawny lub wygasł.

**Kroki:**
1. Sprawdź Deploy Hook w Vercel Settings → Git → Deploy Hooks
2. Jeśli nie istnieje - utwórz nowy
3. Zaktualizuj `DEPLOY_HOOK_URL` w skrypcie (linia 11)
4. Zapisz i odśwież arkusz

---

### Problem: "Deployment rozpoczęty" ale strona nie zmienia się

**Rozwiązanie:**
1. Poczekaj pełne **3 minuty** (nie mniej!)
2. Wyczyść cache przeglądarki: **Ctrl+Shift+R**
3. Sprawdź Vercel Dashboard - czy build się wykonał?
4. Sprawdź build logs - czy pobrał nowe dane?
5. Jeśli build failed - sprawdź env vars w Vercel

---

## 🔄 Aktualizacja skryptu

**Jeśli developer zaktualizuje skrypt:**

1. Otwórz "Rozszerzenia" → "Apps Script"
2. Zaznacz cały stary kod (Ctrl+A)
3. Usuń (Delete)
4. Wklej nowy kod z `google-apps-script.js`
5. Zapisz (Ctrl+S)
6. Zamknij edytor
7. Odśwież arkusz

**Gotowe!** Nowa wersja działa.

---

## 📊 Dodatkowe opcje menu

### "📊 Status ostatniego deployment"

**Co robi:**
Pokazuje linki do Vercel Dashboard i strony.

**Kiedy używać:**
Gdy chcesz sprawdzić czy deployment się wykonał.

---

### "ℹ️ Pomoc"

**Co robi:**
Pokazuje krótką instrukcję użytkowania.

**Kiedy używać:**
Gdy zapomniałeś jak to działa lub chcesz szybki przypomnieć.

---

## 🧪 Test funkcji

**Jeśli chcesz przetestować czy skrypt działa:**

1. Otwórz "Rozszerzenia" → "Apps Script"
2. Znajdź funkcję `testDeployHook()` w kodzie
3. Wybierz ją z dropdown u góry (obok "Run")
4. Kliknij "Run" (▶️)
5. Sprawdź wynik w "Execution log" na dole

**Jeśli widzisz:**
- `Response Code: 200` lub `201` - ✅ Działa!
- `Response Code: 404` - ❌ Deploy Hook nieważny
- `Response Code: 500` - ❌ Problem z Vercel

---

## ✅ Checklist instalacji

Przed pierwszym użyciem sprawdź:

- [ ] Skopiowałeś cały kod z `google-apps-script.js`
- [ ] Wkleiłeś do Apps Script edytora
- [ ] Zapisałeś projekt (Ctrl+S)
- [ ] Zamknąłeś edytor i odświeżyłeś arkusz
- [ ] Widzisz menu "🎵 Kompopolex" u góry
- [ ] Kliknąłeś "Opublikuj zmiany" pierwszy raz
- [ ] Zezwoliłeś na uprawnienia (gdy Google zapytał)
- [ ] Przetestowałeś czy deployment się uruchamia

**Jeśli wszystko OK - gotowe!** 🎉

---

## 🆘 Pomoc

**Problemy techniczne:**
- Zobacz `README_CMS.md`
- Sprawdź `VERCEL_DEPLOYMENT.md`
- Napisz do developera

**Pytania o użytkowanie:**
- Kliknij "ℹ️ Pomoc" w menu arkusza
- Zobacz FAQ w `README_CMS.md`

---

**🎵 Ensemble Kompopolex - Proste publikowanie zmian, jeden klik!**
