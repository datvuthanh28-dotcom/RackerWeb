const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'themes.json'), 'utf8'));
const item = data.find(t => t.id === 'landing-page-bat-dong-san-demo-48');
console.log(JSON.stringify(item, null, 2));
