import React from 'react';
import { 
  FileDown, 
  Target, 
  ShieldCheck, 
  Zap, 
  Star, 
  Award,
  Sparkles
} from 'lucide-react';
import Canvas3D from './Canvas3D';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenRecruiterModal, onOpenResumeModal }) => {
  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Executive Typography & Value */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Single Clean Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TCS Assistant System Engineer • Netherlands Client POC</span>
            </div>

            {/* Clean Punchy Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Backend Software Developer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-slate-400">
                  & Distributed Systems.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed pt-1">
                Specializing in Java, Spring Boot, high-throughput SQL query optimization, and enterprise cloud automations. Backed by 5-Star HackerRank problem solving and modern AI velocity.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98] cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-slate-950" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenRecruiterModal}
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 pro-card hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Target className="w-4 h-4 text-blue-400" />
                <span>ATS Recruiter Dossier</span>
              </button>
            </div>

            {/* Core Stack Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              {['Java 17', 'Spring Boot', 'SQL (40% Tuning)', 'ServiceNow CAD/CSA', 'Claude API', 'C++ (5-Star)'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 font-mono text-[11px]"
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

            {/* Clean Museum-Grade Pod */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[350px] rounded-3xl p-3 pro-card-glow shadow-2xl transition-all duration-300">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4.2] bg-[#070b14] border border-white/[0.08] shadow-inner flex flex-col items-center justify-center">
                
                {/* 3D Action Figure */}
                <img
                  src="/action_figure.jpg"
                  alt="Sourav Gupta - 3D Action Figure"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/action_figure.png";
                  }}
                />

                {/* Top Status Beacon */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified SDE Talent</span>
                </div>

                {/* Bottom Plaque */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#090d18]/85 backdrop-blur-md border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">
                      Sourav Gupta
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      TCS Systems & Quantitative Logic
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quantifiable Impact Metrics: 4 Clean Spacious Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">98.5%</div>
            <div className="text-xs font-medium text-slate-300 mt-1">ATS Recruiter Match</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Workday / Taleo Configured</div>
          </div>

          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">30+/wk</div>
            <div className="text-xs font-medium text-slate-300 mt-1">TCS Enterprise Tickets</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">200–500 European Users</div>
          </div>

          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">40%</div>
            <div className="text-xs font-medium text-slate-300 mt-1">SQL Query Acceleration</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Celebal Production DB</div>
          </div>

          <div className="p-4 rounded-xl pro-card">
            <div className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight">8.4</div>
            <div className="text-xs font-medium text-slate-300 mt-1">B.Tech IT CGPA</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">5-Star HackerRank (C++/SQL)</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
