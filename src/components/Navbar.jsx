import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Sparkles, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  Mail, 
  Menu, 
  X,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenRecruiterModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.15 },
      colors: ['#818cf8', '#38bdf8', '#c084fc', '#34d399']
    });
  };

  const navLinks = [
    { label: "Skills", href: "#skills", icon: Layers },
    { label: "AI Paradigm", href: "#ai-paradigm", icon: Sparkles },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "ATS Center", href: "#ats-hub", icon: Target },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3.5 bg-[#090e1d]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-indigo-950/20' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-500/25">
              <div className="w-full h-full bg-[#090e1d] rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-lg bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent font-mono">
                  SG
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white flex items-center gap-2 text-base">
                {personalInfo.name}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  Active at TCS
                </span>
              </span>
              <span className="text-xs text-slate-400">
                Backend & AI Systems Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-indigo-300/80" />
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            <button
              onClick={onOpenRecruiterModal}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-indigo-200 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-400/25 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
              title="Open Recruiter 60-Second Dossier"
            >
              <Target className="w-3.5 h-3.5 text-indigo-400" />
              <span>ATS Quick View</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-white" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-indigo-600 flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.08]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#090e1d]/95 backdrop-blur-3xl border-b border-white/[0.08] px-6 pt-4 pb-8 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white transition-all active:scale-[0.98]"
                >
                  <div className="p-2 rounded-xl bg-white/[0.05] text-indigo-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterModal();
              }}
              className="w-full py-3.5 px-4 rounded-2xl text-xs font-semibold text-indigo-200 bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Target className="w-4 h-4 text-indigo-400" />
              <span>Open ATS Recruiter Summary</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerDownloadConfetti();
              }}
              className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
