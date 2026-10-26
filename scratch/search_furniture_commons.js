const https = require('https');

const queries = [
  'sofa living room',
  'armchair modern',
  'dining table chairs',
  'wooden credenza',
  'modern bedroom wood',
  'writing desk wooden',
  'woodworking workshop carpentry'
];

function searchCommons(q) {
  return new Promise((resolve, reject) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=6&gsrsearch=${encodeURIComponent(q)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280`;
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (test@rackerweb.local)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          resolve(pages);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', err => resolve([]));
  });
}

async function run() {
  for (const q of queries) {
    console.log(`\n=== Query: ${q} ===`);
    const pages = await searchCommons(q);
    for (const p of pages) {
      if (p.imageinfo && p.imageinfo[0]) {
        const info = p.imageinfo[0];
        if (info.mime && info.mime.startsWith('image/')) {
          console.log(`- [${p.title}]`);
          console.log(`  thumbUrl: ${info.thumburl || info.url}`);
        }
      }
    }
  }
}

run();
