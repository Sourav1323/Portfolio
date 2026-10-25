import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Key, 
  Mail, 
  Target, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenRecruiterModal, buildingView, onToggleView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#06080e]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/80' 
        : 'py-4 bg-[#06080e]/80 backdrop-blur-md border-b border-white/[0.05]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Monomark & Real-Time Status */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onToggleView && onToggleView('exterior')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-[#090d18] border border-[#d4af37]/50 p-[1px] flex items-center justify-center transition-all group-hover:border-[#d4af37] group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <span className="font-bold text-xs text-[#d4af37] font-mono-telemetry">
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
                  Bank of Institutional Systems & Engineering
                </span>
              </div>
            </button>
          </div>

          {/* Center: Building View Mode Selector (Desktop) */}
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-2xl bg-[#0a0f1d]/90 border border-[#d4af37]/30 backdrop-blur-xl shadow-xl">
            <button
              onClick={() => onToggleView && onToggleView('exterior')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono-telemetry transition-all flex items-center gap-1.5 cursor-pointer ${
                buildingView === 'exterior'
                  ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>3D Bank Facade</span>
            </button>

            <button
              onClick={() => onToggleView && onToggleView('interior')}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono-telemetry transition-all flex items-center gap-1.5 cursor-pointer ${
                buildingView === 'interior'
                  ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>Step Inside (Host Tour)</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenRecruiterModal}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono-telemetry uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-1.5 cursor-pointer"
              title="Open Recruiter 60-Second Dossier"
            >
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">ATS Dossier</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=Priority Technical Interview Request - Sourav Gupta&body=Hi Sourav,%0D%0A%0D%0AWe reviewed your profile in the Bank of Institutional Systems and would like to schedule an engineering conversation.`}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#d4af37] to-[#b48c36] hover:from-[#e5c052] hover:to-[#c69a3b] transition-all flex items-center gap-1.5 shadow-md shadow-[#d4af37]/25 active:scale-[0.98] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-slate-950" />
              <span>Priority Connect</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
