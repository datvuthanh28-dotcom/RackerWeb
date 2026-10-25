// tools/copy_pilot_assets.js
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/c001480a-5c1b-4365-97c7-3830e8512401';
const files = fs.readdirSync(brainDir);

function findLatest(prefix) {
  const matching = files.filter(f => f.startsWith(prefix) && f.endsWith('.jpg'));
  matching.sort();
  return matching.length > 0 ? path.join(brainDir, matching[matching.length - 1]) : null;
}

const site70Dir = 'd:/dvweb/sites/cong-ty-san-xuat-bao-bi-demo-70/assets/images';
const site54Dir = 'd:/dvweb/sites/website-tiem-cafe-tinh-demo-54/assets/images';

if (!fs.existsSync(site70Dir)) fs.mkdirSync(site70Dir, { recursive: true });
if (!fs.existsSync(site54Dir)) fs.mkdirSync(site54Dir, { recursive: true });

// Copy packaging images
const pkgHero = findLatest('packaging_factory_hero');
const pkgCarton = findLatest('packaging_carton_products');
const pkgPouches = findLatest('packaging_flexible_pouches');

if (pkgHero) fs.copyFileSync(pkgHero, path.join(site70Dir, 'factory-hero.jpg'));
if (pkgCarton) fs.copyFileSync(pkgCarton, path.join(site70Dir, 'boxes-carton.jpg'));
if (pkgPouches) fs.copyFileSync(pkgPouches, path.join(site70Dir, 'pouches-flexible.jpg'));

// Copy cafe images
const cafeHero = findLatest('cafe_hero_pour_over');
const cafeAmbiance = findLatest('cafe_interior_ambiance');
const cafeBeans = findLatest('cafe_beans_pastry');

if (cafeHero) fs.copyFileSync(cafeHero, path.join(site54Dir, 'cafe-hero.jpg'));
if (cafeAmbiance) fs.copyFileSync(cafeAmbiance, path.join(site54Dir, 'cafe-ambiance.jpg'));
if (cafeBeans) fs.copyFileSync(cafeBeans, path.join(site54Dir, 'cafe-beans-pastry.jpg'));

console.log('Successfully copied all pilot images to both sites!');
