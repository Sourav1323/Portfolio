const sharp = require('sharp');
const fs = require('fs');

async function cleanActionFigureV2() {
  console.log('Generating pristine action figure cutout with zero pillars...');
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

      // Character boundary envelopes:
      // 1. Head: y: 75 to 265, x: 375 to 525
      const isHead = y >= 75 && y <= 265 && x >= 375 && x <= 525;
      
      // 2. Torso, suit, crossed arms: y: 265 to 700, x: 305 to 585
      const isTorso = y > 265 && y <= 700 && x >= 305 && x <= 585;

      // 3. Legs and shoes: y: 700 to 1100, x: 345 to 555
      const isLegs = y > 700 && y <= 1100 && x >= 345 && x <= 555;

      let isCharacter = false;

      if (isHead) {
        // Head hair or skin
        const isSkin = r > 110 && g > 65 && r > g;
        const isHair = y <= 180 && (r < 75 || (r > 60 && r < 130 && r > b));
        const isFace = r > 90 && g > 55;
        if (isSkin || isHair || isFace) {
          isCharacter = true;
        }
      } else if (isTorso) {
        // Navy blazer, grey shirt, hands
        const isBlazer = (b > r + 2) || (r < 25 && g < 30 && b < 45);
        const isShirt = Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && r > 65 && r < 125;
        const isHands = r > 110 && g > 65 && r > g;
        const isDarkSuit = r < 50 && g < 50 && b < 65;
        if (isBlazer || isShirt || isHands || isDarkSuit) {
          isCharacter = true;
        }
      } else if (isLegs) {
        // Navy/black trousers
        const isPants = r < 40 && g < 45 && b < 55;
        const isShoes = y > 1020 && r < 50 && g < 50;
        if (isPants || isShoes) {
          isCharacter = true;
        }
      }

      // If inside character envelope and matches character colors: opaque
      if (isCharacter) {
        out[outIdx + 3] = 255;
      } else {
        out[outIdx + 3] = 0; // ZERO ROOM PILLARS!
      }
    }
  }

  // Smooth/feather edges with 1px dilation to close micro-gaps
  // Simple morphological close
  const refinedOut = Buffer.from(out);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;
      if (out[idx + 3] === 0) {
        // Check 4-connected neighbors
        let solidNeighbors = 0;
        if (out[((y - 1) * width + x) * 4 + 3] === 255) solidNeighbors++;
        if (out[((y + 1) * width + x) * 4 + 3] === 255) solidNeighbors++;
        if (out[(y * width + (x - 1)) * 4 + 3] === 255) solidNeighbors++;
        if (out[(y * width + (x + 1)) * 4 + 3] === 255) solidNeighbors++;

        // If surrounded by solid pixels, fill hole
        if (solidNeighbors >= 3) {
          refinedOut[idx] = data[(y * width + x) * 3];
          refinedOut[idx + 1] = data[(y * width + x) * 3 + 1];
          refinedOut[idx + 2] = data[(y * width + x) * 3 + 2];
          refinedOut[idx + 3] = 255;
        }
      }
    }
  }

  const png = await sharp(refinedOut, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_character_only.png', png);
  fs.writeFileSync('public/action_figure_character_only.png', png);
  console.log('Successfully saved action_figure_character_only.png!');
}

cleanActionFigureV2().catch(console.error);
