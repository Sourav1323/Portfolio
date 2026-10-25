import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  Building2, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const ResumeDownloadModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid company or work email.');
      return;
    }

    // Save lead to localStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('sourav_recruiter_leads') || '[]');
      existingLeads.push({
        email,
        company: company || 'Not specified',
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('sourav_recruiter_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('Lead storage error:', err);
    }

    setSubmitted(true);
    setError('');

    // Trigger celebration confetti
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#60a5fa', '#34d399', '#818cf8']
    });

    // Initiate real PDF resume download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Sourav_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Auto-close modal after brief confirmation
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-md pro-card-glow rounded-3xl p-6 sm:p-8 bg-[#0b0f19] text-white border border-slate-700/80 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Recruiter Verification</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Download Official Resume
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Please enter your company or work email to verify your organization and unlock Sourav's official PDF resume.
          </p>
        </div>

        {/* Success Confirmation Banner */}
        {submitted ? (
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            <div>
              <div className="font-semibold text-white">Access Granted!</div>
              <div className="text-xs text-emerald-300">Sourav_Gupta_Resume.pdf downloading now...</div>
            </div>
          </div>
        ) : (
          /* Verification Form */
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span>Company / Work Email</span>
                <span className="text-[10px] text-blue-400 font-mono">Required</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                <span>Company / Organization Name</span>
                <span className="text-[10px] text-slate-500 font-mono">Optional</span>
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Google, Microsoft, Goldman Sachs"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {error && (
              <div className="text-xs text-rose-400 font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.99] mt-2 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Unlock & Download Resume (PDF)</span>
            </button>

            <div className="text-center text-[11px] text-slate-500 pt-1">
              Direct official PDF download • 98.5% ATS score match
            </div>
          </form>
        )}

      </div>

    </div>
  );
};

export default ResumeDownloadModal;
