import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  Users, 
  Database, 
  FolderGit2, 
  Mail, 
  Copy, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  Terminal,
  Clock,
  Send,
  Layers,
  Key,
  Flame,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, atsResumeText } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function BankInteriorTour({ onBackToExterior }) {
  const [activeFloor, setActiveFloor] = useState('rotunda');
  const [copiedType, setCopiedType] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResults, setSimResults] = useState(null);

  const floors = [
    {
      id: 'rotunda',
      level: 'LEVEL G',
      name: 'Grand Rotunda & Security Plinth',
      dept: 'Institutional Welcome & Clearance',
      icon: Building2,
      hostQuote: "Welcome to the Bank of Institutional Systems. I am Sourav Gupta, Assistant System Engineer at TCS and your host. I engineer scalable distributed services and manage enterprise client operations. Please review your Security Clearance credentials.",
    },
    {
      id: 'trading',
      level: 'LEVEL 42',
      name: 'High-Throughput Trading Floor',
      dept: 'FinTech Engines & Deterministic Ledgers',
      icon: TrendingUp,
      hostQuote: "Welcome to Level 42. Active in financial markets since age 18, I translate trading mechanics, market microstructure, and game loops into deterministic transaction pipelines with zero race conditions and sub-second SQL tuning.",
    },
    {
      id: 'incident',
      level: 'LEVEL 28',
      name: 'Enterprise Incident Command Wing',
      dept: 'TCS European Client Operations',
      icon: ShieldCheck,
      hostQuote: "Step inside Incident Command. Here I act as the primary technical point of contact for our Netherlands enterprise client (200–500 international users), resolving 30+ critical incidents weekly with a 99.4% SLA adherence record.",
    },
    {
      id: 'leadership',
      level: 'LEVEL 15',
      name: 'Executive Leadership & EQ Chamber',
      dept: 'Human Empathy & Crisis Composure',
      icon: Users,
      hostQuote: "Technical engineering without human leadership is incomplete. Here is how I stay calm during high-stakes P1/P2 production outages, bridge technical complexity with international clients, and mentor the next generation of engineers.",
    },
    {
      id: 'vault',
      level: 'LEVEL 08',
      name: 'The Secure Software Vault',
      dept: 'Signature Production Repositories',
      icon: FolderGit2,
      hostQuote: "Welcome inside the Bank's Software Vault. These are signature software systems I've engineered with deterministic state machines, automated GST tiers, and rigorous concurrency control.",
    },
    {
      id: 'governor',
      level: 'LEVEL 60',
      name: "The Governor's Suite & Recruiter Terminal",
      dept: 'Priority Hiring & Executive Dispatch',
      icon: Key,
      hostQuote: "You have arrived at the Governor's Suite! Fast-track your hiring cycle: copy my ATS plaintext dossier directly into your recruitment software or transmit a direct interview dispatch to my inbox.",
    }
  ];

  const currentFloorData = floors.find(f => f.id === activeFloor) || floors[0];
  const currentIndex = floors.findIndex(f => f.id === activeFloor);

  const handleNext = () => {
    if (currentIndex < floors.length - 1) {
      setActiveFloor(floors[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveFloor(floors[currentIndex - 1].id);
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#10b981', '#ffffff']
    });
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimResults(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimResults({
        tps: '10,482 TPS',
        latency: '11.8ms',
        drift: '0.000%',
        settled: '10,000 / 10,000',
        status: 'ACID_COMMITTED'
      });
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#10b981', '#38bdf8']
      });
    }, 900);
  };

  const atsSummaryText = `SOURAV GUPTA — Software Development Engineer | High-Throughput & Distributed Systems
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
Location: ${personalInfo.location}

CURRENT ENTERPRISE ROLE:
- Assistant System Engineer at Tata Consultancy Services (TCS) (12/2025 - Present)
- Netherlands Client POC (200-500 international enterprise users)
- 99.4% SLA adherence, resolving 30+ production incidents weekly
- Built 8+ automated production workflows in ServiceNow

CORE SPECIALIZATIONS:
- FinTech & High-Throughput Systems: Deterministic calculation engines, ACID transaction safety, sub-second query tuning.
- Database Performance: 40% query acceleration at Celebal Technologies, B-Tree composite indexing, SCD Type 1 & 2.
- Soft Skills & Leadership (EQ): Crisis management under SLA pressure, 4-year mathematics mentorship (7 students 95%+ in boards), Smart City Hackathon Top 20/250 Squad Lead.
- Verified Certifications: ServiceNow CAD & CSA, Anthropic Claude Developer Certified, SAP Cloud ABAP, HackerRank 5-Star (C++ & SQL).
- Education: B.Tech in Information Technology, JECRC (CGPA 8.4).`;

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      
      {/* Top Bank Breadcrumb & Navigation Strip */}
      <div className="p-4 rounded-2xl bg-[#0b0f1a] border border-[#d4af37]/30 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToExterior}
            className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono-telemetry text-slate-300 hover:text-white border border-white/[0.1] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View 3D Bank Exterior</span>
          </button>
          
          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2 text-xs font-mono-telemetry">
            <span className="text-[#d4af37] font-bold">BANK HEADQUARTERS</span>
            <span className="text-slate-600">/</span>
            <span className="text-emerald-400 font-semibold">{currentFloorData.level}</span>
            <span className="text-slate-600">/</span>
            <span className="text-white hidden sm:inline">{currentFloorData.name}</span>
          </div>
        </div>

        {/* Step-by-Step Compartment Pagination */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors border border-white/[0.08] cursor-pointer"
            title="Previous Compartment"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono-telemetry text-slate-400 px-2">
            0{currentIndex + 1} / 0{floors.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex === floors.length - 1}
            className="p-2 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] disabled:opacity-30 disabled:pointer-events-none transition-colors border border-[#d4af37]/40 cursor-pointer"
            title="Next Compartment"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Bank Interior Split: Host Pedestal & Floor Compartment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (5 Cols): The 3D Action Figure as the Bank Host */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Action Figure Display Pedestal */}
          <div className="relative rounded-3xl p-4 bg-gradient-to-b from-[#111827] via-[#0d131f] to-[#080c14] border border-[#d4af37]/40 shadow-2xl overflow-hidden group">
            
            {/* Ambient Gilded Radial Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Host Ribbon */}
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-mono-telemetry font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Official Bank Host</span>
              </div>
              <span className="text-[10px] font-mono-telemetry text-slate-400 uppercase">
                Clearance: Level 5
              </span>
            </div>

            {/* 3D Action Figure Portrait */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4.1] bg-[#070b14] border border-white/[0.1] shadow-inner mb-4">
              <img
                src="/action_figure.jpg"
                alt="Sourav Gupta - Official Bank Building Host & Systems Engineer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "/action_figure.png";
                }}
              />

              {/* Floating Host Floor Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/80 text-emerald-400 border border-emerald-500/40 backdrop-blur-md font-mono-telemetry flex items-center gap-1.5">
                <span>{currentFloorData.level} Host</span>
              </div>

              {/* Bottom Holographic Plaque */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090d18]/90 backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Sourav Gupta</span>
                    <span className="text-[9px] font-mono-telemetry text-[#d4af37] bg-[#d4af37]/20 px-1.5 py-0.5 rounded border border-[#d4af37]/30">
                      TCS Lead SDE
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono-telemetry mt-0.5">
                    Architect & Host of the Bank Headquarters
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              </div>
            </div>

            {/* Host Speech Bubble (Dynamically updates with current compartment) */}
            <div className="p-4 rounded-2xl bg-[#06080e]/90 border border-white/[0.08] relative">
              <div className="text-[10px] font-mono-telemetry text-[#d4af37] uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Host Commentary • {currentFloorData.name}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{currentFloorData.hostQuote}"
              </p>
            </div>

          </div>

          {/* Interactive Brass Elevator Panel */}
          <div className="p-5 rounded-3xl bg-[#0b0f1a] border border-white/[0.08] shadow-xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-xs font-mono-telemetry uppercase text-[#d4af37] font-bold tracking-wider">
                  Bank Elevator Directory
                </span>
              </div>
              <span className="text-[10px] font-mono-telemetry text-slate-500">6 Compartments</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {floors.map((fl) => {
                const Icon = fl.icon;
                const isActive = activeFloor === fl.id;
                return (
                  <button
                    key={fl.id}
                    onClick={() => setActiveFloor(fl.id)}
                    className={`p-2.5 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      isActive
                        ? 'bg-[#d4af37]/20 border-[#d4af37] text-white shadow-lg shadow-[#d4af37]/15'
                        : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono-telemetry font-bold ${isActive ? 'text-[#d4af37]' : 'text-slate-500'}`}>
                        {fl.level}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#d4af37]' : 'text-slate-500'}`} />
                    </div>
                    <div className="text-xs font-bold truncate">
                      {fl.name.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column (7 Cols): Active Compartment Detail Showcase */}
        <div className="lg:col-span-7 space-y-6">

          {/* Compartment Header */}
          <div className="p-6 rounded-3xl bg-[#090d18] border border-[#d4af37]/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono-telemetry uppercase tracking-wider text-[#d4af37] font-bold px-2.5 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                {currentFloorData.level} • {currentFloorData.dept}
              </span>
              <span className="text-xs font-mono-telemetry text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online & Inspected</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              {currentFloorData.name}
            </h2>
          </div>

          {/* COMPARTMENT 1: GRAND ROTUNDA (LEVEL G) */}
          {activeFloor === 'rotunda' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              
              {/* Executive Clearance Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#090d18] border border-white/[0.08] text-center">
                  <div className="text-2xl font-bold font-mono-telemetry text-emerald-400">99.4%</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">SLA Reliability</div>
                  <div className="text-[10px] text-slate-500 font-mono-telemetry">TCS European Ops</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#090d18] border border-white/[0.08] text-center">
                  <div className="text-2xl font-bold font-mono-telemetry text-cyan-400">48ms</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">SQL Query Latency</div>
                  <div className="text-[10px] text-slate-500 font-mono-telemetry">-96.7% Optimized</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#090d18] border border-white/[0.08] text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold font-mono-telemetry text-[#d4af37]">4+ Yrs</div>
                  <div className="text-xs text-slate-300 font-semibold mt-1">Math Mentorship</div>
                  <div className="text-[10px] text-slate-500 font-mono-telemetry">7 Students 95%+</div>
                </div>
              </div>

              {/* Host Introduction Card */}
              <div className="p-6 rounded-3xl bg-[#090d18] border border-white/[0.08] space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Institutional Engineering Briefing</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Sourav Gupta is an Assistant System Engineer at <strong>Tata Consultancy Services (TCS)</strong>, specializing in high-throughput distributed backends, deterministic financial calculation engines, and mission-critical enterprise workflows.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
                    <div className="text-slate-400 font-mono-telemetry uppercase text-[10px]">Education</div>
                    <div className="font-bold text-white mt-0.5">B.Tech in Information Technology</div>
                    <div className="text-slate-400 text-[11px]">JECRC • CGPA: 8.4</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
                    <div className="text-slate-400 font-mono-telemetry uppercase text-[10px]">Current Enterprise Client</div>
                    <div className="font-bold text-white mt-0.5">Netherlands Engineering Client</div>
                    <div className="text-slate-400 text-[11px]">200–500 International Users</div>
                  </div>
                </div>
              </div>

              {/* Proceed to Next Floor CTA */}
              <button
                onClick={() => setActiveFloor('trading')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b48c36] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <span>Take Elevator to Level 42: High-Throughput Trading Floor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* COMPARTMENT 2: TRADING FLOOR (LEVEL 42) */}
          {activeFloor === 'trading' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              
              {/* Interactive Trading Batch Simulator */}
              <div className="p-6 rounded-3xl bg-[#090d18] border border-emerald-500/30 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      <span>Deterministic Ledger Batch Simulator</span>
                    </h3>
                    <p className="text-xs text-slate-400">Simulate concurrent trade execution with zero data drift</p>
                  </div>
                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-mono-telemetry transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>{isSimulating ? 'Executing...' : 'Run 10k Batch'}</span>
                  </button>
                </div>

                {simResults ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry">Throughput</div>
                      <div className="text-base font-bold text-emerald-400 font-mono-telemetry">{simResults.tps}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry">Avg Latency</div>
                      <div className="text-base font-bold text-cyan-400 font-mono-telemetry">{simResults.latency}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry">Audit Drift</div>
                      <div className="text-base font-bold text-emerald-400 font-mono-telemetry">{simResults.drift}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry">Commit</div>
                      <div className="text-xs font-bold text-emerald-300 font-mono-telemetry mt-1">{simResults.status}</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 text-center py-4 font-mono-telemetry">
                    Click "Run 10k Batch" to benchmark deterministic concurrency & ACID safety.
                  </div>
                )}
              </div>

              {/* SQL Latency Benchmark Chart */}
              <div className="p-6 rounded-3xl bg-[#090d18] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span>SQL Query Latency Benchmark (Celebal Tech)</span>
                  </h3>
                  <span className="text-xs font-mono-telemetry text-emerald-400 font-bold">-96.7% Acceleration</span>
                </div>

                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                      <span className="text-slate-400">Unindexed Full Table Scan (2.4M Rows)</span>
                      <span className="text-rose-400 font-bold">1,450 ms</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 to-red-400 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                      <span className="text-emerald-300 font-semibold">Covering B-Tree Index Seek</span>
                      <span className="text-emerald-400 font-bold">48 ms (30x Speedup)</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '3.3%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveFloor('incident')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b48c36] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <span>Proceed to Level 28: Incident Command Center</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* COMPARTMENT 3: INCIDENT COMMAND (LEVEL 28) */}
          {activeFloor === 'incident' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#090d18] border border-white/[0.08] text-center">
                  <div className="text-xl font-bold font-mono-telemetry text-emerald-400">99.4%</div>
                  <div className="text-xs text-slate-300 mt-1">SLA Rate</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#090d18] border border-white/[0.08] text-center">
                  <div className="text-xl font-bold font-mono-telemetry text-cyan-400">30+ / Wk</div>
                  <div className="text-xs text-slate-300 mt-1">Incident Triage</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#090d18] border border-white/[0.08] text-center">
                  <div className="text-xl font-bold font-mono-telemetry text-[#d4af37]">&lt; 2h</div>
                  <div className="text-xs text-slate-300 mt-1">P1/P2 Resolution</div>
                </div>
              </div>

              {/* Responsibilities & Achievements at TCS */}
              <div className="p-6 rounded-3xl bg-[#090d18] border border-white/[0.08] space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Tata Consultancy Services (TCS) — Production Leadership</span>
                </h3>
                
                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Single technical point of contact managing daily stakeholder communication, high-priority incident triage, and release deployments for a Netherlands enterprise client (200–500 users).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Architected 8+ ServiceNow automated production workflows and script includes, streamlining infrastructure operations and cutting manual toil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Integrated Anthropic Claude API into testing pipelines to automate synthetic boundary test cases and root-cause diagnostics.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setActiveFloor('leadership')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b48c36] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <span>Proceed to Level 15: Executive Leadership & EQ Chamber</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* COMPARTMENT 4: LEADERSHIP & EQ (LEVEL 15) */}
          {activeFloor === 'leadership' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              
              <div className="p-6 rounded-3xl bg-[#090d18] border border-[#d4af37]/30 space-y-5">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4af37]" />
                    <span>Human Emotional Intelligence & Squad Leadership</span>
                  </h3>
                  <span className="text-xs font-mono-telemetry text-[#d4af37] font-bold">EQ Index: 95.8%</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                      <span className="text-white font-medium">Crisis Composure (TCS P1/P2 SLA Outages)</span>
                      <span className="text-emerald-400 font-bold">95%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                      <span className="text-white font-medium">Cross-Cultural Empathy (Netherlands Client POC)</span>
                      <span className="text-cyan-400 font-bold">96%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full" style={{ width: '96%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                      <span className="text-white font-medium">Pedagogical Patience (4-Year Math Educator)</span>
                      <span className="text-[#d4af37] font-bold">98%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono-telemetry">
                      <span className="text-white font-medium">Squad Sprint Leadership (Smart City Hackathon Top 20)</span>
                      <span className="text-purple-400 font-bold">94%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" style={{ width: '94%' }} />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 flex items-center justify-between">
                  <span>Mentored 20+ Students in Advanced Mathematics</span>
                  <span className="font-bold text-white">7 Scored 95%+ in Boards</span>
                </div>
              </div>

              <button
                onClick={() => setActiveFloor('vault')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b48c36] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <span>Proceed to Level 08: The Secure Software Vault</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* COMPARTMENT 5: SOFTWARE VAULT (LEVEL 08) */}
          {activeFloor === 'vault' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              
              <div className="p-5 rounded-2xl bg-[#090d18] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">Shringar Doorstep Booking Platform</h4>
                  <span className="text-[11px] font-mono-telemetry text-emerald-400 font-bold">80% Defect Reduction</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  State-machine based booking schedule engine with strict atomic state transitions, preventing race conditions and service overlapping.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">JavaScript</span>
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">State Machines</span>
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">System Design</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#090d18] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">Deterministic Java Parcel Engine</h4>
                  <span className="text-[11px] font-mono-telemetry text-[#d4af37] font-bold">Zero Deadlocks • 100+ Records</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Strict OOP architecture calculating weight brackets, dynamic freight costs, and automated GST tiers with ACID concurrent mutations.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">Java 17</span>
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">SQL ACID</span>
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">JUnit 5</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#090d18] border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">Pink City Healthcare Discovery</h4>
                  <span className="text-[11px] font-mono-telemetry text-cyan-400 font-bold">Top 20 / 250 Nationwide</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Smart City Hackathon Finalist. Led 4-engineer squad under 24-hr pressure to integrate diagnostic discovery and geolocation filtering.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">Squad Leadership</span>
                  <span className="text-[10px] font-mono-telemetry bg-white/[0.04] px-2 py-0.5 rounded text-slate-300">Rapid Prototyping</span>
                </div>
              </div>

              <button
                onClick={() => setActiveFloor('governor')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b48c36] text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <span>Proceed to Level 60: The Governor's Suite (Recruiter Terminal)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* COMPARTMENT 6: GOVERNOR'S SUITE & RECRUITER TERMINAL (LEVEL 60) */}
          {activeFloor === 'governor' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              
              {/* Direct Priority Email Dispatch */}
              <a
                href={`mailto:${personalInfo.email}?subject=Priority Technical Interview Request - Sourav Gupta&body=Hi Sourav,%0D%0A%0D%0AWe reviewed your profile in the Bank of Institutional Systems and would like to schedule an engineering conversation.`}
                className="p-6 rounded-3xl bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-transparent border border-[#d4af37]/40 flex items-center justify-between group cursor-pointer block transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-telemetry uppercase text-[#d4af37] font-bold bg-[#d4af37]/20 px-2 py-0.5 rounded">
                        Fastest Channel
                      </span>
                      <span className="text-xs text-emerald-400 font-mono-telemetry">Within 24 Hours</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors">
                      Transmit Direct Interview Request
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Direct line to {personalInfo.email}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#d4af37] text-slate-950 group-hover:bg-white transition-colors shrink-0">
                  <Send className="w-4 h-4" />
                </div>
              </a>

              {/* 1-Click Copy ATS Plain Text Profile */}
              <div className="p-6 rounded-3xl bg-[#090d18] border border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white">Copy ATS Plaintext Profile</h4>
                  </div>
                  <button
                    onClick={() => handleCopy(atsSummaryText, 'ats')}
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-emerald-500/20 text-xs font-mono-telemetry text-slate-300 hover:text-emerald-300 border border-white/[0.08] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedType === 'ats' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Profile</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-[#06080e] border border-white/[0.05] text-[11px] font-mono-telemetry text-slate-400 line-clamp-3">
                  {atsSummaryText}
                </div>
              </div>

              {/* Direct Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-2xl bg-white/[0.04] hover:bg-[#0077b5]/20 border border-white/[0.08] hover:border-[#0077b5]/40 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.2] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Repositories</span>
                </a>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
