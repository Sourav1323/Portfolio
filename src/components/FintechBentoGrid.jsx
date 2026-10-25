import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  Database, 
  Users, 
  CheckCircle2, 
  Cpu, 
  RefreshCw, 
  Terminal,
  Clock,
  Briefcase,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FintechBentoGrid() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResults, setSimResults] = useState(null);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimResults(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimResults({
        tps: '10,482',
        latency: '11.8ms',
        p99: '18.4ms',
        drift: '0.000%',
        settled: '10,000 / 10,000',
        status: 'VERIFIED_ACID_COMMIT'
      });
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#38bdf8', '#ffffff']
      });
    }, 900);
  };

  return (
    <section id="bento" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-telemetry uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Systems & Leadership Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The FinTech Command Bento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A cohesive dashboard synthesizing low-latency financial systems engineering, high-stakes enterprise governance, and crisis-tested human leadership.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Card 1: High-Throughput FinTech Systems & Deterministic Ledgers (Span 7) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-telemetry uppercase text-emerald-400 font-semibold tracking-wider">
                      Module 01 • Deterministic State & Ledgers
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      High-Throughput FinTech Systems
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono-telemetry">
                  ACID Strict
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Active market participant since age 18 with deep intuitive mastery of order execution mechanics, financial mathematics, and state machines. Translates market microstructure and interactive game loops into deterministic transaction pipelines with zero race conditions.
              </p>

              {/* Interactive Simulation Console */}
              <div className="bg-[#090d16] border border-white/[0.08] rounded-2xl p-5 mb-5 font-mono-telemetry text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>LEDGER_SIMULATOR::CONCURRENCY_TEST</span>
                  </div>
                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>{isSimulating ? 'Executing Batch...' : 'Simulate 10k Txs'}</span>
                  </button>
                </div>

                {simResults ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-in fade-in duration-300">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-slate-500 uppercase">Throughput</div>
                      <div className="text-base font-bold text-emerald-400">{simResults.tps} TPS</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-slate-500 uppercase">Avg Latency</div>
                      <div className="text-base font-bold text-cyan-400">{simResults.latency}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-slate-500 uppercase">Audit Drift</div>
                      <div className="text-base font-bold text-emerald-400">{simResults.drift}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-[10px] text-slate-500 uppercase">Status</div>
                      <div className="text-[11px] font-bold text-emerald-400 mt-1">ACID_COMMITTED</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-500 text-center py-3">
                    Click "Simulate 10k Txs" to benchmark deterministic concurrency & zero-drift settlement.
                  </div>
                )}
              </div>
            </div>

            {/* Core Capability Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-white/[0.06]">
              <div className="text-xs text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Deterministic GST/Freight Engine</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Concurrency Control (No Locks)</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Slowly Changing Dimensions (SCD2)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Human Leadership & Crisis Management - Soft Skills (Span 5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-telemetry uppercase text-amber-400 font-semibold tracking-wider">
                      Module 02 • High EQ & Composure
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Human Leadership Matrix
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono-telemetry">
                  EQ Index: 95.8%
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Proven ability to lead teams under high-stakes SLA pressure, bridge technical complexity with international C-level stakeholders, and nurture high-performing talent.
              </p>

              {/* EQ Telemetry Bars */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Crisis Composure (TCS P1/P2 SLAs)
                    </span>
                    <span className="font-mono-telemetry text-emerald-400 font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      Cross-Cultural Client Empathy (Netherlands POC)
                    </span>
                    <span className="font-mono-telemetry text-cyan-400 font-bold">96%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Pedagogical Patience (4-Yr Math Mentorship)
                    </span>
                    <span className="font-mono-telemetry text-amber-400 font-bold">98%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                      Squad Sprint Velocity (Top 20 Hackathon)
                    </span>
                    <span className="font-mono-telemetry text-purple-400 font-bold">94%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400 flex items-center justify-between">
              <span>Mentored 20+ Students</span>
              <span className="font-bold text-white">7 Scored 95%+ in Boards</span>
            </div>
          </div>

          {/* Card 3: Interactive SQL Optimization Benchmark (Span 5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-telemetry uppercase text-cyan-400 font-semibold tracking-wider">
                      Module 03 • Database Performance
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      SQL Latency Benchmark
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-telemetry">
                  -96.7% Latency
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Engineered selective B-Tree composite indexing and covering projections at Celebal Technologies, eliminating 2.4M-row full table scans.
              </p>

              {/* Visual Latency Bar Chart */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                    <span className="text-slate-400">Unindexed Full Scan (2.4M Rows)</span>
                    <span className="text-rose-400 font-bold">1,450 ms</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-red-400 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                    <span className="text-emerald-300 font-medium">Composite Index Seek (Covering Columns)</span>
                    <span className="text-emerald-400 font-bold">48 ms (30x Faster)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800/80 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '3.3%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#090d16] border border-white/[0.06] text-xs font-mono-telemetry text-slate-400 flex items-center justify-between">
              <span className="text-emerald-400">Slowly Changing Dimensions (SCD2)</span>
              <span className="text-white">Audit Trails Preserved</span>
            </div>
          </div>

          {/* Card 4: Enterprise Production Systems at TCS (Span 7) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/10 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-telemetry uppercase text-purple-400 font-semibold tracking-wider">
                      Module 04 • Enterprise Production SDE
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Tata Consultancy Services (TCS)
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-telemetry flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SLA: 99.4%</span>
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-mono-telemetry mb-4 flex flex-wrap items-center gap-3">
                <span>Assistant System Engineer</span>
                <span>•</span>
                <span>Netherlands Enterprise Client (200-500 Users)</span>
                <span>•</span>
                <span>Bangalore / Jaipur</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Single engineering point of contact for international European users. Resolving 30+ critical incidents weekly, maintaining 8+ automated production workflows, and integrating Anthropic Claude and Copilot into test generation and incident root-cause analysis.
              </p>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-lg font-bold text-white">30+ / Wk</div>
                  <div className="text-[11px] text-slate-400">Incident Triage</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-lg font-bold text-emerald-400">8+</div>
                  <div className="text-[11px] text-slate-400">Prod Workflows</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-lg font-bold text-cyan-400">&lt; 2h</div>
                  <div className="text-[11px] text-slate-400">P1/P2 Resolution</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
              {['Java 11/17', 'ServiceNow CAD/CSA', 'MuleSoft', 'Claude API', 'Docker', 'Linux', 'ITIL Governance'].map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono-telemetry text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: Dual Certifications & Rigor (Span 12) */}
          <div className="lg:col-span-12 bento-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[11px] font-mono-telemetry uppercase text-emerald-400 font-semibold tracking-wider">
                  Module 05 • Verified Industry Credentials
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Dual ServiceNow & AI Certifications
                </h3>
              </div>
              <div className="text-xs font-mono-telemetry text-slate-400">
                Continuous Upskilling & Enterprise Compliance
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#090d16] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-telemetry text-emerald-400 font-semibold">ServiceNow</span>
                  <Award className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Certified Application Developer (CAD)</h4>
                <p className="text-[11px] text-slate-400 mt-1">Script includes, REST APIs, business rules & data models.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090d16] border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-telemetry text-cyan-400 font-semibold">ServiceNow</span>
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Certified System Administrator (CSA)</h4>
                <p className="text-[11px] text-slate-400 mt-1">ACL security, workflow engine, CMDB, user governance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090d16] border border-amber-500/20 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-telemetry text-amber-400 font-semibold">Anthropic</span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Claude Developer Certification</h4>
                <p className="text-[11px] text-slate-400 mt-1">Function calling, agentic workflows & context management.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#090d16] border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-telemetry text-purple-400 font-semibold">HackerRank</span>
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-sm font-bold text-white">5-Star C++ & SQL Standing</h4>
                <p className="text-[11px] text-slate-400 mt-1">Data structures, memory pointers & complex SQL joins.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
