import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { TCSWorkloadDonutGraph } from './VisualGraphs';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            Verified Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production & <span className="text-slate-400 font-light">Enterprise Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From European enterprise client operations at TCS to sub-second database engineering and cloud architectures.
          </p>
        </div>

        {/* Visual Graph: TCS Production Workload Distribution */}
        <div className="max-w-2xl mx-auto mb-14">
          <TCSWorkloadDonutGraph />
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/[0.08] ml-2 sm:ml-8 lg:ml-24 space-y-12">
          {experienceData.map((exp, index) => {
            const isCurrent = exp.period.includes('Present');
            return (
              <div key={index} className="relative pl-6 sm:pl-10 group">
                
                {/* Node */}
                <div className={`absolute -left-[13px] sm:-left-[17px] top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-[#080c15] flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isCurrent 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-white/[0.1] text-slate-400'
                }`}>
                  <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${isCurrent ? 'bg-white' : 'bg-slate-400'}`} />
                </div>

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 border ${
                  isCurrent 
                    ? 'pro-card-glow border-white/[0.18] shadow-xl' 
                    : 'pro-card hover:border-white/[0.14]'
                }`}>
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                        <Building2 className="w-4 h-4 text-blue-400" />
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-normal">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono-code space-y-1">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Client Context Banner */}
                  <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <span className="font-medium text-slate-400">Target Ecosystem / Client Scope:</span>
                    <span className="font-mono-code text-slate-200">{exp.client}</span>
                  </div>

                  {/* Bullet Points */}
                  <div className="mt-5 space-y-3">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono-code font-medium bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
