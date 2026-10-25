import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Award,
  Zap,
  Terminal
} from 'lucide-react';
import { personalInfo, atsResumeText } from '../data/portfolioData';

export default function RecruiterModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    navigator.clipboard.writeText(atsResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bento-card rounded-3xl p-6 sm:p-8 shadow-2xl bg-[#090d18] text-white border border-white/[0.1]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-5 border-b border-white/[0.08] pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono-telemetry">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Recruiter Fast-Track Dossier • 60s Summary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {personalInfo.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-mono-telemetry">
            Assistant System Engineer at TCS • FinTech & Distributed Systems SDE
          </p>
        </div>

        {/* Candidate Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 text-center">
          <div className="p-3 rounded-2xl bg-[#06080e] border border-white/[0.06]">
            <div className="text-xl font-bold font-mono-telemetry text-emerald-400">99.4%</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry mt-1">TCS SLA</div>
          </div>
          <div className="p-3 rounded-2xl bg-[#06080e] border border-white/[0.06]">
            <div className="text-xl font-bold font-mono-telemetry text-cyan-400">48ms</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry mt-1">SQL Latency</div>
          </div>
          <div className="p-3 rounded-2xl bg-[#06080e] border border-white/[0.06]">
            <div className="text-xl font-bold font-mono-telemetry text-amber-400">30+/wk</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry mt-1">P1/P2 Triage</div>
          </div>
          <div className="p-3 rounded-2xl bg-[#06080e] border border-white/[0.06]">
            <div className="text-xl font-bold font-mono-telemetry text-purple-400">95.0%</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono-telemetry mt-1">SDE + EQ Index</div>
          </div>
        </div>

        {/* Executive Highlights */}
        <div className="space-y-3 py-2 text-xs sm:text-sm text-slate-300">
          <div className="font-semibold text-white tracking-wide text-xs flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Immediate-Impact Profile Highlights:</span>
          </div>
          <ul className="space-y-2 list-disc pl-5 text-slate-300 leading-relaxed text-xs">
            <li>
              <strong className="text-white">Active Enterprise Production at TCS:</strong> Single engineering point of contact for a Netherlands enterprise client (200–500 international users); maintaining 8+ ServiceNow automated workflows.
            </li>
            <li>
              <strong className="text-white">Algorithmic Foundations & Systems:</strong> 5-Star HackerRank in C++ & SQL, sub-second query tuning (-96.7% latency reduction), and deterministic ledger state machines.
            </li>
            <li>
              <strong className="text-white">High EQ & Human Leadership:</strong> 4-year track record as an educator mentoring 20+ students in advanced mathematics (7 scoring 95%+ in boards); led 4-engineer squad to Top 20/250 in nationwide Hackathon.
            </li>
            <li>
              <strong className="text-white">Dual ServiceNow & AI Certifications:</strong> ServiceNow CAD & CSA certified, Anthropic Claude Developer certified, and SAP Cloud ABAP certified.
            </li>
          </ul>
        </div>

        {/* Contact Strip */}
        <div className="p-3.5 rounded-2xl bg-[#06080e] border border-white/[0.06] my-5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="font-mono-telemetry">{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span className="font-mono-telemetry">{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Jaipur / Bangalore (Open to Relocation)</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${personalInfo.email}?subject=Priority Technical Interview Request - Sourav Gupta&body=Hi Sourav,%0D%0A%0D%0AWe reviewed your FinTech Systems Engineering profile and would like to schedule a conversation regarding an engineering role at our company.`}
            className="flex-1 py-3 px-5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Transmit Direct Interview Request</span>
          </a>

          <button
            onClick={handleCopyText}
            className="flex-1 py-3 px-5 rounded-2xl text-xs sm:text-sm font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">ATS Plaintext Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy ATS Plain Text</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}
