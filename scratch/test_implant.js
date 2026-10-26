const https = require('https');
const fs = require('fs');

async function downloadTo(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'RackerWebBot/1.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'RackerWebBot/1.0' } }, res2 => {
          const stream = fs.createWriteStream(dest);
          res2.pipe(stream);
          stream.on('finish', () => { stream.close(); resolve(); });
        });
      } else {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => { stream.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading Dental implant.jpg...');
  await downloadTo('https://upload.wikimedia.org/wikipedia/commons/7/7c/Dental_implant.jpg', 'scratch/implant_test.jpg');
  console.log('Downloaded implant_test.jpg:', fs.statSync('scratch/implant_test.jpg').size);
}

run();
