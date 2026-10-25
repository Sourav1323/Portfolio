import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  BrainCircuit, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  Flame,
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';

const softSkillsData = [
  {
    id: 'crisis-management',
    title: 'High-Stakes Crisis Management',
    tag: 'TCS Production P1/P2 SLAs',
    score: 95,
    icon: Flame,
    color: 'emerald',
    badge: 'Composure Under Pressure',
    realWorldScenario: 'Managing SLA incident resolutions (30+ weekly) for 200–500 international European enterprise users at TCS.',
    recruiterInsight: 'Remains calm and analytical during critical outages, stabilizing database locks and platform incidents within tight contractual timeboxes without panic.',
    behavioralPillars: [
      'Zero-blame post-mortem methodology',
      'Rapid root-cause triage under SLA countdowns',
      'Clear, transparent status updates to senior stakeholders'
    ]
  },
  {
    id: 'stakeholder-communication',
    title: 'Cross-Cultural Stakeholder Empathy',
    tag: 'Netherlands Enterprise Client POC',
    score: 96,
    icon: MessageSquare,
    color: 'blue',
    badge: 'Client Trust & Executive Clarity',
    realWorldScenario: 'Acting as primary technical point of contact bridging offshore engineering squads with European client leads.',
    recruiterInsight: 'Translates complex Java/SQL system anomalies into concise business impacts, preventing misunderstandings and building long-term executive trust.',
    behavioralPillars: [
      'Translating deep technical debt into business ROI',
      'Active listening and respectful cross-cultural alignment',
      'Transparent expectation setting on release timelines'
    ]
  },
  {
    id: 'mentorship-empathy',
    title: 'Empathetic Mentorship & Patience',
    tag: '4-Year Mathematics Mentorship',
    score: 98,
    icon: HeartHandshake,
    color: 'amber',
    badge: 'People-First Leadership',
    realWorldScenario: 'Guided 7 high-school students to achieve 95%+ marks in advanced mathematics over a dedicated 4-year mentorship.',
    recruiterInsight: 'Demonstrates deep patience in technical knowledge transfer, onboarding junior engineers quickly, and simplifying abstract algorithmic concepts.',
    behavioralPillars: [
      'Breaking complex abstractions into intuitive mental models',
      'High emotional intelligence (EQ) and positive reinforcement',
      'Fostering psychological safety for rapid learning'
    ]
  },
  {
    id: 'squad-leadership',
    title: 'High-Velocity Squad Leadership',
    tag: 'Smart City Hackathon (Top 20/250)',
    score: 94,
    icon: Users,
    color: 'purple',
    badge: 'Decisive Team Coordination',
    realWorldScenario: 'Directed a 4-person engineering team in an intensive 24-hour sprint, ranking in the top 8% nationwide.',
    recruiterInsight: 'Knows when to delegate, unblock bottlenecks, resolve internal technical debates, and keep team morale high under intense crunch.',
    behavioralPillars: [
      'Clear task partitioning based on individual engineer strengths',
      'Resolving architecture disagreements with data-backed decisions',
      'Protecting developer flow state during rapid delivery'
    ]
  },
  {
    id: 'ownership-accountability',
    title: 'Radical Ownership & Accountability',
    tag: 'Dual ServiceNow & Claude Certified',
    score: 97,
    icon: ShieldCheck,
    color: 'emerald',
    badge: 'Self-Driven Growth',
    realWorldScenario: 'Self-funded and completed dual ServiceNow certifications (CAD & CSA) and Anthropic Claude Developer certification.',
    recruiterInsight: 'Takes end-to-end responsibility for code from design to production monitoring. Proactively eliminates tech debt before it impacts users.',
    behavioralPillars: [
      'End-to-end accountability without hand-offs',
      'Relentless continuous upskilling beyond job scope',
      'High integrity in acknowledging and fixing production bugs'
    ]
  }
];

const SoftSkillsMatrix = () => {
  const [activeSkill, setActiveSkill] = useState(softSkillsData[0]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
            Human Leadership & Emotional Intelligence (EQ)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soft Skills & <span className="text-emerald-400 font-light">Stakeholder Leadership</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Code alone does not scale systems. Great software engineers possess the emotional intelligence, client empathy, 
            and crisis composure needed to align international teams and deliver mission-critical software.
          </p>
        </div>

        {/* Soft Skills Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 5 Cols: Skill Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {softSkillsData.map((item) => {
              const Icon = item.icon;
              const isActive = activeSkill.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveSkill(item)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isActive
                      ? 'pro-card-glow border-emerald-500/40 shadow-xl bg-slate-900/90'
                      : 'pro-card hover:border-slate-600 bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                        isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold transition-colors ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}>
                          {item.title}
                        </h4>
                        <div className="text-[11px] font-mono text-slate-400">
                          {item.tag}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.score}%
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full bg-slate-800 rounded-full h-1 mt-2 overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 7 Cols: Detailed Leadership & Behavioral Insight Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl pro-card-glow border border-emerald-500/30 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeSkill.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeSkill.title}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-[10px] uppercase font-mono text-slate-400">Recruiter Score</div>
                <div className="text-2xl font-black font-mono text-emerald-400">{activeSkill.score} / 100</div>
              </div>
            </div>

            {/* Real World Production Proof */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Enterprise Proof</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {activeSkill.realWorldScenario}
              </p>
            </div>

            {/* Recruiter Evaluation Insight */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Why Hiring Managers & MNC Leads Value This:
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                "{activeSkill.recruiterInsight}"
              </p>
            </div>

            {/* Behavioral Action Pillars */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Behavioral Habits:
              </div>
              <div className="space-y-2">
                {activeSkill.behavioralPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SoftSkillsMatrix;
