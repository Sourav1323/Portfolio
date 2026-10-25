import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import { certificationsData, personalInfo } from '../data/portfolioData';

const CertificationsBadges = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            Verified Credentials & Accreditations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Certifications & <span className="text-slate-400 font-light">Recognitions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Independent proof of domain expertise across enterprise platforms, generative AI, and algorithms.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl pro-card hover:border-white/[0.18] flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-code font-medium text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.08]">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">{cert.badge}</span>
                <span className="text-emerald-400 font-mono-code text-[11px]">Active Credential</span>
              </div>
            </div>
          ))}

          {/* Education & Academic Excellence Card */}
          <div className="p-6 sm:p-7 rounded-3xl pro-card hover:border-white/[0.18] flex flex-col justify-between group shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code font-medium text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.08]">
                  Academic Foundation
                </span>
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  CGPA: 8.4
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                {personalInfo.education.degree}
              </h3>

              <div className="space-y-1 text-xs text-slate-300">
                <div className="font-semibold text-white">{personalInfo.education.institution}</div>
                <div className="text-slate-400">{personalInfo.education.affiliation}</div>
                <div className="text-slate-400 font-mono-code text-[11px] pt-1">{personalInfo.education.duration}</div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-300">Information Technology</span>
              <span className="text-slate-400 font-mono-code text-[11px]">Graduated 2025</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CertificationsBadges;
