import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import {
  Award,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Cpu,
  Database,
  Sparkles,
  ArrowRight,
  Flame,
  Star,
  Activity,
} from 'lucide-react';

import executive3DTransparent from '../assets/sourav_executive_3d_transparent.png';
import actionFigureTransparent from '../assets/action_figure_transparent.png';

interface ExperienceStage {
  id: string;
  year: string;
  role: string;
  company: string;
  level: string;
  powerNumber: number;
  avatarScale: number;
  auraColor: string;
  glowGradient: string;
  titleBadge: string;
  summary: string;
  stats: {
    power: string;
    concurrency: string;
    speed: string;
    sla: string;
  };
  highlights: string[];
  skills: string[];
}

const STAGES: ExperienceStage[] = [
  {
    id: 'stage-1',
    year: '2020 – 2023',
    role: 'Algorithmic Foundations & Mentorship',
    company: 'University & Independent Engineering',
    level: 'LVL 25 · ALGORITHM ADEPT',
    powerNumber: 35,
    avatarScale: 0.92,
    auraColor: '#00F5FF',
    glowGradient: 'radial-gradient(circle, rgba(0,245,255,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 75%)',
    titleBadge: '200+ LEETCODE SOLVED · ALGORITHMIC PROBLEM SOLVER',
    summary:
      'Forged ironclad fundamentals in Object-Oriented Programming, C++, Java, and computational complexity analysis.',
    stats: {
      power: '250 GFLOPS',
      concurrency: 'Single Thread',
      speed: 'O(N log N) Optimal',
      sla: 'Academic 95%',
    },
    highlights: [
      'Solved 200+ LeetCode problems in Trees, Graphs, Dynamic Programming, and Greedy Algorithms.',
      'Extensive problem solving expertise in C++, Java, and relational SQL databases.',
      'Finished in the Top 20 of 250 teams nationwide in high-intensity 24-hr Smart City Hackathon.',
      'Tutored mathematics for 4 years at BLJ Classes, mentoring 7 students to score 95%+ in examinations.',
    ],
    skills: ['C++', 'Java 17', 'Data Structures', 'Algorithms', 'SQL Fundamentals', 'OOP Design'],
  },
  {
    id: 'stage-2',
    year: '2023 – 2024',
    role: 'High-Throughput Systems & Database Tuning',
    company: 'Enterprise Projects & Data Warehousing',
    level: 'LVL 65 · SYSTEMS SPECIALIST',
    powerNumber: 70,
    avatarScale: 1.05,
    auraColor: '#A855F7',
    glowGradient: 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(14,165,233,0.2) 50%, transparent 75%)',
    titleBadge: '+40% SQL LATENCY SPEEDUP · FULL STACK PLATFORMS',
    summary:
      'Engineered mission-ready transactional backends, query execution tuning, and Slowly Changing Dimensions for high-volume data warehouses.',
    stats: {
      power: '650 TFLOPS',
      concurrency: '100+ Transactions',
      speed: '-40% Query Latency',
      sla: 'Production 98.2%',
    },
    highlights: [
      'Optimized database queries and indexing strategies, reducing query latency by up to 40%.',
      'Implemented Slowly Changing Dimensions (SCD Type 1 & 2) and early-arriving facts for enterprise data warehousing.',
      'Built Shringar doorstep booking platform, shipping in 1 month and cutting software defects by ~80%.',
      'Developed Java Parcel Management system with ACID concurrency, JDBC, and automated 18% GST tax calculation.',
      'Authored Salesforce Apex triggers, Visualforce pages, and automated server-side business workflows.',
    ],
    skills: ['SQL Optimization', 'Spring Boot', 'ACID Ledgers', 'Data Warehousing (SCD)', 'Salesforce Apex', 'REST APIs'],
  },
  {
    id: 'stage-3',
    year: 'July 2024 – Present',
    role: 'Assistant System Engineer (FinTech SDE)',
    company: 'Tata Consultancy Services (TCS), Bangalore',
    level: 'LVL 99 · GLOBAL FINTECH SDE',
    powerNumber: 100,
    avatarScale: 1.2,
    auraColor: '#10B981',
    glowGradient: 'radial-gradient(circle, rgba(16,185,129,0.55) 0%, rgba(245,158,11,0.3) 50%, transparent 75%)',
    titleBadge: 'TCS ON-THE-SPOT AWARD · NETHERLANDS ENTERPRISE POC',
    summary:
      'Primary technical point of contact for an international Netherlands banking client (200–500 active users), delivering 99.4% SLA adherence and automated server workflows.',
    stats: {
      power: '999 PFLOPS',
      concurrency: '200–500 Active Users',
      speed: 'Sub-Second Real-Time',
      sla: '99.4% Adherence',
    },
    highlights: [
      'Primary technical POC for Netherlands enterprise client with 200–500 users, resolving 30+ critical incidents weekly.',
      'Maintained 99.4% SLA adherence, ensuring zero client disruption across production systems.',
      'Engineered and maintained 4–8 ServiceNow workflow automations for continuous backend server & switch uptime.',
      'Accelerated engineering output using Anthropic Claude API prompt pipelines and GitHub Copilot.',
      'Awarded the TCS On-the-Spot Award for outstanding technical contributions and client delivery.',
      'Dual certified: ServiceNow Certified Application Developer (CAD) & Certified System Administrator (CSA).',
    ],
    skills: ['FinTech Architect', 'Enterprise SLAs (99.4%)', 'ServiceNow CAD', 'Claude AI Engineering', 'MuleSoft', 'Banking Ledgers'],
  },
];

export const ExperienceSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2); // Default to current peak level
  const currentStage = STAGES[activeStageIndex];

  return (
    <section
      id="experience"
      className="relative w-full bg-[#080C14] text-[#D7E2EA] px-4 sm:px-8 md:px-12 py-20 sm:py-28 md:py-32 z-20 select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -z-10 blur-[120px] transition-all duration-700 opacity-25"
        style={{
          background: currentStage.auraColor,
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Career &amp; Skill Progression</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 160px)' }}
          >
            Experience
          </h2>
          <p className="mt-4 text-[#D7E2EA]/70 text-xs sm:text-base md:text-lg max-w-2xl mx-auto uppercase tracking-wider font-light">
            Watch the hero avatar evolve and scale in power across algorithmic foundations, database optimizations, and global banking systems.
          </p>
        </FadeIn>

        {/* Stage Selector Pills */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-4 mb-8 sm:mb-14 flex-wrap">
          {STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-full text-[11px] sm:text-sm font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold border border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)]'
                    : 'bg-[#101826]/80 text-[#D7E2EA]/60 hover:text-white hover:bg-[#162236] border border-white/10'
                }`}
              >
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{stage.year}</span>
                {isActive && <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-bounce" />}
              </button>
            );
          })}
        </div>

        {/* 2-Column Evolution Layout: Avatar Chamber (Top on Mobile, Right on Desktop) + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* ── AVATAR EVOLUTION CHAMBER (First on Mobile for Instant Visual Growth, Right on Desktop) ── */}
          <div className="lg:col-span-5 flex flex-col items-center order-first lg:order-last">
            <div className="w-full p-4 sm:p-8 rounded-[28px] sm:rounded-[44px] bg-[#0A101C]/90 border-2 border-emerald-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col items-center relative overflow-hidden backdrop-blur-2xl">
              {/* Dynamic Pedestal Aura that expands with power */}
              <motion.div
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                  background: currentStage.glowGradient,
                }}
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: 'easeInOut',
                }}
              />

              {/* Power Level & Title Bar */}
              <div className="w-full flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10 mb-3 sm:mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white">
                    {currentStage.level}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-mono font-black text-emerald-400">
                  {currentStage.powerNumber}%
                </span>
              </div>

              {/* Animated Power Gauge Bar */}
              <div className="w-full h-1.5 sm:h-2 rounded-full bg-white/10 overflow-hidden mb-4 sm:mb-6">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${currentStage.powerNumber}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>

              {/* Avatar Stage Title Badge */}
              <div className="text-[9px] sm:text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 border border-emerald-400/30 text-emerald-300 text-center mb-3 sm:mb-4 line-clamp-1">
                {currentStage.titleBadge}
              </div>

              {/* ── THE GROWING HERO AVATAR (Scales up & gains visual particle intensity with level) ── */}
              <div className="relative w-full h-[240px] sm:h-[400px] flex items-end justify-center my-1 sm:my-2 overflow-hidden sm:overflow-visible">
                {/* Rotating holographic energy rings behind figure */}
                <motion.div
                  className="absolute w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] rounded-full border border-dashed pointer-events-none -z-10"
                  style={{
                    borderColor: currentStage.auraColor,
                    opacity: activeStageIndex === 0 ? 0.3 : activeStageIndex === 1 ? 0.6 : 0.85,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20 / (activeStageIndex + 1), ease: 'linear' }}
                />

                {activeStageIndex >= 1 && (
                  <motion.div
                    className="absolute w-[220px] sm:w-[340px] h-[220px] sm:h-[340px] rounded-full border border-dotted pointer-events-none -z-10"
                    style={{
                      borderColor: activeStageIndex === 2 ? '#F59E0B' : '#00F5FF',
                      opacity: 0.5,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                  />
                )}

                {/* The Evolving Hero Character Image */}
                <motion.div
                  key={currentStage.id}
                  initial={{ scale: currentStage.avatarScale * 0.9, opacity: 0 }}
                  animate={{
                    scale: currentStage.avatarScale,
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    scale: { duration: 0.5, ease: 'easeOut' },
                    opacity: { duration: 0.4 },
                    y: { repeat: Infinity, duration: 4.0, ease: 'easeInOut' },
                  }}
                  className="w-full h-full flex items-end justify-center select-none"
                >
                  <img
                    src={activeStageIndex === 2 ? actionFigureTransparent : executive3DTransparent}
                    alt="Evolving FinTech SDE Avatar"
                    draggable={false}
                    className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
                    style={{ objectPosition: 'bottom center' }}
                  />
                </motion.div>
              </div>

              {/* Dynamic Stats Grid for Current Evolution Level */}
              <div className="w-full grid grid-cols-2 gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-white/10">
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono truncate">
                    Concurrency
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-cyan-300 font-mono mt-0.5 truncate">
                    {currentStage.stats.concurrency}
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono truncate">
                    DB Speedup
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-300 font-mono mt-0.5 truncate">
                    {currentStage.stats.speed}
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono truncate">
                    Reliability
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-amber-300 font-mono mt-0.5 truncate">
                    {currentStage.stats.sla}
                  </span>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono truncate">
                    Compute Output
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-purple-300 font-mono mt-0.5 truncate">
                    {currentStage.stats.power}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── TIMELINE COLUMN: Career Journey & Milestones (Below Avatar on Mobile, Left on Desktop) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-last lg:order-first">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="p-4 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[40px] bg-[#0E1524]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl flex flex-col gap-5 sm:gap-6"
              >
                {/* Header: Company, Role & Year */}
                <div className="flex flex-col gap-2 pb-4 sm:pb-5 border-b border-white/10">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-[#18263E] text-emerald-300 border border-emerald-500/30">
                      {currentStage.year}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#D7E2EA]/60 uppercase tracking-widest flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                      {currentStage.company}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mt-1">
                    {currentStage.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed mt-0.5 sm:mt-1">
                    {currentStage.summary}
                  </p>
                </div>

                {/* Key Achievements Bullet Points */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                    Key Milestones &amp; Verified Impact
                  </span>

                  <div className="flex flex-col gap-2 sm:gap-2.5">
                    {currentStage.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-[13px] text-[#D7E2EA]/80 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Unlocked Abilities / Tech Stack */}
                <div className="flex flex-col gap-2 pt-1 sm:pt-2">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                    Unlocked Abilities &amp; Core Tech
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {currentStage.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-mono uppercase tracking-wider bg-[#131D30] border border-emerald-500/25 text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Next Stage Trigger */}
                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono text-[#D7E2EA]/50">
                    Step {activeStageIndex + 1} of 3
                  </span>
                  <button
                    onClick={() => setActiveStageIndex((prev) => (prev + 1) % STAGES.length)}
                    className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{activeStageIndex === 2 ? 'Restart Evolution' : 'Advance Level'}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
