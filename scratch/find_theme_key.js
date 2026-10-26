const fs = require('fs');

const raw = fs.readFileSync('d:/RackerWeb/data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

console.log('Sample theme object keys:', Object.keys(themes[0]));
console.log('Sample theme object:', themes[0]);

const match = themes.filter(t => JSON.stringify(t).includes('98'));
console.log('Matching 98 count:', match.length);
console.log('Matching 98:', match);
