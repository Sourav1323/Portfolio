import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Building2, ArrowRight, ShieldCheck, Sparkles, Compass, Eye } from 'lucide-react';

export default function Bank3DExterior({ onEnterBuilding }) {
  const mountRef = useRef(null);
  const [isEntering, setIsEntering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 560;

    // 1. Scene, Camera, Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060911, 0.015);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 3. Texture Loader for the Authentic Neoclassical Bank Building
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/bank_building.png', (bankTexture) => {
      bankTexture.colorSpace = THREE.SRGBColorSpace;
      bankTexture.generateMipmaps = true;
      bankTexture.minFilter = THREE.LinearMipmapLinearFilter;

      // Authentic Facade Plane with high detail
      const facadeWidth = 14;
      const facadeHeight = 9.2;
      const facadeGeo = new THREE.PlaneGeometry(facadeWidth, facadeHeight, 32, 32);

      // Subtle curvature to give architectural depth
      const pos = facadeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = -Math.abs(x * 0.05); // slight concave perspective
        pos.setZ(i, z);
      }
      facadeGeo.computeVertexNormals();

      const facadeMat = new THREE.MeshStandardMaterial({
        map: bankTexture,
        roughness: 0.5,
        metalness: 0.1
      });

      const facadeMesh = new THREE.Mesh(facadeGeo, facadeMat);
      facadeMesh.position.set(0, 0.6, 0);
      worldGroup.add(facadeMesh);

      // 4. Volumetric Arched Portal Light (Golden Gateway into the Bank)
      // Located right at the central archway of the Bank of England facade
      const portalLight = new THREE.PointLight(0xffb703, 4.5, 9);
      portalLight.position.set(0, -1.8, 0.8);
      worldGroup.add(portalLight);

      // Glowing Golden Portal Disc (inviting the user inside)
      const portalGlowGeo = new THREE.CircleGeometry(0.9, 32);
      const portalGlowMat = new THREE.MeshBasicMaterial({
        color: 0xffb703,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      const portalGlow = new THREE.Mesh(portalGlowGeo, portalGlowMat);
      portalGlow.position.set(0, -1.7, 0.2);
      worldGroup.add(portalGlow);

      // Ambient Stone Steps Plinth in Foreground
      const stepsGeo = new THREE.BoxGeometry(16, 0.8, 4);
      const stepsMat = new THREE.MeshStandardMaterial({
        color: 0x2a2824,
        roughness: 0.8
      });
      const stepsMesh = new THREE.Mesh(stepsGeo, stepsMat);
      stepsMesh.position.set(0, -4.4, 2);
      worldGroup.add(stepsMesh);
    });

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const sunBeam = new THREE.DirectionalLight(0xfff7ed, 2.5);
    sunBeam.position.set(8, 12, 10);
    scene.add(sunBeam);

    // Warm Golden Floating Dust Particles in the Sunbeam
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 16;
      particlePos[i + 1] = (Math.random() - 0.5) * 10;
      particlePos[i + 2] = (Math.random() - 0.5) * 8 + 2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const dustParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(dustParticles);

    // 6. Mouse Interaction & Tilt
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      setMousePos({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Slow floating particle drift
      dustParticles.rotation.y = time * 0.02;

      if (!isEntering) {
        // Natural 3D Parallax Tilt based on mouse
        worldGroup.rotation.y += (mouseX * 0.12 - worldGroup.rotation.y) * 0.05;
        worldGroup.rotation.x += (-mouseY * 0.08 - worldGroup.rotation.x) * 0.05;
        camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      } else {
        // Dramatic cinematic camera push-in through the central arched portal!
        camera.position.z += (1.2 - camera.position.z) * 0.07;
        camera.position.y += (-1.6 - camera.position.y) * 0.07;
        camera.position.x += (0 - camera.position.x) * 0.07;
        camera.lookAt(0, -1.6, 0);
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
    }, 850);
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] rounded-3xl overflow-hidden bg-[#060911] border border-[#d4af37]/40 shadow-2xl flex flex-col justify-between">
      
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* Top Header Ribbon */}
      <div className="relative z-10 p-5 sm:p-7 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#090d18] border border-[#d4af37]/60 flex items-center justify-center shadow-xl shadow-black/80">
            <Building2 className="w-6 h-6 text-[#d4af37]" />
          </div>
          <div>
            <div className="text-[10px] font-mono-telemetry uppercase tracking-widest text-[#d4af37] font-bold">
              Global Institutional Technology Headquarters
            </div>
            <h1 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
              Bank of Institutional Systems & Engineering
            </h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/[0.1] text-xs font-mono-telemetry text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Security Clearance Level 5 • Host Standing By</span>
        </div>
      </div>

      {/* Center Cinematic Entry Modal & CTA */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center text-center max-w-xl mx-auto pointer-events-auto">
        <div className="p-5 sm:p-6 rounded-3xl bg-[#080c16]/90 backdrop-blur-2xl border border-[#d4af37]/50 shadow-2xl shadow-black space-y-3.5">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono-telemetry font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Neoclassical Bank Simulation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Step Inside the Technology Headquarters
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Hosted by <strong>Sourav Gupta</strong> (3D Action Figure). Enter through the grand colonnade archway to inspect every internal compartment: The Trading Floor, Incident Command, Leadership Chamber, and the Secure Software Vault.
          </p>

          <button
            onClick={handleEnterClick}
            disabled={isEntering}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b48c36] hover:from-[#e5c052] hover:to-[#c69a3b] text-slate-950 font-extrabold text-sm transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#d4af37]/30 active:scale-95 cursor-pointer"
          >
            <span>{isEntering ? 'Entering Headquarters Through Portal...' : 'Step Inside the Bank'}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>

      {/* Bottom Interactive Telemetry Bar */}
      <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-wrap items-center justify-between text-xs font-mono-telemetry text-slate-400 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>3D Neoclassical Architecture • Mouse Pan & Parallax</span>
        </div>
        <div className="text-[11px] text-slate-400 hidden sm:block">
          Columns, Colonnade, Rusticated Stone Plinth & Sovereign Spire
        </div>
      </div>

    </div>
  );
}
