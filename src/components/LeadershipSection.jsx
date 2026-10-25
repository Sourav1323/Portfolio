import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  BookOpen
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
    <section id="leadership" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            Executive & Management Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Leadership & <br />
            <span className="text-slate-400 font-light">Stakeholder Management</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Great software engineering at MNC scale requires clear communication, client trust, 
            and the ability to guide multidisciplinary teams under pressure.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, index) => {
            const Icon = iconMap[index] || Users;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl pro-card hover:border-white/[0.18] flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white/[0.04] text-emerald-400 border border-white/[0.06]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono-code font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {item.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-blue-400 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
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
