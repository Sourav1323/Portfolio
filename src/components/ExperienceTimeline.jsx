import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-blob top-1/4 right-0 w-[550px] h-[550px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            Verified Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production & <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">Enterprise Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            From European enterprise client operations at TCS to sub-second database engineering and cloud architectures.
          </p>
        </div>

        {/* Timeline Stack - Spacious & Breathable */}
        <div className="relative border-l-2 border-white/[0.08] ml-2 sm:ml-8 lg:ml-24 space-y-12 sm:space-y-16">
          {experienceData.map((exp, index) => {
            const isCurrent = exp.period.includes('Present');
            return (
              <div key={index} className="relative pl-5 sm:pl-12 group">
                
                {/* Timeline Node Badge */}
                <div className={`absolute -left-[14px] sm:-left-[18px] top-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full border-4 border-[#080d1a] flex items-center justify-center transition-transform group-hover:scale-125 ${
                  isCurrent 
                    ? 'bg-gradient-to-tr from-indigo-500 to-sky-400 text-white shadow-xl shadow-indigo-500/40' 
                    : 'bg-white/[0.1] text-slate-300'
                }`}>
                  <div className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${isCurrent ? 'bg-white' : 'bg-indigo-400'}`} />
                </div>

                {/* Experience Card - Airy Frosted Glass */}
                <div className={`p-5 sm:p-10 rounded-2xl sm:rounded-3xl transition-all duration-400 border ${
                  isCurrent 
                    ? 'aurora-card-glow border-indigo-400/35 shadow-2xl' 
                    : 'aurora-card border-white/[0.06] hover:border-white/[0.15]'
                }`}>
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-indigo-300">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-normal">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 font-mono space-y-1">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Client Context Banner */}
                  <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-semibold text-indigo-200">Target Ecosystem / Client Scope:</span>
                    <span className="font-mono text-slate-300">{exp.client}</span>
                  </div>

                  {/* Bullet Points - Spacious Line Height */}
                  <div className="mt-6 space-y-4">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5 text-sm text-slate-300/90 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2.5">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-indigo-400/40 hover:text-white transition-colors"
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
