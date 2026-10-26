const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets', 'images');

// Hand-picked high-quality Unsplash photos of modern waterfront towers, luxury apartments, sky infinity pools
const batch2 = [
  {
    name: 'tower-daylight.jpg',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=85', // we'll try a better tower
  },
  {
    name: 'tower-riverfront-hero.jpg',
    url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&auto=format&fit=crop&q=85', // Sydney harbour / waterfront luxury skyline
  },
  {
    name: 'tower-modern-facade.jpg',
    url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1600&auto=format&fit=crop&q=85', // sleek modern glass balcony residential tower
  },
  {
    name: 'tower-twilight-city.jpg',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&auto=format&fit=crop&q=85', // stunning illuminated waterfront city skyline at twilight
  },
  {
    name: 'tower-dawn-golden.jpg',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=85', // golden hour waterfront reflection
  },
  {
    name: 'interior-1pn-sleek.jpg',
    url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&auto=format&fit=crop&q=85', // luxury modern white/gold interior
  },
  {
    name: 'interior-2pn-panorama.jpg',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=85', // luxury modern residence with large glass
  },
  {
    name: 'interior-3pn-corner.jpg',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=85', // luxury open plan living room with huge windows
  },
  {
    name: 'amenity-infinity-sky.jpg',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop&q=85', // luxury rooftop infinity pool
  },
  {
    name: 'amenity-lounge-wine.jpg',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&auto=format&fit=crop&q=85', // wine glass / luxury cellar lounge
  },
  {
    name: 'amenity-cigar-club.jpg',
    url: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=1200&auto=format&fit=crop&q=85', // gentlemen club / luxury leather lounge
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, item.name);
    const file = fs.createWriteStream(dest);

    https.get(item.url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close(() => {
              console.log(`Downloaded ${item.name} (${fs.statSync(dest).size} bytes)`);
              resolve();
            });
          });
        }).on('error', err => {
          fs.unlinkSync(dest);
          reject(err);
        });
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Downloaded ${item.name} (${fs.statSync(dest).size} bytes)`);
            resolve();
          });
        });
      } else {
        reject(new Error(`Status ${res.statusCode} for ${item.url}`));
      }
    }).on('error', err => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading batch 2...');
  for (const item of batch2) {
    try {
      await download(item);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
  console.log('Done batch 2.');
}

main();
