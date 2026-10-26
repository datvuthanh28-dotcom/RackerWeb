const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = 'd:/RackerWeb/sites/baby-demo-15/assets/images';
const previewDir = 'd:/RackerWeb/assets/previews';

const items = [
  // 1. Doctor examining child with stethoscope
  {
    dest: path.join(targetDir, 'service-general-pediatrics.jpg'),
    url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&q=80'
  },
  // 2. Mother holding adorable baby in clinic / bright room
  {
    dest: path.join(targetDir, 'hero-pediatric.jpg'),
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1400&q=80'
  },
  // 3. Preview matching hero
  {
    dest: path.join(previewDir, 'baby-demo-15.jpg'),
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80'
  },
  // 4. Vaccination care
  {
    dest: path.join(targetDir, 'service-vaccination.jpg'),
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Nurse_helps_child_with_vaccination_in_a_clinic_during_the_daytime.jpg/1280px-Nurse_helps_child_with_vaccination_in_a_clinic_during_the_daytime.jpg'
  },
  // 5. Sleeping newborn infant checkup
  {
    dest: path.join(targetDir, 'service-newborn.jpg'),
    url: 'https://images.unsplash.com/photo-1544126592-807ade215a0c?w=1200&q=80'
  },
  // 6. Happy healthy toddler
  {
    dest: path.join(targetDir, 'happy-toddler.jpg'),
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&q=80'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(item.dest);
    function fetchUrl(targetUrl) {
      https.get(targetUrl, { headers: { 'User-Agent': 'RackerWeb/1.0 (admin@rackerweb.local)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          console.log(`[FAIL] ${path.basename(item.dest)}: HTTP ${res.statusCode}`);
          file.close();
          if (fs.existsSync(item.dest)) fs.unlinkSync(item.dest);
          resolve(false);
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(item.dest).size;
            console.log(`[DOWNLOADED] ${path.basename(item.dest)} (${size} bytes)`);
            resolve(true);
          });
        });
      }).on('error', (err) => {
        console.log(`[ERROR] ${path.basename(item.dest)}: ${err.message}`);
        resolve(false);
      });
    }
    fetchUrl(item.url);
  });
}

async function run() {
  for (const item of items) {
    await download(item);
  }
  console.log('Done downloading curated pediatric assets.');
}

run();
