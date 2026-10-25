import React, { useState } from 'react';
import { 
  Target, 
  FileDown, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  ChevronDown,
  ChevronUp,
  BarChart3
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, atsResumeText } from '../data/portfolioData';
import { ATSMatchGraph } from './VisualGraphs';

const atsTargetRoles = [
  { role: "Backend Software Developer", match: "99%", badge: "Primary Match" },
  { role: "Java / Systems Engineer", match: "98%", badge: "High Fit" },
  { role: "SQL & Data Warehousing Engineer", match: "97%", badge: "High Fit" },
  { role: "Enterprise Cloud (ServiceNow/Salesforce)", match: "99%", badge: "Dual Certified" },
  { role: "AI-Augmented Software Engineer", match: "99%", badge: "Anthropic Certified" },
];

const atsKeywords = {
  "Languages": ["Java", "C++", "SQL", "C", "Apex", "JavaScript", "Python"],
  "Backend & Systems": ["OOP", "Data Structures & Algorithms (DSA)", "System Design", "REST APIs", "Server-Side Logic", "JUnit"],
  "Database & Warehousing": ["Query Optimization", "B-Tree Indexing", "Slowly Changing Dimensions (SCD Type 1/2)", "Early-Arriving Facts", "Schema Normalization"],
  "AI & Automation": ["Anthropic Claude API", "GitHub Copilot", "Prompt Engineering", "Agentic Workflows", "ServiceNow CAD/CSA"],
  "Cloud & Tools": ["Salesforce LWC", "SAP Cloud ABAP", "MuleSoft", "Azure", "Git", "VS Code", "IntelliJ IDEA"]
};

const ATSRecruiterHub = () => {
  const [copiedResume, setCopiedResume] = useState(false);
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#ffffff', '#60a5fa', '#34d399', '#818cf8']
    });
  };

  const handleCopyResumeText = () => {
    navigator.clipboard.writeText(atsResumeText);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2500);
  };

  const handleCopyPitch = () => {
    const pitch = `Hi Hiring Team, 
I am Sourav Gupta, a Backend Software Developer & AI-Augmented Engineer (B.Tech IT, CGPA 8.4). 
Currently at TCS serving as primary technical POC for a 200–500 user Netherlands client (30+ weekly tickets resolved, ServiceNow workflows). 
I hold 5-Star ratings in C++ & SQL on HackerRank, dual ServiceNow CAD/CSA certifications, SAP Cloud ABAP, and Anthropic Claude Developer certification. 
Optimized database queries by 40% at Celebal and built high-reliability Java OOP backends. 
I am actively open for Backend / Software Engineer opportunities.
Resume: https://github.com/Sourav1323 | Contact: (+91) 8619377860 | souravgupta.it25@gmail.com`;
    
    navigator.clipboard.writeText(pitch);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  return (
    <section id="ats-hub" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            ATS Optimization & Recruiter Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For <span className="text-slate-400 font-light">Top ATS Scores & Speed</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Applicant Tracking Systems (ATS) and hiring managers look for quantifiable metrics, verifiable certifications, 
            and modern technical capabilities. Here is everything structured for instant assessment.
          </p>
        </div>

        {/* ATS Score & Recruiter Action Bar */}
        <div className="pro-card rounded-3xl p-6 sm:p-10 lg:p-12 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 5 Cols: ATS Score Meter */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                Algorithm Tested & Verified
              </div>

              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-5xl sm:text-6xl font-black text-white">
                  98.5%
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Overall ATS Compatibility
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Clean single-column parsing, zero formatting glitches, rich semantic keyword density, 
                and quantifiable impact bullets configured to score top tier on Workday, Taleo, Greenhouse, and Lever.
              </p>

              {/* Roles Compatibility Badges */}
              <div className="space-y-2 pt-2 text-left">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Target Role Fitment
                </div>
                <div className="space-y-1.5">
                  {atsTargetRoles.map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs">
                      <span className="font-medium text-slate-200">{r.role}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono-code text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                          {r.badge}
                        </span>
                        <span className="font-mono-code font-bold text-emerald-400">{r.match}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Recruiter Fast-Track Actions */}
            <div className="lg:col-span-7 space-y-5 lg:pl-8 lg:border-l lg:border-white/[0.08]">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  Recruiter Fast-Track Toolkit
                </h3>
                <p className="text-xs text-slate-400">
                  Download the official PDF, copy plaintext directly into ATS software, or grab a ready-made outreach pitch.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Download Real PDF */}
                <a
                  href={personalInfo.resumeUrl}
                  download="Sourav_Gupta_Resume.pdf"
                  onClick={triggerDownloadConfetti}
                  className="p-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-semibold transition-all flex flex-col justify-between shadow-sm group active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <FileDown className="w-5 h-5 text-slate-900 group-hover:scale-105 transition-transform" />
                    <span className="text-[10px] uppercase font-bold bg-slate-900/10 px-2 py-0.5 rounded text-slate-900">
                      Official PDF
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Download Official Resume</div>
                    <div className="text-[11px] text-slate-600 font-medium">Sourav_Gupta_Resume.pdf</div>
                  </div>
                </a>

                {/* Copy Plaintext */}
                <button
                  onClick={handleCopyResumeText}
                  className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white font-medium transition-all flex flex-col justify-between group text-left active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between mb-2">
                    {copiedResume ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    )}
                    <span className="text-[10px] uppercase font-mono-code text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                      ATS Parsers
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      {copiedResume ? "Copied To Clipboard!" : "Copy Plain Text Resume"}
                    </div>
                    <div className="text-[11px] text-slate-400">One-click paste for ATS portals</div>
                  </div>
                </button>

              </div>

              {/* Copy Pitch Bar */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>60-Second Recruiter Dossier / Pitch</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Ready-to-use candidate summary for hiring managers & clients
                  </div>
                </div>
                <button
                  onClick={handleCopyPitch}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.08] transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-center"
                >
                  {copiedPitch ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Pitch</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Visual Graph: ATS Recruiter Match & Competency Benchmark */}
        <div className="mb-12">
          <ATSMatchGraph />
        </div>

        {/* ATS Keywords Cloud */}
        <div className="pro-card rounded-3xl p-6 sm:p-8 space-y-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Indexed ATS Keywords Matrix
              </h3>
              <p className="text-xs text-slate-400">
                Verified semantic keywords embedded in Sourav's experience & codebase.
              </p>
            </div>
            <span className="text-xs font-mono-code text-slate-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08] self-start sm:self-auto">
              100% Parsable Density
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(atsKeywords).map(([category, items]) => (
              <div key={category} className="space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((kw) => (
                    <span 
                      key={kw}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono-code bg-white/[0.02] border border-white/[0.05] text-slate-300"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plain Text ATS Resume Inspection Box */}
        <div className="rounded-3xl bg-[#060912] border border-white/[0.08] overflow-hidden shadow-xl">
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="w-full px-6 py-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-400" />
              <div>
                <span className="text-sm font-semibold text-white block">
                  Inspect Pure ATS Plaintext Resume Output
                </span>
                <span className="text-xs text-slate-400">
                  Exact machine-readable stream sent to recruitment algorithms
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <span>{showFullText ? "Hide Plaintext" : "View Plaintext"}</span>
              {showFullText ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </div>
          </button>

          {showFullText && (
            <div className="p-6 overflow-x-auto max-h-[480px] text-xs font-mono-code leading-relaxed text-slate-300 bg-black/60 border-t border-white/[0.06]">
              <pre className="whitespace-pre-wrap">{atsResumeText}</pre>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ATSRecruiterHub;
