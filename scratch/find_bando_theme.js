const fs = require('fs');
const raw = fs.readFileSync('data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);
const t = themes.find(x => x.id === 'ban-do-noi-that' || x.folder === 'ban-do-noi-that' || (x.localUrl && x.localUrl.includes('ban-do-noi-that')));
console.log('Theme for ban-do-noi-that:', t);
