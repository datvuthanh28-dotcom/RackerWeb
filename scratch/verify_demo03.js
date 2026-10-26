const fs = require('fs');
const path = require('path');

const siteDir = path.join(__dirname, '..', 'sites', 'furniture-demo-03');
const pages = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];

console.log('--- VERIFYING FURNITURE-DEMO-03 (#MS03) ---');

let hasError = false;

// 1. Check pages exist & no broken references
pages.forEach(p => {
  const fullPath = path.join(siteDir, p);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing page: ${p}`);
    hasError = true;
  } else {
    const content = fs.readFileSync(fullPath, 'utf8');
    // Check for references to old purged files
    if (content.includes('banner.webp')) {
      console.error(`Page ${p} contains reference to purged screenshot: banner.webp`);
      hasError = true;
    }
    // Check for broken local image links
    const imgMatches = content.match(/src="([^"]+)"/g) || [];
    imgMatches.forEach(m => {
      const src = m.replace('src="', '').replace('"', '');
      if (!src.startsWith('http') && !src.startsWith('data:')) {
        const resolved = path.resolve(siteDir, src);
        if (!fs.existsSync(resolved)) {
          console.error(`Broken image link in ${p}: ${src} -> ${resolved}`);
          hasError = true;
        }
      }
    });
  }
});

// 2. Check preview image
const previewPath = path.join(__dirname, '..', 'assets', 'previews', 'furniture-demo-03.jpg');
if (!fs.existsSync(previewPath)) {
  console.error('Missing preview image in assets/previews!');
  hasError = true;
} else {
  const stats = fs.statSync(previewPath);
  console.log(`Preview image OK: ${stats.size} bytes`);
}

// 3. Check assets/images
const imagesDir = path.join(siteDir, 'assets', 'images');
const requiredImages = [
  'hero.jpg',
  'sofa-astrid.jpg',
  'chair-bergen.jpg',
  'table-oslo.jpg',
  'sideboard-oak.jpg',
  'dining-table.jpg',
  'bed-sanctuary.jpg',
  'desk-nordic.jpg',
  'workshop-craft.jpg',
  'workshop-carpentry.jpg'
];

requiredImages.forEach(img => {
  const p = path.join(imagesDir, img);
  if (!fs.existsSync(p)) {
    console.error(`Missing image: ${img}`);
    hasError = true;
  } else {
    const s = fs.statSync(p);
    if (s.size < 5000) {
      console.error(`Image suspiciously small: ${img} (${s.size} bytes)`);
      hasError = true;
    }
  }
});

// 4. Update data/themes.json and js/themes-data.js for #MS03
const themesPath = path.join(__dirname, '..', 'data', 'themes.json');
const themesDataJsPath = path.join(__dirname, '..', 'js', 'themes-data.js');

const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));
const item03 = themes.find(t => t.id === 'furniture-demo-03');
if (item03) {
  item03.name = 'Nordic Living Atelier';
  item03.category = 'Nội thất & Kiến trúc';
  item03.description = 'Xưởng thiết kế & sản xuất nội thất Bắc Âu Scandinavian may đo căn hộ. 100% gỗ sồi trắng chuẩn FSC, mộng gỗ âm dương, dầu lau thực vật Osmo an toàn cho trẻ nhỏ.';
  item03.previewImage = 'assets/previews/furniture-demo-03.jpg';
  item03.designStatus = 'custom-verified';
  item03.localSiteStatus = 'ready';
  console.log('Updated #MS03 in themes.json');

  fs.writeFileSync(themesPath, JSON.stringify(themes, null, 2), 'utf8');
  fs.writeFileSync(themesDataJsPath, `// Auto-generated themes data for RackerWeb\nwindow.THEMES_DATA = ${JSON.stringify(themes, null, 2)};\n`, 'utf8');
  console.log('Synchronized js/themes-data.js');
}

if (!hasError) {
  console.log('✅ ALL CHECKS PASSED FOR FURNITURE-DEMO-03 (#MS03)!');
} else {
  console.error('❌ SOME CHECKS FAILED!');
  process.exit(1);
}
