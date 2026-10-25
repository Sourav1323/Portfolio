import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Rotate3d, Sparkles } from 'lucide-react';
import actionFigureImg from '../assets/action_figure.png';

export const Moving3DAvatar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mouse & Drag Motion Values for Full 3D Space
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const dragRotateY = useMotionValue(0);

  // Spring physics for buttery-smooth 3D tracking
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const smoothDragY = useSpring(dragRotateY, { damping: 20, stiffness: 100 });

  // 3D Rotations derived from mouse and drag
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const baseRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-18, 18]);
  const rotateY = useTransform(
    [baseRotateY, smoothDragY],
    ([r, d]: [number, number]) => r + d
  );

  // Subtle 3D shift for parallax layers
  const pedestalShiftX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const haloShiftX = useTransform(smoothMouseX, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) return;
      // Normalize mouse coordinates from -0.5 to 0.5 relative to window center
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mouseX.set(nx);
      mouseY.set(ny);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDragging, mouseX, mouseY]);

  // Drag interaction to spin avatar 360 degrees
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* ── 3D FLOATING & TILTING AVATAR STAGE ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        drag="x"
        dragConstraints={{ left: -360, right: 360 }}
        dragElastic={0.08}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={(e, info) => {
          dragRotateY.set(dragRotateY.get() + info.delta.x * 0.7);
        }}
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 4.5,
            ease: 'easeInOut',
          },
        }}
        className="relative flex flex-col items-center justify-end cursor-grab active:cursor-grabbing pointer-events-auto"
      >
        {/* Holographic Glowing Cyber Halo behind Avatar */}
        <motion.div
          style={{ x: haloShiftX, translateZ: -60 }}
          className="absolute top-1/4 -translate-y-1/2 w-[280px] sm:w-[360px] md:w-[440px] h-[280px] sm:h-[360px] md:h-[440px] rounded-full pointer-events-none opacity-40 blur-2xl bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-[#00F5FF]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
        />

        {/* Orbiting Holographic Rings */}
        <div
          style={{ translateZ: -30 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[300px] sm:w-[380px] md:w-[440px] h-[300px] sm:h-[380px] md:h-[440px] rounded-full border border-[#00F5FF]/30 border-dashed animate-spin"
            style={{ animationDuration: '24s' }}
          />
          <div
            className="absolute w-[260px] sm:w-[340px] md:w-[400px] h-[260px] sm:h-[340px] md:h-[400px] rounded-full border border-[#B600A8]/30 animate-spin"
            style={{ animationDuration: '18s', animationDirection: 'reverse' }}
          />
        </div>

        {/* Full-Body 3D Avatar Image */}
        <div
          style={{ translateZ: 40 }}
          className="relative z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] max-h-[64vh] sm:max-h-[68vh] flex items-end justify-center"
        >
          <img
            src={actionFigureImg}
            alt="Sourav Gupta - 3D Full Body Avatar"
            className="w-full h-auto max-h-[64vh] sm:max-h-[68vh] object-contain pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
            loading="eager"
          />
        </div>

        {/* 3D Cyber Pedestal Base beneath Feet */}
        <motion.div
          style={{ x: pedestalShiftX, translateZ: 10 }}
          className="relative -mt-6 sm:-mt-8 z-20 flex flex-col items-center pointer-events-none"
        >
          {/* Glowing Neon Ring */}
          <div
            className="w-[200px] sm:w-[260px] md:w-[320px] h-3 sm:h-4 rounded-full bg-gradient-to-r from-[#B600A8] via-[#00F5FF] to-[#7621B0] opacity-80 blur-[2px] shadow-[0_0_25px_#B600A8]"
            style={{ transform: 'rotateX(65deg)' }}
          />
          {/* Metallic Pedestal Shadow */}
          <div
            className="w-[220px] sm:w-[290px] md:w-[350px] h-6 sm:h-8 -mt-2 rounded-full bg-[#08080A]/90 border border-[#D7E2EA]/15 shadow-2xl"
            style={{ transform: 'rotateX(70deg)' }}
          />
        </motion.div>
      </motion.div>

      {/* ── INTERACTIVE 3D STATUS BADGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-3 z-30 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416]/90 backdrop-blur-md border border-[#D7E2EA]/20 text-[#D7E2EA] text-[11px] font-medium uppercase tracking-wider shadow-2xl"
      >
        <Rotate3d className="w-3.5 h-3.5 text-[#B600A8] animate-spin" style={{ animationDuration: '5s' }} />
        <span>3D Full-Body Avatar · Move Cursor or Drag to Rotate</span>
      </motion.div>
    </div>
  );
};

export default Moving3DAvatar;