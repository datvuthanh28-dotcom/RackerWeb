const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets', 'images');

const items = [
  {
    name: 'saigon-blue-hour.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Saigon_at_Blue_Hour.jpg/1600px-Saigon_at_Blue_Hour.jpg'
  },
  {
    name: 'landmark81-river.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Landmark81_%2849720266378%29.png/1600px-Landmark81_%2849720266378%29.png'
  },
  {
    name: 'saigon-river-view.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/S%C3%B4ng_S%C3%A0i_G%C3%B2n.jpg/1600px-S%C3%B4ng_S%C3%A0i_G%C3%B2n.jpg'
  },
  {
    name: 'thuduc-skyline.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/20210616_Ho_Chi_Minh_City_view_from_Thu_Duc_city.png/1600px-20210616_Ho_Chi_Minh_City_view_from_Thu_Duc_city.png'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, item.name);
    const file = fs.createWriteStream(dest);

    https.get(item.url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.local)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'RackerWebBot/1.0' } }, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Downloaded ${item.name} (${fs.statSync(dest).size} bytes)`);
              resolve();
            });
          });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded ${item.name} (${fs.statSync(dest).size} bytes)`);
            resolve();
          });
        });
      } else {
        reject(new Error(`Status ${res.statusCode} for ${item.url}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const item of items) {
    try {
      await download(item);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
}

main();
