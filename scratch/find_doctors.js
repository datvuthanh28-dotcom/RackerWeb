const https = require('https');

async function searchCategory(cat) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${encodeURIComponent(cat)}&cmtype=file&cmlimit=25&prop=imageinfo&iiprop=url|size|mime&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.query ? json.query.categorymembers : []);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const cats = ['Physicians in white coats', 'Dentists at work', 'Stomatologists'];
  for (const c of cats) {
    const list = await searchCategory(c);
    console.log(`\n=== Category: ${c} (${list.length} files) ===`);
    for (const item of list.slice(0, 5)) {
      console.log(`- ${item.title}`);
    }
  }
}

run();
