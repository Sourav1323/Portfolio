import React from 'react';
import { ArrowUp, Mail, FileDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#818cf8', '#c084fc', '#38bdf8', '#34d399']
    });
  };

  return (
    <footer className="py-16 border-t border-white/[0.06] bg-[#060a14] text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Brand & Copy */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-bold text-white tracking-wider font-mono text-base">
              SOURAV.DEV
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400">
              © {new Date().getFullYear()} Sourav Gupta. Built for performance, elegance & ATS compliance.
            </span>
          </div>

          {/* Middle: Tech Badges */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-indigo-300">React 19</span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-purple-300">Three.js 3D</span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-emerald-300">Tailwind</span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-400/25 transition-all hover:-translate-y-0.5 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
