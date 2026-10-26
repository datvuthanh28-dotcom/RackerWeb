const fs = require('fs');

// Read data/themes.json
const raw = fs.readFileSync('data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const themeIndex = themes.findIndex(t => t.id === 'baby-demo-15' || t.folder === 'baby-demo-15');
console.log('Theme index in data/themes.json:', themeIndex);
if (themeIndex >= 0) {
  console.log('Current theme data:', themes[themeIndex]);
  // Update with verified data
  themes[themeIndex] = {
    ...themes[themeIndex],
    name: 'PETIT CARE - Trung Tâm Nhi Khoa & Tiêm Chủng Quốc Tế',
    code: 'MS15',
    category: 'Mẹ và bé',
    previewImage: 'assets/previews/baby-demo-15.jpg',
    designStatus: 'custom-verified',
    description: 'Phòng khám Nhi Khoa & Tiêm Chủng Quốc Tế Petit Care: Khám sơ sinh toàn diện, vắc-xin nhập khẩu Pháp/Bỉ, tư vấn dinh dưỡng và theo dõi tăng trưởng chuẩn WHO.'
  };
  fs.writeFileSync('data/themes.json', '\uFEFF' + JSON.stringify(themes, null, 2), 'utf8');
  console.log('Updated data/themes.json');
}

// Read js/themes-data.js
let themesJs = fs.readFileSync('js/themes-data.js', 'utf8');
// Check if baby-demo-15 is in js/themes-data.js
if (themesJs.includes('baby-demo-15')) {
  // Regex replace or JSON parse the array inside themes-data.js
  const match = themesJs.match(/const\s+(?:allThemes|THEMES_DATA|themesData|themes)\s*=\s*(\[[\s\S]*?\]);/);
  if (match) {
    try {
      const arr = eval(match[1]);
      const idx = arr.findIndex(t => t.id === 'baby-demo-15' || t.folder === 'baby-demo-15');
      if (idx >= 0) {
        arr[idx] = {
          ...arr[idx],
          name: 'PETIT CARE - Trung Tâm Nhi Khoa & Tiêm Chủng Quốc Tế',
          code: 'MS15',
          category: 'Mẹ và bé',
          previewImage: 'assets/previews/baby-demo-15.jpg',
          designStatus: 'custom-verified',
          description: 'Phòng khám Nhi Khoa & Tiêm Chủng Quốc Tế Petit Care: Khám sơ sinh toàn diện, vắc-xin nhập khẩu Pháp/Bỉ, tư vấn dinh dưỡng và theo dõi tăng trưởng chuẩn WHO.'
        };
        const updatedJs = themesJs.replace(match[1], JSON.stringify(arr, null, 2));
        fs.writeFileSync('js/themes-data.js', updatedJs, 'utf8');
        console.log('Updated js/themes-data.js via array eval replacement');
      }
    } catch (e) {
      console.log('Eval match failed, will check manual replace:', e.message);
    }
  } else {
    console.log('Array pattern not matched in js/themes-data.js');
  }
} else {
  console.log('baby-demo-15 not found in js/themes-data.js');
}
