const fs = require('fs');
const https = require('https');
const path = require('path');

const candidates = [
  // 1. Skincare bottles clean aesthetic
  { name: 'hero-derma', url: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=1400&q=80' },
  // 2. Serum with dropper
  { name: 'product-serum', url: 'https://images.unsplash.com/photo-1764694187667-f28a05a52c0e?auto=format&fit=crop&w=1000&q=80' },
  // 3. Dropper liquid
  { name: 'dropper-liquid', url: 'https://images.unsplash.com/photo-1787771206277-a73273485611?auto=format&fit=crop&w=1000&q=80' },
  // 4. Cleanser tube
  { name: 'product-cleanser', url: 'https://images.unsplash.com/photo-1739131285874-8d545cffef95?auto=format&fit=crop&w=1000&q=80' },
  // 5. Anti-aging serum + gel
  { name: 'product-cream', url: 'https://images.unsplash.com/photo-1749599018738-b8fb6c4a83e0?auto=format&fit=crop&w=1000&q=80' },
  // 6. Botanical natural skincare
  { name: 'ingredient-botanical', url: 'https://images.unsplash.com/photo-1682096423780-41ca1b04af68?auto=format&fit=crop&w=1000&q=80' },
  // 7. Clean beauty model
  { name: 'model-portrait', url: 'https://images.unsplash.com/photo-1679046948909-ab47e96082e7?auto=format&fit=crop&w=1000&q=80' },
  // 8. Clinical dermatologist
  { name: 'dermatologist', url: 'https://images.unsplash.com/photo-1661779386497-1f7b9ec4d8f3?auto=format&fit=crop&w=1000&q=80' },
  // 9. Cleanser tubes minimalist
  { name: 'product-sunscreen', url: 'https://images.unsplash.com/photo-1745565610492-b70156cec381?auto=format&fit=crop&w=1000&q=80' }
];

const destDir = path.resolve('scratch/temp_web99_assets');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destDir, `${item.name}.jpg`);
    const file = fs.createWriteStream(dest);
    
    https.get(item.url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, res2 => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Downloaded ${item.name}: ${fs.statSync(dest).size} bytes`);
              resolve();
            });
          });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded ${item.name}: ${fs.statSync(dest).size} bytes`);
            resolve();
          });
        });
      } else {
        reject(new Error(`Status ${res.statusCode} for ${item.url}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const item of candidates) {
    try {
      await downloadFile(item);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
  console.log('Download batch completed.');
}

run();
