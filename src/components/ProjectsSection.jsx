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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-blob top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-md">
            <FolderGit2 className="w-4 h-4 text-purple-400" />
            Featured Software Systems
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">Scale & Real Utility</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            End-to-end architectures demonstrating algorithmic thinking, strict data integrity, and rapid delivery under hackathon sprints.
          </p>
        </div>

        {/* Projects Grid - Spacious & Uncrowded */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl aurora-card border border-white/[0.08] hover:border-indigo-400/40 transition-all duration-400 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-950/40"
            >
              <div className="p-8 sm:p-9 space-y-6">
                
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Metrics Pill */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs font-semibold text-amber-200 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{project.metrics}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Architecture
                  </div>
                  {project.architecture.map((arch, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Footer: Tech Stack & Actions */}
              <div className="p-8 pt-0 mt-2">
                <div className="flex flex-wrap gap-2 pb-5 border-b border-white/[0.06]">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-5 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <span className="text-xs text-slate-500 font-mono">
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
