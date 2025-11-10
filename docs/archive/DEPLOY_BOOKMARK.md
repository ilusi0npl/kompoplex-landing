# 🔄 Jak utworzyć bookmark do publikacji zmian

## Twój Deploy Hook URL:
```
https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
```

---

## 📌 Instrukcja tworzenia bookmark

### Google Chrome / Edge / Brave:

1. **Kliknij prawym przyciskiem** na pasku zakładek (pod paskiem adresu)
2. Wybierz **"Dodaj zakładkę"** lub **"Add bookmark"**
3. Wypełnij:
   ```
   Nazwa: 🔄 Opublikuj Kompopolex
   URL: https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
   ```
4. Kliknij **"Zapisz"**

**Alternatywnie:**
- Naciśnij `Ctrl+D` (Windows/Linux) lub `Cmd+D` (Mac)
- Zmień nazwę i URL jak powyżej
- Zapisz

---

### Firefox:

1. **Kliknij prawym przyciskiem** na pasku zakładek
2. Wybierz **"Nowa zakładka"**
3. Wypełnij:
   ```
   Nazwa: 🔄 Opublikuj Kompopolex
   Adres: https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
   ```
4. Kliknij **"Dodaj"**

---

### Safari (Mac):

1. Otwórz **Zakładki** → **Edytuj zakładki**
2. Kliknij **"+"** w lewym dolnym rogu
3. Wypełnij:
   ```
   Tytuł: 🔄 Opublikuj Kompopolex
   URL: https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
   ```
4. Zapisz

---

## 🎯 Jak używać?

### Po edycji Google Sheet:

1. ✏️ **Edytujesz** dane w Google Sheet
2. 💾 **Zapisujesz** (automatycznie lub Ctrl+S)
3. 🔄 **Klikasz** bookmark "🔄 Opublikuj Kompopolex"
4. 📱 **Zobaczysz** krótki komunikat JSON lub puste okno (to normalne!)
   ```json
   {"job":{"id":"...", "state":"PENDING"}}
   ```
5. ⏱️ **Czekasz** 2-3 minuty
6. 🌐 **Odświeżasz** stronę kompopolex.pl (Ctrl+Shift+R)
7. ✅ **Zmiany są live!**

---

## 🧪 Test - Czy to działa?

### Przetestuj teraz:

1. **Otwórz w nowym oknie/tab:**
   ```
   https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ
   ```

2. **Powinieneś zobaczyć:**
   ```json
   {
     "job": {
       "id": "...",
       "state": "PENDING",
       "createdAt": ...
     }
   }
   ```

3. **Sprawdź Vercel Dashboard:**
   - Przejdź do: https://vercel.com/dashboard
   - Otwórz projekt `kompopolex-experiment`
   - Kliknij **"Deployments"**
   - Zobaczysz nowy deployment w trakcie budowania!

---

## ⚠️ Co jeśli coś nie działa?

### Problem: "Invalid Hook" lub 404

**Rozwiązanie:**
1. Sprawdź czy URL jest poprawnie skopiowany (cały!)
2. Sprawdź w Vercel Settings → Git → Deploy Hooks czy hook istnieje
3. Spróbuj utworzyć nowy hook

---

### Problem: Deploy się uruchamia, ale build fails

**Rozwiązanie:**
1. Otwórz deployment w Vercel Dashboard
2. Kliknij **"View Function Logs"**
3. Sprawdź błędy
4. Upewnij się że dodałeś env vars:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_JSON`

---

### Problem: Build succeed ale strona nie zmienia się

**Rozwiązanie:**
1. Wyczyść cache przeglądarki (Ctrl+Shift+R)
2. Sprawdź czy dane w Google Sheet są poprawne
3. Sprawdź build logs - ile danych pobrało?

---

## 📱 Opcjonalnie: Shortcut na telefonie

### iPhone/iPad (Safari):

1. Otwórz URL w Safari
2. Kliknij **"Share"** (ikona udostępniania)
3. Wybierz **"Add to Home Screen"**
4. Nazwij: "🔄 Publikuj"
5. Ikona pojawi się na ekranie głównym!

### Android (Chrome):

1. Otwórz URL w Chrome
2. Menu (3 kropki) → **"Add to Home screen"**
3. Nazwij: "🔄 Publikuj"
4. Ikona pojawi się na ekranie głównym!

---

## 📊 Monitoring deployments

### Sprawdź status ostatniego deployment:

1. **Vercel Dashboard:** https://vercel.com/dashboard
2. Wybierz projekt `kompopolex-experiment`
3. Tab **"Deployments"**
4. Najnowszy deployment u góry:
   - 🟡 **Building** - w trakcie
   - 🟢 **Ready** - gotowe, live!
   - 🔴 **Error** - błąd (sprawdź logi)

---

## ✅ Checklist

Przed użyciem bookmark upewnij się że:

- [ ] Deploy Hook URL jest poprawny
- [ ] Bookmark został utworzony
- [ ] Vercel ma ustawione env vars (GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_JSON)
- [ ] Google Sheet jest wypełniony danymi
- [ ] Testowy deploy przeszedł pomyślnie

---

## 🎉 Gotowe!

Teraz masz jednoklinkowy sposób na publikację zmian!

**Workflow:**
1. ✏️ Edit Google Sheet
2. 🔄 Click bookmark
3. ⏱️ Wait 2-3 minutes
4. ✅ Changes are live!

---

**Pytania?** Zobacz `README_CMS.md` lub `VERCEL_DEPLOYMENT.md`
