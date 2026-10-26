const https = require('https');

const queries = [
  'filetype:bitmap "cá kho"',
  'filetype:bitmap "clay pot" fish OR pork',
  'filetype:bitmap "Vietnamese cuisine" fish',
  'filetype:bitmap "restaurant" interior table "dining room" modern'
];

function search(q) {
  return new Promise(resolve => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=6&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280`;
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(d);
          const pages = json.query ? Object.values(json.query.pages) : [];
          resolve(pages);
        } catch(e) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  for (const q of queries) {
    console.log(`\n=== QUERY: ${q} ===`);
    const pages = await search(q);
    pages.forEach(p => {
      if (p.imageinfo && p.imageinfo[0] && p.imageinfo[0].thumburl) {
        console.log(`- ${p.title}`);
        console.log(`  ${p.imageinfo[0].thumburl}`);
      }
    });
  }
}

run();
