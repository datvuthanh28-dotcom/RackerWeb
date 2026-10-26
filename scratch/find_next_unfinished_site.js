const fs = require('fs');

const raw = fs.readFileSync('d:/RackerWeb/data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const unfinished = themes.filter(t => t.designStatus !== 'custom-verified' && !['fashion-demo-01', 'auto-garage-demo-40', 'cua-hang-hoa-demo-64', 'website-tiem-cafe-tinh-demo-54', 'cong-ty-san-xuat-bao-bi-demo-70'].includes(t.id));

console.log(`Found ${unfinished.length} unfinished websites:`);
unfinished.slice(0, 15).forEach((t, i) => {
  console.log(`${i+1}. [${t.code || 'NO_CODE'}] ${t.id} - "${t.name}" (${t.category})`);
});
