const sharp = require('sharp');
const fs = require('fs');

async function fixAvatarHair() {
  console.log('Loading source images...');
  const origImg = sharp('src/assets/sourav_executive_3d.jpg');
  const transImg = sharp('src/assets/sourav_executive_3d_transparent.png');

  const origBuffer = await origImg.raw().toBuffer({ resolveWithObject: true });
  const transBuffer = await transImg.raw().toBuffer({ resolveWithObject: true });

  const { width, height } = origBuffer.info;
  const origData = origBuffer.data;
  const transData = transBuffer.data;

  // Output RGBA buffer
  const outData = Buffer.from(transData);

  // Determine row bounds for head (y: 67 to 280)
  for (let y = 67; y <= 280; y++) {
    let left = -1;
    let right = -1;

    // Scan inward from left (x: 250 to 450)
    for (let x = 250; x < 450; x++) {
      const idx = (y * width + x) * 3;
      const b = (origData[idx] + origData[idx + 1] + origData[idx + 2]) / 3;
      if (b > 11) {
        left = x;
        break;
      }
    }

    // Scan inward from right (x: 650 down to 450)
    for (let x = 650; x > 450; x--) {
      const idx = (y * width + x) * 3;
      const b = (origData[idx] + origData[idx + 1] + origData[idx + 2]) / 3;
      if (b > 11) {
        right = x;
        break;
      }
    }

    if (left !== -1 && right !== -1 && right > left) {
      // Clear anything clearly outside the head on this row (if it wasn't already)
      for (let x = 0; x < left - 2; x++) {
        const outIdx = (y * width + x) * 4;
        outData[outIdx + 3] = 0;
      }
      for (let x = right + 3; x < width; x++) {
        const outIdx = (y * width + x) * 4;
        outData[outIdx + 3] = 0;
      }

      // Smooth outer left edge
      if (left - 1 >= 0) {
        const idx = (y * width + (left - 1)) * 4;
        const origIdx = (y * width + (left - 1)) * 3;
        outData[idx] = origData[origIdx];
        outData[idx + 1] = origData[origIdx + 1];
        outData[idx + 2] = origData[origIdx + 2];
        outData[idx + 3] = Math.min(outData[idx + 3], 120);
      }
      {
        const idx = (y * width + left) * 4;
        const origIdx = (y * width + left) * 3;
        outData[idx] = origData[origIdx];
        outData[idx + 1] = origData[origIdx + 1];
        outData[idx + 2] = origData[origIdx + 2];
        outData[idx + 3] = 200;
      }

      // Inside the head/hair: 100% SOLID OPAQUE (alpha = 255)
      // Copy pristine RGB from original so hair is rich, dark, and perfectly styled
      for (let x = left + 1; x < right; x++) {
        const outIdx = (y * width + x) * 4;
        const origIdx = (y * width + x) * 3;
        outData[outIdx] = origData[origIdx];
        outData[outIdx + 1] = origData[origIdx + 1];
        outData[outIdx + 2] = origData[origIdx + 2];
        outData[outIdx + 3] = 255; // SOLID! NO HOLES! NO WHITE MIXING!
      }

      // Smooth outer right edge
      {
        const idx = (y * width + right) * 4;
        const origIdx = (y * width + right) * 3;
        outData[idx] = origData[origIdx];
        outData[idx + 1] = origData[origIdx + 1];
        outData[idx + 2] = origData[origIdx + 2];
        outData[idx + 3] = 200;
      }
      if (right + 1 < width) {
        const idx = (y * width + (right + 1)) * 4;
        const origIdx = (y * width + (right + 1)) * 3;
        outData[idx] = origData[origIdx];
        outData[idx + 1] = origData[origIdx + 1];
        outData[idx + 2] = origData[origIdx + 2];
        outData[idx + 3] = Math.min(outData[idx + 3], 120);
      }
    } else {
      // y < 67 is above the head: strictly transparent
      for (let x = 0; x < width; x++) {
        const outIdx = (y * width + x) * 4;
        outData[outIdx + 3] = 0;
      }
    }
  }

  // Also ensure rows 0 to 66 are completely transparent
  for (let y = 0; y < 67; y++) {
    for (let x = 0; x < width; x++) {
      outData[(y * width + x) * 4 + 3] = 0;
    }
  }

  console.log('Writing fixed avatar to src/assets and public...');
  const outPng = await sharp(outData, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/sourav_executive_3d_transparent.png', outPng);
  fs.writeFileSync('public/sourav_executive_3d_transparent.png', outPng);

  console.log('Successfully fixed avatar hair! Opaque hair with 0 holes.');
}

fixAvatarHair().catch(console.error);
