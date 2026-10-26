const fs = require('fs');
const path = require('path');

const targetDir = 'sites/ban-do-noi-that/assets/images';
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

const copies = [
  { src: 'scratch/temp_bando_assets3/craft-carpenter.jpg', dest: `${targetDir}/craft-carpenter.jpg` },
  { src: 'scratch/temp_bando_assets2/solid-dining-table.jpg', dest: `${targetDir}/product-table.jpg` },
  { src: 'scratch/temp_bando_assets3/product-chair.jpg', dest: `${targetDir}/product-chair.jpg` },
  { src: 'scratch/temp_bando_assets3/product-sideboard.jpg', dest: `${targetDir}/product-sideboard.jpg` },
  { src: 'scratch/temp_bando_assets3/product-bed.jpg', dest: `${targetDir}/product-bed.jpg` },
  { src: 'scratch/temp_bando_assets2/sculpted-wood-chair.jpg', dest: `${targetDir}/product-stool.jpg` },
  { src: 'scratch/temp_bando_assets3/wood-oak.jpg', dest: `${targetDir}/wood-grain-walnut.jpg` },
  { src: 'scratch/temp_bando_assets3/wood-walnut.jpg', dest: `${targetDir}/wood-grain-spalted.jpg` },
  { src: 'scratch/temp_bando_assets2/architect-artisan.jpg', dest: `${targetDir}/architect-portrait.jpg` }
];

copies.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${path.basename(dest)}: ${fs.statSync(dest).size} bytes`);
  } else {
    console.error(`Missing source: ${src}`);
  }
});

// Also ensure hero-atelier.jpg and preview exist
console.log('hero-atelier:', fs.statSync(`${targetDir}/hero-atelier.jpg`).size, 'bytes');
console.log('preview:', fs.statSync('assets/previews/ban-do-noi-that.jpg').size, 'bytes');
