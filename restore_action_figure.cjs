const sharp = require('sharp');
const fs = require('fs');

async function restoreActionFigure() {
  console.log('Restoring 100% solid, fully intact character...');
  const img = await sharp('src/assets/action_figure.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = img.info;
  const data = img.data;
  const out = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 3;
      const outIdx = (y * width + x) * 4;

      out[outIdx] = data[idx];
      out[outIdx + 1] = data[idx + 1];
      out[outIdx + 2] = data[idx + 2];

      // Exact silhouette envelope of the character:
      let isInsideCharacter = false;

      // 1. Head (y: 75 to 265, smooth oval from x: 380 to 520)
      if (y >= 75 && y <= 265) {
        const headCenterY = 170;
        const headRadiusY = 95;
        const headCenterX = 450;
        const headRadiusX = 70;
        const normalizedDist = Math.pow((x - headCenterX) / headRadiusX, 2) + Math.pow((y - headCenterY) / headRadiusY, 2);
        if (normalizedDist <= 1.0) {
          isInsideCharacter = true;
        }
      }

      // 2. Neck and shoulders (y: 265 to 330)
      if (y > 265 && y <= 330) {
        const spanLeft = 450 - (y - 265) * 1.8;
        const spanRight = 450 + (y - 265) * 1.8;
        if (x >= spanLeft && x <= spanRight) {
          isInsideCharacter = true;
        }
      }

      // 3. Torso, blazer, crossed arms (y: 330 to 720, x: 320 to 580)
      if (y > 330 && y <= 720) {
        if (x >= 320 && x <= 580) {
          isInsideCharacter = true;
        }
      }

      // 4. Legs down to shoes (y: 720 to 1100, x: 350 to 550)
      if (y > 720 && y <= 1100) {
        if (x >= 350 && x <= 550) {
          isInsideCharacter = true;
        }
      }

      // Also preserve any vibrant green HUD particles close to the character
      const isGreenHud = data[idx + 1] > data[idx] + 20 && data[idx + 1] > data[idx + 2] + 20 && data[idx + 1] > 60;
      if (isGreenHud && x >= 140 && x <= 760 && y >= 320 && y <= 980) {
        isInsideCharacter = true;
      }

      out[outIdx + 3] = isInsideCharacter ? 255 : 0;
    }
  }

  // Soft anti-aliasing on outer boundary (1-2px feathering)
  const feathered = Buffer.from(out);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;
      if (out[idx + 3] === 255) {
        // If bordering transparent pixel, feather slightly
        if (
          out[((y - 1) * width + x) * 4 + 3] === 0 ||
          out[((y + 1) * width + x) * 4 + 3] === 0 ||
          out[(y * width + (x - 1)) * 4 + 3] === 0 ||
          out[(y * width + (x + 1)) * 4 + 3] === 0
        ) {
          feathered[idx + 3] = 180;
        }
      }
    }
  }

  const png = await sharp(feathered, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_character_only.png', png);
  fs.writeFileSync('public/action_figure_character_only.png', png);
  console.log('Successfully restored solid action_figure_character_only.png!');
}

restoreActionFigure().catch(console.error);
