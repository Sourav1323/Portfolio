const sharp = require('sharp');
const fs = require('fs');

async function floodFillCutout() {
  console.log('Running proper flood fill cutout on action_figure.png...');
  const img = await sharp('src/assets/action_figure.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = img.info;
  const data = img.data;

  // Mask: 0 = unvisited/figure, 1 = background
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed with all edge pixels that are background
  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    isBg[x] = 1;
    const btmIdx = (height - 1) * width + x;
    queue.push(x, height - 1);
    isBg[btmIdx] = 1;
  }
  for (let y = 0; y < height; y++) {
    const leftIdx = y * width;
    if (!isBg[leftIdx]) {
      queue.push(0, y);
      isBg[leftIdx] = 1;
    }
    const rightIdx = y * width + (width - 1);
    if (!isBg[rightIdx]) {
      queue.push(width - 1, y);
      isBg[rightIdx] = 1;
    }
  }

  // BFS
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1]
    ];

    for (let i = 0; i < 4; i++) {
      const nx = neighbors[i][0];
      const ny = neighbors[i][1];

      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!isBg[nIdx]) {
          const pixelIdx = nIdx * 3;
          const r = data[pixelIdx];
          const g = data[pixelIdx + 1];
          const b = data[pixelIdx + 2];

          // Stop at character:
          // Character has skin (r>130, g>80), hair (distinct in head region),
          // or navy jacket (deep blue/black, distinct from brownish wall),
          // or vibrant green HUD (g > r + 15 && g > b + 15)
          const isGreenHud = g > r + 15 && g > b + 15 && g > 45;
          const isSkin = r > 115 && g > 70 && b > 55 && r > g && g > b;
          const isJacket = (b > r + 4 || (r < 18 && g < 22 && b < 40)) && ny > 260 && ny < 750 && nx > 280 && nx < 600;
          const isTee = Math.abs(r - g) < 8 && Math.abs(g - b) < 8 && r > 70 && r < 120 && ny > 280 && ny < 600 && nx > 380 && nx < 520;
          const isPants = r < 18 && g < 20 && b < 28 && ny >= 700 && nx > 320 && nx < 580;
          const isHead = ny >= 75 && ny <= 265 && nx >= 370 && nx <= 530;

          if (!isGreenHud && !isSkin && !isJacket && !isTee && !isPants && !isHead) {
            isBg[nIdx] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Generate output RGBA buffer
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const outIdx = i * 4;
    const inIdx = i * 3;
    out[outIdx] = data[inIdx];
    out[outIdx + 1] = data[inIdx + 1];
    out[outIdx + 2] = data[inIdx + 2];
    out[outIdx + 3] = isBg[i] ? 0 : 255;
  }

  const png = await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_transparent.png', png);
  fs.writeFileSync('public/action_figure_transparent.png', png);
  console.log('Successfully generated clean flood-filled action_figure_transparent.png!');
}

floodFillCutout().catch(console.error);
