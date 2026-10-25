import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Sparkles, 
  Cloud, 
  CheckCircle, 
  Code2, 
  Copy, 
  Check, 
  Sliders, 
  Cpu, 
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { skillPillars } from '../data/portfolioData';
import { CompetencyRadarChart, LatencyOptimizationGraph } from './VisualGraphs';

const iconMap = {
  Server: Server,
  Database: Database,
  Sparkles: Sparkles,
  Cloud: Cloud
};

const SkillsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [sqlOptimized, setSqlOptimized] = useState(true);

  const currentPillar = skillPillars[activeTab];
  const CurrentIcon = iconMap[currentPillar.icon] || Server;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentPillar.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            FinTech & Distributed Systems Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Throughput Skills <span className="text-emerald-400 font-light">& Visual Latency Benchmarks</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Interactive competency radar and query latency benchmark graphs backed by 5-star HackerRank ratings and production client impact.
          </p>
        </div>

        {/* Visual Engineering Graphs Grid (Radar + Latency Benchmark) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-6">
            <CompetencyRadarChart />
          </div>
          <div className="lg:col-span-6">
            <LatencyOptimizationGraph />
          </div>
        </div>

        {/* 4 Pillars Navigation Tabs - Clean, Minimal & Cohesive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {skillPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Server;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setActiveTab(idx);
                  setCopiedCode(false);
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 flex items-start gap-3.5 border ${
                  isActive
                    ? 'pro-card-glow border-white/[0.2] shadow-lg'
                    : 'pro-card hover:border-white/[0.12]'
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                  isActive ? 'bg-white/[0.1] text-white' : 'bg-white/[0.04] text-slate-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-blue-400 mb-0.5">
                    {pillar.badge}
                  </span>
                  <h3 className={`text-sm font-semibold transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {pillar.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="pro-card rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            
            {/* Left 6 Columns: Skill Breakdown & Benchmarks */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/[0.05] text-white border border-white/[0.08]">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                      {currentPillar.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentPillar.description}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs italic text-slate-300 flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>"{currentPillar.highlightQuote}"</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 pt-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Verified Technical Proficiencies
                </div>
                {currentPillar.keySkills.map((skill, i) => (
                  <div key={i} className="space-y-1.5 group">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-mono-code text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden relative">
                      <div 
                        className="h-full rounded-full bg-blue-500 transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill.verified}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specific Feature: SQL Optimization Interactive Benchmark */}
              {currentPillar.id === 'database-optimization' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                      <Sliders className="w-3.5 h-3.5 text-blue-400" />
                      Live Query Benchmark Simulator
                    </span>
                    <button
                      onClick={() => setSqlOptimized(!sqlOptimized)}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/15 text-blue-300 hover:bg-blue-500/25 transition-colors border border-blue-500/30"
                    >
                      {sqlOptimized ? "Toggle Unoptimized Scan" : "Apply Covering Index"}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-center text-xs">
                    <div className={`p-3 rounded-xl border transition-all ${
                      sqlOptimized ? 'bg-white/[0.01] border-white/[0.05] opacity-50' : 'bg-rose-950/20 border-rose-500/30'
                    }`}>
                      <div className="text-[11px] text-slate-400">Full Table Scan</div>
                      <div className="text-lg font-mono-code font-bold text-rose-300 mt-0.5">1,450 ms</div>
                      <div className="text-[10px] text-slate-500">2.4M disk reads</div>
                    </div>
                    <div className={`p-3 rounded-xl border transition-all ${
                      sqlOptimized ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-white/[0.01] border-white/[0.05] opacity-50'
                    }`}>
                      <div className="text-[11px] text-emerald-300 font-medium">Indexed Seek + Covering</div>
                      <div className="text-lg font-mono-code font-bold text-emerald-400 mt-0.5">21 ms</div>
                      <div className="text-[10px] text-emerald-400 font-medium">98.5% faster query</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Specific Feature: AI Prompt Pipeline */}
              {currentPillar.id === 'ai-augmented-engineering' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2.5">
                  <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    How Sourav Applies Claude Developer Mastery
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="font-medium text-white text-xs">1. Spec & Types</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Strict API contracts</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="font-medium text-blue-300 text-xs">2. Claude API</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Synthetic test suites</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="font-medium text-emerald-400 text-xs">3. Human Verify</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Zero regressions</div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 6 Columns: Production Code Viewer */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-slate-300">
                    Production Code Pattern
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center gap-1.5 transition-all"
                  title="Copy code snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-xs">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-xs">Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Box */}
              <div className="rounded-2xl bg-[#060912] border border-white/[0.08] overflow-hidden shadow-xl">
                <div className="px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="ml-2 text-xs font-mono-code text-slate-400">
                      {currentPillar.id}.impl
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                    VERIFIED COMPILED
                  </span>
                </div>

                <div className="p-4 overflow-x-auto max-h-[460px] text-xs font-mono-code leading-relaxed text-slate-300">
                  <pre>
                    <code>{currentPillar.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between px-1">
                <span>⚡ Production tested & SLA verified</span>
                <span className="text-slate-300 font-mono-code text-[11px]">100% Type Safe</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsShowcase;
