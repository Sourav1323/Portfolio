import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-[92%] max-w-[1440px] mx-auto py-10 border-t border-[#c2a4ff]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
      <div className="flex items-center gap-3">
        <span className="font-bold tracking-widest text-[#eae5ec] text-sm">
          sourav.gupta
        </span>
        <span className="text-[#eae5ec]/30">|</span>
        <span className="text-[#eae5ec]/50">
          © 2026 Sourav Gupta. Built with React & Tailwind.
        </span>
      </div>

      <div className="flex items-center gap-4 text-[#eae5ec]/60">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c2a4ff] transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c2a4ff] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:text-[#c2a4ff] transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <button
          onClick={scrollToTop}
          className="ml-2 w-7 h-7 rounded-full bg-[#18141c] border border-[#c2a4ff]/20 flex items-center justify-center text-[#c2a4ff] hover:bg-[#c2a4ff] hover:text-[#0b080c] transition-all"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
