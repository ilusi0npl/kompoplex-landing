/**
 * Google Apps Script for Kompopolex Google Sheet
 * Adds a custom menu with "Opublikuj" button that triggers Vercel deployment
 *
 * INSTRUKCJA INSTALACJI:
 * 1. Otwórz Google Sheet
 * 2. Kliknij "Rozszerzenia" → "Apps Script"
 * 3. Usuń domyślny kod
 * 4. Wklej cały ten plik
 * 5. Zapisz (Ctrl+S)
 * 6. Odśwież arkusz - zobaczysz nowe menu "🎵 Kompopolex"
 */

// Twój Vercel Deploy Hook URL
const DEPLOY_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_RZi39wITMAJgVtllDiReRhrcwfsY/htIg8tHjzJ';

/**
 * Automatycznie uruchamiane gdy arkusz się otwiera
 * Dodaje niestandardowe menu u góry arkusza
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🎵 Kompopolex')
      .addItem('🚀 Opublikuj zmiany', 'publishChanges')
      .addSeparator()
      .addItem('📊 Status ostatniego deployment', 'checkDeploymentStatus')
      .addItem('ℹ️ Pomoc', 'showHelp')
      .addToUi();
}

/**
 * Główna funkcja - publikuje zmiany przez Vercel Deploy Hook
 */
function publishChanges() {
  const ui = SpreadsheetApp.getUi();

  // Pokaż dialog z potwierdzeniem
  const response = ui.alert(
    '🚀 Opublikować zmiany?',
    'Czy na pewno chcesz opublikować aktualne dane na stronie?\n\n' +
    'Zmiany będą widoczne za 2-3 minuty.',
    ui.ButtonSet.YES_NO
  );

  // Jeśli użytkownik kliknął "Nie"
  if (response !== ui.Button.YES) {
    return;
  }

  try {
    // Pokaż toast notification
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'Wysyłanie żądania do Vercel...',
      '⏳ Publikowanie',
      5
    );

    // Wywołaj Vercel Deploy Hook
    const options = {
      'method': 'post',
      'contentType': 'application/json',
      'muteHttpExceptions': true
    };

    const response = UrlFetchApp.fetch(DEPLOY_HOOK_URL, options);
    const responseCode = response.getResponseCode();
    const responseBody = JSON.parse(response.getContentText());

    // Sprawdź czy się udało
    if (responseCode === 200 || responseCode === 201) {
      const jobId = responseBody.job ? responseBody.job.id : 'unknown';
      const jobState = responseBody.job ? responseBody.job.state : 'unknown';

      // Sukces!
      ui.alert(
        '✅ Sukces!',
        'Deployment rozpoczęty!\n\n' +
        '📋 Job ID: ' + jobId + '\n' +
        '📊 Status: ' + jobState + '\n\n' +
        '⏱️ Poczekaj 2-3 minuty, a następnie odśwież stronę:\n' +
        'https://kompoplex-landing.vercel.app\n\n' +
        '📊 Śledź postęp:\n' +
        'https://vercel.com/ilusi0npl/kompoplex-landing/deployments',
        ui.ButtonSet.OK
      );

      // Toast notification
      SpreadsheetApp.getActiveSpreadsheet().toast(
        'Deployment rozpoczęty! Zmiany będą live za 2-3 minuty.',
        '✅ Opublikowano',
        10
      );

    } else {
      // Błąd HTTP
      throw new Error('HTTP ' + responseCode + ': ' + response.getContentText());
    }

  } catch (error) {
    // Obsługa błędów
    ui.alert(
      '❌ Błąd!',
      'Nie udało się opublikować zmian.\n\n' +
      'Błąd: ' + error.message + '\n\n' +
      'Sprawdź:\n' +
      '1. Czy masz połączenie z internetem\n' +
      '2. Czy Deploy Hook URL jest poprawny\n' +
      '3. Spróbuj ponownie za chwilę',
      ui.ButtonSet.OK
    );

    Logger.log('Error publishing changes: ' + error);
  }
}

/**
 * Sprawdź status ostatniego deployment (otwiera Vercel Dashboard)
 */
function checkDeploymentStatus() {
  const ui = SpreadsheetApp.getUi();

  ui.alert(
    '📊 Status Deploymentów',
    'Otwórz Vercel Dashboard aby sprawdzić status:\n\n' +
    'https://vercel.com/ilusi0npl/kompoplex-landing/deployments\n\n' +
    'Możesz też sprawdzić na stronie:\n' +
    'https://kompoplex-landing.vercel.app',
    ui.ButtonSet.OK
  );
}

/**
 * Pokaż pomoc
 */
function showHelp() {
  const ui = SpreadsheetApp.getUi();

  ui.alert(
    'ℹ️ Jak używać?',
    '1. Edytuj dane w arkuszu\n' +
    '2. Zapisz zmiany (automatycznie)\n' +
    '3. Kliknij "🎵 Kompopolex" → "🚀 Opublikuj zmiany"\n' +
    '4. Poczekaj 2-3 minuty\n' +
    '5. Odśwież stronę - zmiany są live!\n\n' +
    '📝 Link do strony:\n' +
    'https://kompoplex-landing.vercel.app\n\n' +
    '📊 Dashboard Vercel:\n' +
    'https://vercel.com/ilusi0npl/kompoplex-landing/deployments\n\n' +
    '❓ Problemy? Zobacz README_CMS.md w repozytorium.',
    ui.ButtonSet.OK
  );
}

/**
 * Funkcja testowa - sprawdza czy Deploy Hook działa
 */
function testDeployHook() {
  const ui = SpreadsheetApp.getUi();

  try {
    const options = {
      'method': 'post',
      'contentType': 'application/json',
      'muteHttpExceptions': true
    };

    const response = UrlFetchApp.fetch(DEPLOY_HOOK_URL, options);
    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    ui.alert(
      'Test Deploy Hook',
      'Response Code: ' + responseCode + '\n\n' +
      'Response Body:\n' + responseBody,
      ui.ButtonSet.OK
    );

    Logger.log('Deploy Hook Test - Code: ' + responseCode);
    Logger.log('Deploy Hook Test - Body: ' + responseBody);

  } catch (error) {
    ui.alert('Test Error', error.message, ui.ButtonSet.OK);
    Logger.log('Deploy Hook Test Error: ' + error);
  }
}
