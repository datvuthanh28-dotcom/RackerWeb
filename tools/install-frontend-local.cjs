const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const sites = fs.readdirSync(path.join(root, 'sites'));
const pages = {};
let count = 0;
for (const site of sites) {
  const dir = path.join(root, 'sites', site);
  pages[site] = fs.readdirSync(dir).filter(file => file.endsWith('.html')).sort();
  fs.copyFileSync(path.join(__dirname,'frontend-local.js'), path.join(dir,'js','frontend-local.js'));
  fs.copyFileSync(path.join(__dirname,'frontend-local.css'), path.join(dir,'css','frontend-local.css'));
  const app = fs.readFileSync(path.join(dir,'js','app.js'),'utf8');
  const simpleCatalog = app.includes('let cartCount = 0');
  if (simpleCatalog) fs.copyFileSync(path.join(__dirname,'catalog-browser.js'), path.join(dir,'js','catalog-browser.js'));
  for (const file of pages[site]) {
    const target = path.join(dir,file);
    let html = fs.readFileSync(target,'utf8');
    if (!html.includes('css/frontend-local.css')) html = html.replace('</head>', '  <link rel="stylesheet" href="css/frontend-local.css">\n  <script src="js/frontend-local.js"></script>\n</head>');
    if (simpleCatalog && !html.includes('js/catalog-browser.js')) html = html.replace('</head>', '  <script src="js/catalog-browser.js"></script>\n</head>');
    fs.writeFileSync(target,html); count++;
  }
}
fs.writeFileSync(path.join(root,'content-writer','catalog.js'), 'window.WRITER_PAGES = ' + JSON.stringify(pages,null,2) + ';\n');
console.log(`Installed local request workflow in ${sites.length} sites and ${count} HTML pages.`);
