const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = 'd:/RackerWeb/sites/website-garage-o-to-web-98/assets/images';

// 1. Rename existing assets to match true content
const renames = [
  { old: 'service-brake.jpg', new: 'service-tuning.jpg' },
  { old: 'service-diagnostics.jpg', new: 'customer-car-bmw.jpg' }
];

renames.forEach(r => {
  const oldPath = path.join(targetDir, r.old);
  const newPath = path.join(targetDir, r.new);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${r.old} -> ${r.new}`);
  }
});

// Remove bad images
['emergency-rescue.jpg', 'workshop-facility.jpg'].forEach(bad => {
  const badPath = path.join(targetDir, bad);
  if (fs.existsSync(badPath)) {
    fs.unlinkSync(badPath);
    console.log(`Deleted bad image ${bad}`);
  }
});

// Targeted new downloads
const downloads = [
  // Red Brembo brake caliper and drilled rotor
  {
    name: 'service-brake.jpg',
    url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80'
  },
  // Paint correction machine polisher for detailing
  {
    name: 'service-detailing-polishing.jpg',
    url: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=80'
  },
  // Automotive diagnostic scan tool / engine diagnostics
  {
    name: 'service-diagnostics.jpg',
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80'
  },
  // Modern dyno room / precision workshop facility
  {
    name: 'workshop-facility.jpg',
    url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?w=1200&q=80'
  },
  // Modern vehicle recovery / road rescue support
  {
    name: 'emergency-rescue.jpg',
    url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80'
  },
  // Detailing Before (swirl marks on paint)
  {
    name: 'detail-before.jpg',
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80'
  },
  // Detailing After (gloss mirror ceramic reflection)
  {
    name: 'detail-after.jpg',
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, item.name);
    const file = fs.createWriteStream(dest);

    function fetchUrl(targetUrl) {
      https.get(targetUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          console.log(`[FAIL] ${item.name}: HTTP ${res.statusCode}`);
          file.close();
          if (fs.existsSync(dest)) fs.unlinkSync(dest);
          resolve(false);
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(dest).size;
            console.log(`[DOWNLOADED] ${item.name} (${size} bytes)`);
            resolve(true);
          });
        });
      }).on('error', (err) => {
        console.log(`[ERROR] ${item.name}: ${err.message}`);
        resolve(false);
      });
    }

    fetchUrl(item.url);
  });
}

async function run() {
  for (const item of downloads) {
    await download(item);
  }
  console.log('All downloads finished.');
}

run();
