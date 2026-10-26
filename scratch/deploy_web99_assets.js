const fs = require('fs');
const path = require('path');

const targetDir = 'sites/ban-my-pham-cham-soc-sac-dep-web-99/assets/images';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const copies = [
  { src: 'scratch/temp_web99_assets/hero-derma.jpg', dest: `${targetDir}/hero-derma.jpg` },
  { src: 'scratch/temp_web99_assets/product-serum.jpg', dest: `${targetDir}/product-serum.jpg` },
  { src: 'scratch/temp_web99_assets/dropper-liquid.jpg', dest: `${targetDir}/dropper-liquid.jpg` },
  { src: 'scratch/temp_web99_assets/product-cleanser.jpg', dest: `${targetDir}/product-cleanser.jpg` },
  { src: 'scratch/temp_web99_assets/product-cream.jpg', dest: `${targetDir}/product-cream.jpg` },
  { src: 'scratch/temp_web99_assets/product-sunscreen.jpg', dest: `${targetDir}/product-sunscreen.jpg` },
  { src: 'scratch/temp_web99_assets2/scientist-microscope.jpg', dest: `${targetDir}/scientist-microscope.jpg` },
  { src: 'scratch/temp_web99_assets2/scientist-sample.jpg', dest: `${targetDir}/scientist-sample.jpg` },
  { src: 'scratch/temp_web99_assets2/model-cream-apply.jpg', dest: `${targetDir}/model-cream-apply.jpg` }
];

copies.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${path.basename(dest)}: ${fs.statSync(dest).size} bytes`);
  } else {
    console.error(`Missing source: ${src}`);
  }
});

// Deploy preview image
const previewDest = 'assets/previews/ban-my-pham-cham-soc-sac-dep-web-99.jpg';
fs.copyFileSync('scratch/temp_web99_assets/hero-derma.jpg', previewDest);
console.log('Preview image copied:', fs.statSync(previewDest).size, 'bytes');
