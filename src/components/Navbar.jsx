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

export default function Navbar({ onOpenRecruiterModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['overview', 'bento', 'projects', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'overview', label: 'Command', icon: Compass },
    { id: 'bento', label: 'FinTech Bento', icon: Cpu },
    { id: 'projects', label: 'Systems Ledgers', icon: FolderGit2 },
    { id: 'connect', label: 'Recruiter Dispatch', icon: Mail },
  ];

  return (
    <>
      {/* Top Floating Glass Capsule Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#06080e]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/80' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Monomark & Real-Time Status */}
            <button 
              onClick={() => scrollTo('overview')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-[#090d18] border border-emerald-500/30 p-[1px] flex items-center justify-center transition-all group-hover:border-emerald-400 group-hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                <span className="font-bold text-xs text-emerald-400 font-mono-telemetry">
                  SG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white flex items-center gap-2 text-xs sm:text-sm">
                  {personalInfo.name}
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                    TCS SDE
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono-telemetry hidden sm:inline">
                  FinTech & Distributed Systems SDE
                </span>
              </div>
            </button>

            {/* Center: Frosted Navigation Capsule (Desktop) */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#0a0f1d]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenRecruiterModal}
                className="hidden sm:flex px-3.5 py-1.5 rounded-xl text-xs font-mono-telemetry uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all items-center gap-1.5 cursor-pointer"
                title="Open Recruiter 60-Second Dossier"
              >
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>ATS Dossier</span>
              </button>

              <button
                onClick={() => scrollTo('connect')}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/25 active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-950" />
                <span>Priority Connect</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Floating Bottom Navigation Dock */}
      <div className="md:hidden fixed bottom-3 inset-x-3 max-w-sm mx-auto z-50 flex items-center justify-around p-1.5 rounded-2xl bg-[#06080e]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl">
        {navLinks.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                isActive 
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span className="text-[10px] mt-0.5">{item.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
