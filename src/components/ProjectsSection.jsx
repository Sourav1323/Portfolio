import React from 'react';
import { 
  FolderGit2, 
  Zap, 
  CheckCircle, 
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
            Featured Software Systems
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For <span className="text-slate-400 font-light">Scale & Real Utility</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            End-to-end architectures demonstrating algorithmic thinking, strict data integrity, and rapid delivery under hackathon sprints.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl pro-card hover:border-white/[0.2] flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-blue-400">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-all" />
                </h3>

                {/* Metrics Pill */}
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-200 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{project.metrics}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Architecture
                  </div>
                  {project.architecture.map((arch, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Footer: Tech Stack & Actions */}
              <div className="p-6 pt-0 mt-2">
                <div className="flex flex-wrap gap-1.5 pb-4 border-b border-white/[0.06]">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                  <span className="text-[11px] text-slate-500 font-mono-code">
                    {project.period}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
