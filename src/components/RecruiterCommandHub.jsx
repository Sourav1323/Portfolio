import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Terminal, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight,
  Phone,
  MapPin,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function RecruiterCommandHub() {
  const [copiedType, setCopiedType] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#38bdf8', '#ffffff']
    });
    setTimeout(() => setCopiedType(null), 2500);
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

  const recruiterPitchText = `Sourav Gupta is an Assistant System Engineer at TCS with verified enterprise production experience maintaining 99.4% SLA adherence for European clients. He combines algorithmic depth (HackerRank 5-Star C++ & SQL, sub-second query optimization) with high-EQ leadership (TCS client point of contact, Smart City Hackathon Top 20 squad lead, 4-year quantitative math mentor). Dual-certified in ServiceNow (CAD & CSA) and Anthropic Claude AI development. Available for Tier-1 SDE roles.`;

  return (
    <section id="connect" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-telemetry uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Recruiter Priority Command Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Direct Engineering Dispatch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Accelerate your technical hiring cycle. Copy verified ATS profiles, grab a 60-second executive pitch, or transmit a direct interview dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Direct Recruiter Fast-Action Cards (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary Action Card: Direct Email Outreach */}
            <a
              href={`mailto:${personalInfo.email}?subject=Priority Technical Interview Request - Sourav Gupta&body=Hi Sourav,%0D%0A%0D%0AWe reviewed your profile and would like to schedule a conversation regarding an SDE role at our company.`}
              className="bento-card-emerald p-6 rounded-3xl flex items-center justify-between group cursor-pointer block transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono-telemetry uppercase text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                      Fastest Response
                    </span>
                    <span className="text-xs text-emerald-400 font-mono-telemetry">Within 24 Hours</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-200 transition-colors">
                    Transmit Priority Interview Dispatch
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Pre-fills subject and template directly to {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.08] text-white group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors shrink-0">
                <Send className="w-4 h-4" />
              </div>
            </a>

            {/* Quick Copy ATS Dossier Card */}
            <div className="bento-card p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Copy className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Copy ATS Plaintext Profile</h4>
                    <p className="text-xs text-slate-400">Optimized for Greenhouse, Lever, Workday & Taleo</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(atsSummaryText, 'ats')}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-emerald-500/20 text-xs font-mono-telemetry text-slate-300 hover:text-emerald-300 border border-white/[0.08] hover:border-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
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
              <div className="p-3 rounded-2xl bg-[#090d16] border border-white/[0.05] text-[11px] font-mono-telemetry text-slate-400 line-clamp-3">
                {atsSummaryText}
              </div>
            </div>

            {/* Quick Copy 60-Second Recruiter Pitch */}
            <div className="bento-card p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">60-Second Screening Pitch</h4>
                    <p className="text-xs text-slate-400">Ready-to-use executive bullet summary for hiring managers</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(recruiterPitchText, 'pitch')}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-amber-500/20 text-xs font-mono-telemetry text-slate-300 hover:text-amber-300 border border-white/[0.08] hover:border-amber-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedType === 'pitch' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Pitch</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 rounded-2xl bg-[#090d16] border border-white/[0.05] text-[11px] text-slate-300 italic leading-relaxed">
                "{recruiterPitchText}"
              </div>
            </div>

          </div>

          {/* Right Column: Status & Direct Channels (Span 5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono-telemetry uppercase tracking-wider text-emerald-400 font-bold">
                    Direct Channels Active
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono-telemetry text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{currentTime || 'IST Live'}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d16] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono-telemetry">Email</div>
                      <div className="text-xs font-bold text-white">{personalInfo.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d16] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono-telemetry">Phone</div>
                      <div className="text-xs font-bold text-white">{personalInfo.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d16] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono-telemetry">Location</div>
                      <div className="text-xs font-bold text-white">Jaipur / Bangalore, India (Open to Relocation)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-white/[0.04] hover:bg-[#0077b5]/20 border border-white/[0.08] hover:border-[#0077b5]/40 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.2] text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
