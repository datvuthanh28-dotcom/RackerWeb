const https = require('https');
const fs = require('fs');
const path = require('path');

const candidatesDir = path.join(__dirname, 'furniture_candidates');
if (!fs.existsSync(candidatesDir)) {
  fs.mkdirSync(candidatesDir, { recursive: true });
}

const list = [
  {
    name: 'sofa-astrid.jpg',
    url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'chair-bergen.jpg',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'dining-table.jpg',
    url: 'https://images.unsplash.com/photo-1742729118876-fcd170cf5be8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'bed-sanctuary.jpg',
    url: 'https://images.unsplash.com/photo-1652882860902-7c6b0f88ef23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'desk-nordic.jpg',
    url: 'https://images.unsplash.com/photo-1623177623442-979c1e42c255?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'workshop-craft.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Craftsman_shaping_wooden_details_in_workshop_closeup.jpg/1280px-Craftsman_shaping_wooden_details_in_workshop_closeup.jpg'
  },
  {
    name: 'workshop-carpentry.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Craftsman_shaping_wood_at_a_workshop_with_precision_and_skill_during_the_daytime.jpg/1280px-Craftsman_shaping_wood_at_a_workshop_with_precision_and_skill_during_the_daytime.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          resolve(stats.size);
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of list) {
    const dest = path.join(candidatesDir, item.name);
    try {
      const size = await download(item.url, dest);
      console.log(`Downloaded ${item.name}: ${size} bytes`);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
}

run();
