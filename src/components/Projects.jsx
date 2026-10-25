import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Projects() {
  const projects = [
    {
      name: 'Shringar — Doorstep Service Platform',
      lang: 'JavaScript',
      dotColor: '#F7DF1E',
      desc: 'Full-stack doorstep booking and scheduling platform with deterministic transaction states, customer directories, and dynamic service tier calculations. Shipped in 1 month, reducing post-release bugs by ~80%.',
      category: 'Full-Stack · Production System',
      link: personalInfo.github,
    },
    {
      name: 'Parcel Management Backend Engine',
      lang: 'Java',
      dotColor: '#B07219',
      desc: 'Robust Java backend applying strict OOP paradigms and relational schemas to orchestrate parcel intake, weight tiers, freight calculations, automated GST computation, and transit timelines without deadlocks.',
      category: 'Java 17 · OOP Architecture',
      link: personalInfo.github,
    },
    {
      name: 'Pink City Healthcare Discovery',
      lang: 'TypeScript',
      dotColor: '#3178C6',
      desc: 'Real-time diagnostic center discovery platform with dynamic geolocation filtering and test pricing queries. Built in a high-stakes 24-hr sprint; ranked Top 20 of 250 squads nationwide.',
      category: 'Top 20 Nationwide · REST APIs',
      link: personalInfo.github,
    },
    {
      name: 'SQL Query & Schema Performance Suite',
      lang: 'SQL',
      dotColor: '#E38C00',
      desc: 'Enterprise database optimization benchmark eliminating sequential table scans across 2.4M records with covering B-Tree indexes, non-correlated subqueries, and Slowly Changing Dimensions (SCD Type 2).',
      category: '40% Speedup · Data Warehousing',
      link: personalInfo.github,
    },
    {
      name: 'Agentic Contract Test Synthesizer',
      lang: 'Python',
      dotColor: '#3572A5',
      desc: 'Automated test-generation engine powered by Anthropic Claude 3.7. Transforms OpenAPI specifications into adversarial JUnit boundary tests, synthetic edge cases, and deterministic assertions.',
      category: 'Anthropic Claude API · Agents',
      link: personalInfo.github,
    },
    {
      name: 'Enterprise ITIL Automation Scripts',
      lang: 'ServiceNow JS',
      dotColor: '#A97BFF',
      desc: 'Production suite of 8+ automated business rules, Script Includes, and REST outbound integrations resolving 30+ weekly incidents for a 200–500 user Netherlands enterprise client.',
      category: 'ServiceNow CAD · Enterprise Cloud',
      link: personalInfo.github,
    },
  ];

  return (
    <section id="projects" className="relative w-[92%] max-w-[1440px] mx-auto py-24 sm:py-32 border-t border-[#c2a4ff]/10">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c2a4ff] mb-3">
          Open Source & Work
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#eae5ec]">
          Featured <span className="text-[#c2a4ff]">projects</span>
        </h2>
      </div>

      {/* 3-Column Grid matching ehansih proj-grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ehansih-card p-7 flex flex-col justify-between group"
          >
            <div>
              {/* Language pill with colored dot */}
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-[#c2a4ff] mb-3">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: proj.dotColor }}
                />
                <span>{proj.lang}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#eae5ec] group-hover:text-[#c2a4ff] transition-colors leading-snug">
                {proj.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#eae5ec]/60 leading-relaxed mt-2.5 mb-6">
                {proj.desc}
              </p>
            </div>

            {/* Bottom Meta & Arrow */}
            <div className="flex items-center justify-between pt-4 border-t border-[#c2a4ff]/10 text-[11px] text-[#eae5ec]/40 group-hover:text-[#eae5ec]/70 transition-colors">
              <span className="font-medium tracking-wider">{proj.category}</span>
              <div className="w-7 h-7 rounded-full bg-[#18141c] flex items-center justify-center text-[#c2a4ff]/40 group-hover:text-[#c2a4ff] group-hover:bg-[#c2a4ff]/15 transition-all">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-12 text-center">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#c2a4ff] hover:text-white transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>EXPLORE COMPLETE REPOSITORIES ON GITHUB →</span>
        </a>
      </div>
    </section>
  );
}
