import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

const CertificationsBadges = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-md">
            <Award className="w-4 h-4 text-emerald-400" />
            Verified Credentials & Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/80 max-w-xl mx-auto">
            Independent proof of domain expertise across enterprise platforms, generative AI, and algorithms.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl aurora-card border border-white/[0.08] hover:border-indigo-400/35 transition-all duration-400 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-300 bg-indigo-950/50 px-3 py-1 rounded-lg border border-indigo-500/25">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">{cert.badge}</span>
                <span className="text-emerald-400 font-mono text-xs">Active Credential</span>
              </div>
            </div>
          ))}

          {/* Education & Academic Excellence Card */}
          <div className="p-8 rounded-3xl aurora-card border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-indigo-950/30 flex flex-col justify-between group hover:-translate-y-1.5">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/50 px-3 py-1 rounded-lg border border-purple-500/30">
                  Academic Foundation
                </span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  CGPA: 8.4
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                {personalInfo.education.degree}
              </h3>

              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <div className="font-semibold text-white">{personalInfo.education.institution}</div>
                <div className="text-slate-400">{personalInfo.education.affiliation}</div>
                <div className="text-purple-300 font-mono text-xs pt-1">{personalInfo.education.duration}</div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-purple-300">Information Technology</span>
              <span className="text-purple-400 font-mono text-xs">Graduated 2025</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationsBadges;
