const https = require('https');
const fs = require('fs');
const path = require('path');

const dest = 'd:/RackerWeb/sites/website-garage-o-to-web-98/assets/images/service-brake.jpg';
const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ferrari_458_Italia_Brembo_Ceramic_Brake_Caliper_%2814937767662%29.jpg/1280px-Ferrari_458_Italia_Brembo_Ceramic_Brake_Caliper_%2814937767662%29.jpg';

function fetchUrl(targetUrl) {
  https.get(targetUrl, { headers: { 'User-Agent': 'RackerWeb/1.0 (admin@rackerweb.local)' } }, (res) => {
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
        console.log('Downloaded service-brake.jpg:', fs.statSync(dest).size, 'bytes');
      });
    });
  }).on('error', e => console.error(e.message));
}

fetchUrl(url);
