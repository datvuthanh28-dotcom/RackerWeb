const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const issues = [];
let pageCount = 0;
let references = 0;
const sites = fs.readdirSync(path.join(root,'sites'),{withFileTypes:true}).filter(entry=>entry.isDirectory()).map(entry=>entry.name);
const catalogue = JSON.parse(fs.readFileSync(path.join(root,'data/themes.json'),'utf8').replace(/^\uFEFF/,''));
const pageRegistry = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'content-writer','catalog.js'),'utf8'),pageRegistry);
const expectedPages = pageRegistry.window.WRITER_PAGES;
for (const site of sites) {
  const dir = path.join(root,'sites',site);
  const sitePages = fs.readdirSync(dir).filter(file => file.endsWith('.html')).sort();
  if (JSON.stringify(sitePages) !== JSON.stringify(expectedPages[site])) issues.push(`${site}: Content Writer page registry is out of sync`);
  for (const requiredPage of ['index.html','san-pham.html','gioi-thieu.html','lien-he.html']) {
    if (!sitePages.includes(requiredPage)) issues.push(`${site}: missing ${requiredPage}`);
  }
  for (const page of sitePages) {
    pageCount++;
    const html = fs.readFileSync(path.join(dir,page),'utf8');
    for (const match of html.matchAll(/<(?:script|link|img|a|source)\b[^>]*?\b(?:src|href)=["']([^"']+)["']/gi)) {
      const url = match[1];
      if (/^(?:[a-z]+:|\/\/|#)/i.test(url) || url.includes('${')) continue;
      references++;
      const target = path.resolve(dir,url.split(/[?#]/)[0]);
      if (!fs.existsSync(target)) issues.push(`${site}/${page}: missing ${url}`);
    }
    if (!html.includes('js/frontend-local.js')) issues.push(`${site}/${page}: missing local request workflow`);
  }
  for (const script of fs.readdirSync(path.join(dir,'js')).filter(file => file.endsWith('.js'))) {
    try { new vm.Script(fs.readFileSync(path.join(dir,'js',script),'utf8')); }
    catch (error) { issues.push(`${site}/js/${script}: ${error.message}`); }
  }
}
new vm.Script(fs.readFileSync(path.join(root,'content-writer','studio.js'),'utf8'));
for (const item of catalogue) if (!fs.existsSync(path.join(root,item.localUrl))) issues.push(`Missing entry ${item.id}`);
if (JSON.stringify(catalogue.map(item=>item.id).sort()) !== JSON.stringify(sites.sort())) issues.push('Theme catalog does not match site directories');
console.log(JSON.stringify({sites:sites.length,pages:pageCount,localReferences:references,issues},null,2));
if (sites.length !== 113 || issues.length) process.exitCode = 1;
