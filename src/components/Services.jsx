import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const domains = [
    {
      name: 'Distributed Systems & Java Backends',
      tags: ['Java 17', 'Spring Boot', 'REST APIs', 'Concurrency', 'JUnit 5'],
      desc: 'Architecting deterministic server backends, asynchronous dispatch queues, and microservices built to withstand high transactional throughput.'
    },
    {
      name: 'Database Performance & Optimization',
      tags: ['SQL Indexing', 'B-Tree Seeks', 'SCD Type 1/2', '40% Speedup', 'Execution Plans'],
      desc: 'Eliminating costly full table scans on multi-million row datasets through covering indexes, normalization, and dimensional modeling.'
    },
    {
      name: 'Enterprise Cloud & Workflow Automation',
      tags: ['ServiceNow CAD', 'ServiceNow CSA', 'Salesforce Apex', 'SAP ABAP', 'MuleSoft'],
      desc: 'Developing carrier-grade workflow scripts, business rules, and integration endpoints for Fortune 500 enterprise production ecosystems.'
    },
    {
      name: 'AI-Augmented Engineering & Agents',
      tags: ['Anthropic Claude API', 'Claude 3.7 Sonnet', 'Prompt Engineering', 'Synthetic Testing'],
      desc: 'Directing LLMs and agentic pipelines to accelerate boilerplate creation, synthesize test contracts, and debug complex integration edge cases.'
    },
    {
      name: 'Low-Level Systems & Algorithmic Rigor',
      tags: ['5-Star HackerRank', 'C/C++', 'Memory Management', 'Data Structures'],
      desc: 'Deep foundational mastery of pointers, time complexity invariants, and algorithmic optimization backed by 4 years of advanced mathematics instruction.'
    }
  ];

  return (
    <section id="services" className="relative w-[92%] max-w-[1440px] mx-auto py-24 sm:py-32 border-t border-[#c2a4ff]/10">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c2a4ff] mb-3">
          What I Do
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#eae5ec]">
          Areas of <span className="text-[#c2a4ff]">expertise</span>
        </h2>
      </div>

      {/* Services List matching ehansih interactive list */}
      <div className="flex flex-col">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="service-item group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
          >
            {/* Left: Domain Name & Short Desc */}
            <div className="flex flex-col max-w-xl">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#eae5ec] group-hover:text-[#c2a4ff] transition-colors">
                {domain.name}
              </span>
              <p className="text-xs sm:text-sm text-[#eae5ec]/50 mt-2 font-normal leading-relaxed group-hover:text-[#eae5ec]/80 transition-colors">
                {domain.desc}
              </p>
            </div>

            {/* Right: Badges & Arrow */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0 mt-3 md:mt-0">
              <div className="flex flex-wrap gap-2 max-w-xs justify-start md:justify-end">
                {domain.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] uppercase tracking-wider text-[#c2a4ff]/60 border border-[#c2a4ff]/15 px-3 py-1 rounded-full group-hover:border-[#c2a4ff]/40 group-hover:text-[#c2a4ff] transition-all bg-[#110e14]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="service-arrow w-10 h-10 rounded-full border border-[#c2a4ff]/20 flex items-center justify-center text-[#c2a4ff]/50 group-hover:text-[#c2a4ff] group-hover:border-[#c2a4ff] group-hover:bg-[#c2a4ff]/10 transition-all shrink-0">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
