const https = require('https');

function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1600&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const results = Object.values(pages)
            .filter(p => p.imageinfo?.[0]?.mime?.startsWith('image/'))
            .map(p => ({
              title: p.title,
              url: p.imageinfo?.[0]?.thumburl || p.imageinfo?.[0]?.url,
              width: p.imageinfo?.[0]?.width,
              height: p.imageinfo?.[0]?.height
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
    'rooftop infinity pool skyline',
    'luxury residential building glass balcony',
    'modern waterfront residential building',
    'cigar lounge leather wine'
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
