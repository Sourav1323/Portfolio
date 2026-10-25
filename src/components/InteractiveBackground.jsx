import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (default to center)
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      radius: 160
    };

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Update CSS variables for torch spotlight
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };
    window.addEventListener('resize', handleResize);

    // Node count adjusted for screen size
    const isMobile = width < 768;
    const nodeCount = isMobile ? 35 : 70;
    const connectionMaxDist = isMobile ? 95 : 130;

    // Node colors: FinTech Emerald, Cyber Cyan, Platinum Silk
    const palette = [
      { r: 16, g: 185, b: 129 },   // Emerald
      { r: 56, g: 189, b: 248 },   // Cyan
      { r: 52, g: 211, b: 153 },   // Mint
      { r: 245, g: 158, b: 11 },   // Amber
      { r: 226, g: 232, b: 240 }    // Titanium
    ];

    let nodes = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.6 + 0.8,
          color: color,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02
        });
      }
    };

    initNodes();

    // Pulses / Data Packets traveling along lines
    const packets = [];
    const maxPackets = isMobile ? 6 : 14;

    const spawnPacket = (fromNode, toNode) => {
      if (packets.length >= maxPackets) return;
      packets.push({
        x: fromNode.x,
        y: fromNode.y,
        fromX: fromNode.x,
        fromY: fromNode.y,
        toX: toNode.x,
        toY: toNode.y,
        progress: 0,
        speed: 0.015 + Math.random() * 0.02,
        color: fromNode.color
      });
    };

    // Animation Loop
    let lastTime = performance.now();

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Update and Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Move
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off edges with soft padding
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > width) { n.x = width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > height) { n.y = height; n.vy *= -1; }

        // Mouse interaction (gentle cursor gravity & dispersion)
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 1) {
            // Push slightly away
            const force = (1 - dist / mouse.radius) * 0.6;
            n.x -= (dx / dist) * force;
            n.y -= (dy / dist) * force;

            // Draw line to mouse
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Pulse size
        n.pulse += n.pulseSpeed;
        const currentRadius = n.radius + Math.sin(n.pulse) * 0.4;

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.6, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, 0.75)`;
        ctx.shadowColor = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, 0.5)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines

        // Connect with nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);

          if (dist < connectionMaxDist) {
            const alpha = (1 - dist / connectionMaxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();

            // Random chance to spawn a data packet
            if (Math.random() < 0.0006) {
              spawnPacket(n, n2);
            }
          }
        }
      }

      // Update and Draw Data Packets
      for (let pIdx = packets.length - 1; pIdx >= 0; pIdx--) {
        const p = packets[pIdx];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(pIdx, 1);
          continue;
        }

        p.x = p.fromX + (p.toX - p.fromX) * p.progress;
        p.y = p.fromY + (p.toY - p.fromY) * p.progress;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.95)`;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ '--mouse-x': '50vw', '--mouse-y': '30vh' }}
    >
      {/* 1. Ambient Floating Glowing Auroras (Smooth CSS Keyframe Animation) */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.08] blur-[140px] animate-aurora-1" />
      <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.07] blur-[150px] animate-aurora-2" />
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-emerald-500/[0.05] blur-[160px] animate-aurora-3" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[130px] animate-aurora-1" />

      {/* 2. Interactive Cursor Torch Spotlight */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(750px circle at var(--mouse-x, 50vw) var(--mouse-y, 30vh), rgba(16, 185, 129, 0.08), rgba(56, 189, 248, 0.04) 40%, transparent 80%)`
        }}
      />

      {/* 3. Subtle Vector Grid Pattern with Perspective Fade */}
      <div className="absolute inset-0 fintech-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* 4. Interactive HTML5 Canvas Constellation & Data Pulses */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
}
