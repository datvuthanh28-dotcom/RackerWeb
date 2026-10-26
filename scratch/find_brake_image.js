const https = require('https');
const fs = require('fs');

const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=Brembo%20caliper&srnamespace=6&format=json&srlimit=10';

https.get(url, { headers: { 'User-Agent': 'RackerWeb/1.0 (admin@rackerweb.local)' } }, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Results:', json.query.search.map(s => s.title));
      
      // Get imageinfo for first 3 files
      const titles = json.query.search.slice(0, 3).map(s => encodeURIComponent(s.title)).join('|');
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${titles}&prop=imageinfo&iiprop=url|size&format=json`;
      https.get(infoUrl, { headers: { 'User-Agent': 'RackerWeb/1.0' } }, (res2) => {
        let d2 = '';
        res2.on('data', c => d2 += c);
        res2.on('end', () => {
          const j2 = JSON.parse(d2);
          for (const p of Object.values(j2.query.pages)) {
            console.log(p.title, p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].url : 'no url');
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  });
});
