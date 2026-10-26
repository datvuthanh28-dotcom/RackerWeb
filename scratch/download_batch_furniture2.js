const https = require('https');
const fs = require('fs');
const path = require('path');

const candidatesDir = path.join(__dirname, 'furniture_candidates');

const list = [
  {
    name: 'bed-sanctuary.jpg',
    url: 'https://images.unsplash.com/photo-1788217023349-ad7763845844?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'table-oslo.jpg',
    url: 'https://images.unsplash.com/photo-1791692052698-72e55c12eb78?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'sideboard-oak.jpg',
    url: 'https://images.unsplash.com/photo-1572293898533-65278946f121?auto=format&fit=crop&w=1200&q=80'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          resolve(stats.size);
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of list) {
    const dest = path.join(candidatesDir, item.name);
    try {
      const size = await download(item.url, dest);
      console.log(`Downloaded ${item.name}: ${size} bytes`);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
}

run();
