const https = require('https');

function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = (json.results || []).map(r => ({
            id: r.id,
            description: r.description || r.alt_description,
            rawUrl: r.urls.raw,
            thumbUrl: r.urls.small
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
    'luxury residential skyscraper waterfront',
    'modern glass tower sunset river',
    'luxury infinity pool rooftop skyline',
    'private cigar lounge wine cellar luxury',
    'modern architecture riverfront skyline'
  ];

  for (const q of queries) {
    console.log(`=== Query: ${q} ===`);
    const items = await searchUnsplash(q);
    items.slice(0, 4).forEach(it => {
      console.log(`ID: ${it.id} | Desc: ${it.description}`);
      console.log(`URL: ${it.rawUrl}&w=1600&auto=format&fit=crop&q=85`);
    });
  }
}

main();
