import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  CheckCircle2, 
  Database,
  BarChart3
} from 'lucide-react';

// ==========================================
// 1. SDE COMPETENCY RADAR CHART (Spider Graph)
// ==========================================
export const CompetencyRadarChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const competencies = [
    { label: "Algorithms (5-Star)", value: 95, detail: "5-Star HackerRank C++ & SQL Problem Solving", type: "Technical" },
    { label: "FinTech & Distributed Systems", value: 92, detail: "Java 17, Spring Boot, ACID Concurrency Control", type: "Technical" },
    { label: "Database Tuning", value: 94, detail: "40% SQL Query Acceleration at Celebal", type: "Technical" },
    { label: "Crisis Management", value: 95, detail: "TCS Production SLA Escalation Resolution (200-500 EU Users)", type: "Soft Skill" },
    { label: "Stakeholder Empathy", value: 96, detail: "Cross-Cultural European Client Technical POC", type: "Soft Skill" },
    { label: "People Mentorship", value: 98, detail: "4-Year Math Mentorship (7 Students to 95%+ Marks)", type: "Soft Skill" },
  ];

  const size = 300;
  const center = size / 2;
  const radius = 105;
  const numPoints = competencies.length;

  const getCoordinates = (value, index) => {
    const angle = (Math.PI * 2 / numPoints) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points for the data
  const dataPoints = competencies.map((c, i) => getCoordinates(c.value, i));
  const polygonPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // Grid levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1];

  return (
    <div className="p-5 sm:p-6 rounded-2xl pro-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            FinTech SDE & EQ Competency Radar
          </span>
        </div>
        <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          95.0% SDE + EQ Index
        </span>
      </div>

      <div className="relative flex items-center justify-center py-2">
        <svg width={size} height={size} className="overflow-visible">
          {/* Background Concentric Webs */}
          {levels.map((lvl, idx) => {
            const gridPoints = competencies.map((_, i) => getCoordinates(lvl * 100, i));
            const path = gridPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
            return (
              <path
                key={idx}
                d={path}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeDasharray={idx < 3 ? "2,3" : "none"}
                strokeWidth="1"
              />
            );
          })}

          {/* Radial Axis Lines */}
          {competencies.map((_, i) => {
            const coord = getCoordinates(100, i);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={coord.x}
                y2={coord.y}
                stroke="rgba(255, 255, 255, 0.09)"
                strokeWidth="1"
              />
            );
          })}

          {/* Polygon Fill & Gradient */}
          <defs>
            <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          <path
            d={polygonPath}
            fill="url(#radarGradient)"
            stroke="#60a5fa"
            strokeWidth="2"
            className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]"
          />

          {/* Vertex Nodes */}
          {dataPoints.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={hoveredIndex === i ? "6" : "4"}
              fill={hoveredIndex === i ? "#ffffff" : "#60a5fa"}
              stroke="#080c15"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}

          {/* Axis Labels */}
          {competencies.map((c, i) => {
            const coord = getCoordinates(120, i);
            const isHovered = hoveredIndex === i;
            return (
              <text
                key={i}
                x={coord.x}
                y={coord.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-[9px] font-mono-code transition-colors cursor-pointer ${
                  isHovered ? 'fill-blue-300 font-bold' : 'fill-slate-400'
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {c.label.split(' ')[0]} ({c.value}%)
              </text>
            );
          })}
        </svg>
      </div>

      {/* Dynamic Hover Tooltip / Spec Box */}
      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
        {hoveredIndex !== null ? (
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">
              {competencies[hoveredIndex].label}
            </span>
            <span className="text-emerald-400 font-mono font-bold">
              {competencies[hoveredIndex].value}%
            </span>
          </div>
        ) : (
          <div className="text-center text-slate-400 text-[11px]">
            Hover over nodes to inspect competency metrics
          </div>
        )}
      </div>
    </div>
  );
};


// ==========================================
// 2. QUERY LATENCY OPTIMIZATION GRAPH (Bar Chart)
// ==========================================
export const LatencyOptimizationGraph = () => {
  const [selectedPlan, setSelectedPlan] = useState('optimized');

  const plans = [
    {
      id: 'unoptimized',
      name: "Full Table Scan (Disk)",
      latency: 1450,
      reads: "2,400,000 pages",
      cpu: "94% CPU Burst",
      status: "Severe Lock Contention",
      color: "bg-rose-500",
      barWidth: "100%"
    },
    {
      id: 'basic',
      name: "Single B-Tree Index",
      latency: 420,
      reads: "380,000 pages",
      cpu: "48% CPU Load",
      status: "Key Lookup Overhead",
      color: "bg-amber-500",
      barWidth: "29%"
    },
    {
      id: 'optimized',
      name: "Covering Composite Index (Sourav)",
      latency: 48,
      reads: "1,200 pages",
      cpu: "4% CPU Load",
      status: "Zero Disk Scans (-96.7%)",
      color: "bg-emerald-400",
      barWidth: "3.5%"
    },
    {
      id: 'cache',
      name: "In-Memory Hot Path (Redis/Buffer)",
      latency: 12,
      reads: "0 pages (RAM)",
      cpu: "< 1% CPU Load",
      status: "Sub-Millisecond Hit",
      color: "bg-blue-400",
      barWidth: "1.5%"
    }
  ];

  return (
    <div className="p-5 sm:p-6 rounded-2xl pro-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            Query Latency Benchmark Graph
          </span>
        </div>
        <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          -96.7% Execution Time
        </span>
      </div>

      {/* Latency Bars */}
      <div className="space-y-3 pt-1">
        {plans.map((p) => {
          const isSelected = selectedPlan === p.id;
          return (
            <div
              key={p.id}
              onClick={() => setSelectedPlan(p.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                isSelected 
                  ? 'bg-white/[0.04] border-slate-600 shadow-md' 
                  : 'bg-white/[0.01] border-white/[0.04] hover:border-white/[0.1]'
              }`}
            >
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className={`font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {p.name}
                </span>
                <span className="font-mono font-bold text-white">
                  {p.latency} ms
                </span>
              </div>

              {/* Graphical Bar */}
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative">
                <div 
                  className={`h-full rounded-full ${p.color} transition-all duration-500`}
                  style={{ width: p.barWidth }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-1.5">
                <span>Reads: {p.reads}</span>
                <span className={p.id === 'optimized' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                  {p.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stat Callout */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] text-slate-400 font-mono">Speedup</div>
          <div className="text-emerald-400 font-bold font-mono text-sm">30.2x</div>
        </div>
        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] text-slate-400 font-mono">CPU Reduction</div>
          <div className="text-blue-400 font-bold font-mono text-sm">90%</div>
        </div>
        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] text-slate-400 font-mono">Production Gain</div>
          <div className="text-white font-bold font-mono text-sm">Celebal</div>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 3. AI VELOCITY & DEFECT DENSITY GRAPH (Area Chart)
// ==========================================
export const VelocityDefectGraph = () => {
  const [activeMetric, setActiveMetric] = useState('velocity'); // 'velocity' | 'defects'

  // Coordinates for Velocity Area Curve
  // 5 Sprints: S1, S2, S3, S4, S5
  const baselineVelocity = [20, 22, 21, 23, 22]; // ~21 SP
  const souravVelocity = [20, 36, 48, 58, 67];   // 3.2x multiplier

  // Defect leakage percentage over sprints
  const baselineDefects = [14, 15, 13, 16, 14];  // ~14% bug leakage
  const souravDefects = [14, 6, 3, 2, 1.8];      // < 2% via invariant prompt testing

  const isVelocity = activeMetric === 'velocity';
  const data = isVelocity ? souravVelocity : souravDefects;
  const baselineData = isVelocity ? baselineVelocity : baselineDefects;

  const width = 280;
  const height = 110;
  const padding = 15;

  const getY = (val) => {
    const maxVal = isVelocity ? 75 : 18;
    return height - padding - ((val / maxVal) * (height - 2 * padding));
  };

  const getX = (idx) => padding + (idx * ((width - 2 * padding) / 4));

  const souravPath = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d)}`).join(' ');
  const baselinePath = baselineData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d)}`).join(' ');

  const areaPath = `${souravPath} L ${getX(4)} ${height - padding} L ${getX(0)} ${height - padding} Z`;

  return (
    <div className="p-5 sm:p-6 rounded-2xl pro-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            AI-Augmented Impact Curve
          </span>
        </div>
        <div className="flex gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveMetric('velocity')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              isVelocity ? 'bg-blue-500 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Velocity
          </button>
          <button
            onClick={() => setActiveMetric('defects')}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              !isVelocity ? 'bg-emerald-500 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Defect Rate
          </button>
        </div>
      </div>

      {/* SVG Curve Chart */}
      <div className="relative py-1">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isVelocity ? "#3b82f6" : "#10b981"} stopOpacity="0.4" />
              <stop offset="100%" stopColor={isVelocity ? "#3b82f6" : "#10b981"} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" strokeWidth="1" />

          {/* Sourav's Area */}
          <path d={areaPath} fill="url(#areaGradient)" />

          {/* Baseline Curve */}
          <path d={baselinePath} fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Sourav Curve */}
          <path d={souravPath} fill="none" stroke={isVelocity ? "#60a5fa" : "#34d399"} strokeWidth="2.5" className="drop-shadow" />

          {/* Data Points */}
          {data.map((d, i) => (
            <circle
              key={i}
              cx={getX(i)}
              cy={getY(d)}
              r="3.5"
              fill={isVelocity ? "#93c5fd" : "#6ee7b7"}
              stroke="#080c15"
              strokeWidth="1.5"
            />
          ))}
        </svg>

        <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1 px-3">
          <span>Sprint 1</span>
          <span>Sprint 2</span>
          <span>Sprint 3</span>
          <span>Sprint 4</span>
          <span>Sprint 5</span>
        </div>
      </div>

      {/* Legend & Callout */}
      <div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-slate-300 font-medium">Sourav (Claude Dev)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-500" />
          <span className="text-slate-500 font-medium">Commodity Baseline</span>
        </div>
        <span className="text-emerald-400 font-mono font-bold text-xs">
          {isVelocity ? "3.2x Shipped" : "-85% Bugs"}
        </span>
      </div>
    </div>
  );
};


// ==========================================
// 4. TCS SLA & WORKLOAD DISTRIBUTION GRAPH (Donut Graph)
// ==========================================
export const TCSWorkloadDonutGraph = () => {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  const segments = [
    { label: "ServiceNow Automations", percent: 40, color: "#3b82f6", detail: "8+ Flow Designer scripts" },
    { label: "High-Priority SLA Incidents", percent: 32, color: "#10b981", detail: "30+ weekly for 200–500 EU users" },
    { label: "Database Integrity Fixes", percent: 18, color: "#a855f7", detail: "Data patch & schema consistency" },
    { label: "Access & Governance (RBAC)", percent: 10, color: "#f59e0b", detail: "ITIL & security governance" }
  ];

  const size = 160;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <div className="p-5 sm:p-6 rounded-2xl pro-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            TCS Client Workload Distribution
          </span>
        </div>
        <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          99.4% SLA Compliance
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-2">
        {/* SVG Donut */}
        <div className="relative w-[160px] h-[160px] shrink-0">
          <svg width={size} height={size} className="transform -rotate-90">
            {segments.map((seg, i) => {
              const strokeDasharray = `${(seg.percent / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -((cumulativePercent / 100) * circumference);
              cumulativePercent += seg.percent;
              const isHovered = hoveredSlice === i;

              return (
                <circle
                  key={i}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredSlice(i)}
                  onMouseLeave={() => setHoveredSlice(null)}
                />
              );
            })}
          </svg>

          {/* Center Stat */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-xl font-bold font-mono text-white">30+</span>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Weekly SLAs</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs w-full">
          {segments.map((seg, i) => (
            <div 
              key={i}
              className={`p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                hoveredSlice === i ? 'bg-white/[0.08]' : 'hover:bg-white/[0.03]'
              }`}
              onMouseEnter={() => setHoveredSlice(i)}
              onMouseLeave={() => setHoveredSlice(null)}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                <span className="text-slate-300 font-medium text-[11px]">{seg.label}</span>
              </div>
              <span className="font-mono font-bold text-white text-xs">{seg.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ==========================================
// 5. ATS KEYWORD & COMPETENCY MATCH GRAPH
// ==========================================
export const ATSMatchGraph = () => {
  const matchDimensions = [
    { name: "Core CS & Algorithms (C++/SQL)", score: 99, threshold: 85 },
    { name: "Java Backend & Spring Framework", score: 95, threshold: 80 },
    { name: "SQL Query Tuning & SCD Models", score: 96, threshold: 75 },
    { name: "ServiceNow CAD/CSA Enterprise", score: 94, threshold: 70 },
    { name: "AI Agentic Development (Claude)", score: 100, threshold: 65 },
  ];

  return (
    <div className="p-5 sm:p-6 rounded-2xl pro-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <BarChart3 className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            ATS Recruiter Benchmark Match
          </span>
        </div>
        <span className="text-sm font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
          98.5% Total Score
        </span>
      </div>

      <div className="space-y-3 pt-1">
        {matchDimensions.map((dim, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300 font-medium">{dim.name}</span>
              <span className="font-mono text-emerald-400 font-bold">{dim.score}%</span>
            </div>
            
            {/* Visual Progress Bar with Threshold Marker */}
            <div className="relative w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${dim.score}%` }}
              />
              {/* Threshold tick line */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white/40"
                style={{ left: `${dim.threshold}%` }}
                title={`MNC Baseline: ${dim.threshold}%`}
              />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-500">
              <span>MNC Threshold: {dim.threshold}%</span>
              <span className="text-emerald-400 font-semibold">Exceeds Requirement</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
