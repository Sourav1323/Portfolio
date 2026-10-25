import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Gamepad2, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Zap
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
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            FinTech & Distributed Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Computational Strengths Across <br />
            <span className="text-emerald-400 font-light">FinTech & High-Throughput Systems</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Engineered for financial transaction accuracy, sub-50ms query indexes, deterministic state transitions, 
            and zero-downtime SLA compliance at European enterprise scale.
          </p>
        </div>

        {/* 3 Domain Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10">
          {industryArchitectures.map((domain, index) => {
            const DomainIcon = iconMap[domain.id] || Building2;
            const isActive = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 flex items-start gap-4 border ${
                  isActive
                    ? 'pro-card-glow border-white/[0.2] shadow-lg'
                    : 'pro-card hover:border-white/[0.12]'
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                  isActive ? 'bg-white/[0.1] text-white' : 'bg-white/[0.04] text-slate-400'
                }`}>
                  <DomainIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold transition-colors ${
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
        <div className="pro-card rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Cols: Architectural Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.05] text-white border border-white/[0.08]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono-code font-medium uppercase tracking-wider text-blue-400">
                    Domain Architecture & Systems
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {currentDomain.headline}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentDomain.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Core Engineering Capabilities & Real-World Proof
                </div>
                {currentDomain.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Visual Architecture Pipeline Diagram */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#060912] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="text-xs font-mono-code text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Pipeline Architecture</span>
                </div>
                <span className="text-[11px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {currentDomain.id === 'fintech' ? '< 50ms Latency' : currentDomain.id === 'interactive' ? '60 FPS Loop' : '99.9% Uptime'}
                </span>
              </div>
              
              {/* Interactive Visual Architecture Pipeline */}
              <div className="space-y-2.5">
                <div className="text-[11px] uppercase font-mono tracking-wider text-slate-400">
                  Real-World Execution Flow
                </div>

                {currentDomain.id === 'fintech' && (
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-mono">01. Order Ingestion</span>
                      <span className="text-blue-400 font-mono">Validated DTO</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs">
                      <span className="text-white font-mono">02. Deterministic Calculation</span>
                      <span className="text-blue-300 font-mono">GST + Freight Rules</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                      <span className="text-white font-mono">03. ACID Storage & Audit</span>
                      <span className="text-emerald-400 font-mono">SCD-2 Index Seek (48ms)</span>
                    </div>
                  </div>
                )}

                {currentDomain.id === 'interactive' && (
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-mono">01. Discrete Input Queue</span>
                      <span className="text-blue-400 font-mono">Zero-Latency State</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs">
                      <span className="text-white font-mono">02. C++ Algorithmic Loop</span>
                      <span className="text-blue-300 font-mono">Heap-Free Memory</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                      <span className="text-white font-mono">03. Frame Synchronization</span>
                      <span className="text-emerald-400 font-mono">16.6ms Target Tick</span>
                    </div>
                  </div>
                )}

                {currentDomain.id === 'enterprise' && (
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-mono">01. Client Incident Dispatch</span>
                      <span className="text-blue-400 font-mono">200–500 EU Users</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between text-xs">
                      <span className="text-white font-mono">02. ServiceNow Automation</span>
                      <span className="text-blue-300 font-mono">Production Script Includes</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                      <span className="text-white font-mono">03. SLA Resolution</span>
                      <span className="text-emerald-400 font-mono">30+ Incidents / Wk</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> High Architectural Fit
                </span>
                <span className="font-mono-code text-slate-400 text-[11px]">Enterprise Grade</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryPillars;
