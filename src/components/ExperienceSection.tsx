import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import {
  Building2,
  Calendar,
  CheckCircle2,
  Briefcase,
  Layers,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Zap,
} from 'lucide-react';

import student3DTransparent from '../assets/sourav_student_3d_transparent.png';
import executive3DTransparent from '../assets/sourav_executive_3d_transparent.png';
import actionFigureTransparent from '../assets/action_figure_transparent.png';

interface ExperienceItem {
  id: string;
  type: 'fresher' | 'intern' | 'college';
  period: string;
  role: string;
  company: string;
  stage: string;
  avatarImg: string;
  avatarScale: number;
  auraColor: string;
  glowGradient: string;
  badge: string;
  summary: string;
  highlights: string[];
  skills: string[];
  stats: {
    label: string;
    val: string;
  }[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tcs',
    type: 'fresher',
    period: 'December 2025 – Present',
    role: 'Assistant System Engineer (FinTech SDE)',
    company: 'Tata Consultancy Services (TCS), Bangalore',
    stage: 'Current Role · Systems Engineering',
    avatarImg: actionFigureTransparent,
    avatarScale: 1.15,
    auraColor: '#10B981',
    glowGradient:
      'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(245,158,11,0.15) 50%, transparent 75%)',
    badge: 'TCS ON-THE-SPOT AWARD · NETHERLANDS CLIENT POC',
    summary:
      'Primary technical point of contact for an international Netherlands banking client (200–500 active users), delivering 99.4% SLA adherence and automated server workflows.',
    highlights: [
      'Primary POC for Netherlands banking client (200–500 users), resolving 30+ weekly critical incidents with 99.4% SLA adherence.',
      'Engineered and maintained 4–8 ServiceNow workflow automations for continuous server and network switch uptime.',
      'Accelerated engineering output using Anthropic Claude API prompt pipelines and GitHub Copilot.',
      'Recipient of the prestigious TCS On-the-Spot Award for client delivery excellence.',
    ],
    skills: ['FinTech Systems', 'Java 17', 'Spring Boot', 'ServiceNow CAD', 'Enterprise SLAs (99.4%)', 'MuleSoft'],
    stats: [
      { label: 'Client Concurrency', val: '200–500 Users' },
      { label: 'SLA Adherence', val: '99.4%' },
      { label: 'Incident Velocity', val: '30+/Week' },
      { label: 'Certification', val: 'ServiceNow CAD' },
    ],
  },
  {
    id: 'enterprise-intern',
    type: 'intern',
    period: '2023 – November 2025',
    role: 'High-Throughput Systems & Database Optimization',
    company: 'Enterprise Projects & Data Warehousing',
    stage: 'Enterprise Experience · Backend & DB',
    avatarImg: executive3DTransparent,
    avatarScale: 1.05,
    auraColor: '#A855F7',
    glowGradient:
      'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(14,165,233,0.15) 50%, transparent 75%)',
    badge: '+40% SQL LATENCY SPEEDUP · HIGH CONCURRENCY',
    summary:
      'Engineered transactional backends, SQL execution plan tuning, and Slowly Changing Dimensions for high-volume data warehouses.',
    highlights: [
      'Optimized database queries and indexing strategies across large datasets, slashing query latency by up to 40%.',
      'Architected Slowly Changing Dimensions (SCD Type 1 & 2) and early-arriving facts for data warehousing.',
      'Built Shringar doorstep platform (shipped in 1 month, cut bugs ~80%) and Java Parcel Management with ACID concurrency.',
      'Authored Salesforce Apex triggers, Visualforce pages, and automated backend CRM workflows.',
    ],
    skills: ['SQL Optimization', 'Spring Boot', 'ACID Concurrency', 'Data Warehousing (SCD)', 'Salesforce Apex', 'REST APIs'],
    stats: [
      { label: 'Query Tuning', val: '-40% Latency' },
      { label: 'Throughput', val: '100+ Txns/Batch' },
      { label: 'Data Warehouse', val: 'SCD Type 1 & 2' },
      { label: 'Code Quality', val: '~80% Less Bugs' },
    ],
  },
  {
    id: 'college',
    type: 'college',
    period: '2020 – 2023',
    role: 'Algorithmic Foundations & Mentorship',
    company: 'University & Independent Problem Solving',
    stage: 'Foundational Mastery · Algorithms & DSA',
    avatarImg: student3DTransparent,
    avatarScale: 0.95,
    auraColor: '#00F5FF',
    glowGradient:
      'radial-gradient(circle, rgba(0,245,255,0.3) 0%, rgba(59,130,246,0.12) 50%, transparent 75%)',
    badge: '200+ LEETCODE SOLVED · COMPUTATIONAL COMPLEXITY',
    summary:
      'Forged ironclad fundamentals in Object-Oriented Programming, C++, Java, data structures, and algorithmic complexity analysis.',
    highlights: [
      'Solved 200+ LeetCode algorithmic problems covering Trees, Graphs, Dynamic Programming, and Greedy Algorithms.',
      'Extensive problem-solving mastery in C++, Java OOP, and relational SQL database modeling.',
      'Ranked in the Top 20 of 250 teams nationwide in high-intensity 24-hr Smart City Hackathon.',
      'Tutored mathematics for 4 years at BLJ Classes, mentoring 7 students to score 95%+ in examinations.',
    ],
    skills: ['C++', 'Java 17', 'Data Structures (DSA)', 'Algorithms', 'SQL Schema', 'OOP Design'],
    stats: [
      { label: 'LeetCode Solved', val: '200+ Problems' },
      { label: 'DSA Focus', val: 'Trees, DP, Graphs' },
      { label: 'Hackathon Rank', val: 'Top 20 / 250' },
      { label: 'Mentorship', val: '4 Yrs Math Tutor' },
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeExp = EXPERIENCES[selectedIndex];

  return (
    <section
      id="experience"
      className="relative w-full bg-[#080C14] text-[#D7E2EA] px-4 sm:px-8 md:px-12 py-16 sm:py-24 z-20 select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-25 transition-all duration-700"
        style={{ background: activeExp.auraColor }}
      />

      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Heading — Clean, Punchy & Short */}
        <FadeIn delay={0} y={30} className="w-full text-center mb-10 sm:mb-14">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Experience
          </h2>
          <p className="mt-3 text-[#D7E2EA]/70 text-xs sm:text-base max-w-xl mx-auto font-light">
            Career journey and engineering evolution across high-throughput systems, databases, and global banking architectures.
          </p>
        </FadeIn>

        {/* ── COMPACT & SCALABLE 2-COLUMN EXPERIENCE SHOWCASE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ── LEFT COLUMN (7 Cols): Sleek Interactive Roles List & Active Details ── */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* 1. Concise Descending Roles List (Scales seamlessly when adding future companies) */}
            <div className="flex flex-col gap-2.5">
              {EXPERIENCES.map((exp, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[#101A2C] border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                        : 'bg-[#0D1422]/60 border-white/10 hover:border-white/20 hover:bg-[#0E1726]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar Thumbnail */}
                      <div
                        className={`w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 transition-all border ${
                          isSelected
                            ? 'bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-400/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                            : 'bg-black/40 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <img
                          src={exp.avatarImg}
                          alt={exp.role}
                          className="w-full h-full object-cover object-top scale-125 pt-1 pointer-events-none"
                        />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-semibold uppercase">
                            {exp.period}
                          </span>
                          {isSelected && (
                            <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-mono uppercase bg-emerald-500/15 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active
                            </span>
                          )}
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide truncate">
                          {exp.role}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#D7E2EA]/60 truncate">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isSelected ? 'text-emerald-400 translate-x-1' : 'text-white/20'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* 2. Active Role Details Card (Compact & easy to read in 5 seconds) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0D1422]/90 border border-emerald-500/30 backdrop-blur-xl flex flex-col gap-4 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
                      {activeExp.company}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white uppercase mt-0.5">
                      {activeExp.role}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    {activeExp.period}
                  </span>
                </div>

                {/* Verified Highlights */}
                <div className="flex flex-col gap-2">
                  {activeExp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-[#D7E2EA]/85 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                  {activeExp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono uppercase bg-[#141E2E] border border-white/10 text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN (5 Cols): Compact Professional 3D Persona Showcase ── */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full p-5 sm:p-6 rounded-3xl bg-[#0A101C]/90 border border-emerald-500/25 backdrop-blur-2xl shadow-2xl flex flex-col items-center relative overflow-hidden">
              {/* Pedestal Aura */}
              <div
                className="absolute inset-0 pointer-events-none -z-10 opacity-60 transition-all duration-500"
                style={{ background: activeExp.glowGradient }}
              />

              {/* Professional Milestone Header */}
              <div className="w-full flex items-center justify-between pb-2.5 border-b border-white/10 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                    {activeExp.stage}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-300">
                  {activeExp.period}
                </span>
              </div>

              {/* Quick Avatar Era Switcher Tabs */}
              <div className="w-full grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-black/50 border border-white/10 mb-2.5">
                {EXPERIENCES.map((exp, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[10px] font-mono uppercase font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 shadow-sm'
                          : 'text-[#D7E2EA]/60 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full overflow-hidden bg-black/40 flex-shrink-0 border border-white/15">
                        <img
                          src={exp.avatarImg}
                          alt={exp.role}
                          className="w-full h-full object-cover object-top scale-125 pointer-events-none"
                        />
                      </div>
                      <span className="truncate">
                        {exp.type === 'fresher' ? 'TCS 2025' : exp.type === 'intern' ? 'Intern' : 'College'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Achievement / Recognition Pill */}
              <div className="w-full text-center mb-2">
                <span className="inline-block text-[10px] font-mono uppercase font-semibold tracking-wider px-3 py-1 rounded-full bg-black/60 border border-emerald-400/30 text-emerald-300">
                  {activeExp.badge}
                </span>
              </div>

              {/* ── 3D AVATAR (Smooth Career Transition between College, Intern, and TCS Fresher) ── */}
              <div className="relative w-full h-[270px] sm:h-[310px] flex items-end justify-center my-2 select-none overflow-visible">
                {/* Soft ambient back-glow */}
                <div
                  className="absolute w-[200px] sm:w-[240px] h-[200px] sm:h-[240px] rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-700"
                  style={{ background: activeExp.auraColor }}
                />

                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, scale: 0.94, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative z-10 w-full h-full flex items-end justify-center"
                >
                  <img
                    src={activeExp.avatarImg}
                    alt={`${activeExp.role} Avatar`}
                    draggable={false}
                    className="h-full max-h-[300px] sm:max-h-[310px] w-auto max-w-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] transition-all duration-300"
                    style={{
                      transform: `scale(${activeExp.avatarScale})`,
                      transformOrigin: 'bottom center',
                    }}
                  />
                </motion.div>
              </div>

              {/* Compact 4-Stat Metric Grid */}
              <div className="w-full grid grid-cols-2 gap-1.5 mt-2 pt-3 border-t border-white/10">
                {activeExp.stats.map((stat, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex flex-col">
                    <span className="text-[8px] uppercase tracking-wider text-[#D7E2EA]/50 font-mono truncate">
                      {stat.label}
                    </span>
                    <span className="text-[11px] font-bold text-cyan-300 font-mono mt-0.5 truncate">
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
