const fs = require('fs');

const raw = fs.readFileSync('data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const jsContent = `window.THEMES_DATA = ${JSON.stringify(themes, null, 2)};\n`;
fs.writeFileSync('js/themes-data.js', jsContent, 'utf8');
console.log('Successfully synchronized js/themes-data.js from data/themes.json!');
