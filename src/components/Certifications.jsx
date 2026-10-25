import React from 'react';
import { Award, ShieldCheck, Sparkles, Database, CheckCircle, Code } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Certified Application Developer (CAD)',
      issuer: 'ServiceNow',
      icon: ShieldCheck,
      badge: 'Platform Engineering',
      desc: 'Validated competence in application data modeling, UI policies, business rules, client scripts, flow designers, and REST integration endpoints.'
    },
    {
      title: 'Certified System Administrator (CSA)',
      issuer: 'ServiceNow',
      icon: Award,
      badge: 'Enterprise Cloud',
      desc: 'Certified administration of user roles, ACL security rules, schema configurations, CMDB instances, and ITIL incident lifecycle governance.'
    },
    {
      title: 'Claude Developer Certified',
      issuer: 'Anthropic',
      icon: Sparkles,
      badge: 'GenAI & Agents',
      desc: 'Certified proficiency in Claude 3.7 architecture, structured tool use, system prompt design, agentic validation workflows, and context window optimization.'
    },
    {
      title: 'SAP Cloud ABAP Certified',
      issuer: 'SAP',
      icon: Database,
      badge: 'Enterprise Systems',
      desc: 'Demonstrated proficiency in SAP cloud programming model, core data services (CDS), and server-side transactional processing.'
    },
    {
      title: '5-Star HackerRank in C++ & SQL',
      issuer: 'HackerRank',
      icon: Code,
      badge: 'Algorithmic Rigor',
      desc: 'Achieved top 5-star ranking across advanced memory manipulation, algorithmic complexity, pointers, and sub-second SQL relational query joins.'
    },
    {
      title: 'B.Tech in Information Technology',
      issuer: 'JECRC Foundation (RTU)',
      icon: CheckCircle,
      badge: 'CGPA: 8.4 / 10',
      desc: 'Rigorous 4-year engineering curriculum covering Distributed Operating Systems, DBMS Internals, Computer Networks, and Software Architecture.'
    }
  ];

  return (
    <section id="credentials" className="relative w-[92%] max-w-[1440px] mx-auto py-24 sm:py-32 border-t border-[#c2a4ff]/10">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c2a4ff] mb-3">
          Accreditations
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#eae5ec]">
          Verified <span className="text-[#c2a4ff]">credentials</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <div
              key={idx}
              className="ehansih-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#18141c] border border-[#c2a4ff]/20 flex items-center justify-center text-[#c2a4ff] group-hover:bg-[#c2a4ff] group-hover:text-[#0b080c] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-[#c2a4ff] px-2.5 py-0.5 rounded-full bg-[#c2a4ff]/10 border border-[#c2a4ff]/20">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#eae5ec] group-hover:text-[#c2a4ff] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs font-medium text-[#c2a4ff]/70 mt-1 mb-2.5">
                  {cert.issuer}
                </div>
                <p className="text-xs text-[#eae5ec]/60 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#c2a4ff]/10 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Officially Verified Credential</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
