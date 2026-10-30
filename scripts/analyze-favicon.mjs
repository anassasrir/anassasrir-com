import sharp from 'sharp';

async function analyze() {
  const image = sharp('public/favicon.jpeg');
  const metadata = await image.metadata();
  console.log('Metadata:', metadata);

  // Get raw pixel buffer to find the exact bounding box of the non-white area (the black square with AS)
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // If pixel is NOT white (i.e. part of the black square, grid, or AS glyphs)
      if (r < 240 || g < 240 || b < 240) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding box: left=${minX}, top=${minY}, right=${maxX}, bottom=${maxY}`);
  console.log(`Width=${maxX - minX + 1}, Height=${maxY - minY + 1}`);
}

analyze().catch(console.error);
