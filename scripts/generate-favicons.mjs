import sharp from 'sharp';
import fs from 'fs';

async function generate() {
  const cropped = sharp('public/favicon.jpeg').extract({
    left: 204,
    top: 204,
    width: 1640,
    height: 1640,
  });

  // 1. High-res master icon (512x512)
  await cropped
    .clone()
    .resize(512, 512, { fit: 'contain' })
    .png({ quality: 100 })
    .toFile('public/icon-512.png');

  // Copy to src/app/icon.png (Next.js App Router convention)
  await cropped
    .clone()
    .resize(512, 512, { fit: 'contain' })
    .png({ quality: 100 })
    .toFile('src/app/icon.png');

  // 2. 192x192 Android / PWA icon
  await cropped
    .clone()
    .resize(192, 192, { fit: 'contain' })
    .png({ quality: 100 })
    .toFile('public/icon-192.png');

  // 3. Apple Touch Icon (180x180)
  await cropped
    .clone()
    .resize(180, 180, { fit: 'contain' })
    .png({ quality: 100 })
    .toFile('public/apple-touch-icon.png');

  await cropped
    .clone()
    .resize(180, 180, { fit: 'contain' })
    .png({ quality: 100 })
    .toFile('src/app/apple-icon.png');

  // 4. Standard 32x32 & 16x16 favicons
  await cropped
    .clone()
    .resize(32, 32, { fit: 'contain' })
    .png()
    .toFile('public/favicon-32x32.png');

  await cropped
    .clone()
    .resize(16, 16, { fit: 'contain' })
    .png()
    .toFile('public/favicon-16x16.png');

  // 5. Favicon.ico (32x32 PNG container or standard format)
  // Most modern browsers accept PNG encoded directly inside .ico or as 32x32 PNG
  await cropped
    .clone()
    .resize(48, 48, { fit: 'contain' })
    .png()
    .toFile('public/favicon.ico');

  await cropped
    .clone()
    .resize(48, 48, { fit: 'contain' })
    .png()
    .toFile('src/app/favicon.ico');

  console.log('Successfully generated all favicons with cropped square AS monogram!');
}

generate().catch(console.error);
