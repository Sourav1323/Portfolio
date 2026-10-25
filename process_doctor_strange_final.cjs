const sharp = require('sharp');
const fs = require('fs');

async function processDoctorStrangeFinal() {
  console.log('Processing pure pitch-black Doctor Strange image to transparent PNG...');
  const inputPath = 'C:/Users/Administrator/.gemini/antigravity/brain/b236a74e-4251-46e6-914c-80f9e07e7c3b/engineer_action_figure_1792928395204.jpg';

  // Read raw image
  const img = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = img.info;
  const data = img.data;

  // Masking from black background:
  // For pixels with brightness < 10: pure transparent
  // For brightness between 10 and 40: soft linear alpha transition
  // For brightness > 40: 100% solid
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const inIdx = i * 3;
    const outIdx = i * 4;

    const r = data[inIdx];
    const g = data[inIdx + 1];
    const b = data[inIdx + 2];

    out[outIdx] = r;
    out[outIdx + 1] = g;
    out[outIdx + 2] = b;

    const maxChannel = Math.max(r, g, b);

    if (maxChannel <= 8) {
      out[outIdx + 3] = 0;
    } else if (maxChannel < 36) {
      const alpha = Math.round(((maxChannel - 8) / (36 - 8)) * 255);
      out[outIdx + 3] = alpha;
    } else {
      out[outIdx + 3] = 255;
    }
  }

  const png = await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_transparent.png', png);
  fs.writeFileSync('public/action_figure_transparent.png', png);
  console.log('Successfully written pristine Doctor Strange action_figure_transparent.png!');
}

processDoctorStrangeFinal().catch(console.error);
