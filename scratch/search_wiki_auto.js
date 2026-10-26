const https = require('https');

function searchWiki(query) {
  return new Promise((resolve, reject) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURIComponent(query) + '&srnamespace=6&format=json';
    https.get(url, { headers: { 'User-Agent': 'RackerWeb/1.0 (https://rackerweb.vn; contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.query.search.slice(0, 6));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function getFileUrl(title) {
  return new Promise((resolve, reject) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(title) + '&prop=imageinfo&iiprop=url|size|mime&format=json';
    https.get(url, { headers: { 'User-Agent': 'RackerWeb/1.0 (https://rackerweb.vn; contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const page = Object.values(pages)[0];
          if (page.imageinfo && page.imageinfo[0]) {
            resolve(page.imageinfo[0]);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const categories = [
    { label: 'engine', q: 'mechanic engine repair car workshop' },
    { label: 'alignment', q: 'wheel alignment automotive garage' },
    { label: 'brake', q: 'car disc brake caliper rotor' },
    { label: 'detailing', q: 'car paint polishing buffer detailing' },
    { label: 'diagnostics', q: 'OBD-II car computer diagnostic scanner' },
    { label: 'facility', q: 'modern car service workshop hydraulic lift' },
    { label: 'rescue', q: 'flatbed tow truck car carrier rescue' }
  ];

  for (const c of categories) {
    console.log(`\n=== Category: ${c.label} ===`);
    const results = await searchWiki(c.q);
    for (const r of results) {
      const info = await getFileUrl(r.title);
      if (info && (info.mime === 'image/jpeg' || info.mime === 'image/png')) {
        console.log(`- ${r.title} | ${info.mime} | ${info.width}x${info.height} | ${info.url}`);
      }
    }
  }
}

run();
