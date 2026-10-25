import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Cpu, 
  FolderGit2, 
  Mail, 
  Target, 
  Layers, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
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

  const navPages = [
    { id: 'overview', label: 'Terminal', icon: Compass, key: '1' },
    { id: 'engineering', label: 'FinTech Engines', icon: Cpu, key: '2' },
    { id: 'experience', label: 'Leadership & EQ', icon: HeartHandshake, key: '3' },
    { id: 'projects', label: 'Systems & ATS', icon: FolderGit2, key: '4' },
  ];

  const handleContactClick = () => {
    if (isAllView) {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onSelectPage('projects');
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
      {/* Top Floating Glass Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2.5 bg-[#03070d]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/50' 
          : 'py-3.5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: FinTech Terminal Brand & Status */}
            <button 
              onClick={() => onSelectPage('overview')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-emerald-500/30 p-[1px] flex items-center justify-center transition-all group-hover:border-emerald-400 group-hover:scale-105 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                <span className="font-bold text-xs text-emerald-400 font-mono-code">
                  SG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold tracking-tight text-white flex items-center gap-1.5 text-xs sm:text-sm">
                  {personalInfo.name}
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                    TCS SDE
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                  FinTech & Systems Architecture
                </span>
              </div>
            </button>

            {/* Center: Creative Floating Capsule Island (Desktop) */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/85 border border-slate-800 backdrop-blur-xl shadow-2xl">
              {navPages.map((page) => {
                const Icon = page.icon;
                const isActive = activePage === page.id && !isAllView;
                return (
                  <button
                    key={page.id}
                    onClick={() => onSelectPage(page.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-400 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    <span>{page.label}</span>
                    <span className={`text-[9px] font-mono px-1 rounded ${
                      isActive 
                        ? 'bg-emerald-500/30 text-slate-900' 
                        : 'bg-white/[0.04] text-slate-500'
                    }`}>
                      {page.key}
                    </span>
                  </button>
                );
              })}

              {/* View All Continuous Scroll Toggle */}
              <div className="w-[1px] h-4 bg-slate-800 mx-1" />
              <button
                onClick={onToggleAllView}
                className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-all flex items-center gap-1 cursor-pointer ${
                  isAllView
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
                title="Toggle continuous scroll mode for all sections"
              >
                <Layers className="w-3 h-3" />
                <span>{isAllView ? 'All (On)' : 'All'}</span>
              </button>
            </div>

            {/* Right: Actions (NO resume download button) */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenRecruiterModal}
                className="hidden sm:flex px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-all items-center gap-1.5 cursor-pointer"
                title="Open Recruiter 60-Second Dossier"
              >
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>ATS Dossier</span>
              </button>

              <button
                onClick={handleContactClick}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20 active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-950" />
                <span>Priority Connect</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Floating Bottom Dock */}
      <div className="md:hidden fixed bottom-3 inset-x-3 max-w-sm mx-auto z-50 flex items-center justify-around p-1.5 rounded-2xl bg-[#03070d]/95 backdrop-blur-2xl border border-slate-800 shadow-2xl">
        {navPages.map((page) => {
          const Icon = page.icon;
          const isActive = activePage === page.id && !isAllView;
          return (
            <button
              key={page.id}
              onClick={() => onSelectPage(page.id)}
              className={`flex-1 py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                isActive 
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span className="text-[10px] mt-0.5">{page.label.split(' ')[0]}</span>
            </button>
          );
        })}

        <button
          onClick={handleContactClick}
          className="py-1.5 px-2 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:text-slate-200 cursor-pointer"
          title="Direct Contact"
        >
          <Mail className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] mt-0.5">Contact</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
