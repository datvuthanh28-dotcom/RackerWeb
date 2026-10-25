// tools/update_protected_metadata.js
const fs = require('fs');

const themesPath = 'd:/dvweb/data/themes.json';
const jsDataPath = 'd:/dvweb/js/themes-data.js';
const protectedList = JSON.parse(fs.readFileSync('d:/dvweb/data/protected_sites.json', 'utf8'));

const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));

let updatedCount = 0;
themes.forEach(t => {
  if (protectedList.includes(t.id)) {
    t.designStatus = 'custom-verified';
    if (t.id === 'cong-ty-san-xuat-bao-bi-demo-70') {
      t.name = 'Tân Phát Packaging — Bao Bì Công Nghiệp';
      t.description = 'Nhà máy sản xuất bao bì carton, bao bì màng ghép phức hợp, thùng carton sóng và túi zipper xuất khẩu đạt chuẩn ISO 9001:2015 & FSC.';
    } else if (t.id === 'website-tiem-cafe-tinh-demo-54') {
      t.name = 'Tình Cafe — Specialty Coffee Roasters';
      t.description = 'Không gian cà phê specialty đương đại, hạt Arabica Cầu Đất sơ chế đặc biệt, bánh ngọt thủ công và trải nghiệm thưởng thức tinh tế.';
    }
    updatedCount++;
  } else if (!t.designStatus) {
    t.designStatus = 'generic-template';
  }
});

const jsonStr = JSON.stringify(themes, null, 4);
fs.writeFileSync(themesPath, jsonStr, 'utf8');

const jsContent = 'window.THEMES_DATA = ' + jsonStr + ';\n';
fs.writeFileSync(jsDataPath, jsContent, 'utf8');

console.log(`Updated ${updatedCount} protected themes in themes.json and themes-data.js.`);
