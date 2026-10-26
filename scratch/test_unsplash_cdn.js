const https = require('https');
const fs = require('fs');
const path = require('path');

// Test downloading an interior photo directly from images.unsplash.com
const testUrl = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'; // classic green sofa / interior
const dest = path.join(__dirname, 'test_unsplash_interior.jpg');

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

download(testUrl, dest)
  .then(size => console.log(`SUCCESS! Downloaded ${size} bytes to ${dest}`))
  .catch(err => console.error(`FAILED: ${err.message}`));
