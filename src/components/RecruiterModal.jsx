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
  Send
} from 'lucide-react';
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
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto pro-card-glow rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl bg-[#0b0f19] text-white border border-slate-700/80"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2.5 pb-5 border-b border-slate-800/80 pr-10 sm:pr-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Recruiter Fast-Track Dossier (60s Summary)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {personalInfo.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Backend Software Developer • AI-Augmented Systems • Assistant System Engineer Trainee at TCS
          </p>
        </div>

        {/* Candidate Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 text-center">
          <div className="p-3.5 rounded-xl pro-card">
            <div className="text-xl font-bold text-white">98.5%</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono font-medium mt-1">ATS Match</div>
          </div>
          <div className="p-3.5 rounded-xl pro-card">
            <div className="text-xl font-bold text-emerald-400">30+/wk</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono font-medium mt-1">TCS Tickets</div>
          </div>
          <div className="p-3.5 rounded-xl pro-card">
            <div className="text-xl font-bold text-blue-400">40%</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono font-medium mt-1">SQL Speedup</div>
          </div>
          <div className="p-3.5 rounded-xl pro-card">
            <div className="text-xl font-bold text-slate-200">8.4</div>
            <div className="text-[10px] text-slate-400 uppercase font-mono font-medium mt-1">B.Tech CGPA</div>
          </div>
        </div>

        {/* Executive Highlights */}
        <div className="space-y-3 py-2 text-xs sm:text-sm text-slate-300">
          <div className="font-semibold text-white tracking-wide text-xs flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Why Sourav is an Immediate-Impact Hire:</span>
          </div>
          <ul className="space-y-2.5 list-disc pl-5 text-slate-300 leading-relaxed">
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
        <div className="p-4 rounded-xl pro-card my-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${personalInfo.email}?subject=Priority Technical Interview Request&body=Hi Sourav,%0D%0A%0D%0AWe reviewed your FinTech Systems Engineering profile and would like to schedule a conversation regarding an engineering role at our company.`}
            className="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Direct Recruiter Transmission</span>
          </a>

          <button
            onClick={handleCopyText}
            className="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Plaintext Copied!</span>
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
};

export default RecruiterModal;
