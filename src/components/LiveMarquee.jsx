import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Award, Sparkles, Activity } from 'lucide-react';

const telemetryItems = [
  { label: "TCS ENTERPRISE SLA", value: "99.4%", delta: "▲ HIGH RELIABILITY", icon: ShieldCheck, color: "text-emerald-400" },
  { label: "SQL QUERY LATENCY", value: "48ms", delta: "▼ -96.7% OPTIMIZED", icon: Zap, color: "text-cyan-400" },
  { label: "FINTECH LEDGER THROUGHPUT", value: "10,480 TPS", delta: "▲ ACID COMPLIANT", icon: TrendingUp, color: "text-emerald-400" },
  { label: "QUANTITATIVE MENTORSHIP", value: "4+ YRS", delta: "▲ 7 STUDENTS 95%+", icon: Award, color: "text-amber-400" },
  { label: "DUAL SERVICENOW CERTIFIED", value: "CAD + CSA", delta: "VERIFIED", icon: Sparkles, color: "text-purple-400" },
  { label: "ANTHROPIC CLAUDE CERTIFIED", value: "PROMPT & DEV", delta: "AI NATIVE", icon: Sparkles, color: "text-cyan-400" },
  { label: "HACKERRANK STANDING", value: "5-STAR", delta: "C++ & SQL", icon: Activity, color: "text-emerald-400" },
  { label: "SMART CITY HACKATHON", value: "TOP 20 / 250", delta: "SQUAD LEAD", icon: Award, color: "text-amber-400" },
];

export default function LiveMarquee() {
  return (
    <div className="w-full bg-[#080c14]/90 border-y border-white/[0.06] backdrop-blur-md overflow-hidden py-3 select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double the list for seamless continuous infinite loop */}
        {[...telemetryItems, ...telemetryItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono-telemetry tracking-wider">
              <span className="p-1 rounded bg-white/[0.04] border border-white/[0.08]">
                <Icon className={`w-3.5 h-3.5 ${item.color}`} />
              </span>
              <span className="text-slate-400 uppercase text-[11px]">{item.label}:</span>
              <span className="font-bold text-white text-[12px]">{item.value}</span>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/[0.04] ${item.color}`}>
                {item.delta}
              </span>
              <span className="text-slate-700 ml-3">|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
