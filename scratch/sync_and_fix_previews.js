const fs = require('fs');
const path = require('path');

console.log('--- Synchronizing and Purging All Outdated Preview Screenshots ---');

const tasks = [
  {
    id: 'food-demo-12',
    src: 'sites/food-demo-12/assets/images/hero-claypot.jpg',
    dest: 'assets/previews/food-demo-12.jpg',
    removeOld: 'assets/previews/food-demo-12.webp'
  },
  {
    id: 'tra-sua-demo-41',
    src: 'sites/tra-sua-demo-41/assets/images/hero-boba.jpg',
    dest: 'assets/previews/tra-sua-demo-41.jpg',
    removeOld: 'assets/previews/tra-sua-demo-41.webp'
  },
  {
    id: 'food-demo-07',
    src: 'sites/food-demo-07/assets/images/organic-hero.jpg',
    dest: 'assets/previews/food-demo-07.jpg',
    removeOld: 'assets/previews/food-demo-07.webp'
  },
  {
    id: 'cua-hang-banh-ngot-demo-37',
    src: 'sites/cua-hang-banh-ngot-demo-37/assets/bakery-counter.jpg',
    dest: 'assets/previews/cua-hang-banh-ngot-demo-37.jpg',
    removeOld: 'assets/previews/cua-hang-banh-ngot-demo-37.webp'
  },
  {
    id: 'website-ban-xe-hoi-demo-113',
    src: 'sites/website-ban-xe-hoi-demo-113/assets/images/hero-showroom.jpg',
    dest: 'assets/previews/website-ban-xe-hoi-demo-113.jpg',
    removeOld: 'assets/previews/website-ban-xe-hoi-demo-113.webp'
  },
  {
    id: 'website-bat-dong-san-demo-96',
    src: 'assets/previews/website-bat-dong-san-demo-96.jpg',
    dest: 'assets/previews/website-bat-dong-san-demo-96.jpg',
    removeOld: 'assets/previews/website-bat-dong-san-demo-96.webp'
  }
];

// Copy authentic images and delete outdated screenshot webp
for (const t of tasks) {
  if (t.src !== t.dest) {
    const srcPath = path.resolve(t.src);
    const destPath = path.resolve(t.dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[COPIED] ${t.src} -> ${t.dest} (${fs.statSync(destPath).size} bytes)`);
    } else {
      console.error(`[ERROR] Source not found: ${t.src}`);
    }
  }

  if (t.removeOld) {
    const oldPath = path.resolve(t.removeOld);
    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
      console.log(`[DELETED] Outdated screenshot: ${t.removeOld}`);
    }
  }
}

// Update data/themes.json
const themesPath = path.resolve('data/themes.json');
const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));

const all13 = [
  'cosmetic-demo-01',
  'furniture-demo-03',
  'cosmetic-demo-05',
  'food-demo-07',
  'food-demo-12',
  'spa-demo-18',
  'nha-hang-quan-an-halu-demo-28',
  'nha-khoa-aspen-demo-34',
  'cua-hang-banh-ngot-demo-37',
  'tra-sua-demo-41',
  'landing-page-bat-dong-san-demo-48',
  'website-bat-dong-san-demo-96',
  'website-ban-xe-hoi-demo-113'
];

for (const id of all13) {
  const item = themes.find(t => t.id === id);
  if (item) {
    item.designStatus = 'custom-verified';
    // ensure preview matches the jpg file if jpg exists
    const jpgCandidate = `assets/previews/${id}.jpg`;
    const webpCandidate = `assets/previews/${id}.webp`;
    if (fs.existsSync(path.resolve(jpgCandidate))) {
      item.previewImage = jpgCandidate;
    } else if (fs.existsSync(path.resolve(webpCandidate))) {
      item.previewImage = webpCandidate;
    }
    console.log(`[THEMES.JSON] ${id} -> previewImage: ${item.previewImage}, designStatus: ${item.designStatus}`);
  }
}

fs.writeFileSync(themesPath, JSON.stringify(themes, null, 2), 'utf8');
console.log('[OK] data/themes.json written.');

// Update js/themes-data.js
const jsDataPath = path.resolve('js/themes-data.js');
let jsContent = fs.readFileSync(jsDataPath, 'utf8');
if (jsContent.includes('window.THEMES_DATA =')) {
  const jsonStart = jsContent.indexOf('[');
  const jsonEnd = jsContent.lastIndexOf(']');
  if (jsonStart !== -1 && jsonEnd !== -1) {
    const arrayJson = jsContent.slice(jsonStart, jsonEnd + 1);
    const parsed = JSON.parse(arrayJson);
    for (const id of all13) {
      const idx = parsed.findIndex(t => t.id === id);
      if (idx !== -1) {
        parsed[idx].designStatus = 'custom-verified';
        const jpgCandidate = `assets/previews/${id}.jpg`;
        const webpCandidate = `assets/previews/${id}.webp`;
        if (fs.existsSync(path.resolve(jpgCandidate))) {
          parsed[idx].previewImage = jpgCandidate;
        } else if (fs.existsSync(path.resolve(webpCandidate))) {
          parsed[idx].previewImage = webpCandidate;
        }
      }
    }
    const prefix = jsContent.slice(0, jsonStart);
    const suffix = jsContent.slice(jsonEnd + 1);
    fs.writeFileSync(jsDataPath, prefix + JSON.stringify(parsed, null, 2) + suffix, 'utf8');
    console.log('[OK] js/themes-data.js written.');
  }
}

console.log('🎉 Synchronized all 13 sites in catalogs and preview assets.');
