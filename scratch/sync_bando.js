const fs = require('fs');

// Read data/themes.json
const raw = fs.readFileSync('data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const themeIndex = themes.findIndex(t => t.id === 'ban-do-noi-that' || t.folder === 'ban-do-noi-that');
console.log('Theme index in data/themes.json:', themeIndex);

if (themeIndex >= 0) {
  console.log('Old theme data:', themes[themeIndex].name, themes[themeIndex].code);
  themes[themeIndex] = {
    ...themes[themeIndex],
    name: 'MỘC ĐIỀN ATELIER - Xưởng Thủ Công & Kiến Trúc Gỗ Tự Nhiên',
    code: 'MS101',
    category: 'Nội thất',
    previewImage: 'assets/previews/ban-do-noi-that.jpg',
    designStatus: 'custom-verified',
    description: 'Mộc Điền Atelier: Xưởng thủ công & kiến trúc đồ gỗ tự nhiên nguyên tấm. Chế tác mộng gỗ truyền thống không dùng đinh kim loại, tuyển chọn gỗ óc chó FAS, sấy chân không <10% MC, hoàn thiện dầu lau Osmo Đức.'
  };
  fs.writeFileSync('data/themes.json', '\uFEFF' + JSON.stringify(themes, null, 2), 'utf8');
  console.log('Updated data/themes.json');

  // Sync js/themes-data.js
  const jsContent = `window.THEMES_DATA = ${JSON.stringify(themes, null, 2)};\n`;
  fs.writeFileSync('js/themes-data.js', jsContent, 'utf8');
  console.log('Synchronized js/themes-data.js');
} else {
  console.error('Could not find ban-do-noi-that in data/themes.json!');
}
