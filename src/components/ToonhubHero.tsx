import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  TrendingUp,
  ShieldCheck,
  Database,
  Menu,
  X,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

import executive3DTransparent from '../assets/sourav_executive_3d_transparent.png';
import actionFigureTransparent from '../assets/action_figure_transparent.png';
import souravRealPortraitCard from '../assets/sourav_real_portrait_card.png';

interface ImageItem {
  id: string;
  src: string;
  fallback: string;
  bg: string;
  panel: string;
  title: string;
  badge: string;
  desc: string;
}

const IMAGES: ImageItem[] = [
  {
    id: 'executive-3d',
    src: executive3DTransparent,
    fallback: executive3DTransparent,
    bg: '#080C14',
    panel: '#101B2E',
    title: 'FINTECH BACKEND ARCHITECT',
    badge: 'TCS BANGALORE · NETHERLANDS BANKING CLIENT (200-500 USERS)',
    desc: 'Designing mission-critical financial backend systems, ACID-compliant ledger transactions, and high-throughput microservices for international banking clients.',
  },
  {
    id: 'action-figure',
    src: actionFigureTransparent,
    fallback: actionFigureTransparent,
    bg: '#070D18',
    panel: '#0E1E33',
    title: 'FINANCIAL SYSTEMS & DATABASE ENGINEER',
    badge: '40% SQL LATENCY REDUCTION · HIGH CONCURRENCY',
    desc: 'Optimizing distributed banking database clusters, transaction indexing, and caching layers to achieve 40% query latency speedups.',
  },
  {
    id: 'real-portrait',
    src: souravRealPortraitCard,
    fallback: souravRealPortraitCard,
    bg: '#090F1C',
    panel: '#122038',
    title: 'SOURAV GUPTA · FINTECH SDE',
    badge: 'AUTHENTIC PORTRAIT · TCS SOFTWARE ENGINEER',
    desc: 'Software Development Engineer at Tata Consultancy Services specializing in financial systems, Java 17, Spring Boot, distributed ledgers, and AI velocity.',
  },
];

export const ToonhubHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Mouse tilt tracking for the moving avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const avatarRotateY = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const avatarRotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);

  // Preload images on mount
  useEffect(() => {
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mouseX.set(nx);
      mouseY.set(ny);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Navigate next/prev with 650ms animation lock
  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    } else {
      setActiveIndex((prev) => (prev + IMAGES.length - 1) % IMAGES.length);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 45;
    if (isSwipe) {
      if (distance > 0) {
        navigate('next');
      } else {
        navigate('prev');
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Derive roles for 3 distinct items: center, left, right
  const getRole = (index: number): 'center' | 'left' | 'right' => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + IMAGES.length - 1) % IMAGES.length) return 'left';
    return 'right';
  };

  const grainSvg = `data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.08'/></svg>`;

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        transition: 'background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Inter', sans-serif",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-[100dvh] min-h-[580px] overflow-hidden">
        {/* 1. Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-50"
          style={{
            backgroundImage: `url("${grainSvg}")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            opacity: 0.4,
          }}
        />

        {/* 2. Giant ghost text at back showing name fully */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
          style={{ top: isMobile ? '12%' : '15%' }}
        >
          <span
            className="uppercase font-black whitespace-nowrap"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(54px, 23vw, 360px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              background:
                'linear-gradient(180deg, #FFFFFF 0%, #BBCCD7 40%, rgba(100, 105, 115, 0.25) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SOURAV
          </span>
        </div>

        {/* 3. Top Header Bar: Beacon + Desktop Nav / Mobile Hamburger */}
        <div className="absolute top-4 sm:top-6 left-3 sm:left-8 right-3 sm:right-8 z-[70] flex items-center justify-between gap-3">
          {/* Status Beacon */}
          <div className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#0D1524]/85 backdrop-blur-md border border-[#10B981]/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span
              className="text-[10px] sm:text-xs font-semibold uppercase text-[#D7E2EA] font-mono tracking-wider truncate max-w-[210px] sm:max-w-none"
              style={{ opacity: 0.95 }}
            >
              TCS FINTECH SDE &bull; NETHERLANDS POC
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider text-[#D7E2EA]/75">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              FinTech Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Banking Projects
            </a>
            <a
              href="/Sourav_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] hover:bg-[#252528] border border-[#10B981]/30 text-[#D7E2EA] hover:text-white font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Resume</span>
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-full bg-[#0D1524]/90 backdrop-blur-md border border-[#10B981]/40 text-white cursor-pointer shadow-lg active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X size={18} className="text-emerald-400" /> : <Menu size={18} />}
          </button>
        </div>

        {/* 3b. Mobile Dropdown Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-3 top-16 z-[80] rounded-3xl bg-[#090F1C]/95 backdrop-blur-2xl border border-emerald-500/30 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-3 select-none"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-emerald-400 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5"
              >
                About Me
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-emerald-400 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5"
              >
                FinTech Services
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA] hover:text-emerald-400 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5"
              >
                Banking Projects
              </a>
              <a
                href="/Sourav_Gupta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold uppercase tracking-wider text-xs"
              >
                <FileText size={15} />
                <span>View / Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#B600A8] to-[#7621B0] rounded-xl py-2.5 shadow-lg"
              >
                Contact Sourav
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. FinTech Live Metrics Ticker Banner (Desktop & Tablet) */}
        <div className="hidden sm:flex absolute top-20 left-4 sm:left-8 z-[55] items-center gap-3 text-[11px] font-mono text-[#10B981] bg-[#0A1220]/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#10B981]/25">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[#94A3B8]">SQL QUERY LATENCY:</span>
          <span className="font-bold text-emerald-400">-40% SPEEDUP</span>
          <span className="text-white/20">&bull;</span>
          <span className="text-[#94A3B8]">CLIENT CONCURRENCY:</span>
          <span className="font-bold text-cyan-300">200–500 ACTIVE USERS</span>
        </div>

        {/* 5. Carousel with 3 Unique Cards & Smooth Organic Cartoon Motion */}
        <div className="absolute inset-0 z-[3] overflow-hidden">
          {IMAGES.map((item, index) => {
            const role = getRole(index);

            // Per-role styles with optimized mobile scaling and positioning
            let transformStr = '';
            let blurStr = 'blur(0px)';
            let opacityVal = 1;
            let zIndexVal = 20;
            let leftVal = '50%';
            let heightVal = isMobile ? '56%' : '92%';
            let bottomVal = isMobile ? '23%' : '0';

            if (role === 'center') {
              transformStr = `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`;
              blurStr = 'blur(0px)';
              opacityVal = 1;
              zIndexVal = 20;
              leftVal = '50%';
              heightVal = isMobile ? '56%' : '92%';
              bottomVal = isMobile ? '23%' : '0';
            } else if (role === 'left') {
              transformStr = `translateX(-50%) scale(${isMobile ? 0.9 : 1})`;
              blurStr = 'blur(2px)';
              opacityVal = isMobile ? 0.4 : 0.85;
              zIndexVal = 10;
              leftVal = isMobile ? '8%' : '28%';
              heightVal = isMobile ? '18%' : '28%';
              bottomVal = isMobile ? '35%' : '12%';
            } else if (role === 'right') {
              transformStr = `translateX(-50%) scale(${isMobile ? 0.9 : 1})`;
              blurStr = 'blur(2px)';
              opacityVal = isMobile ? 0.4 : 0.85;
              zIndexVal = 10;
              leftVal = isMobile ? '92%' : '72%';
              heightVal = isMobile ? '18%' : '28%';
              bottomVal = isMobile ? '35%' : '12%';
            }

            return (
              <div
                key={item.id}
                style={{
                  position: 'absolute',
                  aspectRatio: '0.6 / 1',
                  left: leftVal,
                  bottom: bottomVal,
                  height: heightVal,
                  transform: transformStr,
                  filter: blurStr,
                  opacity: opacityVal,
                  zIndex: zIndexVal,
                  transition:
                    'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), height 650ms cubic-bezier(0.4,0,0.2,1), bottom 650ms cubic-bezier(0.4,0,0.2,1)',
                  willChange: 'transform, filter, opacity, left',
                  perspective: 1000,
                }}
                className="cursor-pointer"
                onClick={() => {
                  if (role === 'left') navigate('prev');
                  if (role === 'right') navigate('next');
                }}
              >
                {/* Center Figurine with Smooth Organic Cartoon Motion (NO EMOJIS, NO SHAKING) */}
                {role === 'center' ? (
                  <motion.div
                    style={{
                      rotateX: avatarRotateX,
                      rotateY: avatarRotateY,
                      transformStyle: 'preserve-3d',
                    }}
                    className="relative w-full h-full flex items-end justify-center select-none"
                  >
                    {/* Glowing Pedestal Aura with FinTech Emerald & Indigo Tones */}
                    <motion.div
                      className="absolute bottom-2 sm:bottom-6 w-[220px] sm:w-[420px] h-[60px] sm:h-[120px] rounded-full pointer-events-none -z-10"
                      style={{
                        background:
                          activeIndex === 0
                            ? 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.45) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 75%)'
                            : activeIndex === 1
                            ? 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.5) 0%, rgba(16, 185, 129, 0.3) 50%, transparent 75%)'
                            : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, rgba(14, 165, 233, 0.3) 50%, transparent 75%)',
                        filter: 'blur(22px)',
                      }}
                      animate={{
                        scale: [0.94, 1.14, 0.94],
                        opacity: [0.4, 0.75, 0.4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4.5,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Smooth Organic Cartoon Idle Motion (Natural Breathing, Hip Sway, Subtle Head Turn) */}
                    {index === 0 ? (
                      <motion.div
                        className="relative w-full h-full flex items-end justify-center"
                        animate={{
                          y: [0, -14, 0],
                          x: [-4, 4, -4],
                          rotateZ: [-1.8, 1.8, -1.8],
                          scale: [1, 1.022, 1],
                        }}
                        transition={{
                          y: { repeat: Infinity, duration: 4.2, ease: 'easeInOut' },
                          x: { repeat: Infinity, duration: 6.0, ease: 'easeInOut' },
                          rotateZ: { repeat: Infinity, duration: 6.0, ease: 'easeInOut' },
                          scale: { repeat: Infinity, duration: 4.2, ease: 'easeInOut' },
                        }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {/* Single Unified 3D Avatar Image — Pristine Solid Hair, No Double Face */}
                        <img
                          src={executive3DTransparent}
                          alt="3D Executive FinTech Avatar"
                          draggable={false}
                          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
                          style={{ objectPosition: 'bottom center' }}
                        />
                      </motion.div>
                    ) : (
                      /* Clean Figurine / Zoomed-Out Real LinkedIn Portrait Card */
                      <motion.div
                        className="w-full h-full flex items-end justify-center"
                        animate={{
                          y: [0, -12, 0],
                          scale: [1, 1.018, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4.5,
                          ease: 'easeInOut',
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          draggable={false}
                          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                          style={{ objectPosition: 'bottom center' }}
                          onError={(e) => {
                            e.currentTarget.src = item.fallback;
                          }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  /* Side / Inactive Carousel Items */
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    style={{ objectPosition: 'bottom center' }}
                    onError={(e) => {
                      e.currentTarget.src = item.fallback;
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* 6. Bottom Controls: Responsively Organized (Zero Mobile Collision) */}
        <div className="absolute bottom-4 sm:bottom-16 left-3 sm:left-16 md:left-24 right-3 sm:right-auto z-[60] flex flex-col pointer-events-auto sm:max-w-[360px]">
          {/* Header Row: Name + Mobile Discover Link */}
          <div className="flex items-center justify-between sm:justify-start gap-2 mb-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <p
                className="font-bold uppercase tracking-widest text-[#D7E2EA] text-base sm:text-[22px]"
                style={{ letterSpacing: '0.04em' }}
              >
                SOURAV GUPTA
              </p>
            </div>

            {/* Mobile Discover Button embedded cleanly in the name header */}
            <a
              href="#about"
              className="sm:hidden flex items-center gap-1.5 text-white hover:text-emerald-400 font-mono text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#121A2A]/90 border border-[#10B981]/30 backdrop-blur-md active:scale-95 transition-all"
            >
              <span>DISCOVER</span>
              <ArrowRight size={13} className="text-emerald-400" />
            </a>
          </div>

          {/* Role Badge */}
          <span className="text-[10px] sm:text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider mb-2 line-clamp-1 sm:line-clamp-none">
            {IMAGES[activeIndex].badge}
          </span>

          {/* Description (Desktop only) */}
          <p
            className="hidden sm:block text-xs sm:text-[13px] text-[#D7E2EA]/80 mb-3 leading-relaxed font-light min-h-[42px]"
            style={{ lineHeight: 1.6 }}
          >
            {IMAGES[activeIndex].desc}
          </p>

          {/* FinTech Core Pillars Indicator (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 mb-4 text-[10px] font-mono text-slate-400">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              JAVA 17 / SPRING BOOT
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              ACID LEDGERS
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
              40% SQL SPEEDUP
            </span>
          </div>

          {/* Navigation Controls: Circular Buttons + Dots + Quick Resume */}
          <div className="flex items-center justify-between sm:justify-start gap-3 mt-1 sm:mt-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => navigate('prev')}
                disabled={isAnimating}
                title="Previous Figurine"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] bg-[#0E1726]/85 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-emerald-400 hover:text-white active:scale-95 cursor-pointer disabled:opacity-50 shadow-xl"
              >
                <ArrowLeft size={isMobile ? 18 : 22} strokeWidth={2.25} />
              </button>

              <button
                onClick={() => navigate('next')}
                disabled={isAnimating}
                title="Next Figurine"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] bg-[#0E1726]/85 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-emerald-400 hover:text-white active:scale-95 cursor-pointer disabled:opacity-50 shadow-xl"
              >
                <ArrowRight size={isMobile ? 18 : 22} strokeWidth={2.25} />
              </button>

              {/* Pagination indicator */}
              <div className="flex items-center gap-1.5 ml-1 sm:ml-2">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setActiveIndex(i);
                        setTimeout(() => setIsAnimating(false), 650);
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex ? 'w-5 sm:w-6 bg-emerald-400' : 'w-2 bg-[#D7E2EA]/30 hover:bg-white/50'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Resume Link on Mobile */}
            <a
              href="/Sourav_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141E2C]/90 border border-emerald-500/35 text-emerald-300 text-[11px] font-mono font-semibold active:scale-95 transition-all shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* 7. Bottom-right link "DISCOVER IT" (Desktop only; on mobile it is in the header row) */}
        <div className="hidden sm:block absolute bottom-6 right-4 sm:bottom-16 sm:right-10 md:right-16 z-[60]">
          <a
            href="#about"
            className="group flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-200 uppercase"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(20px, 4vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            <span>DISCOVER IT</span>
            <ArrowRight
              className="transition-transform duration-200 group-hover:translate-x-2 text-emerald-400"
              size={36}
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
