const fs = require('fs');
const content = fs.readFileSync('js/themes-data.js', 'utf8');
console.log('First 200 chars of js/themes-data.js:');
console.log(content.slice(0, 200));
console.log('\nDoes it contain baby-demo-15?', content.includes('baby-demo-15'));
if (content.includes('baby-demo-15')) {
  const lines = content.split('\n');
  const matchIdx = lines.findIndex(l => l.includes('baby-demo-15'));
  console.log('Around baby-demo-15:');
  console.log(lines.slice(Math.max(0, matchIdx - 2), Math.min(lines.length, matchIdx + 12)).join('\n'));
}
