const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('sites/ban-do-noi-that');
console.log('Verifying site directory:', siteDir);

if (!fs.existsSync(siteDir)) {
  console.error('Directory does not exist!');
  process.exit(1);
}

const htmlFiles = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];
let hasError = false;

htmlFiles.forEach(file => {
  const filePath = path.join(siteDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing HTML file: ${file}`);
    hasError = true;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('banner.webp')) {
    console.error(`Found legacy banner.webp in ${file}`);
    hasError = true;
  }
  if (content.includes('placeholder.com') || content.includes('via.placeholder')) {
    console.error(`Found placeholder in ${file}`);
    hasError = true;
  }
  if (content.includes('SKD-000')) {
    console.error(`Found un-customized code SKD-000 in ${file}`);
    hasError = true;
  }

  // Remove script blocks before checking links and images to avoid template literal false positives
  const cleanContent = content.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Check images
  const imgMatches = cleanContent.matchAll(/src=["']([^"']+)["']/g);
  for (const m of imgMatches) {
    const src = m[1];
    if (src.startsWith('http') || src.startsWith('data:') || src.includes('${')) continue;
    const cleanSrc = src.split('#')[0].split('?')[0];
    const resPath = path.resolve(siteDir, cleanSrc);
    if (!fs.existsSync(resPath)) {
      console.error(`Broken image in ${file}: ${src} -> ${resPath}`);
      hasError = true;
    } else {
      console.log(`Verified image in ${file}: ${src} (${fs.statSync(resPath).size} bytes)`);
    }
  }

  // Check internal links
  const linkMatches = cleanContent.matchAll(/href=["']([^"']+)["']/g);
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
      console.error(`Broken link in ${file}: ${href} -> ${resPath}`);
      hasError = true;
    } else {
      console.log(`Verified link in ${file}: ${href}`);
    }
  }
});

// Check css & js
const cssPath = path.join(siteDir, 'css/style.css');
if (!fs.existsSync(cssPath) || fs.statSync(cssPath).size === 0) {
  console.error('Missing or empty css/style.css');
  hasError = true;
} else {
  console.log('CSS verified:', fs.statSync(cssPath).size, 'bytes');
}

const jsPath = path.join(siteDir, 'js/app.js');
if (!fs.existsSync(jsPath) || fs.statSync(jsPath).size === 0) {
  console.error('Missing or empty js/app.js');
  hasError = true;
} else {
  console.log('JS verified:', fs.statSync(jsPath).size, 'bytes');
}

// Check preview
const previewJpg = path.resolve('assets/previews/ban-do-noi-that.jpg');
if (!fs.existsSync(previewJpg) || fs.statSync(previewJpg).size === 0) {
  console.error('Missing or empty assets/previews/ban-do-noi-that.jpg');
  hasError = true;
} else {
  console.log('Preview image verified:', fs.statSync(previewJpg).size, 'bytes');
}

if (!hasError) {
  console.log('\n🎉 SUCCESS: ban-do-noi-that verification PASSED with 0 errors!');
} else {
  console.error('\n❌ FAILED: ban-do-noi-that has errors.');
  process.exit(1);
}
