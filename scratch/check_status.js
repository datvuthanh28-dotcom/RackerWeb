const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/themes.json', 'utf8'));

const testIds = ['spa-demo-18', 'furniture-demo-03', 'landing-page-bat-dong-san-demo-48', 'food-demo-12', 'landing-page-noi-that-demo-05'];
for (const id of testIds) {
  const t = data.find(x => x.id === id);
  console.log(id, '=>', t ? { previewImage: t.previewImage, designStatus: t.designStatus } : 'not found');
}
