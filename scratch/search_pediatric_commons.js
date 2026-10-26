const https = require('https');

const queries = ['pediatrician baby', 'pediatric examination infant', 'child vaccination clinic'];

async function search(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&format=json&srlimit=8`;
  return new Promise(resolve => {
    https.get(url, { headers: { 'User-Agent': 'RackerWeb/1.0 (admin@rackerweb.local)' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          resolve(j.query.search.map(s => s.title));
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  for (const q of queries) {
    console.log(`=== Query: ${q} ===`);
    const titles = await search(q);
    console.log(titles);
    if (titles.length > 0) {
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${titles.slice(0, 3).map(encodeURIComponent).join('|')}&prop=imageinfo&iiprop=url&format=json`;
      https.get(infoUrl, { headers: { 'User-Agent': 'RackerWeb/1.0' } }, res => {
        let d2 = '';
        res.on('data', c => d2 += c);
        res.on('end', () => {
          const j2 = JSON.parse(d2);
          for (const p of Object.values(j2.query.pages)) {
            console.log(p.title, p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].url : 'no url');
          }
        });
      });
    }
  }
}

run();
