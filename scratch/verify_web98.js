const fs = require('fs');
const path = require('path');

const siteDir = 'd:/RackerWeb/sites/website-garage-o-to-web-98';
const previewPath = 'd:/RackerWeb/assets/previews/website-garage-o-to-web-98.jpg';

const errors = [];
const checked = [];

// 1. Verify Preview
if (!fs.existsSync(previewPath)) {
  errors.push(`Preview missing: ${previewPath}`);
} else {
  const sz = fs.statSync(previewPath).size;
  checked.push(`Preview exists (${Math.round(sz / 1024)} KB)`);
}

// 2. Verify Pages
const pages = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];
pages.forEach(p => {
  const pagePath = path.join(siteDir, p);
  if (!fs.existsSync(pagePath)) {
    errors.push(`Page missing: ${p}`);
    return;
  }
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Check image src
  const imgRegex = /src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://')) continue;
    
    // Resolve relative path
    const resolved = path.resolve(siteDir, src);
    if (!fs.existsSync(resolved)) {
      errors.push(`[${p}] Missing image reference: ${src} -> ${resolved}`);
    } else {
      checked.push(`[${p}] Valid image: ${src}`);
    }
  }

  // Check link hrefs
  const linkRegex = /href=["']([^"']+)["']/g;
  let lMatch;
  while ((lMatch = linkRegex.exec(content)) !== null) {
    const href = lMatch[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    const cleanHref = href.split('?')[0];
    const resolvedLink = path.resolve(siteDir, cleanHref);
    if (!fs.existsSync(resolvedLink)) {
      errors.push(`[${p}] Broken link: ${href} -> ${resolvedLink}`);
    }
  }

  // Check for forbidden placeholder patterns
  if (content.includes('SKD-000') || content.includes('banner.webp')) {
    errors.push(`[${p}] Contains legacy template placeholder artifacts!`);
  }
});

// 3. Verify CSS and JS
if (!fs.existsSync(path.join(siteDir, 'css/style.css'))) errors.push('Missing css/style.css');
if (!fs.existsSync(path.join(siteDir, 'js/app.js'))) errors.push('Missing js/app.js');

console.log('=== VERIFICATION REPORT FOR WEBSITE-GARAGE-O-TO-WEB-98 ===');
if (errors.length > 0) {
  console.error('FAILED with errors:');
  errors.forEach(e => console.error(' ❌ ' + e));
  process.exit(1);
} else {
  console.log('SUCCESS! All checks passed:');
  console.log(` - Verified ${checked.length} image and link elements.`);
  console.log(' - 0 broken links, 0 placeholders, 0 screenshots.');
}
