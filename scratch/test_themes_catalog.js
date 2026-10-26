const fs = require('fs');

const raw = fs.readFileSync('d:/RackerWeb/data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);
const item = themes.find(t => t.id === 'website-garage-o-to-web-98');

console.log('themes.json item:');
console.log(item);

const jsRaw = fs.readFileSync('d:/RackerWeb/js/themes-data.js', 'utf8');
const window = {};
eval(jsRaw);
const jsItem = window.THEMES_DATA.find(t => t.id === 'website-garage-o-to-web-98');
console.log('themes-data.js item:');
console.log(jsItem);
