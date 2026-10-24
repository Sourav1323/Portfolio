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
  TrendingUp
} from 'lucide-react';
import { skillPillars } from '../data/portfolioData';

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
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="aurora-blob top-1/2 left-0 w-[550px] h-[550px] bg-indigo-600/10" />
      <div className="aurora-blob bottom-10 right-0 w-[500px] h-[500px] bg-purple-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-indigo-400" />
            Core Competency Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Major Skills <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">Highlighted In Depth</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            Each discipline is backed by production benchmarks, verified client impact, 
            and deep algorithmic intuition.
          </p>
        </div>

        {/* 4 Pillars Navigation Tabs - Spacious & Elegant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
                className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-start gap-4 relative overflow-hidden group ${
                  isActive
                    ? 'aurora-card-glow border-indigo-400/50 shadow-xl'
                    : 'aurora-card border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400" />
                )}

                <div className={`p-3 rounded-xl transition-colors shrink-0 ${
                  isActive ? 'bg-indigo-500/20 text-indigo-200' : 'bg-white/[0.04] text-slate-400 group-hover:text-indigo-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-1">
                    {pillar.badge}
                  </span>
                  <h3 className={`text-sm font-bold leading-snug transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {pillar.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card - Spacious, Relaxing & Deep */}
        <div className="aurora-card rounded-2xl sm:rounded-3xl p-5 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-white/[0.08]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
            
            {/* Left 6 Columns: Skill Breakdown & Benchmarks */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/15 text-indigo-200 border border-indigo-500/20">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                      {currentPillar.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                  {currentPillar.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm italic text-indigo-200/90 flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-indigo-300 shrink-0" />
                  <span>"{currentPillar.highlightQuote}"</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Verified Technical Proficiencies
                </div>
                {currentPillar.keySkills.map((skill, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-white group-hover:text-indigo-200 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2 rounded-full bg-slate-800/60 overflow-hidden relative">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${currentPillar.color} transition-all duration-700 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-2 pt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill.verified}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specific Feature: SQL Optimization Interactive Benchmark */}
              {currentPillar.id === 'database-optimization' && (
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-2">
                      <Sliders className="w-4 h-4" />
                      Live Query Benchmark Simulator
                    </span>
                    <button
                      onClick={() => setSqlOptimized(!sqlOptimized)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors border border-emerald-500/30"
                    >
                      {sqlOptimized ? "Toggle Unoptimized (Scan)" : "Apply Covering Index"}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center text-xs">
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      sqlOptimized ? 'bg-slate-900/40 border-white/[0.05] opacity-50' : 'bg-rose-950/40 border-rose-500/40'
                    }`}>
                      <div className="text-xs text-slate-400">Full Table Scan</div>
                      <div className="text-xl font-mono font-bold text-rose-300 mt-1">1,450 ms</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">2.4M disk reads</div>
                    </div>
                    <div className={`p-3.5 rounded-xl border transition-all ${
                      sqlOptimized ? 'bg-emerald-950/40 border-emerald-500/50 shadow-md shadow-emerald-500/10' : 'bg-slate-900/40 border-white/[0.05] opacity-50'
                    }`}>
                      <div className="text-xs text-emerald-200 font-semibold">Indexed Seek + Covering</div>
                      <div className="text-xl font-mono font-bold text-emerald-300 mt-1">21 ms</div>
                      <div className="text-[11px] text-emerald-400 font-medium mt-0.5">98.5% faster query</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Specific Feature: AI Prompt Pipeline */}
              {currentPillar.id === 'ai-augmented-engineering' && (
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-amber-500/30 space-y-3">
                  <div className="text-xs font-bold text-amber-200 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    How Sourav Applies Claude Developer Mastery
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="font-semibold text-white">1. Spec & Types</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Strict API contracts</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="font-semibold text-amber-200">2. Claude API</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Synthetic test suites</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="font-semibold text-emerald-200">3. Human Verify</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Zero regressions</div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 6 Columns: Production Code Viewer */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                    Production Code Pattern
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] flex items-center gap-2 transition-all"
                  title="Copy code snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Box */}
              <div className="rounded-2xl bg-[#070b16] border border-white/[0.08] overflow-hidden shadow-2xl">
                <div className="px-5 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <span className="ml-3 text-xs font-mono text-slate-400">
                      {currentPillar.id}.impl
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded border border-indigo-400/25">
                    VERIFIED COMPILED
                  </span>
                </div>

                <div className="p-5 overflow-x-auto max-h-[480px] text-xs font-mono leading-relaxed text-slate-200">
                  <pre>
                    <code>{currentPillar.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between px-1">
                <span>⚡ Production tested & SLA verified</span>
                <span className="text-indigo-300 font-mono">100% Type Safe</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsShowcase;
