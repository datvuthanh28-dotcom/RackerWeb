const https = require('https');
const fs = require('fs');

function dl(url, dest) {
  https.get(url, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return dl(res.headers.location, dest);
    }
    if (res.statusCode === 200) {
      const f = fs.createWriteStream(dest);
      res.pipe(f);
      f.on('finish', () => console.log('OK:', dest, fs.statSync(dest).size));
    } else {
      console.log('Err:', res.statusCode);
    }
  });
}

dl('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85', 'd:/RackerWeb/sites/website-garage-o-to-web-98/assets/images/service-engine.jpg');
