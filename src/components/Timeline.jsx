import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      period: 'Dec 2025 – Present',
      role: 'Assistant System Engineer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'Bangalore, India · Full-Time',
      client: 'Netherlands Enterprise Client (200–500 International Users)',
      desc: 'Primary technical point of contact managing daily stakeholder communication, high-priority incident triage, and release deployments. Resolving 30+ critical incidents weekly maintaining 99.4% SLA adherence. Engineered 8+ production ServiceNow workflows and integrated Anthropic Claude API workflows into the SDLC.',
      tags: ['Java 17', 'ServiceNow CAD/CSA', 'MuleSoft', 'Claude API', 'Production SLAs']
    },
    {
      period: 'Nov 2024 – Dec 2024',
      role: 'Software Developer Intern (Salesforce)',
      company: 'Kloudeva LLC',
      location: 'Jaipur, Rajasthan (Remote)',
      client: 'Enterprise CRM Ecosystem',
      desc: 'Built and customized enterprise features using Apex, Visualforce, and Lightning Web Components (LWC). Engineered automated workflows, validation rules, and bulkified triggers to safeguard relational database integrity across custom objects.',
      tags: ['Salesforce Apex', 'LWC', 'Visualforce', 'Database Triggers', 'Agile SDLC']
    },
    {
      period: 'May 2024 – Jul 2024',
      role: 'SQL Developer Intern',
      company: 'Celebal Technologies',
      location: 'Jaipur, Rajasthan',
      client: 'Data Warehousing & Performance Tuning',
      desc: 'Analyzed execution plans and redesigned composite B-Tree indexes across large multi-million row datasets, improving query response performance by up to 40%. Implemented Slowly Changing Dimensions (SCD Type 1 & 2) and early-arriving-fact architectures.',
      tags: ['SQL Optimization', 'Indexing Strategies', 'SCD Type 2', 'Data Warehousing', 'Execution Plans']
    },
    {
      period: '2024',
      role: 'Engineering Squad Lead',
      company: 'Smart City Hackathon',
      location: 'Nationwide Finalist',
      client: 'Top 20 of 250 Teams (Top 8%)',
      desc: 'Directed a 4-engineer squad in a high-intensity 24-hour hackathon. Architected task distribution, code review standards, and client-server caching for real-time diagnostic center mapping across Jaipur.',
      tags: ['Team Leadership', 'System Architecture', 'Rapid Prototyping', 'REST APIs']
    },
    {
      period: '2020 – 2024',
      role: 'Mathematics Mentor & Analytical Educator',
      company: 'BLJ Classes',
      location: 'Jaipur, Rajasthan',
      client: '7 Students Scored 95%+ in Boards',
      desc: 'Taught advanced mathematics for 4 years, honing pedagogical empathy, structured problem decomposition, and algorithmic rigor. Mentored 7 students to achieve top 95%+ marks in board examinations.',
      tags: ['Analytical Decomposition', 'Mentorship', 'Mathematical Rigor']
    }
  ];

  return (
    <section id="experience" className="relative w-[92%] max-w-[1440px] mx-auto py-24 sm:py-32 border-t border-[#c2a4ff]/10">
      {/* Section Header */}
      <div className="mb-16">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c2a4ff] mb-3">
          Experience
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#eae5ec]">
          The <span className="text-[#c2a4ff]">journey</span>
        </h2>
      </div>

      {/* Timeline matching ehansih timeline */}
      <div className="relative pl-8 sm:pl-12 border-l border-[#c2a4ff]/20 ml-2 sm:ml-4 flex flex-col gap-12 sm:gap-14">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing dot on the vertical line */}
            <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full border-2 border-[#c2a4ff] bg-[#0b080c] flex items-center justify-center group-hover:scale-125 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c2a4ff] shadow-[0_0_8px_#c2a4ff]" />
            </div>

            {/* Content Card / Info */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#c2a4ff] mb-1.5">
                <span>{exp.period}</span>
                {exp.client && (
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#c2a4ff]/10 text-[#c2a4ff] border border-[#c2a4ff]/20">
                    {exp.client}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#eae5ec] group-hover:text-[#c2a4ff] transition-colors">
                {exp.role}
              </h3>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#c2a4ff]/80 font-medium mt-1 mb-3">
                <Building2 className="w-4 h-4" />
                <span>{exp.company}</span>
                <span className="text-[#eae5ec]/30">·</span>
                <span className="text-[#eae5ec]/60">{exp.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#eae5ec]/65 leading-relaxed max-w-3xl mb-4">
                {exp.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#110e14] border border-[#c2a4ff]/10 text-[#eae5ec]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
