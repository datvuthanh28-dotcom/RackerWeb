const fs = require('fs');
const https = require('https');
const path = require('path');

const candidates = [
  // 3 Wood grains
  { name: 'wood-oak', url: 'https://images.unsplash.com/photo-1677338003679-b422eb979c5d?auto=format&fit=crop&w=1000&q=80' },
  { name: 'wood-teak', url: 'https://images.unsplash.com/photo-1636846882019-bbdc125bb4bb?auto=format&fit=crop&w=1000&q=80' },
  { name: 'wood-walnut', url: 'https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?auto=format&fit=crop&w=1000&q=80' },
  // Furniture pieces
  { name: 'product-chair', url: 'https://images.unsplash.com/photo-1673395522841-296378daa68a?auto=format&fit=crop&w=1000&q=80' },
  { name: 'product-sideboard', url: 'https://images.unsplash.com/photo-1758974782657-e5ada4b01c3c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'product-bed', url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80' },
  { name: 'product-bed-minimal', url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1000&q=80' },
  // Workshop craftsmanship
  { name: 'craft-carpenter', url: 'https://images.unsplash.com/photo-1779031242515-205111711b23?auto=format&fit=crop&w=1200&q=80' }
];

const destDir = path.resolve('scratch/temp_bando_assets3');
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
}

run();
