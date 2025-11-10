#!/usr/bin/env node

/**
 * Build script for Kompopolex website
 * Fetches data from Google Sheets and generates index.html
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  SHEET_ID: '1jV1dJjoYMBdoefnTCs4bi7INElHHeatKg96VBv6M_S8',
  CREDENTIALS_PATH: path.join(__dirname, '..', 'google-credentials.json'),
  INDEX_PATH: path.join(__dirname, '..', 'index.html'),
  BACKUP_PATH: path.join(__dirname, '..', 'index.backup.html'),
  RANGES: {
    oNas: 'O_Nas!A2:B2',
    kimJestesmy: 'Kim_Jesteśmy!A2:D100',
    repertuar: 'Repertuar!A2:C200',
    wydarzenia: 'Wydarzenia!A2:D100',
    galeria: 'Galeria!A2:B100'
  }
};

// Polish month names for kalendarz
const POLISH_MONTHS = {
  '01': 'STY', '02': 'LUT', '03': 'MAR', '04': 'KWI',
  '05': 'MAJ', '06': 'CZE', '07': 'LIP', '08': 'SIE',
  '09': 'WRZ', '10': 'PAŹ', '11': 'LIS', '12': 'GRU'
};

/**
 * Initialize Google Sheets API
 */
async function initSheetsAPI() {
  try {
    let credentials;

    // Check if running on Vercel (environment variable)
    if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
      console.log('  📍 Running on Vercel - using env vars');
      credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    } else if (fs.existsSync(CONFIG.CREDENTIALS_PATH)) {
      // Local development - read from file
      console.log('  📍 Running locally - using credentials file');
      credentials = JSON.parse(
        fs.readFileSync(CONFIG.CREDENTIALS_PATH, 'utf8')
      );
    } else {
      throw new Error('No credentials found! Set GOOGLE_SERVICE_ACCOUNT_JSON environment variable or create google-credentials.json file.');
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
  } catch (error) {
    console.error('❌ Error initializing Google Sheets API:', error.message);
    throw error;
  }
}

/**
 * Fetch data from a specific range in Google Sheet
 */
async function fetchSheetData(sheets, range) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: CONFIG.SHEET_ID,
      range: range,
    });

    return response.data.values || [];
  } catch (error) {
    console.error(`❌ Error fetching data from range "${range}":`, error.message);
    return [];
  }
}

/**
 * Build HTML for "O Nas" section (2 paragraphs)
 */
function buildONasHTML(data) {
  if (!data || data.length === 0 || !data[0]) {
    return '<!-- Brak danych O Nas -->';
  }

  const [akapit1, akapit2] = data[0];

  if (!akapit1 && !akapit2) {
    return '<!-- Brak danych O Nas -->';
  }

  let html = '';

  if (akapit1) {
    html += `                    <p class="ensemble__description">${akapit1}</p>\n`;
  }

  if (akapit2) {
    html += `                    <p class="ensemble__description">${akapit2}</p>`;
  }

  return html;
}

/**
 * Build HTML for ensemble team members
 */
function buildEnsembleHTML(data) {
  if (!data || data.length === 0) {
    return '<!-- Brak danych członków zespołu -->';
  }

  const instruments = {
    'perkusja': 'percussion',
    'akordeon': 'accordion',
    'komputery': 'computers'
  };

  return data.map(row => {
    const [imie, instrument, opis, zdjecieURL] = row;
    if (!imie || !instrument) return '';

    const nameParts = imie.split(' ');
    const formattedName = nameParts.join('<br>');
    const instrumentSlug = instruments[instrument.toLowerCase()] || 'other';

    return `
                    <div class="ensemble__member" data-instrument="${instrumentSlug}">
                        <div class="ensemble__member-image-wrapper">
                            <div class="ensemble__member-glow"></div>
                            <img src="${zdjecieURL || '/assets/images/placeholder.png'}" alt="${imie} - ${instrument}" class="ensemble__member-image">
                        </div>
                        <div class="ensemble__member-info">
                            <h3 class="ensemble__member-name">${formattedName}</h3>
                            <p class="ensemble__member-instrument">${instrument}</p>
                        </div>
                    </div>`;
  }).join('\n');
}

/**
 * Build HTML for repertuar cards
 */
function buildRepertuarHTML(data) {
  if (!data || data.length === 0) {
    return '<!-- Brak danych repertuaru -->';
  }

  return data.map(row => {
    const [kompozytor, utwor, rok] = row;
    if (!kompozytor || !utwor) return '';

    return `
                    <div class="repertuar__card">
                        <h3 class="repertuar__composer">${kompozytor}</h3>
                        <p class="repertuar__piece">${utwor}</p>
                        <span class="repertuar__duration">${rok || ''}</span>
                    </div>`;
  }).join('\n');
}

/**
 * Build HTML for kalendarz events
 */
function buildKalendarzHTML(data) {
  if (!data || data.length === 0) {
    return '<!-- Brak nadchodzących wydarzeń -->';
  }

  return data.map(row => {
    const [data_str, nazwa, lokalizacja, godzina] = row;
    if (!data_str || !nazwa) return '';

    // Parse date YYYY-MM-DD
    const dateParts = data_str.split('-');
    if (dateParts.length !== 3) return '';

    const [year, month, day] = dateParts;
    const monthName = POLISH_MONTHS[month] || month;

    return `
                    <!-- Event -->
                    <div class="kalendarz__event">
                        <div class="kalendarz__date-badge">
                            <span class="kalendarz__day">${parseInt(day)}</span>
                            <span class="kalendarz__month">${monthName}</span>
                        </div>
                        <div class="kalendarz__card">
                            <h3 class="kalendarz__event-name">${nazwa}</h3>
                            <p class="kalendarz__location">${lokalizacja || ''}</p>
                            <p class="kalendarz__time">${godzina || ''}</p>
                            <a href="#kontakt" class="kalendarz__cta button-ghost">DOWIEDZ SIĘ WIĘCEJ</a>
                        </div>
                    </div>`;
  }).join('\n');
}

/**
 * Build HTML for galeria items
 */
function buildGaleriaHTML(data) {
  if (!data || data.length === 0) {
    return '<!-- Brak zdjęć w galerii -->';
  }

  return data.map((row, index) => {
    const [zdjecieURL, opis] = row;
    if (!zdjecieURL) return '';

    // Alternate between normal, tall, and wide items for variety
    let itemClass = 'galeria__item';
    if (index % 5 === 1 || index % 5 === 4) {
      itemClass += ' galeria__item--tall';
    } else if (index % 5 === 3) {
      itemClass += ' galeria__item--wide';
    }

    return `
                <div class="${itemClass}" data-index="${index}">
                    <img src="${zdjecieURL}" alt="${opis || 'Ensemble Kompopolex'}" class="galeria__image">
                </div>`;
  }).join('\n');
}

/**
 * Read current index.html and replace dynamic sections
 */
function buildHTMLFile(oNasHTML, ensembleHTML, repertuarHTML, kalendarzHTML, galeriaHTML) {
  try {
    let html = fs.readFileSync(CONFIG.INDEX_PATH, 'utf8');

    // Replace O Nas paragraphs in ensemble section
    html = html.replace(
      /(<h2 class="ensemble__heading">KIM JESTEŚMY<\/h2>)([\s\S]*?)(<div class="ensemble__stats">)/m,
      `$1\n${oNasHTML}\n\n$3`
    );

    // Replace ensemble team members
    html = html.replace(
      /(<div class="ensemble__team">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/m,
      `$1\n${ensembleHTML}\n                </div>$3`
    );

    // Replace repertuar cards
    html = html.replace(
      /(<div class="repertuar__grid">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/m,
      `$1\n${repertuarHTML}\n                </div>$3`
    );

    // Replace kalendarz events
    html = html.replace(
      /(<div class="kalendarz__timeline">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>)/m,
      `$1\n${kalendarzHTML}\n                </div>$3`
    );

    // Replace galeria items
    html = html.replace(
      /(<div class="galeria__grid">)([\s\S]*?)(<\/div>\s*<!-- Galeria Lightbox -->)/m,
      `$1\n${galeriaHTML}\n            </div>\n            <!-- Galeria Lightbox -->`
    );

    return html;
  } catch (error) {
    console.error('❌ Error reading/modifying HTML:', error.message);
    throw error;
  }
}

/**
 * Main build function
 */
async function build() {
  console.log('🚀 Starting build from Google Sheets...\n');

  try {
    // Initialize API
    console.log('📡 Connecting to Google Sheets API...');
    const sheets = await initSheetsAPI();
    console.log('✅ Connected successfully!\n');

    // Fetch all data
    console.log('📥 Fetching data from sheets...');

    const [oNasData, kimJestesmyData, repertuarData, wydarzeniaData, galeriaData] = await Promise.all([
      fetchSheetData(sheets, CONFIG.RANGES.oNas),
      fetchSheetData(sheets, CONFIG.RANGES.kimJestesmy),
      fetchSheetData(sheets, CONFIG.RANGES.repertuar),
      fetchSheetData(sheets, CONFIG.RANGES.wydarzenia),
      fetchSheetData(sheets, CONFIG.RANGES.galeria)
    ]);

    console.log(`  ✓ O Nas: ${oNasData.length > 0 ? '2 akapity' : '0 akapitów'}`);
    console.log(`  ✓ Kim Jesteśmy: ${kimJestesmyData.length} członków`);
    console.log(`  ✓ Repertuar: ${repertuarData.length} utworów`);
    console.log(`  ✓ Wydarzenia: ${wydarzeniaData.length} wydarzeń`);
    console.log(`  ✓ Galeria: ${galeriaData.length} zdjęć\n`);

    // Create backup
    if (fs.existsSync(CONFIG.INDEX_PATH)) {
      console.log('💾 Creating backup of current index.html...');
      fs.copyFileSync(CONFIG.INDEX_PATH, CONFIG.BACKUP_PATH);
      console.log('✅ Backup created: index.backup.html\n');
    }

    // Build HTML sections
    console.log('🔨 Building HTML sections...');
    const oNasHTML = buildONasHTML(oNasData);
    const ensembleHTML = buildEnsembleHTML(kimJestesmyData);
    const repertuarHTML = buildRepertuarHTML(repertuarData);
    const kalendarzHTML = buildKalendarzHTML(wydarzeniaData);
    const galeriaHTML = buildGaleriaHTML(galeriaData);

    // Build final HTML
    const finalHTML = buildHTMLFile(oNasHTML, ensembleHTML, repertuarHTML, kalendarzHTML, galeriaHTML);

    // Write to file
    fs.writeFileSync(CONFIG.INDEX_PATH, finalHTML, 'utf8');
    console.log('✅ index.html generated successfully!\n');

    console.log('🎉 Build completed! Website is ready for deployment.\n');

    return true;
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    console.error('\nPrzepraszam! Wystąpił błąd podczas budowania strony.');
    console.error('Sprawdź czy:');
    console.error('  1. Plik google-credentials.json istnieje');
    console.error('  2. Google Sheet jest poprawnie udostępniony service account');
    console.error('  3. ID arkusza jest poprawne\n');
    process.exit(1);
  }
}

// Run build
if (require.main === module) {
  build();
}

module.exports = { build };
