import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  Zap, 
  Star, 
  Award,
  Sparkles,
  TrendingUp,
  HeartHandshake,
  Mail,
  ArrowRight
} from 'lucide-react';
import Canvas3D from './Canvas3D';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenRecruiterModal, onSelectPage }) => {
  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else if (onSelectPage) {
      onSelectPage('projects');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Live FinTech Terminal Status Ribbon */}
        <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/80 border border-emerald-500/20 backdrop-blur-xl mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-xl shadow-black/40">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              FINTECH TERMINAL v3.0
            </span>
            <span className="text-slate-300">
              TCS/SLA: <strong className="text-emerald-400 font-semibold">99.4% [STABLE]</strong>
            </span>
            <span className="text-slate-300">
              SQL/LATENCY: <strong className="text-emerald-400 font-semibold">48ms (-96.7%)</strong>
            </span>
            <span className="text-slate-300 hidden md:inline">
              ALPHA: <strong className="text-blue-400 font-semibold">+40% QUERY BOOST</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
              <HeartHandshake className="w-3 h-3 text-emerald-400" />
              HIGH-EQ LEADERSHIP
            </span>
            <span className="font-semibold text-slate-200">ATS FIT: 98.5%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: FinTech Headline & Soft Skills Value */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Punchy FinTech Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>TCS European Client Operations • Netherlands POC</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                FinTech Systems & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300">
                  Quantitative Software SDE.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed pt-1">
                Engineering low-latency Java/Spring distributed services, deterministic ACID ledgers, and sub-second SQL tuning. Grounded in empathetic client leadership and crisis management at TCS.
              </p>
            </div>

            {/* Primary Action Buttons (NO download resume button) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={handleContactClick}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>Initiate Priority Connect</span>
              </button>

              <button
                onClick={onOpenRecruiterModal}
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 pro-card hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Target className="w-4 h-4 text-emerald-400" />
                <span>ATS Recruiter Dossier</span>
              </button>
            </div>

            {/* Core Stack Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              {['FinTech Ledgers', 'Java 17', 'Spring Boot', 'SQL (40% Tuning)', 'ACID Concurrency', 'ServiceNow CAD', 'C++ (5-Star)', 'Crisis Composure'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 font-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right 5 Columns: 3D Action Figure Pod */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Celestial Wireframe Orbit */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <Canvas3D />
            </div>

            {/* Clean Museum-Grade Pod with FinTech Accents */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[350px] rounded-3xl p-3 pro-card-glow border-emerald-500/30 shadow-2xl transition-all duration-300 group">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4.2] bg-[#070b14] border border-white/[0.08] shadow-inner flex flex-col items-center justify-center">
                
                {/* 3D Action Figure */}
                <img
                  src="/action_figure.jpg"
                  alt="Sourav Gupta - FinTech Systems Engineer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/action_figure.png";
                  }}
                />

                {/* Top Status Beacon */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/70 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>FinTech Systems SDE</span>
                </div>

                {/* Bottom Plaque */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#090d18]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Sourav Gupta</span>
                      <span className="text-[9px] font-mono-code text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        Quant Logic
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Deterministic Calculations & High-EQ
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quantifiable Impact Metrics: 4 Clean Spacious Cards (Hard + Soft Skills) */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">40%</div>
            <div className="text-xs font-medium text-slate-300 mt-1">SQL Query Acceleration</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Low-Latency DB Indexes (Celebal)</div>
          </div>

          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">200–500</div>
            <div className="text-xs font-medium text-slate-300 mt-1">European Enterprise Users</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">High-EQ Client POC (TCS)</div>
          </div>

          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">4 Years</div>
            <div className="text-xs font-medium text-slate-300 mt-1">Mathematics Mentorship</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">7 Students Guided to 95%+ Marks</div>
          </div>

          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-amber-300 tracking-tight">98.5%</div>
            <div className="text-xs font-medium text-slate-300 mt-1">ATS Recruiter Match</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Workday & Taleo Calibrated</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
