import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import executive3DAvatar from '../assets/sourav_executive_3d.jpg';
import actionFigureImg from '../assets/action_figure.png';
import souravFigurineImg from '../assets/sourav_figurine.png';
import souravExecutiveImg from '../assets/sourav_executive.png';

interface ImageItem {
  src: string;
  fallback: string;
  bg: string;
  panel: string;
  title: string;
  badge: string;
}

const IMAGES: ImageItem[] = [
  {
    src: executive3DAvatar,
    fallback: executive3DAvatar,
    bg: '#0C0C0C',
    panel: '#1A1224',
    title: 'EXECUTIVE BACKEND SDE',
    badge: 'TAILORED NAVY SUIT · OBSIDIAN CYBER PEDESTAL',
  },
  {
    src: actionFigureImg,
    fallback: actionFigureImg,
    bg: '#090E17',
    panel: '#111D2D',
    title: 'SYSTEMS & CLOUD ARCHITECT',
    badge: 'CYBER SLATE · 40% SQL OPTIMIZATION',
  },
  {
    src: souravFigurineImg,
    fallback: souravFigurineImg,
    bg: '#101013',
    panel: '#1C1C24',
    title: 'ENTERPRISE TECH LEAD',
    badge: 'TCS BANGALORE · NETHERLANDS POC (200-500 USERS)',
  },
  {
    src: souravExecutiveImg,
    fallback: souravExecutiveImg,
    bg: '#0B0D19',
    panel: '#16192E',
    title: 'AI-AUGMENTED ENGINEER',
    badge: '5-STAR HACKERRANK · SERVICENOW CAD CERTIFIED',
  },
];

export const ToonhubHero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Mouse tilt tracking for the moving avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const avatarRotateY = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const avatarRotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);

  // Preload images on mount
  useEffect(() => {
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      const fallbackImg = new Image();
      fallbackImg.src = item.fallback;
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
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
      setActiveIndex((prev) => (prev + 1) % 4);
    } else {
      setActiveIndex((prev) => (prev + 3) % 4);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  // Derive roles
  const getRole = (index: number): 'center' | 'left' | 'right' | 'back' => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
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
    >
      <div className="relative w-full h-screen overflow-hidden">
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
          style={{ top: '15%' }}
        >
          <span
            className="uppercase font-black whitespace-nowrap"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(85px, 26vw, 360px)',
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

        {/* 3. Top-left brand label + Navbar Links */}
        <div className="absolute top-6 left-4 sm:left-8 z-[60] flex items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className="text-xs font-semibold uppercase text-[#D7E2EA]"
              style={{
                letterSpacing: '0.18em',
                opacity: 0.95,
              }}
            >
              SOURAV GUPTA &bull; TCS SDE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-[#D7E2EA]/75">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="/Sourav_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18181C] hover:bg-[#252528] border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Resume</span>
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* 4. Carousel with 4 Figurines & 3D Parallax Movement */}
        <div className="absolute inset-0 z-[3] overflow-hidden">
          {IMAGES.map((item, index) => {
            const role = getRole(index);

            // Per-role styles according to prompt
            let transformStr = '';
            let blurStr = 'blur(0px)';
            let opacityVal = 1;
            let zIndexVal = 20;
            let leftVal = '50%';
            let heightVal = isMobile ? '60%' : '92%';
            let bottomVal = isMobile ? '22%' : '0';

            if (role === 'center') {
              transformStr = `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`;
              blurStr = 'blur(0px)';
              opacityVal = 1;
              zIndexVal = 20;
              leftVal = '50%';
              heightVal = isMobile ? '60%' : '92%';
              bottomVal = isMobile ? '22%' : '0';
            } else if (role === 'left') {
              transformStr = 'translateX(-50%) scale(1)';
              blurStr = 'blur(2px)';
              opacityVal = 0.85;
              zIndexVal = 10;
              leftVal = isMobile ? '20%' : '30%';
              heightVal = isMobile ? '16%' : '28%';
              bottomVal = isMobile ? '32%' : '12%';
            } else if (role === 'right') {
              transformStr = 'translateX(-50%) scale(1)';
              blurStr = 'blur(2px)';
              opacityVal = 0.85;
              zIndexVal = 10;
              leftVal = isMobile ? '80%' : '70%';
              heightVal = isMobile ? '16%' : '28%';
              bottomVal = isMobile ? '32%' : '12%';
            } else if (role === 'back') {
              transformStr = 'translateX(-50%) scale(1)';
              blurStr = 'blur(4px)';
              opacityVal = 1;
              zIndexVal = 5;
              leftVal = '50%';
              heightVal = isMobile ? '13%' : '22%';
              bottomVal = isMobile ? '32%' : '12%';
            }

            return (
              <div
                key={index}
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
                {/* Moving Avatar 3D Tilt Wrapper for Center Figurine */}
                {role === 'center' ? (
                  <motion.div
                    style={{
                      rotateX: avatarRotateX,
                      rotateY: avatarRotateY,
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 4,
                        ease: 'easeInOut',
                      },
                    }}
                    className="w-full h-full flex items-end justify-center"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      draggable={false}
                      className="w-full h-full object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
                      style={{ objectPosition: 'bottom center' }}
                      onError={(e) => {
                        e.currentTarget.src = item.fallback;
                      }}
                    />
                  </motion.div>
                ) : (
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

        {/* 5. Bottom-left text + nav buttons */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-16 sm:left-16 md:left-24 z-[60] flex flex-col pointer-events-auto"
          style={{ maxWidth: '340px' }}
        >
          <p
            className="font-bold uppercase tracking-widest text-[#D7E2EA] mb-1 text-base sm:text-[22px]"
            style={{
              letterSpacing: '0.04em',
            }}
          >
            SOURAV GUPTA
          </p>

          <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#B600A8] font-semibold tracking-wider mb-2">
            {IMAGES[activeIndex].badge}
          </span>

          <p
            className="hidden sm:block text-xs sm:text-[13px] text-[#D7E2EA]/75 mb-4 leading-relaxed font-light"
            style={{
              lineHeight: 1.6,
            }}
          >
            Backend Software Developer at TCS Bangalore &amp; Systems Engineer. Skilled in Java 17, Spring Boot, distributed systems, and 40% database query speedup.
          </p>

          {/* Two circular nav buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('prev')}
              disabled={isAnimating}
              title="Previous Figurine"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] bg-[#141418]/70 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[#B600A8] hover:text-white active:scale-95 cursor-pointer disabled:opacity-50 shadow-xl"
            >
              <ArrowLeft size={22} strokeWidth={2.25} />
            </button>

            <button
              onClick={() => navigate('next')}
              disabled={isAnimating}
              title="Next Figurine"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] bg-[#141418]/70 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-[#B600A8] hover:text-white active:scale-95 cursor-pointer disabled:opacity-50 shadow-xl"
            >
              <ArrowRight size={22} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link "DISCOVER IT" */}
        <div className="absolute bottom-6 right-4 sm:bottom-16 sm:right-12 z-[60] pointer-events-auto">
          <a
            href="#about"
            className="flex items-center gap-2 uppercase text-[#D7E2EA] no-underline transition-all duration-200 cursor-pointer group hover:text-white"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(20px, 4vw, 52px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            <span>DISCOVER IT</span>
            <ArrowRight
              className="w-5 h-5 sm:w-8 sm:h-8 group-hover:translate-x-1.5 transition-transform text-[#B600A8]"
              strokeWidth={2.25}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToonhubHero;