import React, { useState } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Bank3DExterior from './components/Bank3DExterior';
import BankInteriorTour from './components/BankInteriorTour';
import Hero from './components/Hero';
import LiveMarquee from './components/LiveMarquee';
import FintechBentoGrid from './components/FintechBentoGrid';
import ProductionLedgers from './components/ProductionLedgers';
import RecruiterCommandHub from './components/RecruiterCommandHub';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';
import { Target, Mail, Building2, Key, Sparkles, Layers } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [buildingView, setBuildingView] = useState('exterior'); // 'exterior' | 'interior'

  const handleScrollToConnect = () => {
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${personalInfo.email}?subject=Priority%20Engineering%20Inquiry%20-%20Sourav%20Gupta`;
    }
  };

  return (
    <div className="min-h-screen relative bg-[#06080e] text-slate-100 selection:bg-[#d4af37]/30 selection:text-amber-100 overflow-x-hidden">
      
      {/* Dynamic Animated FinTech Background & Interactive Particle Matrix */}
      <InteractiveBackground />

      {/* Top Floating Glass Navbar */}
      <Navbar onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

      {/* Main Cohesive Layout */}
      <main className="relative z-10 pt-20 sm:pt-24">
        
        {/* Section 00: Bank Building Headquarters Experience (Exterior 3D & Step-by-Step Interior Compartments) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-xs font-mono-telemetry uppercase tracking-wider text-[#d4af37] font-bold">
                Bank of Institutional Systems & Engineering
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-2xl bg-[#090d18]/90 border border-[#d4af37]/30 backdrop-blur-xl">
              <button
                onClick={() => setBuildingView('exterior')}
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
                onClick={() => setBuildingView('interior')}
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

          {/* Conditional 3D Exterior / Interior Step-by-Step Compartment Tour */}
          {buildingView === 'exterior' ? (
            <Bank3DExterior onEnterBuilding={() => setBuildingView('interior')} />
          ) : (
            <BankInteriorTour onBackToExterior={() => setBuildingView('exterior')} />
          )}

        </section>

        {/* Real-Time Live Telemetry Infinite Marquee */}
        <LiveMarquee />

        {/* Section 01: Command Overview & 3D Action Figure Pod */}
        <Hero 
          onOpenRecruiterModal={() => setRecruiterModalOpen(true)}
          onEnterBuilding={() => setBuildingView('interior')}
        />

        {/* Section 02: The FinTech & Leadership Bento Grid */}
        <FintechBentoGrid />

        {/* Section 03: Signature Production Software Ledgers */}
        <ProductionLedgers />

        {/* Section 04: Recruiter Priority Dispatch & ATS Terminal */}
        <RecruiterCommandHub />

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

        <button
          onClick={handleScrollToConnect}
          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
          title="Direct Priority Contact"
        >
          <Mail className="w-3.5 h-3.5 text-slate-950" />
          <span>Priority Connect</span>
        </button>
      </div>

    </div>
  );
}
