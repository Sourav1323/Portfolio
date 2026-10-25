import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { ResumeButton } from './ResumeButton';
import { Terminal, Database, Cpu, Server } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-10 py-14 sm:py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* ── TOP-LEFT: 3D Terminal Orb (Desktop only) ── */}
      <div className="hidden lg:block absolute top-[6%] left-[2%] sm:left-[3%] md:left-[5%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-60} y={0} duration={0.9}>
          <div className="w-[100px] sm:w-[130px] md:w-[160px] p-4 rounded-3xl bg-gradient-to-br from-[#1C1428]/80 to-[#0F0C16]/80 border border-[#B600A8]/30 shadow-[0_15px_35px_rgba(182,0,168,0.25)] backdrop-blur-xl flex flex-col items-center gap-2 transform -rotate-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8]">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#FF8BF5]">
              JAVA 17 / OOP
            </span>
          </div>
        </FadeIn>
      </div>

      {/* ── BOTTOM-LEFT: 3D Database Node (Desktop only) ── */}
      <div className="hidden lg:block absolute bottom-[8%] left-[2%] sm:left-[4%] md:left-[6%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-60} y={0} duration={0.9}>
          <div className="w-[100px] sm:w-[130px] md:w-[160px] p-4 rounded-3xl bg-gradient-to-br from-[#101A24]/80 to-[#091118]/80 border border-[#00F5FF]/30 shadow-[0_15px_35px_rgba(0,245,255,0.2)] backdrop-blur-xl flex flex-col items-center gap-2 transform rotate-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF]">
              <Database className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#00F5FF]">
              SQL OPTIMIZED
            </span>
          </div>
        </FadeIn>
      </div>

      {/* ── TOP-RIGHT: 3D Cloud Architecture (Desktop only) ── */}
      <div className="hidden lg:block absolute top-[6%] right-[2%] sm:right-[3%] md:right-[5%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={60} y={0} duration={0.9}>
          <div className="w-[100px] sm:w-[130px] md:w-[160px] p-4 rounded-3xl bg-gradient-to-br from-[#1C1428]/80 to-[#0F0C16]/80 border border-[#7621B0]/30 shadow-[0_15px_35px_rgba(118,33,176,0.25)] backdrop-blur-xl flex flex-col items-center gap-2 transform rotate-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#7621B0]/20 flex items-center justify-center text-[#BBCCD7]">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#A855F7]" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#BBCCD7]">
              SERVICENOW CAD
            </span>
          </div>
        </FadeIn>
      </div>

      {/* ── BOTTOM-RIGHT: 3D High Throughput Server (Desktop only) ── */}
      <div className="hidden lg:block absolute bottom-[8%] right-[2%] sm:right-[4%] md:right-[6%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={60} y={0} duration={0.9}>
          <div className="w-[100px] sm:w-[130px] md:w-[160px] p-4 rounded-3xl bg-gradient-to-br from-[#141E16]/80 to-[#0B130E]/80 border border-[#10B981]/30 shadow-[0_15px_35px_rgba(16,185,129,0.2)] backdrop-blur-xl flex flex-col items-center gap-2 transform -rotate-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
              <Server className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#10B981]">
              SYSTEM DESIGN
            </span>
          </div>
        </FadeIn>
      </div>

      {/* ── CENTER CONTENT ── */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl w-full text-center">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Mobile 4-card capability grid (cleanly in-flow, zero text collision) */}
        <div className="lg:hidden mt-6 grid grid-cols-2 gap-2.5 w-full max-w-md">
          <div className="p-3 rounded-2xl bg-[#141414]/90 border border-[#B600A8]/30 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] flex-shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#FF8BF5] text-left">
              JAVA 17 / OOP
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-[#141414]/90 border border-[#00F5FF]/30 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF] flex-shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#00F5FF] text-left">
              SQL OPTIMIZED
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-[#141414]/90 border border-[#7621B0]/30 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#A855F7] flex-shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#BBCCD7] text-left">
              SERVICENOW CAD
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-[#141414]/90 border border-[#10B981]/30 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#10B981]/20 flex items-center justify-center text-[#10B981] flex-shrink-0">
              <Server className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#10B981] text-left">
              SYSTEM DESIGN
            </span>
          </div>
        </div>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-8 sm:mt-14 md:mt-16 w-full flex flex-col items-center">
          <AnimatedText
            text="Backend Software Developer specializing in Java, Distributed Systems, SQL optimization, and Data Structures & Algorithms. Solved 200+ LeetCode algorithmic problems specializing in C++, Java, and relational databases. Recipient of the TCS On-the-Spot Award and Top 20 finalist across 250 teams in the Smart City Hackathon. Dual ServiceNow certified and Anthropic Claude Developer certified."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[680px]"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)' } as any}
          />

          {/* Key Achievements & Awards Badges */}
          <FadeIn delay={0.3} y={20} className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl w-full">
            <div className="p-2.5 sm:p-3.5 rounded-2xl bg-[#141414]/80 border border-[#B600A8]/30 text-center flex flex-col items-center justify-center hover:border-[#B600A8] transition-colors">
              <span className="text-[#FF8BF5] font-bold text-base sm:text-xl font-mono">200+</span>
              <span className="text-[#D7E2EA]/80 text-[9px] sm:text-xs uppercase tracking-wider mt-1">
                LeetCode Solved (DSA)
              </span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-2xl bg-[#141414]/80 border border-[#7621B0]/30 text-center flex flex-col items-center justify-center hover:border-[#7621B0] transition-colors">
              <span className="text-[#A855F7] font-bold text-base sm:text-xl font-mono">+40%</span>
              <span className="text-[#D7E2EA]/80 text-[9px] sm:text-xs uppercase tracking-wider mt-1">
                Query Speed Optimization
              </span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-2xl bg-[#141414]/80 border border-[#10B981]/30 text-center flex flex-col items-center justify-center hover:border-[#10B981] transition-colors">
              <span className="text-emerald-400 font-bold text-base sm:text-xl font-mono">Award</span>
              <span className="text-[#D7E2EA]/80 text-[9px] sm:text-xs uppercase tracking-wider mt-1">
                TCS On-the-Spot Award
              </span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-2xl bg-[#141414]/80 border border-[#BE4C00]/30 text-center flex flex-col items-center justify-center hover:border-[#BE4C00] transition-colors">
              <span className="text-[#FF7A29] font-bold text-base sm:text-xl font-mono">Top 20</span>
              <span className="text-[#D7E2EA]/80 text-[9px] sm:text-xs uppercase tracking-wider mt-1">
                Smart City Hackathon (250)
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Gap between text block and button */}
        <div className="mt-12 sm:mt-20 md:mt-24">
          <FadeIn delay={0.4} y={30} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <ResumeButton className="w-full sm:w-auto text-center justify-center" />
            <ContactButton className="w-full sm:w-auto text-center justify-center" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
