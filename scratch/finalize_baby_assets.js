const fs = require('fs');
const path = require('path');

const imgDir = 'd:/RackerWeb/sites/baby-demo-15/assets/images';
const previewDir = 'd:/RackerWeb/assets/previews';
const scratchDir = 'd:/RackerWeb/scratch';

// 1. Deploy hero & preview from pediatric-care-2.jpg
fs.copyFileSync(path.join(scratchDir, 'pediatric-care-2.jpg'), path.join(imgDir, 'hero-pediatric.jpg'));
fs.copyFileSync(path.join(scratchDir, 'pediatric-care-2.jpg'), path.join(previewDir, 'baby-demo-15.jpg'));
console.log('Deployed hero-pediatric.jpg & assets/previews/baby-demo-15.jpg');

// 2. Deploy neonatal & general pediatrics from pediatric-care-1.jpg
fs.copyFileSync(path.join(scratchDir, 'pediatric-care-1.jpg'), path.join(imgDir, 'service-general-pediatrics.jpg'));
console.log('Deployed service-general-pediatrics.jpg');

// 3. Check all assets in baby-demo-15/assets/images
console.log('\nFinal assets in baby-demo-15/assets/images:');
fs.readdirSync(imgDir).forEach(f => {
  const sz = fs.statSync(path.join(imgDir, f)).size;
  console.log(` - ${f} (${Math.round(sz/1024)} KB)`);
});
