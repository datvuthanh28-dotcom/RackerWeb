const https = require('https');

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function findPhotos(keyword) {
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(keyword)}`;
  const html = await fetchPage(url);
  // Match images: https://images.unsplash.com/photo-[a-zA-Z0-9_-]+
  const matches = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/g) || [];
  const unique = [...new Set(matches)];
  console.log(`Keyword: ${keyword} found ${unique.length} photos`);
  unique.slice(0, 5).forEach((u, i) => {
    console.log(`  [${i}] ${u}`);
  });
  return unique.slice(0, 5);
}

async function main() {
  await findPhotos('luxury-waterfront-apartment');
  await findPhotos('modern-skyscraper-water');
  await findPhotos('luxury-penthouse-interior');
  await findPhotos('rooftop-infinity-pool');
  await findPhotos('luxury-cigar-lounge');
}

main();
