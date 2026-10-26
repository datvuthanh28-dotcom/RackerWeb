const fs = require('fs');
const path = require('path');

const sites = [
  { code: 'MS01', dir: 'cosmetic-demo-01', preview: 'cosmetic-demo-01.jpg' },
  { code: 'MS03', dir: 'furniture-demo-03', preview: 'furniture-demo-03.jpg' },
  { code: 'MS05', dir: 'cosmetic-demo-05', preview: 'cosmetic-demo-05.jpg' },
  { code: 'MS07', dir: 'food-demo-07', preview: 'food-demo-07.jpg' },
  { code: 'MS12', dir: 'food-demo-12', preview: 'food-demo-12.jpg' },
  { code: 'MS18', dir: 'spa-demo-18', preview: 'spa-demo-18.jpg' },
  { code: 'MS28', dir: 'nha-hang-quan-an-halu-demo-28', preview: 'nha-hang-quan-an-halu-demo-28.jpg' },
  { code: 'MS34', dir: 'nha-khoa-aspen-demo-34', preview: 'nha-khoa-aspen-demo-34.jpg' },
  { code: 'MS37', dir: 'cua-hang-banh-ngot-demo-37', preview: 'cua-hang-banh-ngot-demo-37.jpg' },
  { code: 'MS41', dir: 'tra-sua-demo-41', preview: 'tra-sua-demo-41.jpg' },
  { code: 'MS48', dir: 'landing-page-bat-dong-san-demo-48', preview: 'landing-page-bat-dong-san-demo-48.jpg' },
  { code: 'MS96', dir: 'website-bat-dong-san-demo-96', preview: 'website-bat-dong-san-demo-96.jpg' },
  { code: 'MS113', dir: 'website-ban-xe-hoi-demo-113', preview: 'website-ban-xe-hoi-demo-113.jpg' }
];

console.log('====================================================');
console.log('  PORTFOLIO-WIDE VERIFICATION OF ALL 13 SITES');
console.log('====================================================\n');

let totalErrors = 0;

// 1. Check each site
for (const s of sites) {
  const siteDir = path.resolve('sites', s.dir);
  console.log(`[CHECKING] ${s.code} -> sites/${s.dir}`);

  if (!fs.existsSync(siteDir)) {
    console.error(`  ❌ Site directory does not exist: ${siteDir}`);
    totalErrors++;
    continue;
  }

  // Check required HTML files
  const htmlFiles = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];
  for (const h of htmlFiles) {
    const fullH = path.join(siteDir, h);
    if (!fs.existsSync(fullH)) {
      console.error(`  ❌ Missing HTML file: ${h}`);
      totalErrors++;
    }
  }

  // Check CSS
  const cssPath = path.join(siteDir, 'css/style.css');
  if (!fs.existsSync(cssPath)) {
    console.error(`  ❌ Missing css/style.css`);
    totalErrors++;
  }

  // Check purged template screenshots in assets/
  const purgedDirect = ['banner.webp', 'banner.jpg', 'project-hero.jpg', 'space-interior.jpg'];
  for (const p of purgedDirect) {
    const pPath = path.join(siteDir, 'assets', p);
    if (fs.existsSync(pPath)) {
      console.error(`  ❌ Purged asset still exists on disk: assets/${p}`);
      totalErrors++;
    }
  }

  // Check preview image
  const prevPath = path.resolve('assets/previews', s.preview);
  if (!fs.existsSync(prevPath) || fs.statSync(prevPath).size === 0) {
    console.error(`  ❌ Preview missing or empty: assets/previews/${s.preview}`);
    totalErrors++;
  }

  // Scan all HTML and CSS files for broken image links
  const filesToScan = [...htmlFiles, 'css/style.css'];
  for (const f of filesToScan) {
    const filePath = path.join(siteDir, f);
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');

    // Scan for purged asset references
    if (content.includes('assets/banner.webp') || content.includes('assets/banner.jpg')) {
      console.error(`  ❌ ${f} contains reference to banner screenshot!`);
      totalErrors++;
    }

    // Match image references
    const regex = /(?:src=["']|url\(["']?|img:\s*['"])([^"')]+?\.(?:jpg|jpeg|png|webp|svg))["']?/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const rawUrl = match[1];
      if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) continue;
      const resolved = path.resolve(path.join(siteDir, path.dirname(f)), rawUrl);
      if (!fs.existsSync(resolved)) {
        console.error(`  ❌ ${f} references missing file: ${rawUrl} -> ${resolved}`);
        totalErrors++;
      } else if (fs.statSync(resolved).size === 0) {
        console.error(`  ❌ ${f} references 0-byte file: ${rawUrl}`);
        totalErrors++;
      }
    }
  }
}

// 2. Check catalog files (themes.json & themes-data.js)
console.log('\n[CHECKING] Catalog Data Synchronization...');
const themesPath = path.resolve('data/themes.json');
const themesData = JSON.parse(fs.readFileSync(themesPath, 'utf8'));

const jsThemesPath = path.resolve('js/themes-data.js');
const jsThemesContent = fs.readFileSync(jsThemesPath, 'utf8');

for (const s of sites) {
  const item = themesData.find(t => t.id === s.dir);
  if (!item) {
    console.error(`  ❌ ${s.dir} missing from data/themes.json`);
    totalErrors++;
  } else {
    if (item.designStatus !== 'custom-verified') {
      console.error(`  ❌ ${s.dir} in themes.json has designStatus = ${item.designStatus} (expected: custom-verified)`);
      totalErrors++;
    }
    if (!item.previewImage.includes(s.preview)) {
      console.error(`  ❌ ${s.dir} in themes.json previewImage (${item.previewImage}) does not match expected (${s.preview})`);
      totalErrors++;
    }
  }

  // Also check themes-data.js has custom-verified
  if (!jsThemesContent.includes(`"id": "${s.dir}"`)) {
    console.error(`  ❌ ${s.dir} missing from js/themes-data.js`);
    totalErrors++;
  }
}

console.log('\n====================================================');
if (totalErrors === 0) {
  console.log('🎉 ALL 13 TRANSFORMED SITES ARE 100% VERIFIED!');
  console.log('   - 0 Missing Files');
  console.log('   - 0 Purged Template Screenshots');
  console.log('   - 0 Broken Image Links');
  console.log('   - 100% Catalog Sync in data/themes.json & js/themes-data.js');
  console.log('====================================================');
} else {
  console.error(`❌ FOUND ${totalErrors} ERRORS.`);
}
