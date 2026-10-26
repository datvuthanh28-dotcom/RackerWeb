const https = require('https');

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query + ' filetype:bitmap')}&gsrlimit=12&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.query || !json.query.pages) return resolve([]);
          const results = Object.values(json.query.pages).map(p => {
            const info = p.imageinfo ? p.imageinfo[0] : null;
            return {
              title: p.title,
              url: info ? info.url : null,
              width: info ? info.width : 0,
              height: info ? info.height : 0,
              mime: info ? info.mime : ''
            };
          }).filter(x => x.url && (x.mime === 'image/jpeg' || x.mime === 'image/png') && x.width >= 600);
          resolve(results);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const queries = [
    'dental clinic modern operatory',
    'dental implant model',
    'clear dental aligners teeth',
    'dental veneer porcelain',
    'dentist portrait lab coat',
    'female dentist portrait medical',
    'dental cone beam computed tomography'
  ];

  for (const q of queries) {
    console.log(`\n=== Query: ${q} ===`);
    try {
      const results = await searchCommons(q);
      for (const r of results.slice(0, 4)) {
        console.log(`- [${r.width}x${r.height}] ${r.title}`);
        console.log(`  ${r.url}`);
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}

run();
