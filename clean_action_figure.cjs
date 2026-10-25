const sharp = require('sharp');
const fs = require('fs');

async function cleanActionFigure() {
  console.log('Cleaning action_figure_transparent.png...');
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

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      out[outIdx] = r;
      out[outIdx + 1] = g;
      out[outIdx + 2] = b;

      // Green holographic UI panels (vibrant green/cyan)
      const isGreenHud = g > r + 12 && g > b + 8 && g > 40;
      
      // Character body envelope:
      // Head: y: 80..260, x: 380..520
      // Upper body: y: 260..700, x: 260..640
      // Legs: y: 700..1120, x: 320..580
      // Green HUD panels extend horizontally to x: 140..760 in y: 350..950
      
      let isInsideFigure = false;
      if (y >= 75 && y <= 270 && x >= 370 && x <= 530) {
        isInsideFigure = true;
      } else if (y > 270 && y <= 720 && x >= 270 && x <= 630) {
        isInsideFigure = true;
      } else if (y > 720 && y <= 1120 && x >= 310 && x <= 590) {
        isInsideFigure = true;
      } else if (isGreenHud && x >= 120 && x <= 780 && y >= 300 && y <= 1000) {
        isInsideFigure = true;
      }

      if (isInsideFigure) {
        out[outIdx + 3] = 255;
      } else if (isGreenHud) {
        out[outIdx + 3] = Math.min(255, g * 2);
      } else {
        out[outIdx + 3] = 0; // Pure transparent! No pillars!
      }
    }
  }

  const png = await sharp(out, {
    raw: { width, height, channels: 4 }
  })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_transparent.png', png);
  fs.writeFileSync('public/action_figure_transparent.png', png);
  console.log('Successfully cleaned action_figure_transparent.png!');
}

cleanActionFigure().catch(console.error);
