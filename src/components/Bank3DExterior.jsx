import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Compass, ArrowRight, ShieldCheck, Sparkles, Building2, Eye } from 'lucide-react';

export default function Bank3DExterior({ onEnterBuilding }) {
  const mountRef = useRef(null);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 520;
    const isMobile = width < 768;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0e17, 0.018);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    // Initial camera position looking at the grand neoclassical bank facade
    camera.position.set(0, 3.2, isMobile ? 18 : 13.5);
    camera.lookAt(0, 3.8, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for the entire Bank Building
    const bankGroup = new THREE.Group();
    scene.add(bankGroup);

    // Materials - Neoclassical Portland Stone & Bank Architecture
    const stoneColor = 0xdcd3c4;
    const darkStoneColor = 0xbab0a0;
    const brassColor = 0xd4af37;
    const windowColor = 0x1a2638;
    const windowGlowColor = 0xf59e0b;

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: stoneColor,
      roughness: 0.65,
      metalness: 0.1
    });

    const rusticatedStoneMaterial = new THREE.MeshStandardMaterial({
      color: darkStoneColor,
      roughness: 0.8,
      metalness: 0.05
    });

    const brassMaterial = new THREE.MeshStandardMaterial({
      color: brassColor,
      roughness: 0.3,
      metalness: 0.85
    });

    const glassMaterial = new THREE.MeshStandardMaterial({
      color: windowColor,
      roughness: 0.1,
      metalness: 0.9,
      emissive: windowGlowColor,
      emissiveIntensity: 0.4
    });

    const portalGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb703,
      transparent: true,
      opacity: 0.85
    });

    // ----------------------------------------------------
    // BUILD THE NEOCLASSICAL BANK BUILDING (Inspired by Bank of England)
    // ----------------------------------------------------

    // A. Grand Stone Plaza / Base Steps
    for (let s = 0; s < 4; s++) {
      const stepWidth = 16 - s * 0.6;
      const stepDepth = 8 - s * 0.4;
      const stepGeo = new THREE.BoxGeometry(stepWidth, 0.25, stepDepth);
      const stepMesh = new THREE.Mesh(stepGeo, rusticatedStoneMaterial);
      stepMesh.position.set(0, s * 0.25, 0);
      stepMesh.receiveShadow = true;
      bankGroup.add(stepMesh);
    }

    // B. Rusticated Ground Floor Plinth (Substantial Stone Base)
    const basePlinthGeo = new THREE.BoxGeometry(13.5, 2.8, 5.5);
    const basePlinth = new THREE.Mesh(basePlinthGeo, rusticatedStoneMaterial);
    basePlinth.position.set(0, 1.4 + 1.0, -0.5);
    basePlinth.castShadow = true;
    basePlinth.receiveShadow = true;
    bankGroup.add(basePlinth);

    // Grand Entrance Archway Portal (The Gateway into the Bank)
    const archPortalOuterGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.6, 32, 1, false, 0, Math.PI);
    archPortalOuterGeo.rotateZ(Math.PI / 2);
    const archPortalOuter = new THREE.Mesh(archPortalOuterGeo, stoneMaterial);
    archPortalOuter.position.set(0, 2.7, 2.26);
    bankGroup.add(archPortalOuter);

    const archOpeningGeo = new THREE.BoxGeometry(1.8, 2.1, 1.2);
    const archOpening = new THREE.Mesh(archOpeningGeo, new THREE.MeshBasicMaterial({ color: 0x070b14 }));
    archOpening.position.set(0, 1.05 + 1.0, 2.25);
    bankGroup.add(archOpening);

    // Warm welcoming interior golden light shining through the portal
    const portalGlowGeo = new THREE.PlaneGeometry(1.6, 2.2);
    const portalGlow = new THREE.Mesh(portalGlowGeo, portalGlowMaterial);
    portalGlow.position.set(0, 2.1, 2.24);
    bankGroup.add(portalGlow);

    // Ground floor arched windows on left and right wings
    const windowPositionsX = [-5.2, -3.8, -2.4, 2.4, 3.8, 5.2];
    windowPositionsX.forEach((wx) => {
      const winGeo = new THREE.BoxGeometry(0.7, 1.1, 0.1);
      const win = new THREE.Mesh(winGeo, glassMaterial);
      win.position.set(wx, 2.3, 2.27);
      bankGroup.add(win);
    });

    // C. Classical Stone Balustrade (Balcony above ground plinth)
    const balustradePlinthGeo = new THREE.BoxGeometry(13.8, 0.4, 5.8);
    const balustradePlinth = new THREE.Mesh(balustradePlinthGeo, stoneMaterial);
    balustradePlinth.position.set(0, 4.0, -0.5);
    bankGroup.add(balustradePlinth);

    // D. Main Colonnade Floor & Central Portico
    const porticoWallGeo = new THREE.BoxGeometry(13.2, 4.2, 5.0);
    const porticoWall = new THREE.Mesh(porticoWallGeo, stoneMaterial);
    porticoWall.position.set(0, 6.1, -0.6);
    porticoWall.castShadow = true;
    bankGroup.add(porticoWall);

    // Main Colonnade - 8 Grand Classical Columns
    const columnCount = 8;
    const colSpacing = 1.15;
    const startX = -((columnCount - 1) * colSpacing) / 2;
    const columnRadius = 0.22;
    const columnHeight = 3.8;

    for (let c = 0; c < columnCount; c++) {
      const cx = startX + c * colSpacing;
      
      // Column Base
      const colBaseGeo = new THREE.BoxGeometry(0.55, 0.18, 0.55);
      const colBase = new THREE.Mesh(colBaseGeo, stoneMaterial);
      colBase.position.set(cx, 4.29, 2.0);
      bankGroup.add(colBase);

      // Column Shaft (Fluted Cylinder)
      const colShaftGeo = new THREE.CylinderGeometry(columnRadius * 0.92, columnRadius, columnHeight, 20);
      const colShaft = new THREE.Mesh(colShaftGeo, stoneMaterial);
      colShaft.position.set(cx, 4.29 + columnHeight / 2 + 0.09, 2.0);
      colShaft.castShadow = true;
      bankGroup.add(colShaft);

      // Corinthian / Ionic Capital
      const colCapGeo = new THREE.BoxGeometry(0.56, 0.22, 0.56);
      const colCap = new THREE.Mesh(colCapGeo, brassMaterial);
      colCap.position.set(cx, 4.29 + columnHeight + 0.2, 2.0);
      bankGroup.add(colCap);
    }

    // Upper Windows Behind Colonnade
    windowPositionsX.forEach((wx) => {
      const winGeo = new THREE.BoxGeometry(0.8, 1.8, 0.1);
      const win = new THREE.Mesh(winGeo, glassMaterial);
      win.position.set(wx, 6.2, 1.91);
      bankGroup.add(win);
    });

    // E. Classical Entablature & Architrave
    const entablatureGeo = new THREE.BoxGeometry(13.6, 0.65, 5.4);
    const entablature = new THREE.Mesh(entablatureGeo, stoneMaterial);
    entablature.position.set(0, 8.5, -0.4);
    entablature.castShadow = true;
    bankGroup.add(entablature);

    // Brass Inscription Plaque on Architrave
    const plaqueGeo = new THREE.BoxGeometry(7.0, 0.35, 0.05);
    const plaque = new THREE.Mesh(plaqueGeo, brassMaterial);
    plaque.position.set(0, 8.5, 2.32);
    bankGroup.add(plaque);

    // F. Grand Triangular Pediment
    const pedimentShape = new THREE.Shape();
    pedimentShape.moveTo(-4.5, 0);
    pedimentShape.lineTo(4.5, 0);
    pedimentShape.lineTo(0, 2.2);
    pedimentShape.closePath();

    const extrudeSettings = { depth: 4.8, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.12, bevelThickness: 0.12 };
    const pedimentGeo = new THREE.ExtrudeGeometry(pedimentShape, extrudeSettings);
    pedimentGeo.translate(0, 0, -2.4);
    const pediment = new THREE.Mesh(pedimentGeo, stoneMaterial);
    pediment.position.set(0, 8.82, 0);
    pediment.castShadow = true;
    bankGroup.add(pediment);

    // Pediment Central Crest / Bank Medallion
    const medallionGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.1, 24);
    medallionGeo.rotateX(Math.PI / 2);
    const medallion = new THREE.Mesh(medallionGeo, brassMaterial);
    medallion.position.set(0, 9.45, 2.45);
    bankGroup.add(medallion);

    // G. Flagpole & Swaying Flag (Bank of England / Institutional Emblem)
    const poleGeo = new THREE.CylinderGeometry(0.04, 0.05, 3.2, 16);
    const pole = new THREE.Mesh(poleGeo, brassMaterial);
    pole.position.set(0, 11.0 + 1.6, 1.2);
    bankGroup.add(pole);

    const flagGeo = new THREE.PlaneGeometry(1.6, 1.0, 16, 8);
    const flagMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a, // Sovereign Bank Navy with gold & red emblem
      side: THREE.DoubleSide,
      roughness: 0.4
    });
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(0.8, 12.0, 1.2);
    bankGroup.add(flag);

    // 3. Institutional Lighting
    // Warm Sunbeam Light (simulating London / New York morning sun on sandstone)
    const sunLight = new THREE.DirectionalLight(0xfff3e0, 2.4);
    sunLight.position.set(12, 18, 14);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    // Ambient Sky Fill Light
    const skyLight = new THREE.AmbientLight(0x94a3b8, 0.9);
    scene.add(skyLight);

    // Warm Interior Portal Spotlight (inviting the visitor inside)
    const portalLight = new THREE.PointLight(0xffb703, 3.5, 10);
    portalLight.position.set(0, 2.2, 2.6);
    scene.add(portalLight);

    // Floating Bank Dust Particles
    const dustCount = 180;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 16;
      dustPos[i + 1] = Math.random() * 10;
      dustPos[i + 2] = (Math.random() - 0.5) * 12 + 2;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const dustParticles = new THREE.Points(dustGeo, dustMat);
    scene.add(dustParticles);

    // 4. Interactive Mouse Gyroscope
    let mouseX = 0, mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 3.2;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Flag Wave simulation
      const flagPos = flagGeo.attributes.position;
      for (let i = 0; i < flagPos.count; i++) {
        const u = flagPos.getX(i);
        const wave = Math.sin(u * 3.5 - time * 5) * 0.12 * (u / 1.6);
        flagPos.setZ(i, wave);
      }
      flagPos.needsUpdate = true;

      // Subtle slow hover rotation
      if (!isEntering) {
        targetCameraX = mouseX * 2.2;
        targetCameraY = 3.2 + mouseY * 0.8;

        camera.position.x += (targetCameraX - camera.position.x) * 0.04;
        camera.position.y += (targetCameraY - camera.position.y) * 0.04;
        camera.lookAt(0, 4.2, 0);
      } else {
        // Entering transition: Camera flies directly into the grand arched portal!
        camera.position.z += (2.4 - camera.position.z) * 0.06;
        camera.position.y += (2.1 - camera.position.y) * 0.06;
        camera.position.x += (0 - camera.position.x) * 0.08;
        camera.lookAt(0, 2.1, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isEntering]);

  const handleEnterClick = () => {
    setIsEntering(true);
    setTimeout(() => {
      onEnterBuilding();
    }, 700);
  };

  return (
    <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl overflow-hidden bg-[#070b12] border border-[#d4af37]/30 shadow-2xl flex flex-col justify-between">
      
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* Top Bank Header Ribbon */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0e1422] border border-[#d4af37]/50 flex items-center justify-center shadow-lg shadow-black/60">
            <Building2 className="w-5 h-5 text-[#d4af37]" />
          </div>
          <div>
            <div className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#d4af37] font-bold">
              Institutional Headquarters
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Bank of Institutional Systems & Engineering
            </h3>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.1] text-xs font-mono-telemetry text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Security Clearance Level 5 • Open Access</span>
        </div>
      </div>

      {/* Center Cinematic Entry Banner & CTA */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center max-w-xl mx-auto pointer-events-auto">
        <div className="p-4 rounded-2xl bg-[#090d18]/85 backdrop-blur-xl border border-[#d4af37]/40 shadow-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-mono-telemetry font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Neoclassical Central Bank Simulation</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Step Inside the Technology Headquarters
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Hosted by <strong>Sourav Gupta</strong> (3D Action Figure Host). Explore each compartment: The Trading Floor, Incident Command, Leadership Chamber, and the Secure Software Vault.
          </p>

          <button
            onClick={handleEnterClick}
            disabled={isEntering}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b48c36] hover:from-[#e5c052] hover:to-[#c69a3b] text-slate-950 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/25 active:scale-95 cursor-pointer"
          >
            <span>{isEntering ? 'Entering Headquarters...' : 'Step Inside the Bank'}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>

      {/* Bottom Architectural Info Strip */}
      <div className="relative z-10 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-wrap items-center justify-between text-xs font-mono-telemetry text-slate-400 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive 3D Neoclassical Facade • Orbit & Pan</span>
        </div>
        <div className="text-[11px] text-slate-400 hidden sm:block">
          Sovereign Neoclassical Architecture • Bank of England & Central Reserve Design
        </div>
      </div>

    </div>
  );
}
