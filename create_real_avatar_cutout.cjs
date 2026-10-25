const sharp = require('sharp');
const fs = require('fs');

async function createRealAvatarCutout() {
  console.log('Reading real LinkedIn avatar...');
  // Upscale to 512x512 first with lanczos3 for silky smooth edges
  const upscaledBuffer = await sharp('src/assets/sourav_avatar.jpg')
    .resize(512, 512, { kernel: 'lanczos3' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = upscaledBuffer.info;
  const data = upscaledBuffer.data;

  // Create RGBA output buffer
  const outData = Buffer.alloc(width * height * 4);

  // For each row y in 512
  for (let y = 0; y < height; y++) {
    // Detect person boundary
    let left = -1;
    let right = -1;

    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      // Background is light/pastel grey-pink/white
      const isBg = (r > 138 && g > 125 && b > 135) || (r > 195 && g > 175) || (r > 170 && b > 165);
      if (!isBg) {
        if (left === -1) left = x;
        right = x;
      }
    }

    // Only if person is present
    if (left !== -1 && right !== -1 && y >= 60) {
      for (let x = 0; x < width; x++) {
        const outIdx = (y * width + x) * 4;
        const inIdx = (y * width + x) * 3;

        if (x < left - 3 || x > right + 3) {
          // Outside person: transparent
          outData[outIdx] = 0;
          outData[outIdx + 1] = 0;
          outData[outIdx + 2] = 0;
          outData[outIdx + 3] = 0;
        } else if (x >= left && x <= right) {
          // Inside person: fully opaque, pristine colors
          outData[outIdx] = data[inIdx];
          outData[outIdx + 1] = data[inIdx + 1];
          outData[outIdx + 2] = data[inIdx + 2];
          outData[outIdx + 3] = 255;
        } else {
          // Feathered boundary (left-3..left-1, right+1..right+3)
          const dist = x < left ? 3 - (left - x) : 3 - (x - right);
          const alpha = Math.round((dist / 3) * 200);
          outData[outIdx] = data[inIdx];
          outData[outIdx + 1] = data[inIdx + 1];
          outData[outIdx + 2] = data[inIdx + 2];
          outData[outIdx + 3] = alpha;
        }
      }
    } else {
      // Background above head
      for (let x = 0; x < width; x++) {
        const outIdx = (y * width + x) * 4;
        outData[outIdx + 3] = 0;
      }
    }
  }

  // Create transparent PNG with subtle bottom fade for elegant figurine pedestal look
  const pngBuffer = await sharp(outData, {
    raw: { width, height, channels: 4 }
  })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/sourav_linkedin_cutout.png', pngBuffer);
  fs.writeFileSync('public/sourav_linkedin_cutout.png', pngBuffer);
  console.log('Successfully created sourav_linkedin_cutout.png!');
}

createRealAvatarCutout().catch(console.error);
