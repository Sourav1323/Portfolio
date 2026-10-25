import React, { useState } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Bank3DExterior from './components/Bank3DExterior';
import BankInteriorTour from './components/BankInteriorTour';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';
import { Target, Mail, Building2, Key } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [buildingView, setBuildingView] = useState('exterior'); // 'exterior' | 'interior'

  const handleToggleView = (view) => {
    setBuildingView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToConnect = () => {
    setBuildingView('interior');
    setTimeout(() => {
      window.location.href = `mailto:${personalInfo.email}?subject=Priority%20Engineering%20Inquiry%20-%20Sourav%20Gupta`;
    }, 150);
  };

  return (
    <div className="min-h-screen relative bg-[#06080e] text-slate-100 selection:bg-[#d4af37]/30 selection:text-amber-100 overflow-x-hidden flex flex-col justify-between">
      
      {/* Dynamic Animated FinTech Background & Interactive Particle Matrix */}
      <InteractiveBackground />

      {/* Top Floating Glass Navbar */}
      <Navbar 
        onOpenRecruiterModal={() => setRecruiterModalOpen(true)} 
        buildingView={buildingView}
        onToggleView={handleToggleView}
      />

      {/* Main Bank Headquarters Arena (ALL Information is INSIDE the Building, NOT Below) */}
      <main className="relative z-10 pt-24 sm:pt-28 pb-16 flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Bank Mode Selector Strip */}
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-xs font-mono-telemetry uppercase tracking-wider text-[#d4af37] font-bold">
                {buildingView === 'exterior' ? 'Bank Exterior • 3D Neoclassical Facade' : 'Bank Interior • Guided Compartment Tour'}
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-2xl bg-[#090d18]/90 border border-[#d4af37]/30 backdrop-blur-xl">
              <button
                onClick={() => handleToggleView('exterior')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono-telemetry transition-all flex items-center gap-1.5 cursor-pointer ${
                  buildingView === 'exterior'
                    ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>3D Bank Facade</span>
              </button>

              <button
                onClick={() => handleToggleView('interior')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono-telemetry transition-all flex items-center gap-1.5 cursor-pointer ${
                  buildingView === 'interior'
                    ? 'bg-[#d4af37] text-slate-950 font-bold shadow-md shadow-[#d4af37]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>Step Inside (Host Tour)</span>
              </button>
            </div>
          </div>

          {/* Conditional Rendering: Either Outside 3D Bank or Inside Guided Compartments */}
          {buildingView === 'exterior' ? (
            <Bank3DExterior onEnterBuilding={() => handleToggleView('interior')} />
          ) : (
            <BankInteriorTour onBackToExterior={() => handleToggleView('exterior')} />
          )}

        </section>
      </main>

      {/* Sleek Minimalist Footer */}
      <Footer />

      {/* 60-Second ATS Fast-Track Modal */}
      <RecruiterModal 
        isOpen={recruiterModalOpen} 
        onClose={() => setRecruiterModalOpen(false)} 
      />

      {/* Floating Recruiter Quick Access Bar (Bottom Right on Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-2xl bg-[#090d18]/90 backdrop-blur-xl border border-white/[0.1] shadow-2xl">
        <button
          onClick={() => setRecruiterModalOpen(true)}
          className="px-3.5 py-2 rounded-xl text-xs font-mono-telemetry uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-1.5 cursor-pointer"
          title="Open Recruiter Dossier"
        >
          <Target className="w-3.5 h-3.5 text-emerald-400" />
          <span>ATS Dossier</span>
        </button>

        <a
          href={`mailto:${personalInfo.email}?subject=Priority Technical Interview Request - Sourav Gupta`}
          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#d4af37] to-[#b48c36] hover:from-[#e5c052] hover:to-[#c69a3b] transition-all flex items-center gap-1.5 shadow-md shadow-[#d4af37]/25 active:scale-95 cursor-pointer"
          title="Direct Priority Contact"
        >
          <Mail className="w-3.5 h-3.5 text-slate-950" />
          <span>Priority Connect</span>
        </a>
      </div>

    </div>
  );
}
