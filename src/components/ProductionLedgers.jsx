import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ShieldCheck, ArrowUpRight, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

const signatureSystems = [
  {
    id: "shringar",
    title: "Shringar — Doorstep Service Platform",
    tagline: "High-Availability Scheduling Engine with State-Machine Integrity",
    metrics: "Shipped in 1 Month • 80% Post-Release Defect Reduction",
    highlight: "State Machine Booking",
    description: "An independently architected doorstep service platform with strict booking transition states, automated customer allocation, and conflict-free scheduling algorithms.",
    capabilities: [
      "State-machine transaction boundaries preventing concurrent overbooking",
      "Modular service catalog with dynamic pricing tiers & duration calculation",
      "Defect-driven refactoring yielding ~80% reduction in edge-case booking bugs"
    ],
    tech: ["JavaScript", "HTML5 / CSS3", "State Machines", "System Design", "Iterative Debugging"],
    github: "https://github.com/Sourav1323",
    status: "Live & Deployed"
  },
  {
    id: "parcel-engine",
    title: "Deterministic Java Parcel & Freight Engine",
    tagline: "ACID Concurrency Control & Automated GST Calculation Tiers",
    metrics: "100+ Live Records • Zero Deadlocks • Strict OOP Layering",
    highlight: "Deterministic FinTech Engine",
    description: "A Java backend core utilizing strict Object-Oriented Design to orchestrate intake, warehouse transit, dynamic freight pricing, GST computation, and audit logging.",
    capabilities: [
      "Deterministic computation for parcel weight brackets, tax tiers & transit SLAs",
      "Relational schema handling concurrent thread mutations without record locks",
      "Clean separation of Presentation, Business Service, and Data Access Layers (DAO)"
    ],
    tech: ["Java 11/17", "Spring Concepts", "SQL", "JUnit 5", "OOP Architecture", "ACID Transactions"],
    github: "https://github.com/Sourav1323",
    status: "Production Code Available"
  },
  {
    id: "healthcare-discovery",
    title: "Pink City Healthcare Diagnostic Engine",
    tagline: "Smart City Hackathon Finalist • Squad Lead for 4 Engineers",
    metrics: "Top 20 of 250 Teams (Top 8%) • 24-Hour Sprint Delivery",
    highlight: "Squad Leadership Under Pressure",
    description: "Directed a 4-person engineering squad during a high-pressure 24-hour sprint. Built a real-time diagnostic center discovery and pricing transparency platform.",
    capabilities: [
      "Rapid sprint task distribution, code review triage, and merge dispute resolution",
      "Client-side caching and dynamic geolocation radius filtering across Jaipur",
      "Pitch and technical architecture selected in Top 8% of national competitors"
    ],
    tech: ["Team Leadership", "JavaScript", "REST APIs", "Rapid Prototyping", "Agile SDLC"],
    github: "https://github.com/Sourav1323",
    status: "Top 20 Nationwide Finalist"
  }
];

export default function ProductionLedgers() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-telemetry uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Code & Artifacts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Signature Software Ledgers
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Engineered for deterministic precision, low failure rates, and rigorous concurrency safety.
            </p>
          </div>

          <a
            href="https://github.com/Sourav1323"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono-telemetry text-slate-300 hover:text-white transition-all cursor-pointer group"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>github.com/Sourav1323</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {signatureSystems.map((item, index) => (
            <div 
              key={item.id}
              className="bento-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono-telemetry uppercase tracking-wider text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {item.highlight}
                  </span>
                  <span className="text-[11px] font-mono-telemetry text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 font-mono-telemetry mt-1 mb-4">
                  {item.metrics}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2 mb-6">
                  {item.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
                  {item.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono-telemetry text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Action Link */}
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/[0.08] hover:border-emerald-500/30 text-xs font-semibold text-slate-300 hover:text-emerald-300 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-emerald-400" />
                  <span>Inspect Architecture on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
