import React from 'react';
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
  ArrowUpRight
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
  Target: Target
};

const Hero = ({ onOpenRecruiterModal }) => {
  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.2 },
      colors: ['#818cf8', '#c084fc', '#38bdf8', '#34d399']
    });
  };

  return (
    <section className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Soothing Ambient Aurora Glows */}
      <div className="aurora-blob top-10 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-indigo-600/12 animate-pulse-calm" />
      <div className="aurora-blob bottom-10 right-10 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-purple-600/12 animate-float-slow" />
      <div className="aurora-blob top-1/2 right-1/3 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-sky-500/10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Spacious, Relaxing Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                TCS Assistant System Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                Anthropic Certified Claude Dev
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
                Resilient Backends, <br />
                <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
                  High-Throughput Databases
                </span> <br />
                <span className="text-slate-300 text-2xl sm:text-4xl xl:text-5xl font-light">
                  Amplified with Generative AI.
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed pt-1 sm:pt-2">
                Hello, I'm <span className="text-white font-semibold">{personalInfo.name}</span>. 
                I design robust server systems, optimize multi-million row SQL architectures, and orchestrate enterprise workflows in 
                <span className="text-indigo-200 font-medium"> Java, SQL, & Cloud</span>—leveraging AI agentic workflows to accelerate delivery with zero compromise on code quality.
              </p>
            </div>

            {/* Recruiter Thesis Card - Clean Glass */}
            <div className="p-4 sm:p-6 rounded-2xl aurora-card border border-white/[0.08] text-left max-w-xl mx-auto lg:mx-0 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-500/15 text-indigo-300 shrink-0 mt-0.5">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-indigo-300">
                    Why Recruiters Value This Profile
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    AI automates boilerplate syntax, which makes deep Computer Science intuition irreplaceable. 
                    I combine <span className="text-sky-300 font-medium">5-Star HackerRank C++/SQL fundamentals</span> with 
                    <span className="text-purple-300 font-medium"> Anthropic Claude Developer certification</span> and 
                    real-world client delivery for a 200–500 user European client at TCS.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Sourav_Gupta_Resume.pdf"
                onClick={triggerDownloadConfetti}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-white" />
                <span>Download Verified Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterModal}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-semibold text-slate-200 aurora-card hover:bg-white/[0.08] hover:border-indigo-400/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Target className="w-4 h-4 text-indigo-400" />
                <span>ATS Recruiter Summary</span>
              </button>

              <a
                href="#skills"
                className="w-full sm:w-auto px-4 py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Skills</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-400">
              <span className="text-slate-500 font-medium mr-1">Core Tech:</span>
              {['Java', 'SQL (40% Speedup)', 'Claude API', 'ServiceNow CAD/CSA', 'Salesforce Apex', 'System Design', 'Azure'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-300 font-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Hypnotic 3D Celestial Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[540px] flex items-center justify-center">
              
              {/* Soft Ambient Radiance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-sky-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Three.js Canvas */}
              <Canvas3D />

              {/* Floating Calming Annotations */}
              <div className="absolute top-4 right-2 sm:right-6 p-4 rounded-2xl aurora-card border border-white/[0.1] text-xs shadow-2xl animate-float-slow pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
                  <span className="font-semibold text-sky-200">AI-Augmented Velocity</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">3-5x Faster Delivery with Claude API</div>
              </div>

              <div className="absolute bottom-6 left-2 sm:left-6 p-4 rounded-2xl aurora-card border border-white/[0.1] text-xs shadow-2xl animate-float-reverse pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-semibold text-emerald-200">High-Performance SQL</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">40% Query Acceleration via Indexing</div>
              </div>

            </div>
          </div>

        </div>

        {/* Quantifiable Impact Metrics Ribbon - Airy & Spacious */}
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
