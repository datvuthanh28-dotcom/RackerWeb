const https = require('https');

const titles = [
  'File:A dental chair in a dentist clinic in North Carolina, United States.jpg',
  'File:Dental chair in a dentist clinic.jpg',
  'File:ITS Dental Chair.jpg',
  'File:Cone Beam CT.jpg',
  'File:Cone-beam computed tomography system.jpg',
  'File:Dental implant.jpg',
  'File:Single crown implant.jpg',
  'File:Dental setup for implants.jpg',
  'File:Invisalign aligner.jpg',
  'File:Dental braces.jpg',
  'File:Comparison - Crowns and veneer.jpg',
  'File:Dental veneer.jpg',
  'File:Dental crown.jpg'
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
    const res = await getInfo(t);
    if (res.info) {
      console.log(`[FOUND] ${t}`);
      console.log(`  Size: ${res.info.width}x${res.info.height}, ${res.info.size} bytes`);
      console.log(`  URL: ${res.info.url}`);
    } else {
      console.log(`[NOT FOUND] ${t}`);
    }
  }
}

run();
