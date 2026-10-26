const fs = require('fs');
const path = require('path');

const themesPath = path.join(__dirname, '..', 'data', 'themes.json');
const themesDataJsPath = path.join(__dirname, '..', 'js', 'themes-data.js');

const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));

// Update #MS48
const item48 = themes.find(t => t.id === 'landing-page-bat-dong-san-demo-48');
if (item48) {
  item48.name = 'The Riverfront Riverside & Sky Villa';
  item48.category = 'Bất động sản';
  item48.description = 'Kiệt tác tư dinh sinh thái trên không và biệt thự ven sông Sài Gòn. Tầm nhìn panorama vô cực 270 độ, bến du thuyền 5 sao và chính sách ân hạn lãi suất 0% trong 24 tháng.';
  item48.previewImage = 'assets/previews/landing-page-bat-dong-san-demo-48.jpg';
  item48.designStatus = 'custom-verified';
  item48.localSiteStatus = 'ready';
  console.log('Updated #MS48 in themes.json');
}

// Update #MS18 if needed
const item18 = themes.find(t => t.id === 'spa-demo-18');
if (item18) {
  item18.name = 'An Nhiên Spa & Wellness Retreat';
  item18.category = 'Spa & Làm đẹp';
  item18.description = 'Khu nghỉ dưỡng trị liệu và phục hồi năng lượng thân - tâm - trí chuẩn thiền Nhật Bản. Liệu trình thảo mộc tự nhiên, đá nóng bazan và không gian an tĩnh tách biệt phố thị.';
  item18.previewImage = 'assets/previews/spa-demo-18.jpg';
  item18.designStatus = 'custom-verified';
  item18.localSiteStatus = 'ready';
  console.log('Updated #MS18 in themes.json');
}

// Write back data/themes.json
fs.writeFileSync(themesPath, JSON.stringify(themes, null, 2), 'utf8');
console.log('Saved data/themes.json');

// Write back js/themes-data.js
const jsContent = `// Auto-generated themes data for RackerWeb
window.THEMES_DATA = ${JSON.stringify(themes, null, 2)};
`;
fs.writeFileSync(themesDataJsPath, jsContent, 'utf8');
console.log('Synchronized js/themes-data.js');
