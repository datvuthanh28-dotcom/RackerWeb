const fs = require('fs');
const https = require('https');
const path = require('path');

// Curated Unsplash IDs with proven woodworking & luxury solid wood furniture subjects
const targets = [
  // 1. Carpenter/artisan hands working with wood / chisel / hand plane
  { name: 'artisan-planing', id: '1504148455328-c376907d081c', search: 'carpenter chiseling wood shavings' }, // we saw this id was drill before, let's use other known IDs
  // Real carpentry / wood workshop IDs:
  { name: 'artisan-craft', url: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80' }, // Woodworker sawing/planing
  { name: 'artisan-workshop', url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80' }, // Woodwork studio
  { name: 'wood-joinery-detail', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80' }, // Room
  { name: 'solid-dining-table', url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80' }, // Wood dining table
  { name: 'sculpted-wood-chair', url: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80' }, // Wooden stool/chair
  { name: 'solid-wood-bed', url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80' }, // Wooden minimalist bed
  { name: 'wood-cabinet-credenza', url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80' }, // Wooden shelf/cabinet
  { name: 'zen-tea-room', url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80' }, // Japanese aesthetic room
  { name: 'live-edge-slab', url: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80' }, // Wood texture/bench
  { name: 'natural-wood-grain', url: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80' }, // Clean wood plank
  { name: 'architect-artisan', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' } // Architect portrait
];

const destDir = path.resolve('scratch/temp_bando_assets2');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destDir, `${item.name}.jpg`);
    const file = fs.createWriteStream(dest);
    
    https.get(item.url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, res2 => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Downloaded ${item.name}: ${fs.statSync(dest).size} bytes`);
              resolve();
            });
          });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded ${item.name}: ${fs.statSync(dest).size} bytes`);
            resolve();
          });
        });
      } else {
        reject(new Error(`Status ${res.statusCode} for ${item.url}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const item of targets) {
    try {
      await downloadFile(item);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
}

run();
