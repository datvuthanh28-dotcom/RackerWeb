const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('sites/cosmetic-demo-01');
console.log('--- Verifying Cosmetic Demo 01 (#MS01 - Lumière Beauty) ---');

// 1. Check HTML, CSS, JS files
const requiredFiles = [
  'index.html',
  'san-pham.html',
  'gioi-thieu.html',
  'lien-he.html',
  'css/style.css',
  'js/app.js'
];

let allOk = true;

for (const rel of requiredFiles) {
  const full = path.join(siteDir, rel);
  if (!fs.existsSync(full)) {
    console.error(`MISSING FILE: ${rel}`);
    allOk = false;
  } else {
    console.log(`[OK] File exists: ${rel} (${fs.statSync(full).size} bytes)`);
  }
}

// 2. Scan for references to purged assets
const purgedAssets = ['banner.jpg', 'banner.webp'];
const filesToScan = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html', 'css/style.css', 'js/app.js'];

for (const f of filesToScan) {
  const content = fs.readFileSync(path.join(siteDir, f), 'utf8');
  for (const purged of purgedAssets) {
    if (content.includes(purged)) {
      console.error(`[ERROR] File ${f} still contains reference to purged asset: ${purged}`);
      allOk = false;
    }
  }
}

// 3. Scan all referenced image files and verify they exist on disk
for (const f of filesToScan) {
  const content = fs.readFileSync(path.join(siteDir, f), 'utf8');
  // Match src="..." or url('...') or img:'...'
  const regex = /(?:src=["']|url\(["']?|img:\s*['"])([^"')]+?\.(?:jpg|jpeg|png|webp|svg))["']?/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const rawUrl = match[1];
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) continue;
    // Resolve path relative to file location
    const filePath = path.resolve(path.join(siteDir, path.dirname(f)), rawUrl);
    if (!fs.existsSync(filePath)) {
      console.error(`[ERROR] In ${f}: Referenced asset not found on disk: ${rawUrl} -> ${filePath}`);
      allOk = false;
    } else {
      const stats = fs.statSync(filePath);
      if (stats.size === 0) {
        console.error(`[ERROR] In ${f}: Empty asset file: ${rawUrl}`);
        allOk = false;
      }
    }
  }
}

// 4. Check preview image
const previewPath = path.resolve('assets/previews/cosmetic-demo-01.jpg');
if (!fs.existsSync(previewPath)) {
  console.error(`[ERROR] Preview image not found: ${previewPath}`);
  allOk = false;
} else {
  console.log(`[OK] Preview image verified: ${previewPath} (${fs.statSync(previewPath).size} bytes)`);
}

// 5. Update data/themes.json and js/themes-data.js
if (allOk) {
  console.log('--- Updating data/themes.json & js/themes-data.js ---');
  
  // themes.json
  const themesPath = path.resolve('data/themes.json');
  const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));
  const themeIndex = themes.findIndex(t => t.id === 'cosmetic-demo-01');
  if (themeIndex !== -1) {
    themes[themeIndex].previewImage = 'assets/previews/cosmetic-demo-01.jpg';
    themes[themeIndex].designStatus = 'custom-verified';
    fs.writeFileSync(themesPath, JSON.stringify(themes, null, 2), 'utf8');
    console.log('[OK] data/themes.json updated successfully.');
  } else {
    console.warn('[WARN] MS01 not found in data/themes.json');
  }

  // js/themes-data.js
  const jsDataPath = path.resolve('js/themes-data.js');
  let jsContent = fs.readFileSync(jsDataPath, 'utf8');
  if (jsContent.includes('window.THEMES_DATA =')) {
    const jsonStart = jsContent.indexOf('[');
    const jsonEnd = jsContent.lastIndexOf(']');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      const arrayJson = jsContent.slice(jsonStart, jsonEnd + 1);
      const parsed = JSON.parse(arrayJson);
      const idx = parsed.findIndex(t => t.id === 'cosmetic-demo-01');
      if (idx !== -1) {
        parsed[idx].previewImage = 'assets/previews/cosmetic-demo-01.jpg';
        parsed[idx].designStatus = 'custom-verified';
        const prefix = jsContent.slice(0, jsonStart);
        const suffix = jsContent.slice(jsonEnd + 1);
        fs.writeFileSync(jsDataPath, prefix + JSON.stringify(parsed, null, 2) + suffix, 'utf8');
        console.log('[OK] js/themes-data.js updated successfully.');
      }
    }
  }

  console.log('🎉 #MS01 (cosmetic-demo-01 - Lumière Beauty) 100% VERIFIED & SYNCHRONIZED!');
} else {
  console.error('❌ Verification failed for #MS01.');
}
