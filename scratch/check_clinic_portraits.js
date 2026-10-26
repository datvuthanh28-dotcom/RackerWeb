const https = require('https');

const titles = [
  'File:Team Mildenhall Dental Clinic- Bright smiles lead to mission success (4967541).jpg',
  'File:Dental clinic keeps JB Charleston - Air Base smiling 140416-F-EV310-088.jpg',
  'File:Dental clinic keeps JB Charleston - Air Base smiling 140416-F-EV310-206.jpg',
  'File:Dental clinic keeps JB Charleston - Air Base smiling 140416-F-EV310-207.jpg'
];

async function getInfo(title) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|mime&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const page = Object.values(json.query.pages)[0];
          if (page && page.imageinfo && page.imageinfo[0]) {
            resolve({ title, info: page.imageinfo[0] });
          } else {
            resolve({ title, error: 'no info' });
          }
        } catch (e) {
          resolve({ title, error: e.message });
        }
      });
    }).on('error', e => resolve({ title, error: e.message }));
  });
}

async function run() {
  for (const t of titles) {
    const r = await getInfo(t);
    if (r.info) {
      console.log(`[FOUND] ${t} -> ${r.info.width}x${r.info.height}, ${r.info.size} bytes`);
      console.log(`  ${r.info.url}`);
    }
  }
}

run();
