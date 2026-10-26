const https = require('https');

function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size|mime&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.local)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const results = Object.values(pages).map(p => ({
            title: p.title,
            url: p.imageinfo?.[0]?.url,
            width: p.imageinfo?.[0]?.width,
            height: p.imageinfo?.[0]?.height,
            mime: p.imageinfo?.[0]?.mime
          }));
          resolve(results);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  const queries = [
    'Saigon river skyline modern building',
    'Thủ Thiêm skyline river Saigon',
    'Ho Chi Minh City river waterfront skyline',
    'Landmark 81 Saigon river view'
  ];

  for (const q of queries) {
    console.log(`\n=== Query: ${q} ===`);
    const items = await searchCommons(q);
    items.slice(0, 5).forEach((it, i) => {
      console.log(`[${i}] ${it.title} (${it.width}x${it.height})`);
      console.log(`    ${it.url}`);
    });
  }
}

main();
