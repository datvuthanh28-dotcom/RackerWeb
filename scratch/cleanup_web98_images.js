const fs = require('fs');
const path = require('path');

const dir = 'd:/RackerWeb/sites/website-garage-o-to-web-98/assets/images';

// If emergency-rescue.jpg is the blue VW polo, rename it to customer-car-vw.jpg
const rescuePath = path.join(dir, 'emergency-rescue.jpg');
if (fs.existsSync(rescuePath)) {
  fs.renameSync(rescuePath, path.join(dir, 'customer-car-vw.jpg'));
  console.log('emergency-rescue.jpg -> customer-car-vw.jpg');
}

// Remove redundant files
['service-polishing.jpg', 'workshop-facility.jpg'].forEach(f => {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log('Removed', f);
  }
});

console.log('Remaining files in images:');
fs.readdirSync(dir).forEach(f => {
  const sz = fs.statSync(path.join(dir, f)).size;
  console.log(` - ${f} (${Math.round(sz/1024)} KB)`);
});
