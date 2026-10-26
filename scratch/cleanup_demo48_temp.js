const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets', 'images');

const tempFiles = [
  'thuduc-skyline.jpg',
  'landmark81-river.jpg',
  'saigon-river-view.jpg',
  'tower-riverfront-hero.jpg',
  'tower-twilight-city.jpg',
  'tower-modern-facade.jpg',
  'tower-daylight.jpg',
  'tower-dawn-golden.jpg',
  'sky-infinity-pool.jpg',
  'waterfront-architecture.jpg',
  'thuthiem-night.jpg',
  'metropole-thuthiem.jpg',
  'opera-residence.jpg',
  'riverside-park-view.jpg',
  'hcmc-skyline-day.jpg',
  'saigon-day-waterfront.jpg',
  'saigon-blue-hour.jpg',
  'unit-1pn-suite.jpg',
  'unit-2pn-grand.jpg',
  'unit-3pn-presidential.jpg',
  'interior-1pn-sleek.jpg',
  'interior-2pn-panorama.jpg',
  'interior-3pn-corner.jpg',
  'amenity-infinity-sky.jpg',
  'amenity-cigar-club.jpg',
  'amenity-lounge-wine.jpg',
  'masterplan-aerial.jpg'
];

tempFiles.forEach(f => {
  const p = path.join(imgDir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }
});

console.log('Cleaned up temp files.');
