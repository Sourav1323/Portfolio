import React, { useState } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveMarquee from './components/LiveMarquee';
import FintechBentoGrid from './components/FintechBentoGrid';
import ProductionLedgers from './components/ProductionLedgers';
import RecruiterCommandHub from './components/RecruiterCommandHub';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';
import { Target, Mail } from 'lucide-react';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  const handleScrollToConnect = () => {
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${personalInfo.email}?subject=Priority%20Engineering%20Inquiry%20-%20Sourav%20Gupta`;
    }
  };

  return (
    <div className="min-h-screen relative bg-[#06080e] text-slate-100 selection:bg-emerald-500/25 selection:text-emerald-100 overflow-x-hidden">
      
      {/* Dynamic Animated FinTech Background & Interactive Particle Matrix */}
      <InteractiveBackground />

      {/* Top Floating Glass Navbar */}
      <Navbar onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

      {/* Main Cohesive FinTech Layout */}
      <main className="relative z-10">
        
        {/* Section 01: Command Overview & 3D Action Figure Pod */}
        <Hero onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

        {/* Real-Time Live Telemetry Infinite Marquee */}
        <LiveMarquee />

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
