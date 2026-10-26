const https = require('https');

function extractPhotoIds(tag) {
  return new Promise((resolve) => {
    const url = `https://unsplash.com/s/photos/${tag}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [];
        const reg = /https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9_\-]+)/g;
        let m;
        while ((m = reg.exec(data)) !== null) {
          matches.push(m[1]);
        }
        resolve([...new Set(matches)]);
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const tags = ['wooden-bed', 'coffee-table', 'sideboard-living-room'];
  for (const t of tags) {
    console.log(`\nFetching IDs for ${t}...`);
    const ids = await extractPhotoIds(t);
    console.log(`Found ${ids.length} photo IDs:`, ids.slice(0, 8));
  }
}

run();
