const fs = require('fs');
const raw = fs.readFileSync('data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);
const t = themes.find(x => x.id === 'ban-my-pham-cham-soc-sac-dep-web-99' || x.folder === 'ban-my-pham-cham-soc-sac-dep-web-99' || (x.localUrl && x.localUrl.includes('ban-my-pham-cham-soc-sac-dep-web-99')));
console.log('Theme data for web-99:', t);
