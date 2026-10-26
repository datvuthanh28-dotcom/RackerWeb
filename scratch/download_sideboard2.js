const https = require('https');
const fs = require('fs');
const path = require('path');

const dest = path.join(__dirname, 'furniture_candidates', 'sideboard-candidate2.jpg');
const url = 'https://images.unsplash.com/photo-1540759772348-12e90305e8f4?auto=format&fit=crop&w=1200&q=80';

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

download(url, dest)
  .then(s => console.log('Downloaded candidate2:', s))
  .catch(e => console.error(e.message));
