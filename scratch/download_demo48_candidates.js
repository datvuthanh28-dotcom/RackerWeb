const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'sites', 'landing-page-bat-dong-san-demo-48', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Queries for exact architectural subjects
const candidates = [
  {
    name: 'hero-daylight.jpg',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=85', // Luxury residential architectural glass building
  },
  {
    name: 'hero-dawn.jpg',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=85', // Luxury home / modern residence morning light
  },
  {
    name: 'hero-twilight.jpg',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1600&auto=format&fit=crop&q=85', // High-end tower at night / twilight
  },
  {
    name: 'masterplan-aerial.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&auto=format&fit=crop&q=85', // Modern skyscraper architecture
  },
  {
    name: 'unit-1pn-suite.jpg',
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=85', // Modern sleek 1PN apartment living room
  },
  {
    name: 'unit-2pn-grand.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85', // Contemporary luxury living space with huge windows
  },
  {
    name: 'unit-dualkey.jpg',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=85', // Elegant suite interior
  },
  {
    name: 'unit-3pn-presidential.jpg',
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&auto=format&fit=crop&q=85', // Spacious luxury apartment interior
  },
  {
    name: 'unit-skyvilla.jpg',
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop&q=85', // Luxury penthouse double height ceiling / terrace
  },
  {
    name: 'unit-shophouse.jpg',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=85', // Waterfront promenade commercial bistro/retail
  },
  {
    name: 'amenity-sky-pool.jpg',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&auto=format&fit=crop&q=85', // Resort infinity pool
  },
  {
    name: 'amenity-marina.jpg',
    url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&auto=format&fit=crop&q=85', // Luxury yacht & marina
  },
  {
    name: 'amenity-cigar-lounge.jpg',
    url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&auto=format&fit=crop&q=85', // Private luxury club lounge
  },
  {
    name: 'amenity-garden.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop&q=85', // Tropical garden sanctuary
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
  console.log('Downloading candidates for #MS48...');
  for (const item of candidates) {
    try {
      await download(item);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
  console.log('Done downloading candidates.');
}

main();
