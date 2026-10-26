const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets', 'images');

const items = [
  {
    title: 'File:Ho Chi Minh City Skyline.jpg',
    out: 'hcmc-skyline-day.jpg'
  },
  {
    title: 'File:Ho Chi Minh City - Saigon1324.jpg',
    out: 'saigon-day-waterfront.jpg'
  }
];

function getThumbUrl(title) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&iiurlwidth=1920&format=json`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const page = Object.values(json.query.pages)[0];
          const thumbUrl = page.imageinfo[0].thumburl || page.imageinfo[0].url;
          resolve(thumbUrl);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'RackerWebBot/1.0' } }, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
              resolve();
            });
          });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
            resolve();
          });
        });
      } else {
        reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const item of items) {
    try {
      console.log(`Fetching ${item.title}...`);
      const thumb = await getThumbUrl(item.title);
      await download(thumb, path.join(targetDir, item.out));
    } catch (e) {
      console.error(e);
    }
  }
  console.log('Done!');
}

main();
