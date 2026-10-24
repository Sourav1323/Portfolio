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
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, atsResumeText } from '../data/portfolioData';

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
      particleCount: 100,
      spread: 80,
      origin: { y: 0.3 },
      colors: ['#818cf8', '#38bdf8', '#c084fc', '#34d399']
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
    <section id="ats-hub" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            <Target className="w-4 h-4 text-indigo-400" />
            ATS Optimization & Recruiter Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">Top ATS Scores</span> & Hiring Speed
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            Applicant Tracking Systems (ATS) and hiring managers look for quantifiable metrics, verifiable certifications, 
            and modern technical capabilities. Here is everything structured for instant assessment.
          </p>
        </div>

        {/* ATS Score & Recruiter Action Bar - Spacious & Uncrowded */}
        <div className="aurora-card-glow rounded-2xl sm:rounded-3xl p-5 sm:p-12 lg:p-14 mb-16 border-indigo-400/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left 5 Cols: ATS Score Meter */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
                Algorithm Tested & Verified
              </div>

              <div className="flex items-baseline justify-center lg:justify-start gap-3 sm:gap-4">
                <span className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-emerald-300 via-teal-300 to-sky-300 bg-clip-text text-transparent">
                  98.5%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wide">
                  Overall ATS Compatibility Score
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                Clean single-column parsing, zero formatting glitches, rich semantic keyword density, 
                and quantifiable impact bullets configured to score top tier on Workday, Taleo, Greenhouse, and Lever.
              </p>

              {/* Roles Compatibility Badges */}
              <div className="space-y-2.5 pt-2 text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target Role Fitment
                </div>
                <div className="space-y-2">
                  {atsTargetRoles.map((r, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm gap-2">
                      <span className="font-semibold text-white">{r.role}</span>
                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded border border-indigo-500/25">
                          {r.badge}
                        </span>
                        <span className="font-mono font-bold text-emerald-400">{r.match}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Recruiter Fast-Track Actions */}
            <div className="lg:col-span-7 space-y-6 lg:pl-10 lg:border-l lg:border-white/[0.08]">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Recruiter Fast-Track Toolkit
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Save time sourcing. Download the official PDF, copy plaintext directly into ATS software, 
                  or grab a ready-made outreach pitch.
                </p>
              </div>

              {/* Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Download Real PDF */}
                <a
                  href={personalInfo.resumeUrl}
                  download="Sourav_Gupta_Resume.pdf"
                  onClick={triggerDownloadConfetti}
                  className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white font-bold hover:from-indigo-400 hover:to-sky-400 transition-all flex flex-col justify-between shadow-xl shadow-indigo-500/20 hover:scale-[1.02] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <FileDown className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase font-extrabold bg-white/20 px-2.5 py-0.5 rounded">
                      Official PDF
                    </span>
                  </div>
                  <div>
                    <div className="text-base font-black">Download Official Resume</div>
                    <div className="text-xs text-white/80 font-medium mt-0.5">Sourav_Gupta_Resume.pdf</div>
                  </div>
                </a>

                {/* Copy Plaintext */}
                <button
                  onClick={handleCopyResumeText}
                  className="p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] text-white font-semibold transition-all flex flex-col justify-between hover:scale-[1.02] group text-left"
                >
                  <div className="flex items-center justify-between mb-3">
                    {copiedResume ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-indigo-300 group-hover:scale-110 transition-transform" />
                    )}
                    <span className="text-[10px] uppercase font-bold text-indigo-200 bg-indigo-950/60 px-2.5 py-0.5 rounded border border-indigo-500/30">
                      ATS Parsers
                    </span>
                  </div>
                  <div>
                    <div className="text-base font-bold">
                      {copiedResume ? "Copied To Clipboard!" : "Copy Plain Text Resume"}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">One-click paste for ATS portals</div>
                  </div>
                </button>

              </div>

              {/* Copy Elevator Pitch Bar */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>60-Second Recruiter Dossier / Pitch</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Ready-to-use candidate summary for hiring managers & clients
                  </div>
                </div>
                <button
                  onClick={handleCopyPitch}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 border border-indigo-500/30 transition-colors flex items-center gap-2 shrink-0 self-start sm:self-center"
                >
                  {copiedPitch ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Pitch</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ATS Keywords Cloud - Clean & Spacious */}
        <div className="aurora-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] space-y-8 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div>
              <h3 className="text-xl font-bold text-white">
                Indexed ATS Keywords Matrix
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Verified semantic keywords embedded in Sourav's experience & codebase.
              </p>
            </div>
            <span className="text-xs font-mono text-indigo-300 bg-indigo-950/60 px-3.5 py-1.5 rounded-full border border-indigo-500/25 self-start sm:self-auto">
              100% Parsable Density
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(atsKeywords).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((kw) => (
                    <span 
                      key={kw}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300 hover:border-indigo-400/50 hover:text-white transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Plain Text ATS Resume Inspection Box */}
        <div className="rounded-3xl bg-[#070b16] border border-white/[0.08] overflow-hidden shadow-2xl">
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="w-full px-8 py-5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-4">
              <FileText className="w-5 h-5 text-indigo-400" />
              <div>
                <span className="text-base font-bold text-white block">
                  Inspect Pure ATS Plaintext Resume Output
                </span>
                <span className="text-xs text-slate-400">
                  Exact machine-readable stream parsed by recruitment algorithms
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
              <span>{showFullText ? "Hide Plaintext" : "View Plaintext"}</span>
              {showFullText ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showFullText && (
            <div className="p-8 overflow-x-auto max-h-[520px] text-xs font-mono leading-relaxed text-slate-300 bg-black/70 border-t border-white/[0.08]">
              <pre className="whitespace-pre-wrap">{atsResumeText}</pre>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ATSRecruiterHub;
