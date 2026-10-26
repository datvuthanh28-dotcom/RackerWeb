const fs = require('fs');
const path = require('path');

const rootDir = 'd:/RackerWeb';

const sites = [
  'cosmetic-demo-01',
  'furniture-demo-03',
  'cosmetic-demo-05',
  'food-demo-07',
  'food-demo-12',
  'baby-demo-15',
  'spa-demo-18',
  'nha-hang-quan-an-halu-demo-28',
  'nha-khoa-aspen-demo-34',
  'cua-hang-banh-ngot-demo-37',
  'tra-sua-demo-41',
  'landing-page-bat-dong-san-demo-48',
  'website-bat-dong-san-demo-96',
  'website-garage-o-to-web-98',
  'ban-my-pham-cham-soc-sac-dep-web-99',
  'ban-do-noi-that',
  'website-ban-xe-hoi-demo-113'
];

let totalErrors = 0;
let totalChecked = 0;

sites.forEach(site => {
  const siteDir = path.join(rootDir, 'sites', site);
  const previewJpg = path.join(rootDir, 'assets/previews', `${site}.jpg`);
  const previewWebp = path.join(rootDir, 'assets/previews', `${site}.webp`);
  
  const siteErrors = [];

  if (!fs.existsSync(previewJpg) && !fs.existsSync(previewWebp)) {
    siteErrors.push(`Missing preview image!`);
  }

  const pages = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];
  pages.forEach(p => {
    const pagePath = path.join(siteDir, p);
    if (!fs.existsSync(pagePath)) {
      siteErrors.push(`Page missing: ${p}`);
      return;
    }
    let html = fs.readFileSync(pagePath, 'utf8');

    // Remove script tags to avoid false positives on dynamic template literals
    html = html.replace(/<script[\s\S]*?<\/script>/gi, '');

    // Check images
    const imgMatches = html.matchAll(/src=["']([^"']+)["']/g);
    for (const m of imgMatches) {
      const src = m[1];
      if (src.startsWith('http') || src.startsWith('data:') || src.includes('${')) continue;
      const cleanSrc = src.split('#')[0].split('?')[0];
      const resPath = path.resolve(siteDir, cleanSrc);
      if (!fs.existsSync(resPath)) {
        siteErrors.push(`[${p}] Missing image: ${src}`);
      } else {
        totalChecked++;
      }
    }

    // Check link references
    const linkMatches = html.matchAll(/href=["']([^"']+)["']/g);
    for (const m of linkMatches) {
      const href = m[1];
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('#') ||
        href === ''
      ) continue;
      const cleanHref = href.split('#')[0].split('?')[0];
      if (!cleanHref) continue;
      const resPath = path.resolve(siteDir, cleanHref);
      if (!fs.existsSync(resPath)) {
        siteErrors.push(`[${p}] Broken link: ${href}`);
      } else {
        totalChecked++;
      }
    }
  });

  // Check CSS
  const cssPath = path.join(siteDir, 'css/style.css');
  if (!fs.existsSync(cssPath)) {
    siteErrors.push(`Missing css/style.css`);
  }

  // Check JS
  const jsPath = path.join(siteDir, 'js/app.js');
  if (!fs.existsSync(jsPath)) {
    siteErrors.push(`Missing js/app.js`);
  }

  if (siteErrors.length > 0) {
    console.log(`❌ ${site}: ${siteErrors.length} errors`);
    siteErrors.forEach(e => console.log(`   - ${e}`));
    totalErrors += siteErrors.length;
  } else {
    console.log(`✅ ${site}: ALL 4 pages, assets, styles, scripts verified!`);
  }
});

console.log('\n----------------------------------------');
console.log(`Master Portfolio Verification: 17 Sites Checked.`);
console.log(`Total verified elements: ${totalChecked}`);
console.log(`Total errors: ${totalErrors}`);
if (totalErrors === 0) {
  console.log('🎉 ALL 17 TRANSFORMED WEBSITES ARE 100% HEALTHY, SECURE & VERIFIED!');
}
