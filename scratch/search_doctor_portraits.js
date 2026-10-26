const https = require('https');

async function searchCommons(q) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&srlimit=15&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.query ? json.query.search : []);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const queries = [
    'doctor white coat portrait smiling',
    'female doctor smiling lab coat',
    'dentist dental clinic smiling patient'
  ];
  for (const q of queries) {
    const list = await searchCommons(q);
    console.log(`\n=== Query: ${q} ===`);
    for (const item of list.slice(0, 6)) {
      console.log(`- ${item.title}`);
    }
  }
}

run();
