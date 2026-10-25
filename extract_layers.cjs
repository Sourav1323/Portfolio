const sharp = require('sharp');
const fs = require('fs');

async function extractCharacterAndPedestal() {
  console.log('Extracting character, head, and pedestal...');
  const img = await sharp('src/assets/sourav_executive_3d_transparent.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = img.info;
  const data = img.data;

  const charData = Buffer.alloc(width * height * 4);
  const headData = Buffer.alloc(width * height * 4);
  const pedData = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];

      // 1. Head (y: 65 to 260, x: 370 to 540)
      if (y >= 65 && y <= 265 && x >= 370 && x <= 540) {
        headData[idx] = r; headData[idx + 1] = g; headData[idx + 2] = b; headData[idx + 3] = a;
      }

      // 2. Character body (head down to shoes, y <= 860)
      if (y >= 65 && y <= 860 && a > 0) {
        charData[idx] = r; charData[idx + 1] = g; charData[idx + 2] = b; charData[idx + 3] = a;
      }

      // 3. Pedestal (y >= 835)
      if (y >= 835 && a > 0) {
        pedData[idx] = r; pedData[idx + 1] = g; pedData[idx + 2] = b; pedData[idx + 3] = a;
      }
    }
  }

  const charPng = await sharp(charData, { raw: { width, height, channels: 4 } }).png().toBuffer();
  const headPng = await sharp(headData, { raw: { width, height, channels: 4 } }).png().toBuffer();
  const pedPng = await sharp(pedData, { raw: { width, height, channels: 4 } }).png().toBuffer();

  fs.writeFileSync('src/assets/avatar_character.png', charPng);
  fs.writeFileSync('src/assets/avatar_head.png', headPng);
  fs.writeFileSync('src/assets/avatar_pedestal.png', pedPng);

  fs.writeFileSync('public/avatar_character.png', charPng);
  fs.writeFileSync('public/avatar_head.png', headPng);
  fs.writeFileSync('public/avatar_pedestal.png', pedPng);

  console.log('Successfully saved avatar_character.png, avatar_head.png, avatar_pedestal.png');
}

extractCharacterAndPedestal().catch(console.error);
