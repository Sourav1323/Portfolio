import React, { useState } from 'react';
import { 
  FileDown, 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Award, 
  Star, 
  Cpu, 
  Target,
  Upload,
  CheckCircle2,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Canvas3D from './Canvas3D';
import { personalInfo, impactMetrics } from '../data/portfolioData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Award: Award,
  Star: Star,
  Cpu: Cpu,
  Target: Target,
  Users: Users
};

const Hero = ({ onOpenRecruiterModal }) => {
  const [uploadedPhoto, setUploadedPhoto] = useState(() => {
    return localStorage.getItem('sourav_custom_photo') || null;
  });

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#ffffff', '#60a5fa', '#34d399', '#818cf8']
    });
  };

  const handleCustomPhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          const result = uploadEvent.target.result;
          setUploadedPhoto(result);
          localStorage.setItem('sourav_custom_photo', result);
          confetti({
            particleCount: 60,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Executive Typography & MNC Value */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Status Badges - Clean & Refined */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                TCS Assistant System Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Netherlands Enterprise Operations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Anthropic Certified Claude Dev
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
                Distributed Systems, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  High-Performance Databases
                </span> <br />
                <span className="text-slate-400 text-2xl sm:text-4xl xl:text-5xl font-light">
                  & AI-Augmented Engineering.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed pt-1 sm:pt-2">
                Backend Software Developer specializing in <span className="text-white font-medium">Java (11/17), Spring Boot, Distributed Systems & SQL query tuning</span>. 
                Active European enterprise operations at TCS, verified 5-Star HackerRank problem solving, and dual ServiceNow certifications.
              </p>
            </div>

            {/* MNC Engineering Capabilities - Visual Micro-Grid */}
            <div className="grid grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl pro-card flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">TCS Enterprise POC</div>
                  <div className="text-[10px] text-slate-400 font-mono">200–500 EU Users • 30+ SLA/wk</div>
                </div>
              </div>

              <div className="p-3 rounded-xl pro-card flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">40% SQL Speedup</div>
                  <div className="text-[10px] text-slate-400 font-mono">B-Tree Indices • Zero Full Scans</div>
                </div>
              </div>

              <div className="p-3 rounded-xl pro-card flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">5-Star HackerRank</div>
                  <div className="text-[10px] text-slate-400 font-mono">C++ & SQL Problem Solving</div>
                </div>
              </div>

              <div className="p-3 rounded-xl pro-card flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Dual Certified</div>
                  <div className="text-[10px] text-slate-400 font-mono">ServiceNow CAD/CSA • Claude Dev</div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Clean Minimal Linear Style */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Sourav_Gupta_Resume.pdf"
                onClick={triggerDownloadConfetti}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-slate-900" />
                <span>Download Official Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterModal}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 pro-card hover:border-white/[0.2] transition-all flex items-center justify-center gap-2"
              >
                <Target className="w-4 h-4 text-blue-400" />
                <span>ATS Executive Brief</span>
              </button>

              <a
                href="#leadership"
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Leadership Profile</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Core Stack Tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs text-slate-400">
              <span className="text-slate-500 font-medium mr-1 text-[11px]">Core Stack:</span>
              {['Java 11/17', 'Spring Boot', 'SQL (40% Tuning)', 'ServiceNow CAD/CSA', 'Claude API', 'C++ (5-Star)', 'Docker', 'Linux'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 font-mono-code text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right 5 Columns: 3D Action Figure Pod */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Celestial Wireframe Orbit in Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <Canvas3D />
            </div>

            {/* Museum-Grade Action Figure Showcase Pod */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] rounded-3xl p-3 sm:p-4 pro-card-glow shadow-2xl transition-all duration-300 hover:border-white/[0.2] group">
              
              {/* Display Canvas with Crisp Framing */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4.2] bg-[#070b14] border border-white/[0.08] shadow-inner flex flex-col items-center justify-center">
                
                {/* Full Body Stylized 3D Action Figure */}
                <img
                  src={uploadedPhoto || "/action_figure.jpg"}
                  alt="Sourav Gupta - 3D Action Figure"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "/action_figure.png";
                  }}
                />

                {/* Top Status Beacon */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified SDE Talent</span>
                </div>

                {/* Optional Custom Photo Swap / Upload Trigger */}
                <label 
                  htmlFor="hero-photo-input" 
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white border border-white/[0.1] backdrop-blur-md cursor-pointer transition-all"
                  title="Upload personal photo headshot"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <input 
                    id="hero-photo-input" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleCustomPhotoUpload} 
                    className="hidden" 
                  />
                </label>

                {/* Bottom Figurine Plaque */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-[#090d18]/85 backdrop-blur-md border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Sourav Gupta</span>
                      <span className="text-[9px] font-mono-code text-blue-300 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/20">
                        SDE Figurine
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      TCS Systems & Quantitative Logic
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-bold text-slate-200">200–500 EU Users</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">TCS Client Scope</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-bold text-emerald-400">40% SQL Boost</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Celebal Performance</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Quantifiable Impact Metrics Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {impactMetrics.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div 
                key={index} 
                className="p-4 rounded-xl pro-card group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-2 rounded-lg bg-white/[0.04] text-blue-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-slate-300 mt-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hero;
