const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'themes.json'), 'utf8'));

const found = data.filter(t => (t.id && t.id.includes('48')) || (t.code && t.code.includes('48')) || (t.id && t.id.includes('bat-dong-san')));
console.log('Found themes matching 48 or bat-dong-san:', found.map(f => ({ id: f.id, code: f.code, name: f.name, localUrl: f.localUrl })));
