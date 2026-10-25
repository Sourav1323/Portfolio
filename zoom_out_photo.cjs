const sharp = require('sharp');
const fs = require('fs');

async function zoomOutPhoto() {
  console.log('Generating zoomed out portrait card...');
  const canvasWidth = 850;
  const canvasHeight = 1100;

  // Scale photo to ~82% of height so it is pleasantly zoomed out
  const targetHeight = 880;
  const scaledPhoto = await sharp('src/assets/sourav_real_linkedin.jpg')
    .resize({ height: targetHeight, fit: 'inside', kernel: 'lanczos3' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pWidth = scaledPhoto.info.width;
  const pHeight = scaledPhoto.info.height;

  // Mask for scaled photo: rounded corners + soft bottom gradient fade
  const maskSvg = `
    <svg width="${pWidth}" height="${pHeight}">
      <defs>
        <linearGradient id="photoBottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="78%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="92%" stop-color="#ffffff" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${pWidth}" height="${pHeight}" rx="28" ry="28" fill="url(#photoBottomFade)"/>
    </svg>
  `;

  const maskedPhoto = await sharp(scaledPhoto.data, {
    raw: { width: pWidth, height: pHeight, channels: 3 }
  })
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .png({ compressionLevel: 8 })
    .toBuffer();

  // Position centered horizontally, aligned nicely toward the bottom
  const leftPos = Math.round((canvasWidth - pWidth) / 2);
  const topPos = canvasHeight - pHeight - 40;

  // Composite onto transparent canvas
  const finalCard = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: maskedPhoto, left: leftPos, top: topPos }])
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/sourav_real_portrait_card.png', finalCard);
  fs.writeFileSync('public/sourav_real_portrait_card.png', finalCard);
  console.log('Successfully created zoomed-out sourav_real_portrait_card.png!');
}

zoomOutPhoto().catch(console.error);
