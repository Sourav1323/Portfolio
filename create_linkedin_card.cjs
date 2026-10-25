const sharp = require('sharp');
const fs = require('fs');

async function createLinkedInAvatarCard() {
  console.log('Generating authentic LinkedIn profile card...');
  const avatarWidth = 460;
  const avatarHeight = 460;

  // Load original sourav_avatar.jpg
  const avatarImg = await sharp('src/assets/sourav_avatar.jpg')
    .resize(avatarWidth, avatarHeight, { kernel: 'lanczos3' })
    .toBuffer();

  // Create circular mask with soft anti-aliased border
  const circleMaskSvg = `
    <svg width="${avatarWidth}" height="${avatarHeight}">
      <circle cx="${avatarWidth / 2}" cy="${avatarHeight / 2}" r="${avatarWidth / 2 - 4}" fill="#ffffff" />
    </svg>
  `;

  const circularAvatar = await sharp(avatarImg)
    .composite([{ input: Buffer.from(circleMaskSvg), blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Now create the full card canvas (600 x 850) with transparent background
  const canvasWidth = 600;
  const canvasHeight = 850;

  // SVG badge and pedestal elements
  const cardSvg = `
    <svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stop-color="#0A66C2" stop-opacity="0.8"/>
          <stop offset="95%" stop-color="#00D2FF" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#00D2FF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0A66C2" stop-opacity="0"/>
          <stop offset="50%" stop-color="#0A66C2" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#0A66C2" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Glowing outer circle ring for avatar -->
      <circle cx="300" cy="300" r="236" fill="none" stroke="#0A66C2" stroke-width="4" opacity="0.6"/>
      <circle cx="300" cy="300" r="242" fill="none" stroke="#00D2FF" stroke-width="2" opacity="0.8" stroke-dasharray="16 8"/>

      <!-- LinkedIn Verified Pill -->
      <g transform="translate(200, 560)">
        <rect x="0" y="0" width="200" height="42" rx="21" fill="#0A66C2" opacity="0.95"/>
        <text x="100" y="26" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">
          ✓ LINKEDIN VERIFIED
        </text>
      </g>

      <!-- Bottom Glass Identity Plaque -->
      <g transform="translate(100, 630)">
        <rect x="0" y="0" width="400" height="110" rx="20" fill="#0D1524" fill-opacity="0.85" stroke="#0A66C2" stroke-width="1.5" stroke-opacity="0.6"/>
        <text x="200" y="38" font-family="'Anton', sans-serif" font-size="24" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">
          SOURAV GUPTA
        </text>
        <text x="200" y="65" font-family="'Inter', sans-serif" font-size="13" font-weight="600" fill="#00D2FF" text-anchor="middle" letter-spacing="0.5">
          TCS SDE · SYSTEMS ENGINEER
        </text>
        <text x="200" y="88" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8" text-anchor="middle">
          JAVA 17 · SPRING BOOT · SQL 40% SPEEDUP
        </text>
      </g>

      <!-- Bottom Pedestal Base Light -->
      <ellipse cx="300" cy="790" rx="220" ry="24" fill="url(#pedestalGrad)"/>
      <ellipse cx="300" cy="790" rx="140" ry="12" fill="#00D2FF" opacity="0.3"/>
    </svg>
  `;

  const finalCard = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: Buffer.from(cardSvg), top: 0, left: 0 },
      { input: circularAvatar, top: 70, left: 70 }
    ])
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/sourav_linkedin_cutout.png', finalCard);
  fs.writeFileSync('public/sourav_linkedin_cutout.png', finalCard);
  console.log('Successfully generated authentic LinkedIn profile card!');
}

createLinkedInAvatarCard().catch(console.error);
