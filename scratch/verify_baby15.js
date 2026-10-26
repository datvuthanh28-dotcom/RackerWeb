const fs = require('fs');
const path = require('path');

const siteDir = path.resolve('sites/baby-demo-15');
console.log('Site directory:', siteDir);

if (!fs.existsSync(siteDir)) {
  console.error('Directory does not exist!');
  process.exit(1);
}

const htmlFiles = ['index.html', 'san-pham.html', 'gioi-thieu.html', 'lien-he.html'];
let hasError = false;

// Check HTML files exist
htmlFiles.forEach(file => {
  const filePath = path.join(siteDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing HTML file: ${file}`);
    hasError = true;
  } else {
    const content = fs.readFileSync(filePath, 'utf8');
    // Check for broken placeholder or legacy patterns
    if (content.includes('banner.webp')) {
      console.error(`Found legacy banner.webp reference in ${file}`);
      hasError = true;
    }
    if (content.includes('placeholder.com') || content.includes('via.placeholder')) {
      console.error(`Found placeholder reference in ${file}`);
      hasError = true;
    }
    
    // Check img src references
    const imgMatches = content.match(/<img[^>]+src=["']([^"']+)["']/g) || [];
    imgMatches.forEach(tag => {
      const srcMatch = tag.match(/src=["']([^"']+)["']/);
      if (srcMatch && srcMatch[1]) {
        const src = srcMatch[1].split('?')[0].split('#')[0];
        if (!src.startsWith('http') && !src.startsWith('data:')) {
          const resolvedImg = path.join(siteDir, src);
          if (!fs.existsSync(resolvedImg)) {
            console.error(`Broken image in ${file}: ${src} -> ${resolvedImg}`);
            hasError = true;
          }
        }
      }
    });

    // Check internal links
    const linkMatches = content.match(/<a[^>]+href=["']([^"']+)["']/g) || [];
    linkMatches.forEach(tag => {
      const hrefMatch = tag.match(/href=["']([^"']+)["']/);
      if (hrefMatch && hrefMatch[1]) {
        const href = hrefMatch[1].split('?')[0].split('#')[0];
        if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('javascript:')) {
          const resolvedLink = path.join(siteDir, href);
          if (!fs.existsSync(resolvedLink)) {
            console.error(`Broken link in ${file}: ${href} -> ${resolvedLink}`);
            hasError = true;
          }
        }
      }
    });
  }
});

// Check css & js
const cssPath = path.join(siteDir, 'css/style.css');
if (!fs.existsSync(cssPath)) {
  console.error('Missing css/style.css');
  hasError = true;
} else {
  console.log('CSS size:', fs.statSync(cssPath).size, 'bytes');
}

const jsPath = path.join(siteDir, 'js/app.js');
if (!fs.existsSync(jsPath)) {
  console.error('Missing js/app.js');
  hasError = true;
} else {
  console.log('JS size:', fs.statSync(jsPath).size, 'bytes');
}

// Check preview image in assets/previews/
const previewPath = path.resolve('assets/previews/baby-demo-15.jpg');
if (!fs.existsSync(previewPath)) {
  console.error('Missing assets/previews/baby-demo-15.jpg');
  hasError = true;
} else {
  console.log('Preview image size:', fs.statSync(previewPath).size, 'bytes');
}

if (!hasError) {
  console.log('SUCCESS: baby-demo-15 verification PASSED with 0 errors!');
} else {
  console.error('FAILED: baby-demo-15 has errors.');
  process.exit(1);
}
