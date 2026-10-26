const https = require('https');
const fs = require('fs');

const candidates = [
  {
    name: 'pediatric-care-1.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Pacific_Partnership_2022_Medical_Personnel_Provide_Pediatric_Medical_Care_%287321245%29.jpg/1280px-Pacific_Partnership_2022_Medical_Personnel_Provide_Pediatric_Medical_Care_%287321245%29.jpg'
  },
  {
    name: 'pediatric-care-2.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pacific_Partnership_2022_Medical_Personnel_Provide_Pediatric_Medical_Care_%287321247%29.jpg/1280px-Pacific_Partnership_2022_Medical_Personnel_Provide_Pediatric_Medical_Care_%287321247%29.jpg'
  },
  {
    name: 'pediatric-care-3.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pacific_Partnership_2022_Medical_Personnel_Provide_Pediatric_Medical_Care_%287321249%29.jpg/1280px-Pacific_Partnership_2022_Medical_Personnel_Provide_Pediatric_Medical_Care_%287321249%29.jpg'
  }
];

function download(item) {
  return new Promise((resolve) => {
    const dest = `d:/RackerWeb/scratch/${item.name}`;
    const file = fs.createWriteStream(dest);
    https.get(item.url, { headers: { 'User-Agent': 'RackerWeb/1.0 (admin@rackerweb.local)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'RackerWeb/1.0' } }, res2 => {
          res2.pipe(file);
          file.on('finish', () => file.close(() => resolve(true)));
        });
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(true)));
    }).on('error', () => resolve(false));
  });
}

async function run() {
  for (const c of candidates) {
    await download(c);
    console.log('Downloaded', c.name);
  }
}

run();
