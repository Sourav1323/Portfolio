const sharp = require('sharp');
const fs = require('fs');

async function fixDoctorStrangeHair() {
  console.log('Fixing hair transparency in Doctor Strange action figure...');
  const inputPath = 'C:/Users/Administrator/.gemini/antigravity/brain/b236a74e-4251-46e6-914c-80f9e07e7c3b/engineer_action_figure_1792928395204.jpg';

  const img = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = img.info;
  const data = img.data;

  const out = Buffer.alloc(width * height * 4);

  // 1. First pass: map precise head envelope for rows 100..260
  const headBounds = [];
  for (let y = 0; y < height; y++) {
    if (y >= 102 && y <= 265) {
      let l = -1, r = -1;
      for (let x = 360; x <= 530; x++) {
        const idx = (y * width + x) * 3;
        const maxVal = Math.max(data[idx], data[idx + 1], data[idx + 2]);
        if (maxVal > 8) {
          if (l === -1) l = x;
          r = x;
        }
      }
      headBounds[y] = { l, r };
    }
  }

  // 2. Second pass: map full body torso & legs envelope
  const bodyBounds = [];
  for (let y = 0; y < height; y++) {
    if (y > 265 && y <= 1120) {
      let l = -1, r = -1;
      // Scan inward from left (x: 200..450) and right (x: 700..450) for core character
      for (let x = 250; x < 450; x++) {
        const idx = (y * width + x) * 3;
        const maxVal = Math.max(data[idx], data[idx + 1], data[idx + 2]);
        if (maxVal > 8) {
          l = x;
          break;
        }
      }
      for (let x = 700; x > 450; x--) {
        const idx = (y * width + x) * 3;
        const maxVal = Math.max(data[idx], data[idx + 1], data[idx + 2]);
        if (maxVal > 8) {
          r = x;
          break;
        }
      }
      bodyBounds[y] = { l, r };
    }
  }

  // 3. Process each pixel
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const inIdx = (y * width + x) * 3;
      const outIdx = (y * width + x) * 4;

      const r = data[inIdx];
      const g = data[inIdx + 1];
      const b = data[inIdx + 2];

      out[outIdx] = r;
      out[outIdx + 1] = g;
      out[outIdx + 2] = b;

      const maxChannel = Math.max(r, g, b);

      // Check if inside head envelope
      const head = headBounds[y];
      const isInsideHead = head && head.l !== -1 && head.r !== -1 && x >= head.l && x <= head.r;

      // Check if inside body core
      const body = bodyBounds[y];
      const isInsideBody = body && body.l !== -1 && body.r !== -1 && x >= body.l && x <= body.r;

      if (isInsideHead) {
        // HEAD & HAIR: 100% SOLID OPAQUE! Zero holes! Zero white bleed-through!
        out[outIdx + 3] = 255;
      } else if (isInsideBody) {
        // SUIT & TROUSERS CORE: 100% SOLID OPAQUE!
        out[outIdx + 3] = 255;
      } else {
        // Outside character body: Doctor Strange glowing spell shields and outer background
        if (maxChannel <= 8) {
          out[outIdx + 3] = 0; // Pure black background
        } else if (maxChannel < 40) {
          // Soft luminous glow on outer spell arcs
          const alpha = Math.round(((maxChannel - 8) / (40 - 8)) * 255);
          out[outIdx + 3] = alpha;
        } else {
          // Vibrant glowing spell rings
          out[outIdx + 3] = 255;
        }
      }
    }
  }

  // 4. Smooth feather outer head perimeter (1-2px) so hair edge is silky against any background
  for (let y = 103; y <= 264; y++) {
    const head = headBounds[y];
    if (head && head.l !== -1 && head.r !== -1) {
      // Left outer edge
      if (head.l - 1 >= 0) {
        out[(y * width + (head.l - 1)) * 4 + 3] = 120;
      }
      // Right outer edge
      if (head.r + 1 < width) {
        out[(y * width + (head.r + 1)) * 4 + 3] = 120;
      }
    }
  }

  console.log('Writing fixed Doctor Strange action figure to src/assets and public...');
  const png = await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_transparent.png', png);
  fs.writeFileSync('public/action_figure_transparent.png', png);
  console.log('Successfully saved solid-hair Doctor Strange action figure!');
}

fixDoctorStrangeHair().catch(console.error);
