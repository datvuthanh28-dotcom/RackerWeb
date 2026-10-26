const fs = require('fs');
const path = require('path');

const targetImagesDir = path.join(__dirname, '..', 'sites', 'furniture-demo-03', 'assets', 'images');
const candidatesDir = path.join(__dirname, 'furniture_candidates');

if (!fs.existsSync(targetImagesDir)) {
  fs.mkdirSync(targetImagesDir, { recursive: true });
}

// 1. Copy verified assets
const copyMap = [
  { src: 'sofa-astrid.jpg', dest: 'sofa-astrid.jpg' },
  { src: 'chair-bergen.jpg', dest: 'chair-bergen.jpg' },
  { src: 'table-oslo.jpg', dest: 'table-oslo.jpg' },
  { src: 'sideboard-candidate2.jpg', dest: 'sideboard-oak.jpg' },
  { src: 'dining-table.jpg', dest: 'dining-table.jpg' },
  { src: 'bed-sanctuary.jpg', dest: 'bed-sanctuary.jpg' },
  { src: 'desk-nordic.jpg', dest: 'desk-nordic.jpg' },
  { src: 'workshop-craft.jpg', dest: 'workshop-craft.jpg' },
  { src: 'workshop-carpentry.jpg', dest: 'workshop-carpentry.jpg' }
];

copyMap.forEach(item => {
  const srcPath = path.join(candidatesDir, item.src);
  const destPath = path.join(targetImagesDir, item.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${item.src} -> ${item.dest} (${fs.statSync(destPath).size} bytes)`);
  } else {
    console.error(`Missing source: ${srcPath}`);
  }
});

// 2. Delete banner.webp (the Sikido screenshot)
const bannerPath = path.join(__dirname, '..', 'sites', 'furniture-demo-03', 'assets', 'banner.webp');
if (fs.existsSync(bannerPath)) {
  fs.unlinkSync(bannerPath);
  console.log('PURGED banner.webp from sites/furniture-demo-03/assets/');
}

// 3. Update preview image in assets/previews/furniture-demo-03.jpg using hero.jpg
const heroPath = path.join(targetImagesDir, 'hero.jpg');
const previewPath = path.join(__dirname, '..', 'assets', 'previews', 'furniture-demo-03.jpg');
if (fs.existsSync(heroPath)) {
  fs.copyFileSync(heroPath, previewPath);
  console.log(`Updated assets/previews/furniture-demo-03.jpg (${fs.statSync(previewPath).size} bytes)`);
}

// Also remove old webp preview if exists
const oldWebpPreview = path.join(__dirname, '..', 'assets', 'previews', 'furniture-demo-03.webp');
if (fs.existsSync(oldWebpPreview)) {
  fs.unlinkSync(oldWebpPreview);
  console.log('Removed obsolete furniture-demo-03.webp');
}

console.log('Asset deployment complete!');
