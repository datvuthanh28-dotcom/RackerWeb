const https = require('https');
const fs = require('fs');
const path = require('path');

const candidates = [
  {
    name: 'service-engine.jpg',
    url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'service-alignment.jpg',
    url: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'service-brake.jpg',
    url: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'service-detailing.jpg',
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'service-diagnostics.jpg',
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'workshop-facility.jpg',
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'engineer-lead.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'emergency-rescue.jpg',
    url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(fs.statSync(dest).size);
      });
    }).on('error', reject);
  });
}

async function run() {
  const destDir = path.resolve('sites/website-garage-o-to-web-98/assets/images');
  for (const c of candidates) {
    const target = path.join(destDir, c.name);
    try {
      const size = await download(c.url, target);
      console.log(`[DOWNLOADED] ${c.name} (${size} bytes)`);
    } catch (e) {
      console.error(`[FAIL] ${c.name}: ${e.message}`);
    }
  }
}

run();
