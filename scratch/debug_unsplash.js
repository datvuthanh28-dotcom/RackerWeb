const https = require('https');

function getPage(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      console.log('Status:', res.statusCode);
      if (res.headers.location) console.log('Location:', res.headers.location);
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', e => console.error(e));
  });
}

getPage('https://unsplash.com/photos/modern-skyscrapers-rise-above-a-tree-lined-waterfront-natalienpngoc');
