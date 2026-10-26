const fs = require('fs');
const path = require('path');

const targetImagesDir = path.join(__dirname, '..', 'sites', 'nha-hang-quan-an-halu-demo-28', 'assets', 'images');
const candidatesDir = path.join(__dirname, 'halu_candidates');

if (!fs.existsSync(targetImagesDir)) {
  fs.mkdirSync(targetImagesDir, { recursive: true });
}

// 1. Copy verified assets
const copyMap = [
  { src: 'kho-to.jpg', dest: 'ca-kho-to.jpg' },
  { src: 'goi-cuon.jpg', dest: 'goi-cuon.jpg' },
  { src: 'cha-ca.jpg', dest: 'cha-ca.jpg' },
  { src: 'space-vip.jpg', dest: 'space-vip.jpg' }
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

// Also remove old coffee shop space-interior.jpg
const oldSpace = path.join(targetImagesDir, 'space-interior.jpg');
if (fs.existsSync(oldSpace)) {
  fs.unlinkSync(oldSpace);
  console.log('Removed obsolete coffee shop space-interior.jpg');
}

// 2. Delete banner.webp (the Sikido Pizza template screenshot)
const bannerPath = path.join(__dirname, '..', 'sites', 'nha-hang-quan-an-halu-demo-28', 'assets', 'banner.webp');
if (fs.existsSync(bannerPath)) {
  fs.unlinkSync(bannerPath);
  console.log('PURGED banner.webp from sites/nha-hang-quan-an-halu-demo-28/assets/');
}

// 3. Update preview image in assets/previews/nha-hang-quan-an-halu-demo-28.jpg
const heroPath = path.join(targetImagesDir, 'hero.jpg');
const previewPath = path.join(__dirname, '..', 'assets', 'previews', 'nha-hang-quan-an-halu-demo-28.jpg');
if (fs.existsSync(heroPath)) {
  fs.copyFileSync(heroPath, previewPath);
  console.log(`Updated assets/previews/nha-hang-quan-an-halu-demo-28.jpg (${fs.statSync(previewPath).size} bytes)`);
}

// Also remove old webp preview if exists
const oldWebpPreview = path.join(__dirname, '..', 'assets', 'previews', 'nha-hang-quan-an-halu-demo-28.webp');
if (fs.existsSync(oldWebpPreview)) {
  fs.unlinkSync(oldWebpPreview);
  console.log('Removed obsolete nha-hang-quan-an-halu-demo-28.webp');
}

console.log('Asset deployment complete for Halu Restaurant!');
