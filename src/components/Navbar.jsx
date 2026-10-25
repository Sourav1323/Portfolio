import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  FileDown, 
  Target, 
  Layers, 
  Check, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ activePage, onSelectPage, onOpenRecruiterModal, isAllView, onToggleAllView }) => {
  const [scrolled, setScrolled] = useState(false);

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

  const navPages = [
    { id: 'overview', label: 'Overview', icon: Compass, key: '1' },
    { id: 'engineering', label: 'Engineering', icon: Cpu, key: '2' },
    { id: 'experience', label: 'Career', icon: Briefcase, key: '3' },
    { id: 'projects', label: 'Projects & ATS', icon: FolderGit2, key: '4' },
  ];

  return (
    <>
      {/* Top Floating Glass Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2.5 bg-[#080c15]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/30' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo & Status */}
            <button 
              onClick={() => onSelectPage('overview')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/[0.1] p-[1px] flex items-center justify-center transition-all group-hover:border-white/[0.25] group-hover:scale-105">
                <span className="font-bold text-xs text-white font-mono-code">
                  SG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold tracking-tight text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  {personalInfo.name}
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                    TCS
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">
                  Backend & Systems SDE
                </span>
              </div>
            </button>

            {/* Center: Creative Floating Capsule Island (Desktop) */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/80 border border-slate-700/70 backdrop-blur-xl shadow-xl shadow-black/40">
              {navPages.map((page) => {
                const Icon = page.icon;
                const isActive = activePage === page.id && !isAllView;
                return (
                  <button
                    key={page.id}
                    onClick={() => onSelectPage(page.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white text-slate-950 font-semibold shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    <span>{page.label}</span>
                    <span className={`text-[9px] font-mono px-1 rounded ${
                      isActive 
                        ? 'bg-slate-200 text-slate-700' 
                        : 'bg-white/[0.04] text-slate-500'
                    }`}>
                      {page.key}
                    </span>
                  </button>
                );
              })}

              {/* View All Continuous Scroll Toggle */}
              <div className="w-[1px] h-4 bg-slate-700 mx-1" />
              <button
                onClick={onToggleAllView}
                className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 ${
                  isAllView
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
                title="Toggle continuous scroll mode for all sections"
              >
                <Layers className="w-3 h-3" />
                <span>{isAllView ? 'All (On)' : 'All'}</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenRecruiterModal}
                className="hidden sm:flex px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all items-center gap-1.5"
                title="Open Recruiter 60-Second Dossier"
              >
                <Target className="w-3.5 h-3.5 text-blue-400" />
                <span>ATS View</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Sourav_Gupta_Resume.pdf"
                onClick={triggerDownloadConfetti}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-sm active:scale-[0.98]"
              >
                <FileDown className="w-3.5 h-3.5 text-slate-950" />
                <span>Download CV</span>
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Floating Bottom Dock (Ergonomic App-Style Navigator) */}
      <div className="md:hidden fixed bottom-3 inset-x-3 max-w-sm mx-auto z-50 flex items-center justify-around p-1.5 rounded-2xl bg-[#090d18]/90 backdrop-blur-2xl border border-slate-700/80 shadow-2xl">
        {navPages.map((page) => {
          const Icon = page.icon;
          const isActive = activePage === page.id && !isAllView;
          return (
            <button
              key={page.id}
              onClick={() => onSelectPage(page.id)}
              className={`flex-1 py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all ${
                isActive 
                  ? 'bg-white/10 text-white font-semibold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
              <span className="text-[10px] mt-0.5">{page.label.split(' ')[0]}</span>
            </button>
          );
        })}

        <button
          onClick={onToggleAllView}
          className={`py-1.5 px-2 rounded-xl flex flex-col items-center justify-center transition-all ${
            isAllView 
              ? 'bg-blue-500/20 text-blue-300' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
          title="Toggle All Sections"
        >
          <Layers className="w-4 h-4" />
          <span className="text-[10px] mt-0.5">All</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;