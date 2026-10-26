const fs = require('fs');
const https = require('https');
const path = require('path');

const candidates = [
  { name: 'scientist-microscope', url: 'https://images.unsplash.com/photo-1707944746508-f2dd7b88ac1b?auto=format&fit=crop&w=1000&q=80' },
  { name: 'scientist-sample', url: 'https://images.unsplash.com/photo-1760074032615-2e35d8c5e5ae?auto=format&fit=crop&w=1000&q=80' },
  { name: 'model-glow', url: 'https://plus.unsplash.com/premium_photo-1679046949484-b8a89703a7a6?auto=format&fit=crop&w=1000&q=80' },
  { name: 'model-cream-apply', url: 'https://plus.unsplash.com/premium_photo-1679750866883-b1c549f65da9?auto=format&fit=crop&w=1000&q=80' }
];

const destDir = path.resolve('scratch/temp_web99_assets2');
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
