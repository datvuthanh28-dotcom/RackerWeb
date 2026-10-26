const fs = require('fs');

const raw = fs.readFileSync('data/themes.json', 'utf8');
const data = JSON.parse(raw);
const item = data.find(t => t.id === 'nha-hang-quan-an-halu-demo-28' || t.code === 'MS28');
console.log('Found MS28 in data/themes.json:', item ? item.name : 'null');
if (item) {
  console.log('previewImage:', item.previewImage);
  console.log('designStatus:', item.designStatus);
}

const jsRaw = fs.readFileSync('js/themes-data.js', 'utf8');
console.log('js/themes-data.js length:', jsRaw.length);
const jsHasMS28 = jsRaw.includes('MS28');
console.log('js/themes-data.js has MS28:', jsHasMS28);
