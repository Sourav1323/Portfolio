import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  TrendingUp, 
  Mail, 
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
  Building2
} from 'lucide-react';
import Canvas3D from './Canvas3D';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenRecruiterModal, onEnterBuilding }) {
  const handleScrollToBento = () => {
    const el = document.getElementById('bento');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToConnect = () => {
    const el = document.getElementById('connect');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTourBank = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onEnterBuilding) onEnterBuilding();
  };

  return (
    <section id="overview" className="relative min-h-[90vh] pt-28 sm:pt-36 pb-16 flex flex-col justify-center overflow-hidden">
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Executive Positioning & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-telemetry uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TCS Enterprise SDE • FinTech & Distributed Systems</span>
            </div>

            {/* Crisp Bold Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Sourav Gupta
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                Software Development Engineer & Systems Lead
              </p>
            </div>

            {/* Strategic Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Engineering high-concurrency ledgers, deterministic financial calculation engines, and mission-critical enterprise workflows at <strong className="text-white">Tata Consultancy Services (TCS)</strong>. Blends deep mathematical rigor with crisis-tested leadership and high EQ.
            </p>

            {/* 3 High-Impact Live Stat Cards */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0a0f1b]/90 border border-white/[0.08] text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono-telemetry text-emerald-400">99.4%</div>
                <div className="text-[11px] text-slate-300 font-medium mt-0.5">TCS SLA Adherence</div>
                <div className="text-[10px] text-slate-500 font-mono-telemetry">Netherlands POC</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0a0f1b]/90 border border-white/[0.08] text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono-telemetry text-cyan-400">48ms</div>
                <div className="text-[11px] text-slate-300 font-medium mt-0.5">SQL Latency</div>
                <div className="text-[10px] text-slate-500 font-mono-telemetry">-96.7% Tuning</div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0a0f1b]/90 border border-white/[0.08] text-center">
                <div className="text-xl sm:text-2xl font-bold font-mono-telemetry text-amber-400">4+ Yrs</div>
                <div className="text-[11px] text-slate-300 font-medium mt-0.5">Math Mentorship</div>
                <div className="text-[10px] text-slate-500 font-mono-telemetry">7 Scored 95%+</div>
              </div>
            </div>

            {/* Primary Action Buttons (NO download resume button) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={handleTourBank}
                className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-[#d4af37] via-[#f59e0b] to-[#b48c36] hover:from-[#e5c052] hover:to-[#c69a3b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/25 active:scale-[0.98] cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-slate-950" />
                <span>Tour Bank Headquarters</span>
              </button>

              <button
                onClick={handleScrollToBento}
                className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-200 bento-card hover:border-[#d4af37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Bento</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>

              <button
                onClick={handleScrollToConnect}
                className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-200 bento-card hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Priority Connect</span>
              </button>
            </div>

            {/* Core Capability Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              {['FinTech Ledgers', 'Java 17 & Spring', 'Sub-Second SQL', 'ServiceNow CAD/CSA', 'Claude API', '5-Star C++', 'High EQ Lead'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 font-mono-telemetry text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right 5 Columns: 3D Action Figure Pod */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Grid & Particle Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <Canvas3D />
            </div>

            {/* The Stylized 3D Action Figure Glass Pod */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] rounded-3xl p-3.5 bento-card-emerald shadow-2xl transition-all duration-300 group">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4.2] bg-[#070b14] border border-white/[0.08] shadow-inner flex flex-col items-center justify-center">
                
                {/* 3D Action Figure Image */}
                <img
                  src="/action_figure.jpg"
                  alt="Sourav Gupta - FinTech Systems SDE & Action Figure"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/action_figure.png";
                  }}
                />

                {/* Top Status Beacon */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/75 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5 font-mono-telemetry">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FinTech Systems SDE</span>
                </div>

                {/* Bottom Holographic Plaque */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090d18]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Sourav Gupta</span>
                      <span className="text-[9px] font-mono-telemetry text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        High EQ SDE
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-telemetry mt-0.5">
                      Deterministic Systems • TCS Platform Lead
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
