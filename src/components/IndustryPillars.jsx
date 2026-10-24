import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Gamepad2, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { industryArchitectures } from '../data/portfolioData';

const iconMap = {
  enterprise: Building2,
  fintech: TrendingUp,
  interactive: Gamepad2
};

const IndustryPillars = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentDomain = industryArchitectures[activeTab];
  const Icon = iconMap[currentDomain.id] || Building2;

  return (
    <section className="py-28 relative overflow-hidden bg-[#070b16]">
      {/* Ambient background glows */}
      <div className="aurora-blob top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10" />
      <div className="aurora-blob bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-indigo-400" />
            Specialized Systems Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Computational Strengths Across <br />
            <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              High-Value Industry Domains
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            Grounded in core Computer Science principles, deterministic state logic, and low-latency data pipelines — 
            adaptable to enterprise scale, transactional systems, and real-time interactive computation.
          </p>
        </div>

        {/* 3 Domain Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {industryArchitectures.map((domain, index) => {
            const DomainIcon = iconMap[domain.id] || Building2;
            const isActive = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 flex items-start gap-4 border ${
                  isActive
                    ? 'aurora-card-glow border-indigo-400/50 shadow-xl'
                    : 'aurora-card border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors shrink-0 ${
                  isActive ? 'bg-indigo-500/20 text-indigo-200' : 'bg-white/[0.04] text-slate-400'
                }`}>
                  <DomainIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-base font-bold transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {domain.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {domain.headline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detailed Card */}
        <div className="aurora-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Cols: Architectural Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                    Domain Architecture & Systems
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                    {currentDomain.headline}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                {currentDomain.description}
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Engineering Capabilities & Real-World Proof
                </div>
                {currentDomain.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Strategic Alignment Box */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#090e1d] border border-white/[0.08] space-y-5">
              <div className="text-xs font-mono text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>MNC Engineering Value</span>
              </div>
              
              <h4 className="text-lg font-bold text-white">
                How Sourav Adds Value To This Ecosystem
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentDomain.id === 'enterprise' && 
                  "Proven experience handling strict international SLAs, enterprise access controls, ServiceNow production workflows, and cross-functional team collaboration."}
                {currentDomain.id === 'fintech' && 
                  "Combines lifelong understanding of market dynamics and trading principles with strict database ACID compliance, 40% query optimization, and mathematical calculation accuracy."}
                {currentDomain.id === 'interactive' && 
                  "Leverages 5-star C++ memory control, high-order algebraic intuition from 4 years of mathematics mentorship, and rapid prototyping capability proven in nationwide hackathons."}
              </p>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> High Architectural Fit
                </span>
                <span className="font-mono text-slate-400">Tier-1 Standard</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryPillars;
