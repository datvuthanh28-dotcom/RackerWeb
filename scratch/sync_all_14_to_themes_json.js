const fs = require('fs');

const themesJsonPath = 'd:/RackerWeb/data/themes.json';
const themesDataJsPath = 'd:/RackerWeb/js/themes-data.js';

const raw = fs.readFileSync(themesJsonPath, 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const completedIds = [
  'food-demo-12',
  'tra-sua-demo-41',
  'cua-hang-banh-ngot-demo-37',
  'food-demo-07',
  'website-bat-dong-san-demo-96',
  'cosmetic-demo-05',
  'website-ban-xe-hoi-demo-113',
  'spa-demo-18',
  'landing-page-bat-dong-san-demo-48',
  'furniture-demo-03',
  'nha-hang-quan-an-halu-demo-28',
  'nha-khoa-aspen-demo-34',
  'cosmetic-demo-01',
  'website-garage-o-to-web-98'
];

let updatedCount = 0;
completedIds.forEach(id => {
  const item = themes.find(t => t.id === id);
  if (item) {
    item.designStatus = 'custom-verified';
    // Make sure previewImage points to existing preview
    const previewFileJpg = `assets/previews/${id}.jpg`;
    const previewFileWebp = `assets/previews/${id}.webp`;
    if (fs.existsSync(`d:/RackerWeb/${previewFileJpg}`)) {
      item.previewImage = previewFileJpg;
    } else if (fs.existsSync(`d:/RackerWeb/${previewFileWebp}`)) {
      item.previewImage = previewFileWebp;
    }
    updatedCount++;
  } else {
    console.warn('Item not found:', id);
  }
});

fs.writeFileSync(themesJsonPath, JSON.stringify(themes, null, 2), 'utf8');
const newJs = `window.THEMES_DATA = ${JSON.stringify(themes, null, 2)};\n`;
fs.writeFileSync(themesDataJsPath, newJs, 'utf8');

console.log(`Updated ${updatedCount} completed themes to custom-verified in themes.json and themes-data.js!`);
