const fs = require('fs');
const path = require('path');

const siteDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48');
const pages = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];

console.log('--- VERIFYING LANDING-PAGE-BAT-DONG-SAN-DEMO-48 ---');

let hasError = false;

// 1. Check pages exist
pages.forEach(p => {
  const fullPath = path.join(siteDir, p);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing page: ${p}`);
    hasError = true;
  } else {
    const content = fs.readFileSync(fullPath, 'utf8');
    // Check for references to old purged files
    const forbidden = ['banner.webp', 'project-hero.jpg', 'interior-penthouse.jpg'];
    forbidden.forEach(f => {
      if (content.includes(f)) {
        console.error(`Page ${p} contains reference to purged file: ${f}`);
        hasError = true;
      }
    });
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
const previewPath = path.join(__dirname, '..', 'assets', 'previews', 'landing-page-bat-dong-san-demo-48.jpg');
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
  'hero-dawn.jpg',
  'hero-daylight.jpg',
  'hero-twilight.jpg',
  'hero-night.jpg',
  'bason-bridge.jpg',
  'unit-1pn.jpg',
  'unit-2pn.jpg',
  'unit-dualkey.jpg',
  'unit-3pn.jpg',
  'unit-penthouse.jpg',
  'unit-skyvilla.jpg',
  'unit-shophouse.jpg',
  'amenity-marina.jpg',
  'amenity-sky-pool.jpg',
  'amenity-cigar-lounge.jpg'
];

requiredImages.forEach(img => {
  const p = path.join(imagesDir, img);
  if (!fs.existsSync(p)) {
    console.error(`Missing image: ${img}`);
    hasError = true;
  } else {
    const s = fs.statSync(p);
    if (s.size < 1000) {
      console.error(`Image suspiciously small: ${img} (${s.size} bytes)`);
      hasError = true;
    }
  }
});

if (!hasError) {
  console.log('✅ ALL CHECKS PASSED FOR LANDING-PAGE-BAT-DONG-SAN-DEMO-48!');
} else {
  console.error('❌ SOME CHECKS FAILED!');
  process.exit(1);
}
