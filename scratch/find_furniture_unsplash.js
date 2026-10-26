const https = require('https');

// We can query duckduckgo html search for "site:unsplash.com/photos" with specific keywords
function searchDDG(query) {
  return new Promise((resolve) => {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [];
        const reg = /unsplash\.com\/photos\/([a-zA-Z0-9_\-]+)/g;
        let m;
        while ((m = reg.exec(data)) !== null) {
          matches.push(m[1]);
        }
        resolve([...new Set(matches)]);
      });
    }).on('error', () => resolve([]));
  });
}

const topics = [
  { key: 'sofa', query: 'site:unsplash.com/photos scandinavian sofa living room' },
  { key: 'armchair', query: 'site:unsplash.com/photos modern wooden armchair lounge' },
  { key: 'dining_table', query: 'site:unsplash.com/photos scandinavian dining table chairs' },
  { key: 'sideboard', query: 'site:unsplash.com/photos wooden credenza sideboard living room' },
  { key: 'bed', query: 'site:unsplash.com/photos minimalist wooden bed bedroom scandinavian' },
  { key: 'desk', query: 'site:unsplash.com/photos minimalist wooden desk workspace' },
  { key: 'woodworker', query: 'site:unsplash.com/photos woodworking carpenter craftsman timber' }
];

async function run() {
  for (const t of topics) {
    console.log(`\nSearching for: ${t.key}...`);
    const ids = await searchDDG(t.query);
    console.log(`Found IDs for ${t.key}:`, ids.slice(0, 5));
  }
}

run();
