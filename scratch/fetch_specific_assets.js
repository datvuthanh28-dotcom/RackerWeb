const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = 'd:/RackerWeb/sites/website-garage-o-to-web-98/assets/images';

const candidates = [
  {
    name: 'service-brake.jpg',
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80'
  },
  {
    name: 'service-diagnostics.jpg',
    url: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1200&q=80'
  },
  {
    name: 'workshop-bay-highres.jpg',
    url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1200&q=80'
  },
  {
    name: 'service-polishing.jpg',
    url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80'
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
  for (const c of candidates) {
    await download(c);
  }
}

run();
