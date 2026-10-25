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
  Target,
  Cpu,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenRecruiterModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#ffffff', '#60a5fa', '#34d399', '#818cf8']
    });
  };

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Domains", href: "#architectures" },
    { label: "Leadership", href: "#leadership" },
    { label: "AI Advantage", href: "#ai-paradigm" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "ATS Center", href: "#ats-hub" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#080c15]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.1] p-[1px] flex items-center justify-center transition-all group-hover:border-white/[0.25]">
              <span className="font-bold text-sm text-white font-mono-code">
                SG
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-white flex items-center gap-2 text-sm sm:text-base">
                {personalInfo.name}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  TCS Engineer
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                Backend & Distributed Systems
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Clean & Minimal */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenRecruiterModal}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-1.5"
              title="Open Recruiter 60-Second Dossier"
            >
              <Target className="w-3.5 h-3.5 text-blue-400" />
              <span>ATS View</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-sm active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5 text-slate-900" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-white flex items-center gap-1"
            >
              <FileDown className="w-3 h-3" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080c15]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 pt-4 pb-8 space-y-3 shadow-2xl animate-in fade-in duration-200 z-50 max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-white transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterModal();
              }}
              className="w-full py-3 px-4 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-2"
            >
              <Target className="w-4 h-4 text-blue-400" />
              <span>Open ATS Recruiter Summary</span>
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="Sourav_Gupta_Resume.pdf"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerDownloadConfetti();
              }}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-900 bg-white flex items-center justify-center gap-2"
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
