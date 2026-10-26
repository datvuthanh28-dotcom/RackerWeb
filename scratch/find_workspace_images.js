const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat && stat.isDirectory()) {
        if (file !== 'node_modules' && file !== '.git' && file !== 'scratch') {
          results = results.concat(walk(full));
        }
      } else {
        if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
          results.push({ path: full, size: stat.size, name: file });
        }
      }
    });
  } catch(e) {}
  return results;
}

const allImages = walk('sites');
const filtered = allImages.filter(img => 
  img.path.includes('furniture') || 
  img.name.includes('wood') || 
  img.name.includes('craft') ||
  img.name.includes('table') ||
  img.name.includes('chair') ||
  img.name.includes('interior') ||
  img.name.includes('room')
);

console.log(`Found ${filtered.length} relevant images:`);
filtered.forEach(img => console.log(img.path, `(${img.size} bytes)`));
