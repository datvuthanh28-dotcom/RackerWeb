const fs = require('fs');

// Read data/themes.json
const raw = fs.readFileSync('data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const themeIndex = themes.findIndex(t => t.id === 'ban-my-pham-cham-soc-sac-dep-web-99' || t.folder === 'ban-my-pham-cham-soc-sac-dep-web-99');
console.log('Theme index in data/themes.json:', themeIndex);

if (themeIndex >= 0) {
  console.log('Old theme data:', themes[themeIndex].name, themes[themeIndex].code);
  themes[themeIndex] = {
    ...themes[themeIndex],
    name: 'BOTANICA DERMA LAB - Dược Mỹ Phẩm Thực Vật & Khoa Học Phục Hồi Da Liễu',
    code: 'MS99',
    category: 'Mỹ phẩm',
    previewImage: 'assets/previews/ban-my-pham-cham-soc-sac-dep-web-99.jpg',
    designStatus: 'custom-verified',
    description: 'Botanica Derma Lab: Dược mỹ phẩm thực vật chuẩn y khoa phục hồi hàng rào bảo vệ da. Chiết xuất rau má Centella 10%, Niacinamide Thụy Sĩ, Ceramide sinh học, 100% EWG Green.'
  };
  fs.writeFileSync('data/themes.json', '\uFEFF' + JSON.stringify(themes, null, 2), 'utf8');
  console.log('Updated data/themes.json');

  // Sync js/themes-data.js
  const jsContent = `window.THEMES_DATA = ${JSON.stringify(themes, null, 2)};\n`;
  fs.writeFileSync('js/themes-data.js', jsContent, 'utf8');
  console.log('Synchronized js/themes-data.js');
} else {
  console.error('Could not find web-99 in data/themes.json!');
}
