// tools/test_pilots.js
const http = require('http');

const urls = [
  // Site 70
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/index.html',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/san-pham.html',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/chi-tiet-san-pham.html',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/gioi-thieu.html',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/lien-he.html',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/css/style.css',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/js/app.js',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/assets/images/factory-hero.jpg',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/assets/images/boxes-carton.jpg',
  'http://localhost:8080/sites/cong-ty-san-xuat-bao-bi-demo-70/assets/images/pouches-flexible.jpg',

  // Site 54
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/index.html',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/thuc-don.html',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/cau-chuyen.html',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/lien-he.html',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/css/style.css',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/js/app.js',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/assets/images/cafe-hero.jpg',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/assets/images/cafe-ambiance.jpg',
  'http://localhost:8080/sites/website-tiem-cafe-tinh-demo-54/assets/images/cafe-beans-pastry.jpg'
];

async function testUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          hasReturnBar: data.includes('library-return-bar') && data.includes('../../index.html'),
          hasEmptyH1: /<h1>\s*<\/h1>/.test(data),
          hasUnreplacedTokens: /\{\{[A-Z0-9_]+\}\}/.test(data)
        });
      });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
}

async function run() {
  console.log('Testing all endpoints for both pilot sites...');
  let passCount = 0;
  for (const u of urls) {
    const res = await testUrl(u);
    const isHtml = u.endsWith('.html');
    const valid = res.status === 200 && (!isHtml || (res.hasReturnBar && !res.hasEmptyH1 && !res.hasUnreplacedTokens));
    if (valid) {
      console.log(`[PASS] ${res.status} | ${u} (${res.length} bytes)`);
      passCount++;
    } else {
      console.error(`[FAIL] ${JSON.stringify(res)}`);
    }
  }
  console.log(`\nResults: ${passCount} / ${urls.length} passed.`);
}

run();
