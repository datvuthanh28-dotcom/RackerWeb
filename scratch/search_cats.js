const https = require('https');

const categories = [
  'Category:Scandinavian_design',
  'Category:Contemporary_furniture',
  'Category:Living_rooms',
  'Category:Dining_tables',
  'Category:Sofas',
  'Category:Armchairs',
  'Category:Modern_beds',
  'Category:Desks',
  'Category:Woodworking'
];

function getCategoryMembers(cat) {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=${encodeURIComponent(cat)}&cmtype=file&cmlimit=15&prop=imageinfo&iiprop=url|size&iiurlwidth=1280`;
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (test@rackerweb.local)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const members = json.query ? json.query.categorymembers : [];
          resolve(members);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

function getFileInfo(title) {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280`;
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (test@rackerweb.local)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const page = Object.values(json.query.pages)[0];
          resolve(page && page.imageinfo ? page.imageinfo[0] : null);
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  for (const cat of categories) {
    console.log(`\n=== Category: ${cat} ===`);
    const members = await getCategoryMembers(cat);
    for (const m of members.slice(0, 5)) {
      const info = await getFileInfo(m.title);
      if (info && info.thumburl) {
        console.log(`- ${m.title}`);
        console.log(`  URL: ${info.thumburl}`);
      }
    }
  }
}

run();
