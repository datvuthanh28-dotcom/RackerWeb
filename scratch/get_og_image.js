const https = require('https');

function getPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const pageUrl = 'https://unsplash.com/photos/modern-skyscrapers-rise-above-a-tree-lined-waterfront-natalienpngoc';
  const html = await getPage(pageUrl);
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/);
  console.log('OG Image:', ogImage ? ogImage[1] : 'not found');
}

main();
