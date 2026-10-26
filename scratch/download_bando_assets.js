const fs = require('fs');
const https = require('https');
const path = require('path');

const candidates = [
  // Hero architectural room with solid wood furniture
  { name: 'hero-atelier', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80' },
  // Woodcraft artisan planing timber
  { name: 'craft-artisan', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80' },
  // Wood joinery / mortise / dovetail
  { name: 'craft-joint', url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80' },
  // Solid wood dining table
  { name: 'product-dining-table', url: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80' },
  // Solid wood sculpted lounge chair
  { name: 'product-lounge-chair', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80' },
  // Fluted wooden sideboard / credenza
  { name: 'product-sideboard', url: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80' },
  // Solid wood floating bed frame
  { name: 'product-bed-frame', url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
  // Low tea table / coffee table
  { name: 'product-tea-table', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80' },
  // Wood textures
  { name: 'wood-walnut', url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80' },
  { name: 'wood-oak', url: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80' },
  // Bespoke space living room
  { name: 'space-living-room', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80' },
  // Zen tea room / meditation space
  { name: 'space-tearoom', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80' },
  // Chief artisan architect portrait
  { name: 'architect-portrait', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' }
];

const destDir = path.resolve('scratch/temp_bando_assets');
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
              console.log(`Downloaded (redirect) ${item.name}: ${fs.statSync(dest).size} bytes`);
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
  console.log('All downloads finished.');
}

run();
