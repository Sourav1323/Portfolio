const sharp = require('sharp');
const fs = require('fs');

async function processRealPhoto() {
  console.log('Processing real photo from user upload...');
  const inputPath = 'src/assets/sourav_real_linkedin.jpg';
  const img = sharp(inputPath);
  const meta = await img.metadata();
  const width = meta.width; // 819
  const height = meta.height; // 1024

  // Create an elegant rounded portrait card with bottom fade
  // SVG mask with rounded top corners (rx=32, ry=32) and soft linear gradient fade at bottom
  const maskSvg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="fadeBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="75%" stop-color="#ffffff" stop-opacity="1"/>
          <stop offset="92%" stop-color="#ffffff" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" rx="32" ry="32" fill="url(#fadeBottom)"/>
    </svg>
  `;

  const portraitCard = await sharp(inputPath)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/sourav_real_portrait_card.png', portraitCard);
  fs.writeFileSync('public/sourav_real_portrait_card.png', portraitCard);
  console.log('Successfully created sourav_real_portrait_card.png');
}

processRealPhoto().catch(console.error);
