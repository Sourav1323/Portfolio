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
import { personalInfo, impactMetrics, executiveHighlights } from '../data/portfolioData';

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
  const [avatarSrc, setAvatarSrc] = useState(personalInfo.avatarUrl || '/sourav_avatar.png');

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.2 },
      colors: ['#818cf8', '#c084fc', '#38bdf8', '#34d399']
    });
  };

  const handleCustomPhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setAvatarSrc(uploadEvent.target.result);
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-[94vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="aurora-blob top-10 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-indigo-600/12 animate-pulse-calm" />
      <div className="aurora-blob bottom-10 right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-purple-600/12 animate-float-slow" />
      <div className="aurora-blob top-1/2 right-1/3 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-sky-500/10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Executive Typography & MNC Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Executive Status Pill Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                TCS Assistant System Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-200 border border-indigo-500/25 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                Netherlands Client Operations
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-200 border border-purple-500/25 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                Anthropic Certified Claude Dev
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.18]">
                Distributed Systems, <br />
                <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                  High-Performance Databases
                </span> <br />
                <span className="text-slate-300 text-2xl sm:text-4xl xl:text-5xl font-light">
                  & AI-Augmented Engineering.
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed pt-1 sm:pt-2">
                Hello, I'm <span className="text-white font-semibold">{personalInfo.name}</span>. 
                A Software Engineer specializing in <span className="text-indigo-200 font-medium">Java (11/17), Spring Boot, Distributed Systems & SQL optimization</span>. 
                Proven track record resolving 30+ complex weekly incidents for international users at TCS, with a deep foundation in 
                computational algorithms, technical leadership, and modern AI acceleration.
              </p>
            </div>

            {/* MNC Alignment Strip */}
            <div className="p-4 sm:p-5 rounded-2xl aurora-card border border-white/[0.08] text-left max-w-xl mx-auto lg:mx-0 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-500/15 text-indigo-300 shrink-0 mt-0.5">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center justify-between">
                    <span>MNC & Tier-1 Engineering Profile</span>
                    <span className="text-emerald-400 font-mono text-[11px]">SDE-1 / SDE-2</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Combines <strong className="text-white">5-Star HackerRank C++/SQL fundamentals</strong>, 
                    <strong className="text-white"> dual ServiceNow certifications (CAD & CSA)</strong>, 
                    <strong className="text-white"> 40% database performance optimization</strong>, and 
                    demonstrated engineering team leadership (Top 20/250 Hackathon Finalist).
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Sourav_Gupta_Resume.pdf"
                onClick={triggerDownloadConfetti}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-white" />
                <span>Download Official Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterModal}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-semibold text-slate-200 aurora-card hover:bg-white/[0.08] hover:border-indigo-400/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Target className="w-4 h-4 text-indigo-400" />
                <span>ATS Executive Brief</span>
              </button>

              <a
                href="#leadership"
                className="w-full sm:w-auto px-4 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Leadership Profile</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </a>
            </div>

            {/* Core Stack Tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="text-slate-500 font-medium mr-1">Enterprise Stack:</span>
              {['Java 11/17', 'Spring Boot', 'SQL (40% Tuning)', 'ServiceNow CAD/CSA', 'Claude API', 'C++ (5-Star)', 'Docker', 'Linux'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300 font-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right 5 Columns: 3D Celestial Core & Digital Executive Avatar Deck */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Celestial Astrolabe in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
              <Canvas3D />
            </div>

            {/* Interactive 3D Avatar / Action Figure Card */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] rounded-3xl p-4 sm:p-5 aurora-card-glow border border-indigo-400/35 shadow-2xl backdrop-blur-2xl group transition-all duration-500 hover:scale-[1.02]">
              
              {/* Photo Container with Stylized Glass Border */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.6] bg-[#060a16] border border-white/[0.1] shadow-inner">
                <img
                  src={avatarSrc}
                  alt="Sourav Gupta - Software Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if avatar file isn't loaded yet
                    e.currentTarget.src = "/sourav_avatar.jpg";
                  }}
                />

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-80" />

                {/* Top Status Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified SDE Talent</span>
                </div>

                {/* Optional Custom Photo Upload Button */}
                <label 
                  htmlFor="photo-upload-input" 
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white border border-white/[0.1] backdrop-blur-md cursor-pointer transition-all"
                  title="Upload personal photo headshot"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <input 
                    id="photo-upload-input" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleCustomPhotoUpload} 
                    className="hidden" 
                  />
                </label>

                {/* Bottom Overlay Info on Avatar */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#090e1e]/85 backdrop-blur-md border border-white/[0.08] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-white">Sourav Gupta</span>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-400/20">
                      TCS Engineer
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 truncate">
                    Platform Reliability & Enterprise Systems
                  </div>
                </div>
              </div>

              {/* Floating 3D Stats Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-extrabold text-indigo-300">200–500 EU Users</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">TCS Client Scope</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-extrabold text-emerald-300">40% SQL Boost</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Celebal Performance</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Quantifiable Impact Metrics Ribbon */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {impactMetrics.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div 
                key={index} 
                className="p-5 rounded-2xl aurora-card hover:border-indigo-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] text-indigo-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-1">
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
