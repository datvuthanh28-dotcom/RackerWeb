const https = require('https');

const queries = [
  'modern living room sofa interior',
  'IKEA sofa',
  'modern armchair wood',
  'wooden dining table interior',
  'modern credenza',
  'minimalist bedroom interior',
  'modern wooden desk interior',
  'carpenter woodworking workshop wood'
];

function search(q) {
  return new Promise(resolve => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280`;
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
        console.log(`- ${p.title}: ${p.imageinfo[0].thumburl}`);
      }
    });
  }
}

run();
