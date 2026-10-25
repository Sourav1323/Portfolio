import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { CheckCircle2, GitBranch, ArrowUpRight } from 'lucide-react';

import shringarHero from '../assets/projects/shringar_hero.jpg';
import parcelHero from '../assets/projects/parcel_hero.jpg';
import pinkcityHero from '../assets/projects/pinkcity_hero.jpg';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  url: string;
  image: string;
}

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'Shringar — Doorstep Service Platform',
    category: 'Full-Stack Platform',
    description:
      'Independently built a doorstep mehndi booking platform with backend logic and custom design options, shipped in 1 month through iterative debugging and refactoring — cutting bugs by ~80%.',
    highlights: [
      'Shipped complete production-ready platform in 1 month through iterative testing',
      'Reduced software bugs by ~80% via rigorous refactoring and validation',
      'Automated doorstep booking scheduling, client catalogs, and payment calculation',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs'],
    url: 'https://github.com/Sourav1323',
    image: shringarHero,
  },
  {
    number: '02',
    name: 'Parcel Management System',
    category: 'Enterprise Java Backend',
    description:
      'Developed a Java-based backend system with structured database logic to manage parcel intake, storage, and delivery for 100+ sample records, accurately calculating parcel counts, cost, GST, and delivery time using core Java OOP principles.',
    highlights: [
      'Accurately calculates parcel count, shipping freight, 18% GST (CGST/SGST), and delivery time',
      'Structured database logic handling 100+ sample records with zero transactional discrepancy',
      'Engineered using Core Java, Object-Oriented Architecture, JDBC, and ACID concurrency',
    ],
    techStack: ['Java 17', 'OOP Design', 'MySQL / JDBC', 'System Design'],
    url: 'https://github.com/Sourav1323',
    image: parcelHero,
  },
  {
    number: '03',
    name: 'Pink City Healthcare',
    category: 'Smart City Hackathon · Top 20 / 250 Teams',
    description:
      'Led a team of 4 to build Pink City Healthcare in a 24-hour hackathon, ranking in the top 20 of 250 teams nationwide; engineered real-time frontend mapping to help citizens locate nearby diagnostic centers across Jaipur.',
    highlights: [
      'Ranked in Top 20 of 250 teams nationwide in high-intensity 24-hour hackathon',
      'Led 4 engineers across frontend, API integration, and emergency directory design',
      'Enabled real-time discovery of nearby diagnostic centers and hospital bed availability',
    ],
    techStack: ['JavaScript', 'HTML5 / CSS3', 'Geo-Location', 'Hackathon Finalist'],
    url: 'https://github.com/Sourav1323',
    image: pinkcityHero,
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA]/40 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden"
      >
        {/* ── TOP ROW: NUMBER, TITLE, GHOST LIVE BUTTON ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 md:pb-6 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {project.number}
            </span>

            {/* Project Name & Category Label */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#B600A8] font-mono">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium uppercase tracking-wide text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Ghost Button */}
          <LiveProjectButton url={project.url} />
        </div>

        {/* ── MAIN CONTENT: RESUME HIGHLIGHTS (LEFT) + SINGLE DEDICATED PREVIEW IMAGE (RIGHT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5 md:pt-7 items-center">
          {/* Left Column (5 Cols): Project Details & Resume Achievements */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <p className="text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Key Resume Achievements List */}
            <div className="flex flex-col gap-2.5 pt-1">
              {project.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B600A8] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#D7E2EA]/80 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-[#18181C] border border-[#D7E2EA]/20 text-[#BBCCD7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 Cols): The Single Dedicated Project Showcase Preview */}
          <div className="lg:col-span-7 w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-[#D7E2EA]/20 bg-[#141416] shadow-2xl relative group">
            <img
              src={project.image}
              alt={`${project.name} application preview`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 pb-32 z-20 select-none overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-24">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="w-full flex flex-col gap-6 relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
