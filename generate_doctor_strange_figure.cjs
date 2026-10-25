const sharp = require('sharp');
const fs = require('fs');

async function createDoctorStrangeFigure() {
  console.log('Generating Doctor Strange Financial & Tech Action Figure...');
  const charImg = await sharp('src/assets/action_figure_character_only.png')
    .toBuffer();

  const width = 896;
  const height = 1200;

  // Generate Doctor Strange Financial & Tech Mandalas SVG
  // Left Arm Mandala center: (340, 480), Radius ~130
  // Right Arm Mandala center: (560, 480), Radius ~130
  // Back Grand Master Mandala center: (450, 440), Radius ~280
  const doctorStrangeSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Golden Emerald Financial Glow Filter -->
        <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="16" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Cyan Tech Glow Filter -->
        <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur1" />
          <feGaussianBlur stdDeviation="14" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="spellCoreGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10B981" stop-opacity="0.6"/>
          <stop offset="40%" stop-color="#F59E0B" stop-opacity="0.4"/>
          <stop offset="85%" stop-color="#D97706" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#D97706" stop-opacity="0"/>
        </radialGradient>

        <radialGradient id="spellCoreCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.6"/>
          <stop offset="50%" stop-color="#3B82F6" stop-opacity="0.35"/>
          <stop offset="90%" stop-color="#6366F1" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#6366F1" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- BACK MASTER MANDALA (Behind Torso, cx=448, cy=460, r=270) -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <g filter="url(#goldGlow)" opacity="0.85">
        <!-- Outermost Runed Ring -->
        <circle cx="448" cy="460" r="260" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="14 6 4 6"/>
        <circle cx="448" cy="460" r="248" fill="none" stroke="#10B981" stroke-width="1.5" stroke-opacity="0.8"/>
        <circle cx="448" cy="460" r="236" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8 8"/>

        <!-- Sacred Geometry Star Polygons (Doctor Strange Style) -->
        <polygon points="448,212 623,387 623,533 448,708 273,533 273,387" fill="none" stroke="#FBBF24" stroke-width="1.8" opacity="0.6"/>
        <polygon points="448,220 535,273 623,460 535,647 448,700 361,647 273,460 361,273" fill="none" stroke="#10B981" stroke-width="1.5" opacity="0.5"/>

        <!-- Financial & Tech Runes on Master Ring -->
        <g font-family="'Courier New', monospace" font-size="13" font-weight="900" fill="#FDE68A" letter-spacing="3">
          <text x="448" y="218" text-anchor="middle">₹ · DISTRIBUTED · $ · ACID · € · 40% · ₿</text>
          <text x="448" y="714" text-anchor="middle">JAVA 17 · SPRING · SQL · HIGH AVAILABILITY</text>
        </g>
      </g>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- LEFT HAND FINANCIAL MANDALA (cx=340, cy=490, r=135) -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <g filter="url(#goldGlow)">
        <circle cx="340" cy="490" r="135" fill="url(#spellCoreGold)"/>
        <!-- Outer Glowing Ring with Gear Teeth -->
        <circle cx="340" cy="490" r="130" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="12 4 4 4"/>
        <circle cx="340" cy="490" r="120" fill="none" stroke="#10B981" stroke-width="1.8"/>
        <circle cx="340" cy="490" r="108" fill="none" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="6 6"/>

        <!-- Concentric Square Mandalas (Doctor Strange Spell Casting) -->
        <rect x="260" y="410" width="160" height="160" rx="4" fill="none" stroke="#F59E0B" stroke-width="1.6" transform="rotate(15 340 490)" opacity="0.75"/>
        <rect x="260" y="410" width="160" height="160" rx="4" fill="none" stroke="#10B981" stroke-width="1.6" transform="rotate(60 340 490)" opacity="0.75"/>

        <!-- Inner Core Ring -->
        <circle cx="340" cy="490" r="65" fill="none" stroke="#FBBF24" stroke-width="2.5"/>
        <circle cx="340" cy="490" r="45" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 4"/>

        <!-- Glowing Financial Currency Glyphs floating around circle -->
        <g font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#FDE68A" text-anchor="middle">
          <text x="340" y="380">₹</text>
          <text x="445" y="495">$</text>
          <text x="340" y="612">€</text>
          <text x="235" y="495">₿</text>
          <text x="415" y="415">📈</text>
          <text x="265" y="565">ACID</text>
          <text x="415" y="565">40%</text>
          <text x="265" y="415">CAP</text>
        </g>
      </g>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- RIGHT HAND TECH MANDALA (cx=560, cy=490, r=135) -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <g filter="url(#cyanGlow)">
        <circle cx="560" cy="490" r="135" fill="url(#spellCoreCyan)"/>
        <!-- Outer Glowing Ring with Data Ticks -->
        <circle cx="560" cy="490" r="130" fill="none" stroke="#00D2FF" stroke-width="3" stroke-dasharray="10 5"/>
        <circle cx="560" cy="490" r="120" fill="none" stroke="#3B82F6" stroke-width="1.8"/>
        <circle cx="560" cy="490" r="108" fill="none" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="5 5"/>

        <!-- Sacred Geometry Octagram -->
        <rect x="480" y="410" width="160" height="160" rx="4" fill="none" stroke="#00D2FF" stroke-width="1.6" transform="rotate(30 560 490)" opacity="0.8"/>
        <rect x="480" y="410" width="160" height="160" rx="4" fill="none" stroke="#60A5FA" stroke-width="1.6" transform="rotate(75 560 490)" opacity="0.8"/>

        <!-- Inner Core Ring -->
        <circle cx="560" cy="490" r="65" fill="none" stroke="#00D2FF" stroke-width="2.5"/>
        <circle cx="560" cy="490" r="45" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4"/>

        <!-- Glowing Tech Stack Glyphs around right circle -->
        <g font-family="'Courier New', monospace" font-weight="900" font-size="13" fill="#BAE6FD" text-anchor="middle">
          <text x="560" y="380">SQL</text>
          <text x="665" y="495">JAVA</text>
          <text x="560" y="612">SPRING</text>
          <text x="455" y="495">K8S</text>
          <text x="635" y="415">API</text>
          <text x="485" y="565">CRUD</text>
          <text x="635" y="565">CACHE</text>
          <text x="485" y="415">AUTH</text>
        </g>
      </g>

      <!-- Ambient Doctor Strange Spark Motes Floating Around Figurine -->
      <g fill="#FDE68A" opacity="0.85">
        <circle cx="280" cy="330" r="2.5" filter="url(#goldGlow)"/>
        <circle cx="610" cy="310" r="3" filter="url(#cyanGlow)"/>
        <circle cx="220" cy="440" r="2" filter="url(#goldGlow)"/>
        <circle cx="670" cy="460" r="2.5" filter="url(#cyanGlow)"/>
        <circle cx="290" cy="620" r="3" filter="url(#goldGlow)"/>
        <circle cx="610" cy="640" r="2.5" filter="url(#cyanGlow)"/>
        <circle cx="448" cy="740" r="3.5" filter="url(#goldGlow)"/>
        <circle cx="360" cy="240" r="2" filter="url(#goldGlow)"/>
        <circle cx="530" cy="230" r="2.5" filter="url(#cyanGlow)"/>
      </g>
    </svg>
  `;

  // Composite:
  // Layer 1: Back Master Mandala
  // Layer 2: Clean Character Body
  // Layer 3: Left & Right Spell Shields overlapping hands & casting rays
  const masterSvgBuffer = Buffer.from(doctorStrangeSvg);

  const finalComposite = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: masterSvgBuffer, top: 0, left: 0 },
      { input: charImg, top: 0, left: 0 },
      // Foreground spell shield overlay for 3D depth wrapping around arms
      { input: masterSvgBuffer, top: 0, left: 0, blend: 'screen' }
    ])
    .png({ compressionLevel: 8 })
    .toBuffer();

  fs.writeFileSync('src/assets/action_figure_transparent.png', finalComposite);
  fs.writeFileSync('public/action_figure_transparent.png', finalComposite);
  console.log('Successfully generated Doctor Strange Financial & Tech Action Figure!');
}

createDoctorStrangeFigure().catch(console.error);
