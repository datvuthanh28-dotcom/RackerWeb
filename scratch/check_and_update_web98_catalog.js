const fs = require('fs');

const themesJsonPath = 'd:/RackerWeb/data/themes.json';
const themesDataJsPath = 'd:/RackerWeb/js/themes-data.js';

// 1. Update data/themes.json
const themes = JSON.parse(fs.readFileSync(themesJsonPath, 'utf8'));
const item = themes.find(t => t.folder === 'website-garage-o-to-web-98');

console.log('Current item in themes.json:', item);

if (item) {
  item.name = 'APEX MOTORS - Xưởng Kỹ Thuật Ô Tô Châu Âu & Detailing';
  item.code = 'MS98';
  item.previewImage = 'assets/previews/website-garage-o-to-web-98.jpg';
  item.designStatus = 'custom-verified';
  item.description = 'Trung tâm kỹ thuật xe sang & hiệu năng cao: Chẩn đoán số hóa OBD-II, phanh Brembo, cân chỉnh Hunter 3D, ECU Remap và Detailing Ceramic.';
  item.style = 'Dark Engineering Cockpit';
  item.colors = ['#0c0e12', '#f59e0b', '#06b6d4', '#1e2432'];
  
  fs.writeFileSync(themesJsonPath, JSON.stringify(themes, null, 2), 'utf8');
  console.log('Updated data/themes.json successfully.');
}

// 2. Update js/themes-data.js
let jsContent = fs.readFileSync(themesDataJsPath, 'utf8');

// Also update js/themes-data.js by rewriting or finding the folder entry
// Let's check how js/themes-data.js is structured
console.log('Length of themes-data.js:', jsContent.length);

// Generate updated js/themes-data.js from themes array
const newJsContent = `// Auto-generated themes data
const THEMES_DATA = ${JSON.stringify(themes, null, 2)};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = THEMES_DATA;
}
`;
fs.writeFileSync(themesDataJsPath, newJsContent, 'utf8');
console.log('Synchronized js/themes-data.js successfully.');
