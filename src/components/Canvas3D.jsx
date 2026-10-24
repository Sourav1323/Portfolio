import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Canvas3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || window.innerWidth;
    const isMobile = width < 640;
    const height = currentMount.clientHeight || (isMobile ? 380 : 650);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 12 : 9.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    currentMount.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Calming Celestial Sphere (Wavy breathing wireframe)
    const sphereGeo = new THREE.IcosahedronGeometry(2.3, 4);
    // Store original positions for subtle organic breathing waves
    const posAttr = sphereGeo.attributes.position;
    const origPositions = posAttr.array.slice();

    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.25
    });
    const celestialSphere = new THREE.Mesh(sphereGeo, sphereMat);
    mainGroup.add(celestialSphere);

    // 2. Inner Bioluminescent Core (Softer light emission)
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(innerCore);

    // 3. Floating Ethereal Rings (Celestial Astrolabe)
    const createAstrolabeRing = (radius, tube, color, opacity, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 24, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      mainGroup.add(ring);
      return ring;
    };

    const ring1 = createAstrolabeRing(3.4, 0.018, 0x818cf8, 0.45, Math.PI / 3, Math.PI / 6);
    const ring2 = createAstrolabeRing(3.8, 0.015, 0x38bdf8, 0.35, -Math.PI / 4, Math.PI / 5);
    const ring3 = createAstrolabeRing(4.2, 0.012, 0xc084fc, 0.25, Math.PI / 2.5, -Math.PI / 4);

    // 4. Soft Bioluminescent Orbiting Orbs
    const orbitingNodes = [];
    const nodePalette = [0x38bdf8, 0x818cf8, 0x34d399, 0xf472b6, 0xa78bfa];
    for (let i = 0; i < 5; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.16, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodePalette[i],
        emissive: nodePalette[i],
        emissiveIntensity: 0.8,
        roughness: 0.1
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      orbitingNodes.push({
        mesh: nodeMesh,
        radius: 3.3 + (i % 2) * 0.5,
        speed: 0.005 + i * 0.003,
        angle: (i * 2 * Math.PI) / 5,
        tilt: (i - 2) * 0.4
      });
      mainGroup.add(nodeMesh);
    }

    // 5. Ambient Stardust Field (Slow, peaceful floating)
    const starCount = 450;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 22;
      starPositions[i + 1] = (Math.random() - 0.5) * 22;
      starPositions[i + 2] = (Math.random() - 0.5) * 16;

      // Relaxing color blend: Lavender, soft cyan, sky blue, warm rose
      const rand = Math.random();
      if (rand < 0.35) {
        starColors[i] = 0.51; starColors[i + 1] = 0.55; starColors[i + 2] = 0.97; // Indigo/lavender
      } else if (rand < 0.7) {
        starColors[i] = 0.22; starColors[i + 1] = 0.74; starColors[i + 2] = 0.97; // Soft sky
      } else {
        starColors[i] = 0.78; starColors[i + 1] = 0.6; starColors[i + 2] = 0.98; // Lilac
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const starMesh = new THREE.Points(starGeo, starMat);
    scene.add(starMesh);

    // Warm & Cool Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x818cf8, 3.5, 25);
    light1.position.set(6, 6, 6);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x38bdf8, 3, 25);
    light2.position.set(-6, -4, 4);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xf472b6, 2, 20);
    light3.position.set(0, -6, -3);
    scene.add(light3);

    // Smooth Gyroscopic Mouse Tilt
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      targetX = x * 0.5;
      targetY = y * 0.5;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const rect = currentMount.getBoundingClientRect();
        const x = (touch.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (touch.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        targetX = x * 0.4;
        targetY = y * 0.4;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      const mobile = w < 640;
      camera.aspect = w / h;
      camera.position.z = mobile ? 12 : 9.5;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle easing toward mouse
      mouseX += (targetX - mouseX) * 0.035;
      mouseY += (targetY - mouseY) * 0.035;

      // Group rotation
      mainGroup.rotation.y = t * 0.12 + mouseX;
      mainGroup.rotation.x = Math.sin(t * 0.2) * 0.1 + mouseY;

      // Calm organic vertex breathing on the outer sphere
      const currentPos = sphereGeo.attributes.position.array;
      for (let i = 0; i < currentPos.length; i += 3) {
        const ox = origPositions[i];
        const oy = origPositions[i + 1];
        const oz = origPositions[i + 2];
        const distance = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const wave = Math.sin(t * 1.5 + distance * 3.0 + ox * 1.5) * 0.06;
        currentPos[i] = ox * (1 + wave);
        currentPos[i + 1] = oy * (1 + wave);
        currentPos[i + 2] = oz * (1 + wave);
      }
      sphereGeo.attributes.position.needsUpdate = true;

      // Counter-rotate inner core
      innerCore.rotation.y = -t * 0.25;
      innerCore.rotation.z = Math.cos(t * 0.2) * 0.2;
      const pulse = 1 + Math.sin(t * 1.8) * 0.05;
      innerCore.scale.set(pulse, pulse, pulse);

      // Rotate rings at calming harmonic speeds
      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.11;
      ring3.rotation.y = t * 0.06;

      // Orbiting node calculations
      orbitingNodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(t * 1.2 + node.tilt * 2) * 0.7 + node.tilt;
      });

      // Slowly drifting star field
      starMesh.rotation.y = t * 0.015;
      starMesh.rotation.x = Math.sin(t * 0.01) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[340px] sm:min-h-[480px] lg:min-h-[640px] relative pointer-events-auto cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: 'pan-y' }}
      title="Interactive 3D Celestial Core: Soft mouse tracking"
    />
  );
};

export default Canvas3D;
