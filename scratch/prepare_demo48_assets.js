const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets', 'images');
const assetsDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets');
const rootPreviewDir = path.join(__dirname, '..', 'assets', 'previews');

// 1. Copy saigon-blue-hour.jpg to hero-twilight.jpg and banner.jpg
fs.copyFileSync(path.join(imgDir, 'saigon-blue-hour.jpg'), path.join(imgDir, 'hero-twilight.jpg'));
fs.copyFileSync(path.join(imgDir, 'saigon-blue-hour.jpg'), path.join(assetsDir, 'banner.jpg'));
fs.copyFileSync(path.join(imgDir, 'saigon-blue-hour.jpg'), path.join(rootPreviewDir, 'landing-page-bat-dong-san-demo-48.jpg'));

// 2. Setup hero-daylight.jpg from bason-bridge.jpg
fs.copyFileSync(path.join(imgDir, 'bason-bridge.jpg'), path.join(imgDir, 'hero-daylight.jpg'));

// 3. Setup hero-night.jpg from saigon-day-waterfront.jpg
fs.copyFileSync(path.join(imgDir, 'saigon-day-waterfront.jpg'), path.join(imgDir, 'hero-night.jpg'));

// 4. Setup units
fs.copyFileSync(path.join(imgDir, 'interior-1pn-sleek.jpg'), path.join(imgDir, 'unit-1pn.jpg'));
fs.copyFileSync(path.join(imgDir, 'unit-dualkey.jpg'), path.join(imgDir, 'unit-2pn.jpg'));
fs.copyFileSync(path.join(imgDir, 'interior-3pn-corner.jpg'), path.join(imgDir, 'unit-3pn.jpg'));
fs.copyFileSync(path.join(imgDir, 'interior-2pn-panorama.jpg'), path.join(imgDir, 'unit-penthouse.jpg'));

// 5. Purge old screenshot files if they exist
const filesToPurge = [
  path.join(assetsDir, 'banner.webp'),
  path.join(assetsDir, 'images', 'project-hero.jpg'),
  path.join(assetsDir, 'images', 'interior-penthouse.jpg'),
  path.join(rootPreviewDir, 'landing-page-bat-dong-san-demo-48.webp')
];

filesToPurge.forEach(f => {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log(`Purged: ${f}`);
  }
});

console.log('Demo 48 assets organized and purged successfully!');
