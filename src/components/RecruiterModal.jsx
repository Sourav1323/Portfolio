import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, atsResumeText } from '../data/portfolioData';

const RecruiterModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.4 },
      colors: ['#818cf8', '#c084fc', '#38bdf8', '#34d399']
    });
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(atsResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto aurora-card-glow rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl bg-[#090e1e] text-white border border-indigo-400/30"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2.5 pb-5 border-b border-white/[0.08] pr-10 sm:pr-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4" />
            Recruiter Fast-Track Dossier (60s Summary)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {personalInfo.name}
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200 font-medium leading-relaxed">
            Backend Software Developer • AI-Augmented Systems • Assistant System Engineer Trainee at TCS
          </p>
        </div>

        {/* Candidate Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xl font-black text-indigo-300">98.5%</div>
            <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">ATS Match</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xl font-black text-emerald-300">30+/wk</div>
            <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">TCS Tickets</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xl font-black text-amber-300">40%</div>
            <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">SQL Speedup</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xl font-black text-purple-300">8.4</div>
            <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">B.Tech CGPA</div>
          </div>
        </div>

        {/* Executive Highlights */}
        <div className="space-y-4 py-2 text-xs sm:text-sm text-slate-300">
          <div className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Why Sourav is an Immediate-Impact Hire:</span>
          </div>
          <ul className="space-y-3 list-disc pl-5 text-slate-300 leading-relaxed">
            <li>
              <strong className="text-white">Active Enterprise Experience:</strong> Primary technical point of contact for a Netherlands-based enterprise client (200–500 users) at TCS; maintains 4–8 ServiceNow production automations.
            </li>
            <li>
              <strong className="text-white">Core Algorithmic Foundations:</strong> 5-Star HackerRank in C++ and SQL, rigorous OOP Java backend development, and proven database query optimization (up to 40% gain).
            </li>
            <li>
              <strong className="text-white">Certified AI Advantage:</strong> Certified Anthropic Claude Developer—leverages agentic prompt engineering and GitHub Copilot to ship and test backend services 3x faster without architectural debt.
            </li>
            <li>
              <strong className="text-white">Multiple Enterprise Credentials:</strong> Dual ServiceNow certified (CAD & CSA) and SAP Cloud ABAP certified.
            </li>
          </ul>
        </div>

        {/* Contact Strip */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] my-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-4">
          <a
            href={personalInfo.resumeUrl}
            download="Sourav_Gupta_Resume.pdf"
            onClick={triggerDownloadConfetti}
            className="flex-1 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Official PDF Resume</span>
          </a>

          <button
            onClick={handleCopyText}
            className="flex-1 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Plaintext Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-indigo-300" />
                <span>Copy ATS Plain Text</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};

export default RecruiterModal;
