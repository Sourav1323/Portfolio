import React from 'react';
import { ArrowUp, Mail, ShieldCheck, HeartHandshake } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05070c] text-slate-400 text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Monomark & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-emerald-400 tracking-wider font-mono-telemetry text-sm">
              SG // FINTECH.SDE
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400 text-xs">
              © {new Date().getFullYear()} Sourav Gupta • TCS Enterprise SDE • Deterministic Systems & High EQ
            </span>
          </div>

          {/* Center: Live Telemetry Badges */}
          <div className="flex items-center gap-2 text-xs font-mono-telemetry text-slate-400">
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
              SLA 99.4%
            </span>
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px]">
              SQL 48ms
            </span>
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px]">
              High EQ Lead
            </span>
          </div>

          {/* Right: Direct Action Channels */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
              title="Direct Email Dispatch"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1] transition-all hover:-translate-y-0.5 ml-2 cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
