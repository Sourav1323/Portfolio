import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Sparkles } from 'lucide-react';

export const ActionFigure3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 550;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the entire figure + pedestal
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ── LIGHTING ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Magenta/Purple Cyber Rim Lights
    const rimLight1 = new THREE.PointLight(0xb600a8, 3.5, 8);
    rimLight1.position.set(-2.5, 2, -1.5);
    scene.add(rimLight1);

    const rimLight2 = new THREE.PointLight(0x7621b0, 3.0, 8);
    rimLight2.position.set(2.5, 1.5, -1.5);
    scene.add(rimLight2);

    const cyanAccent = new THREE.PointLight(0x00f5ff, 2.0, 6);
    cyanAccent.position.set(0, -0.5, 2.5);
    scene.add(cyanAccent);

    // ── MATERIALS ──
    const suitMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a2130, // Midnight navy blazer
      roughness: 0.4,
      metalness: 0.2,
    });

    const innerShirtMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d323b,
      roughness: 0.6,
      metalness: 0.1,
    });

    const skinMaterial = new THREE.MeshStandardMaterial({
      color: 0xd99b70, // Warm stylized skin
      roughness: 0.45,
      metalness: 0.05,
    });

    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0x151218,
      roughness: 0.3,
      metalness: 0.3,
    });

    const goldAccent = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.8,
      roughness: 0.2,
    });

    const pedestalMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c0c0e,
      roughness: 0.25,
      metalness: 0.85,
    });

    const neonGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xb600a8,
    });

    const hologramMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.65,
      wireframe: true,
    });

    // ── 1. ACTION FIGURE PEDESTAL ──
    const baseGroup = new THREE.Group();
    rootGroup.add(baseGroup);

    // Lower heavy pedestal
    const baseGeo = new THREE.CylinderGeometry(1.4, 1.5, 0.25, 32);
    const baseMesh = new THREE.Mesh(baseGeo, pedestalMaterial);
    baseMesh.position.y = -1.4;
    baseMesh.receiveShadow = true;
    baseGroup.add(baseMesh);

    // Glowing neon ring on pedestal
    const ringGeo = new THREE.TorusGeometry(1.42, 0.035, 16, 64);
    const ringMesh = new THREE.Mesh(ringGeo, neonGlowMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -1.28;
    baseGroup.add(ringMesh);

    // Golden inner dial
    const dialGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.05, 32);
    const dialMesh = new THREE.Mesh(dialGeo, goldAccent);
    dialMesh.position.y = -1.25;
    baseGroup.add(dialMesh);

    // ── 2. HUMANOID 3D ACTION FIGURE ──
    const characterGroup = new THREE.Group();
    rootGroup.add(characterGroup);

    // Upper Torso / Blazer
    const torsoGeo = new THREE.CylinderGeometry(0.55, 0.42, 0.95, 16);
    const torsoMesh = new THREE.Mesh(torsoGeo, suitMaterial);
    torsoMesh.position.y = 0.35;
    torsoMesh.castShadow = true;
    characterGroup.add(torsoMesh);

    // Inner Crew-neck
    const chestGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.85, 16);
    const chestMesh = new THREE.Mesh(chestGeo, innerShirtMaterial);
    chestMesh.position.set(0, 0.4, 0.12);
    characterGroup.add(chestMesh);

    // Collar detail
    const collarGeo = new THREE.TorusGeometry(0.24, 0.04, 8, 24, Math.PI);
    const collarMesh = new THREE.Mesh(collarGeo, goldAccent);
    collarMesh.position.set(0, 0.8, 0.2);
    collarMesh.rotation.x = Math.PI / 2.2;
    characterGroup.add(collarMesh);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.25, 16);
    const neckMesh = new THREE.Mesh(neckGeo, skinMaterial);
    neckMesh.position.y = 0.9;
    characterGroup.add(neckMesh);

    // Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.25, 0);
    characterGroup.add(headGroup);

    const headGeo = new THREE.SphereGeometry(0.38, 32, 32);
    headGeo.scale(1, 1.15, 1);
    const headMesh = new THREE.Mesh(headGeo, skinMaterial);
    headMesh.castShadow = true;
    headGroup.add(headMesh);

    // Stylized Sculpted Hair
    const hairGeo = new THREE.SphereGeometry(0.42, 24, 24, 0, Math.PI * 2, 0, Math.PI / 1.7);
    const hairMesh = new THREE.Mesh(hairGeo, hairMaterial);
    hairMesh.position.set(0, 0.08, -0.04);
    hairMesh.rotation.x = -0.15;
    headGroup.add(hairMesh);

    // Front Hair Swoop
    const swoopGeo = new THREE.ConeGeometry(0.22, 0.4, 16);
    const swoopMesh = new THREE.Mesh(swoopGeo, hairMaterial);
    swoopMesh.position.set(0.1, 0.42, 0.25);
    swoopMesh.rotation.set(-0.8, 0.4, -0.5);
    headGroup.add(swoopMesh);

    // Stylized Glasses
    const glassFrameMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.9 });
    const lensLeft = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 24), glassFrameMat);
    lensLeft.position.set(-0.16, 0.04, 0.38);
    headGroup.add(lensLeft);

    const lensRight = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 24), glassFrameMat);
    lensRight.position.set(0.16, 0.04, 0.38);
    headGroup.add(lensRight);

    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.12), glassFrameMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.04, 0.38);
    headGroup.add(bridge);

    // ── ARMS & SHOULDERS (Confident Pose) ──
    // Shoulders
    const leftShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), suitMaterial);
    leftShoulder.position.set(-0.62, 0.72, 0);
    characterGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), suitMaterial);
    rightShoulder.position.set(0.62, 0.72, 0);
    characterGroup.add(rightShoulder);

    // Left Arm (bent across chest)
    const armMat = suitMaterial;
    const lUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.55), armMat);
    lUpperArm.position.set(-0.68, 0.45, 0.1);
    lUpperArm.rotation.set(0.3, 0, -0.2);
    characterGroup.add(lUpperArm);

    const lForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.55), armMat);
    lForearm.position.set(-0.35, 0.25, 0.35);
    lForearm.rotation.set(-0.2, 1.2, -1.2);
    characterGroup.add(lForearm);

    // Right Arm (folded under left)
    const rUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.55), armMat);
    rUpperArm.position.set(0.68, 0.45, 0.1);
    rUpperArm.rotation.set(0.3, 0, 0.2);
    characterGroup.add(rUpperArm);

    const rForearm = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.55), armMat);
    rForearm.position.set(0.35, 0.18, 0.35);
    rForearm.rotation.set(0.1, -1.2, 1.2);
    characterGroup.add(rForearm);

    // Hands
    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), skinMaterial);
    leftHand.position.set(0.05, 0.25, 0.45);
    characterGroup.add(leftHand);

    const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), skinMaterial);
    rightHand.position.set(-0.05, 0.18, 0.42);
    characterGroup.add(rightHand);

    // ── LEGS & SHOES ──
    const pantsMaterial = new THREE.MeshStandardMaterial({
      color: 0x111622,
      roughness: 0.6,
      metalness: 0.1,
    });

    const lLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.14, 1.1), pantsMaterial);
    lLeg.position.set(-0.28, -0.55, 0);
    characterGroup.add(lLeg);

    const rLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.14, 1.1), pantsMaterial);
    rLeg.position.set(0.28, -0.55, 0);
    characterGroup.add(rLeg);

    // Shoes
    const shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x08080a, roughness: 0.2, metalness: 0.5 });
    const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.42), shoeMaterial);
    lShoe.position.set(-0.28, -1.18, 0.08);
    characterGroup.add(lShoe);

    const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.42), shoeMaterial);
    rShoe.position.set(0.28, -1.18, 0.08);
    characterGroup.add(rShoe);

    // ── 3. HOLOGRAPHIC ROTATING CYBER RINGS ──
    const holoRing1 = new THREE.Mesh(new THREE.RingGeometry(0.85, 0.88, 32), hologramMaterial);
    holoRing1.position.set(0, 0.35, 0);
    holoRing1.rotation.x = Math.PI / 2.3;
    characterGroup.add(holoRing1);

    const holoRing2 = new THREE.Mesh(new THREE.RingGeometry(1.05, 1.08, 32), new THREE.MeshBasicMaterial({
      color: 0xb600a8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    }));
    holoRing2.position.set(0, 0.35, 0);
    holoRing2.rotation.x = Math.PI / 2.6;
    holoRing2.rotation.y = 0.4;
    characterGroup.add(holoRing2);

    // ── 4. ORBITING PARTICLES ──
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 1.3 + Math.random() * 0.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.2;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    characterGroup.add(particleSystem);

    // ── MOUSE INTERACTION & DRAG ROTATION ──
    let targetRotationY = 0;
    let targetRotationX = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        targetRotationY += deltaX * 0.012;
        targetRotationX += deltaY * 0.006;
        targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      } else {
        // Subtle mouse tracking when hovering
        const rect = container.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        headGroup.rotation.y = nx * 0.6;
        headGroup.rotation.x = -ny * 0.4;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMouseX;
        const deltaY = e.touches[0].clientY - previousMouseY;
        targetRotationY += deltaX * 0.015;
        targetRotationX += deltaY * 0.008;
        targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // ── ANIMATION LOOP ──
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle breathing and gentle floating
      characterGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.04;
      torsoMesh.scale.x = 1 + Math.sin(elapsedTime * 1.5) * 0.015;

      // Hologram ring rotations
      holoRing1.rotation.z = elapsedTime * 0.8;
      holoRing2.rotation.z = -elapsedTime * 0.6;

      // Particle orbit rotation
      particleSystem.rotation.y = elapsedTime * 0.25;

      // Smooth interpolation for dragging / rotation
      if (!isDragging) {
        // Auto slow rotation when idle
        targetRotationY += 0.003;
      }
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.08;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] flex items-center justify-center relative z-10"
      />

      {/* Interactive 3D Status Pill */}
      <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818]/85 backdrop-blur-md border border-[#D7E2EA]/20 text-[#D7E2EA] text-[11px] font-medium uppercase tracking-wider shadow-2xl transition-all">
        <Rotate3d className="w-3.5 h-3.5 text-[#B600A8] animate-spin" style={{ animationDuration: '6s' }} />
        <span>3D Action Figure · Drag to Rotate</span>
      </div>
    </div>
  );
};

export default ActionFigure3D;
