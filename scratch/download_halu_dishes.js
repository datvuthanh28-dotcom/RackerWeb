const https = require('https');
const fs = require('fs');
const path = require('path');

const candidatesDir = path.join(__dirname, 'halu_candidates');
if (!fs.existsSync(candidatesDir)) {
  fs.mkdirSync(candidatesDir, { recursive: true });
}

const list = [
  {
    name: 'kho-to.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Qu%C3%A1n_B%E1%BA%BFp_Nh%C3%A0_%E1%BB%9F_Q1_%28m%C3%B3n_%C4%83n%2C_t%C3%B4m_kho_t%E1%BB%99%29_%283%29.jpg/1280px-Qu%C3%A1n_B%E1%BA%BFp_Nh%C3%A0_%E1%BB%9F_Q1_%28m%C3%B3n_%C4%83n%2C_t%C3%B4m_kho_t%E1%BB%99%29_%283%29.jpg'
  },
  {
    name: 'goi-cuon.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Summer_roll.jpg'
  },
  {
    name: 'nem-ran.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Spring_rolls_with_fish_sauce_for_dipping.jpg/1280px-Spring_rolls_with_fish_sauce_for_dipping.jpg'
  },
  {
    name: 'cha-ca.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Ch%E1%BA%A3_c%C3%A1_L%C3%A3_V%E1%BB%8Dng_H%C3%A0_N%E1%BB%99i_th%C3%A1ng_2_n%C4%83m_2018_%281%29.jpg/1280px-Ch%E1%BA%A3_c%C3%A1_L%C3%A3_V%E1%BB%8Dng_H%C3%A0_N%E1%BB%99i_th%C3%A1ng_2_n%C4%83m_2018_%281%29.jpg'
  },
  {
    name: 'space-vip.jpg',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Restaurant_room_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/1280px-Restaurant_room_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          resolve(stats.size);
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of list) {
    const dest = path.join(candidatesDir, item.name);
    try {
      const size = await download(item.url, dest);
      console.log(`Downloaded ${item.name}: ${size} bytes`);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
}

run();
