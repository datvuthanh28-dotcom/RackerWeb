const https = require('https');
const fs = require('fs');
const path = require('path');

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
  // look for "downloadUrl" or "contentUrl" or images.unsplash.com
  const matches = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/g) || [];
  console.log('Found matches:', matches);
}

main();
