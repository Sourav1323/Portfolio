import React, { useState, useEffect } from 'react';
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
  Users,
  Image as ImageIcon,
  UserCheck,
  Layers,
  Palette
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Canvas3D from './Canvas3D';
import ThemeSwitcher from './ThemeSwitcher';
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

const Hero = ({ onOpenRecruiterModal, currentTheme, onSelectTheme }) => {
  // Default to the full-body stylized 3D action figure
  const [visualMode, setVisualMode] = useState('avatar');
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  useEffect(() => {
    // Check if user previously saved a custom profile photo
    const saved = localStorage.getItem('sourav_custom_photo');
    if (saved) {
      setUploadedPhoto(saved);
    }
  }, []);

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.2 },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#818cf8']
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
          setVisualMode('real');
          localStorage.setItem('sourav_custom_photo', result);
          confetti({
            particleCount: 60,
            spread: 70,
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
      <div className="aurora-blob top-10 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-blue-600/10 animate-pulse-calm" />
      <div className="aurora-blob bottom-10 right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-indigo-600/10 animate-float-slow" />
      <div className="aurora-blob top-1/2 right-1/3 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-sky-500/10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Interactive Theme Switcher Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Palette className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 font-semibold">Recruiter Visual Themes:</span>
            <span className="text-slate-500 hidden md:inline">• Preview live MNC aesthetic styles</span>
          </div>
          <ThemeSwitcher currentTheme={currentTheme} onSelectTheme={onSelectTheme} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 7 Columns: Executive Typography & MNC Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Executive Status Pill Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                TCS Assistant System Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/25 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Netherlands Client Operations
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/25 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                Anthropic Certified Claude Dev
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.18]">
                Distributed Systems, <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  High-Throughput Databases
                </span> <br />
                <span className="text-slate-300 text-2xl sm:text-4xl xl:text-5xl font-light">
                  & AI-Augmented Engineering.
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed pt-1 sm:pt-2">
                Hello, I'm <span className="text-white font-semibold">{personalInfo.name}</span>. 
                A Software Engineer specializing in <span className="text-blue-300 font-medium">Java (11/17), Spring Boot, Distributed Systems & SQL query optimization</span>. 
                Currently resolving 30+ mission-critical incidents weekly for 200–500 European users at TCS, backed by 
                5-Star HackerRank problem solving and demonstrated engineering leadership.
              </p>
            </div>

            {/* MNC Alignment Strip */}
            <div className="p-4 sm:p-5 rounded-2xl aurora-card border border-white/[0.08] text-left max-w-xl mx-auto lg:mx-0 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/15 text-blue-300 shrink-0 mt-0.5">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center justify-between">
                    <span>MNC & Tier-1 Engineering Profile</span>
                    <span className="text-emerald-400 font-mono text-[11px]">SDE-1 / SDE-2 Target</span>
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
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-white" />
                <span>Download Official Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterModal}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-semibold text-slate-200 aurora-card hover:bg-white/[0.08] hover:border-blue-400/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Target className="w-4 h-4 text-blue-400" />
                <span>ATS Executive Brief</span>
              </button>

              <a
                href="#leadership"
                className="w-full sm:w-auto px-4 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Leadership Profile</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
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

          {/* Right 5 Columns: Interactive 3D Celestial Core & Executive Visual Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Celestial Astrolabe in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
              <Canvas3D />
            </div>

            {/* Interactive Executive Visual Card */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] rounded-3xl p-5 aurora-card-glow border border-blue-400/35 shadow-2xl backdrop-blur-2xl group transition-all duration-500">
              
              {/* Card Mode Tabs */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08] text-[11px]">
                <span className="font-mono text-slate-400 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Display Mode:</span>
                </span>
                
                <div className="flex items-center gap-1 p-0.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  <button
                    onClick={() => setVisualMode('monogram')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      visualMode === 'monogram' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Executive Monogram & Hologram"
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => setVisualMode('real')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      visualMode === 'real' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Upload or preview your real profile photo"
                  >
                    My Photo
                  </button>
                  <button
                    onClick={() => setVisualMode('avatar')}
                    className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                      visualMode === 'avatar' 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="3D Stylized Action Figure"
                  >
                    3D Figure
                  </button>
                </div>
              </div>

              {/* Main Visual Display Area */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4.2] bg-[#050814] border border-white/[0.1] shadow-2xl flex flex-col items-center justify-center p-2 group">
                
                {/* Mode 1: Executive 3D Monogram */}
                {visualMode === 'monogram' && (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 p-6">
                    <div className="relative">
                      {/* Pulsing Concentric Tech Rings */}
                      <div className="w-28 h-28 rounded-full border-2 border-amber-500/30 animate-spin-very-slow flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-emerald-400/40" />
                      </div>
                      
                      {/* Monogram Center */}
                      <div className="absolute inset-0 m-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-emerald-600 to-sky-400 p-[1.5px] shadow-2xl shadow-amber-500/30">
                        <div className="w-full h-full bg-[#080d1a] rounded-[14px] flex items-center justify-center">
                          <span className="text-3xl font-black font-mono bg-gradient-to-r from-amber-300 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
                            SG
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-lg font-extrabold text-white">Sourav Gupta</h4>
                      <p className="text-xs text-amber-300 font-mono">Software Engineer • Quantitative Systems</p>
                      <p className="text-[11px] text-slate-400 max-w-[220px]">
                        TCS Netherlands Client POC • Dual ServiceNow CAD/CSA
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        5-Star C++ & SQL
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        Claude Certified
                      </span>
                    </div>
                  </div>
                )}

                {/* Mode 2: Real Profile Photo (with 1-click photo upload) */}
                {visualMode === 'real' && (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {uploadedPhoto ? (
                      <img 
                        src={uploadedPhoto} 
                        alt="Sourav Gupta Headshot" 
                        className="w-full h-full object-cover object-top rounded-xl"
                      />
                    ) : (
                      <div className="text-center space-y-3 p-4">
                        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                          <Upload className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Upload Your Real Photo</p>
                          <p className="text-[11px] text-slate-400 mt-1">
                            Click below to select your headshot or place <code className="text-amber-300 font-mono">profile.jpg</code> in your public folder.
                          </p>
                        </div>
                        <label 
                          htmlFor="direct-photo-upload" 
                          className="inline-block px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white cursor-pointer transition-colors shadow-lg shadow-amber-500/25"
                        >
                          Select Photo From Computer
                          <input 
                            id="direct-photo-upload" 
                            type="file" 
                            accept="image/*" 
                            onChange={handleCustomPhotoUpload} 
                            className="hidden" 
                          />
                        </label>
                      </div>
                    )}
                  </div>
                )}

                {/* Mode 3: Full Body Stylized 3D Action Figure */}
                {visualMode === 'avatar' && (
                  <div className="w-full h-full relative overflow-hidden rounded-xl">
                    <img
                      src="/action_figure.jpg"
                      alt="Sourav Gupta - Full Body 3D Action Figure"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      onError={(e) => {
                        e.currentTarget.src = "/action_figure.png";
                      }}
                    />
                    
                    {/* Bottom Floating Figurine Plate */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>Sourav Gupta</span>
                          <span className="text-[9px] font-mono text-amber-300 bg-amber-950/80 px-1.5 py-0.2 rounded border border-amber-400/30">
                            SDE Figurine
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Quantitative Systems & Backend SDE
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </div>
                )}

                {/* Top Status Beacon */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified SDE Talent</span>
                </div>

                {/* Upload action icon if photo is uploaded */}
                {visualMode === 'real' && uploadedPhoto && (
                  <label 
                    htmlFor="reupload-photo-input" 
                    className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 hover:bg-black/90 text-slate-300 hover:text-white border border-white/[0.1] backdrop-blur-md cursor-pointer transition-all"
                    title="Change uploaded photo"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <input 
                      id="reupload-photo-input" 
                      type="file" 
                      accept="image/*" 
                      onChange={handleCustomPhotoUpload} 
                      className="hidden" 
                    />
                  </label>
                )}

              </div>

              {/* Bottom Metrics Bar */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="font-extrabold text-blue-300">200–500 EU Users</div>
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
                className="p-5 rounded-2xl aurora-card hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] text-blue-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-200 transition-colors">
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
