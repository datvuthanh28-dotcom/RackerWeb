const https = require('https');

const queries = [
  'filetype:bitmap modern living room sofa',
  'filetype:bitmap "modern sofa" interior',
  'filetype:bitmap Scandinavian armchair',
  'filetype:bitmap "lounge chair" modern',
  'filetype:bitmap "dining table" wooden modern',
  'filetype:bitmap modern wooden sideboard',
  'filetype:bitmap minimalist modern bedroom bed',
  'filetype:bitmap modern wooden writing desk',
  'filetype:bitmap "woodworking" workshop craftsman'
];

function search(q) {
  return new Promise(resolve => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280`;
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
        const mime = p.imageinfo[0].mime || '';
        if (mime.includes('image/')) {
          console.log(`- ${p.title}`);
          console.log(`  ${p.imageinfo[0].thumburl}`);
        }
      }
    });
  }
}

run();
