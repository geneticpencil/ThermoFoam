import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { name: 'hero.jpg', url: 'https://loremflickr.com/1000/600/foam,texture/all' },
  { name: 'espuma.jpg', url: 'https://loremflickr.com/800/600/foam,rolls/all' },
  { name: 'piso.jpg', url: 'https://loremflickr.com/800/600/wood,floor/all' },
  { name: 'alfombra.jpg', url: 'https://loremflickr.com/800/600/carpet,texture/all' },
  { name: 'uso-piso.jpg', url: 'https://loremflickr.com/800/600/flooring,installation/all' },
  { name: 'uso-embalaje.jpg', url: 'https://loremflickr.com/800/600/cardboard,packaging/all' }
];

const publicDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadImage(url: string, filename: string) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        const location = res.headers.location!;
        const newUrl = location.startsWith('http') ? location : `https://loremflickr.com${location}`;
        return downloadImage(newUrl, filename).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(path.join(publicDir, filename));
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${filename}`);
        resolve(true);
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const img of images) {
    await downloadImage(img.url, img.name);
  }
}

run();
