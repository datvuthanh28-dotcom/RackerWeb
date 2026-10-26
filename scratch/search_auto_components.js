const https = require('https');

async function searchWikimedia(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size`;
  
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) RackerWeb/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          resolve(pages.map(p => ({
            title: p.title,
            url: p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].url : null,
            width: p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].width : 0,
            height: p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].height : 0
          })));
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  console.log('--- Brembo ---');
  const brakes = await searchWikimedia('Brembo');
  console.log(brakes.filter(b => b.url && b.url.match(/\.(jpg|jpeg|png)$/i)).slice(0, 3));

  console.log('--- OBD-II ---');
  const scans = await searchWikimedia('OBD-II');
  console.log(scans.filter(s => s.url && s.url.match(/\.(jpg|jpeg|png)$/i)).slice(0, 3));

  console.log('--- Tow truck ---');
  const tows = await searchWikimedia('flatbed tow truck');
  console.log(tows.filter(t => t.url && t.url.match(/\.(jpg|jpeg|png)$/i)).slice(0, 3));
}

run();
