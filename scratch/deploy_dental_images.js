const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/6d5b4d61-9165-4460-8ed5-7d2b14562bda';
const targetDir = path.resolve('sites/nha-khoa-aspen-demo-34/assets/images');
const previewDest = path.resolve('assets/previews/nha-khoa-aspen-demo-34.jpg');

const mappings = [
  { src: 'aspen_clinic_hero_1793028726880.jpg', dest: 'hero.jpg' },
  { src: 'aspen_implant_surgery_1793028765593.jpg', dest: 'service-implant.jpg' },
  { src: 'aspen_veneer_smile_1793028825376.jpg', dest: 'service-veneer.jpg' },
  { src: 'aspen_doctor_tuan_1793028863921.jpg', dest: 'doctor-tuan.jpg' },
  { src: 'aspen_doctor_thao_1793028923519.jpg', dest: 'doctor-thao.jpg' }
];

for (const m of mappings) {
  const srcPath = path.join(brainDir, m.src);
  const destPath = path.join(targetDir, m.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`[COPIED] ${m.src} -> ${destPath} (${fs.statSync(destPath).size} bytes)`);
  } else {
    console.error(`[NOT FOUND] ${srcPath}`);
  }
}

// Copy hero to preview
const heroPath = path.join(targetDir, 'hero.jpg');
if (fs.existsSync(heroPath)) {
  fs.copyFileSync(heroPath, previewDest);
  console.log(`[COPIED PREVIEW] ${previewDest} (${fs.statSync(previewDest).size} bytes)`);
}

// Remove old webp preview if exists
const webpPreview = path.resolve('assets/previews/nha-khoa-aspen-demo-34.webp');
if (fs.existsSync(webpPreview)) {
  fs.unlinkSync(webpPreview);
  console.log('[REMOVED] Old webp preview:', webpPreview);
}
