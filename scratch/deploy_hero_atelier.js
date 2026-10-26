const fs = require('fs');
const path = require('path');

const src = 'C:/Users/Admin/.gemini/antigravity-ide/brain/6d5b4d61-9165-4460-8ed5-7d2b14562bda/hero_atelier_1793037966670.jpg';
const dest1 = 'sites/ban-do-noi-that/assets/images/hero-atelier.jpg';
const dest2 = 'assets/previews/ban-do-noi-that.jpg';

fs.mkdirSync('sites/ban-do-noi-that/assets/images', { recursive: true });
fs.mkdirSync('assets/previews', { recursive: true });

fs.copyFileSync(src, dest1);
fs.copyFileSync(src, dest2);

console.log('Copied hero-atelier.jpg to:');
console.log(dest1, fs.statSync(dest1).size, 'bytes');
console.log(dest2, fs.statSync(dest2).size, 'bytes');
