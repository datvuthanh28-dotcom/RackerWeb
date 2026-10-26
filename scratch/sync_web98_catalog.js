const fs = require('fs');

const themesJsonPath = 'd:/RackerWeb/data/themes.json';
const themesDataJsPath = 'd:/RackerWeb/js/themes-data.js';

// 1. Read themes.json (handling BOM)
const raw = fs.readFileSync(themesJsonPath, 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const item = themes.find(t => t.id === 'website-garage-o-to-web-98');
if (!item) {
  console.error('Item website-garage-o-to-web-98 not found!');
  process.exit(1);
}

item.name = 'APEX MOTORS - Xưởng Kỹ Thuật Ô Tô Châu Âu & Detailing';
item.code = 'MS98';
item.previewImage = 'assets/previews/website-garage-o-to-web-98.jpg';
item.designStatus = 'custom-verified';
item.description = 'Trung tâm kỹ thuật xe sang & hiệu năng cao APEX MOTORS: Chẩn đoán OBD-II số hóa, phanh Brembo, cân chỉnh Hunter 3D, ECU Remap và Detailing Ceramic chuẩn quốc tế.';

fs.writeFileSync(themesJsonPath, JSON.stringify(themes, null, 2), 'utf8');
console.log('Updated data/themes.json successfully.');

// 2. Read js/themes-data.js and update it
// Let's check if js/themes-data.js has window.THEMES_DATA or similar
let jsRaw = fs.readFileSync(themesDataJsPath, 'utf8');
// Parse JSON within js if it has const THEMES_DATA = [...]
const match = jsRaw.match(/^(?:window\.)?(?:const|let|var)\s+THEMES_DATA\s*=\s*(\[[\s\S]*?\]);?/m);
if (match) {
  const prefix = jsRaw.substring(0, match.index);
  const varDecl = jsRaw.substring(match.index, jsRaw.indexOf('[', match.index));
  const newJs = `${prefix}${varDecl}${JSON.stringify(themes, null, 2)};\n`;
  fs.writeFileSync(themesDataJsPath, newJs, 'utf8');
  console.log('Updated js/themes-data.js via regex replacement.');
} else {
  // Direct export
  const newJs = `window.THEMES_DATA = ${JSON.stringify(themes, null, 2)};\n`;
  fs.writeFileSync(themesDataJsPath, newJs, 'utf8');
  console.log('Updated js/themes-data.js with standard window.THEMES_DATA.');
}
