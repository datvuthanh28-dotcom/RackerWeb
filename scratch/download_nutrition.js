const fs = require('fs');
const https = require('https');

const dest = 'd:/RackerWeb/sites/baby-demo-15/assets/images/service-nutrition.jpg';
const url = 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=1200&q=80';

function fetchUrl(targetUrl) {
  https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0 RackerWeb/1.0' } }, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      fetchUrl(res.headers.location);
      return;
    }
    if (res.statusCode !== 200) {
      console.log('Failed:', res.statusCode);
      return;
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        console.log('Downloaded service-nutrition.jpg:', fs.statSync(dest).size, 'bytes');
      });
    });
  });
}

fetchUrl(url);
