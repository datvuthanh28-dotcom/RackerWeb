const https = require('https');
const fs = require('fs');
const path = require('path');

function searchWikiFiles(query) {
  return new Promise((resolve, reject) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size|mime&format=json';
    https.get(url, { headers: { 'User-Agent': 'RackerWeb/1.0 (https://rackerweb.vn; admin@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.pages) {
            resolve(Object.values(json.query.pages));
          } else {
            resolve([]);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function dl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWeb/1.0 (https://rackerweb.vn; admin@rackerweb.vn)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return dl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode));
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => resolve(fs.statSync(dest).size));
    }).on('error', reject);
  });
}

async function run() {
  const queries = [
    { name: 'service-brake.jpg', q: 'Brembo disc brake caliper rotor' },
    { name: 'emergency-rescue.jpg', q: 'flatbed tow truck car transport' },
    { name: 'service-diagnostics.jpg', q: 'OBD II car diagnostic scanner tool' },
    { name: 'workshop-facility.jpg', q: 'auto repair shop interior hydraulic lifts garage' }
  ];

  for (const item of queries) {
    console.log('\nSearching for:', item.q);
    const pages = await searchWikiFiles(item.q);
    for (const p of pages) {
      if (p.imageinfo && p.imageinfo[0]) {
        const info = p.imageinfo[0];
        console.log(` - ${p.title} (${info.width}x${info.height}): ${info.url}`);
        if (info.mime === 'image/jpeg' && info.width >= 1000) {
          const target = path.resolve('sites/website-garage-o-to-web-98/assets/images', item.name);
          try {
            const size = await dl(info.url, target);
            console.log(`   --> Successfully saved to ${item.name} (${size} bytes)`);
            break; // found good one
          } catch (e) {
            console.error('   Download error:', e.message);
          }
        }
      }
    }
  }
}

run();
