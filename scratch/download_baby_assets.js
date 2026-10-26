const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = 'd:/RackerWeb/sites/baby-demo-15/assets/images';
const previewDir = 'd:/RackerWeb/assets/previews';

const downloads = [
  // Hero: Caring pediatrician examination with baby & mother in bright clinic
  {
    dest: path.join(targetDir, 'hero-pediatric.jpg'),
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1400&q=80'
  },
  // Preview
  {
    dest: path.join(previewDir, 'baby-demo-15.jpg'),
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&q=80'
  },
  // Service 1: Stethoscope heartbeat checkup
  {
    dest: path.join(targetDir, 'service-general-pediatrics.jpg'),
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80'
  },
  // Service 2: Gentle vaccination & immunization care
  {
    dest: path.join(targetDir, 'service-vaccination.jpg'),
    url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80'
  },
  // Service 3: Nutrition & developmental milestone
  {
    dest: path.join(targetDir, 'service-nutrition.jpg'),
    url: 'https://images.unsplash.com/photo-1544126592-807ade215a0c?w=1200&q=80'
  },
  // Service 4: Developmental therapy / play
  {
    dest: path.join(targetDir, 'service-development.jpg'),
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80'
  },
  // Doctor 1: Dr. Hoàng Yến - Pediatric specialist
  {
    dest: path.join(targetDir, 'doctor-pediatrician-1.jpg'),
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1000&q=80'
  },
  // Doctor 2: Dr. Minh Quân - Head of Neonatology
  {
    dest: path.join(targetDir, 'doctor-pediatrician-2.jpg'),
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=80'
  },
  // Clinic playroom / friendly environment
  {
    dest: path.join(targetDir, 'clinic-playroom.jpg'),
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(item.dest);
    function fetchUrl(targetUrl) {
      https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0 RackerWeb/1.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          console.log(`[FAIL] ${path.basename(item.dest)}: HTTP ${res.statusCode}`);
          file.close();
          if (fs.existsSync(item.dest)) fs.unlinkSync(item.dest);
          resolve(false);
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(item.dest).size;
            console.log(`[DOWNLOADED] ${path.basename(item.dest)} (${size} bytes)`);
            resolve(true);
          });
        });
      }).on('error', (err) => {
        console.log(`[ERROR] ${path.basename(item.dest)}: ${err.message}`);
        resolve(false);
      });
    }
    fetchUrl(item.url);
  });
}

async function run() {
  for (const item of downloads) {
    await download(item);
  }
  console.log('All downloads finished for baby-demo-15.');
}

run();
