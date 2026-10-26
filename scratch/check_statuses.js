const fs = require('fs');

const raw = fs.readFileSync('d:/RackerWeb/data/themes.json', 'utf8').replace(/^\uFEFF/, '');
const themes = JSON.parse(raw);

const statusCounts = {};
themes.forEach(t => {
  const s = t.designStatus || 'undefined';
  statusCounts[s] = (statusCounts[s] || 0) + 1;
});

console.log('Status breakdown:', statusCounts);

const verifiedList = themes.filter(t => t.designStatus === 'custom-verified').map(t => `${t.id} (${t.code})`);
console.log('Verified themes (' + verifiedList.length + '):', verifiedList);
