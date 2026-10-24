import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

const iconMap = [
  ShieldCheck,
  Users,
  Award,
  BookOpen
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-blob top-1/4 right-10 w-[550px] h-[550px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-md">
            <Users className="w-4 h-4 text-emerald-400" />
            Executive & Management Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Leadership & <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
              Stakeholder Management
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            Great software engineering at MNC scale requires clear communication, client trust, 
            and the ability to guide multidisciplinary teams under pressure.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((item, index) => {
            const Icon = iconMap[index] || Users;
            return (
              <div
                key={index}
                className="p-8 sm:p-10 rounded-3xl aurora-card border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-400 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] text-emerald-300 group-hover:scale-110 transition-transform border border-white/[0.06]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/30">
                      {item.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-indigo-300 mt-1">
                      {item.organization}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
