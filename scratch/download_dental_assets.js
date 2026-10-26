const https = require('https');
const fs = require('fs');
const path = require('path');

const downloads = [
  {
    name: 'hero.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dental_chair_in_a_dentist_clinic.jpg'
  },
  {
    name: 'tech-ct-conebeam.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Cone_Beam_CT.jpg'
  },
  {
    name: 'service-implant.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Dental_setup_for_implants.jpg'
  },
  {
    name: 'service-ortho.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Invisalign_aligner.jpg'
  },
  {
    name: 'service-braces.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Dental_braces.jpg'
  },
  {
    name: 'service-veneer.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Dental_crown.jpg'
  },
  {
    name: 'doctor-tuan.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Dental_clinic_keeps_JB_Charleston_-_Air_Base_smiling_140416-F-EV310-207.jpg'
  },
  {
    name: 'doctor-consult.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Dental_clinic_keeps_JB_Charleston_-_Air_Base_smiling_140416-F-EV310-088.jpg'
  }
];

const destDir = path.resolve('sites/nha-khoa-aspen-demo-34/assets/images');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destDir, item.name);
    const file = fs.createWriteStream(dest);
    
    https.get(item.url, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'RackerWebBot/1.0 (contact@rackerweb.vn)' } }, res2 => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`[DONE] ${item.name} (${fs.statSync(dest).size} bytes)`);
            resolve();
          });
        }).on('error', reject);
      } else {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`[DONE] ${item.name} (${fs.statSync(dest).size} bytes)`);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const d of downloads) {
    try {
      console.log(`Downloading ${d.name}...`);
      await downloadFile(d);
    } catch (e) {
      console.error(`Failed ${d.name}:`, e.message);
    }
  }
  console.log('All downloads finished!');
}

run();
