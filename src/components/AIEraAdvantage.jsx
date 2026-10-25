import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Send, 
  Terminal, 
  Lightbulb, 
  BrainCircuit
} from 'lucide-react';
import { aiVsLegacyComparison, recruiterCopilotQA } from '../data/portfolioData';

const AIEraAdvantage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(recruiterCopilotQA[0].id);
  const [customInput, setCustomInput] = useState('');
  const [activeAnswer, setActiveAnswer] = useState(recruiterCopilotQA[0].answer);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectQuestion = (qa) => {
    setSelectedQuestion(qa.id);
    setIsTyping(true);
    setTimeout(() => {
      setActiveAnswer(qa.answer);
      setIsTyping(false);
    }, 200);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setIsTyping(true);

    const query = customInput.toLowerCase();
    let reply = "";

    if (query.includes('hire') || query.includes('why') || query.includes('role')) {
      reply = recruiterCopilotQA[0].answer;
    } else if (query.includes('ai') || query.includes('copilot') || query.includes('claude')) {
      reply = recruiterCopilotQA[1].answer;
    } else if (query.includes('sql') || query.includes('database') || query.includes('data')) {
      reply = recruiterCopilotQA[2].answer;
    } else if (query.includes('cert') || query.includes('servicenow') || query.includes('sap')) {
      reply = recruiterCopilotQA[3].answer;
    } else {
      reply = `Sourav combines deep computer science fundamentals (5-Star C++/SQL on HackerRank, Java OOP, SCD Data Warehousing) with verified Anthropic Claude AI certifications and active enterprise client delivery for 200–500 users at TCS. He is an immediate-impact asset for modern backend and software engineering teams.`;
    }

    setTimeout(() => {
      setActiveAnswer(reply);
      setIsTyping(false);
      setCustomInput('');
    }, 250);
  };

  return (
    <section id="ai-paradigm" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <BrainCircuit className="w-3.5 h-3.5 text-blue-400" />
            The AI Era Engineering Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why AI Replaces Commodity Coders, <br />
            <span className="text-slate-400 font-light">But Multiplies Core Engineers</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            AI automates boilerplate templates. The developers who flourish possess deep foundational Computer Science principles 
            and treat AI as an exponential force multiplier.
          </p>
        </div>

        {/* Side-by-Side Visual Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Vulnerable Commodity Developer */}
          <div className="p-6 sm:p-8 rounded-3xl pro-card relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400">
                    High Vulnerability
                  </span>
                  <h3 className="text-lg font-bold text-white">The Commodity Coder</h3>
                </div>
              </div>
              <span className="text-xs font-mono bg-rose-500/10 text-rose-300 px-2.5 py-1 rounded-full border border-rose-500/20">
                1.0x Baseline
              </span>
            </div>

            {/* Visual Risk Gauge */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] mb-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">AI Replacement Threat:</span>
                <span className="text-rose-400 font-bold">High (Boilerplate Attrition)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-rose-500 h-1.5 rounded-full w-[85%]" />
              </div>
            </div>

            <div className="space-y-3">
              {aiVsLegacyComparison.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-2.5 text-xs">
                  <span className="text-rose-400 font-mono mt-0.5">✕</span>
                  <div>
                    <span className="font-semibold text-slate-300 uppercase tracking-wide mr-1.5">
                      {item.dimension}:
                    </span>
                    <span className="text-slate-400">
                      {item.legacy}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: AI-Augmented Systems Engineer (Sourav) */}
          <div className="p-6 sm:p-8 rounded-3xl pro-card-glow relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    High Recruiter Value
                  </span>
                  <h3 className="text-lg font-bold text-white">Sourav (AI-Augmented)</h3>
                </div>
              </div>
              <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                3.2x Velocity
              </span>
            </div>

            {/* Visual Advantage Gauge */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">Engineering Leverage:</span>
                <span className="text-emerald-400 font-bold">Exponential (CS Invariants + Claude)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-1.5 rounded-full w-[95%]" />
              </div>
            </div>

            <div className="space-y-3">
              {aiVsLegacyComparison.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white uppercase tracking-wide mr-1.5">
                      {item.dimension}:
                    </span>
                    <span className="text-slate-300">
                      {item.sourav}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive "AI Recruiter Copilot" Terminal */}
        <div className="pro-card rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-white/[0.06] text-white border border-white/[0.08]">
                <Bot className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Interactive AI Recruiter Copilot
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    READY
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Instant, verified candidate insights tailored for technical recruiters & hiring managers.
                </p>
              </div>
            </div>
            <div className="text-xs font-mono-code text-slate-400 flex items-center gap-2 self-start sm:self-center bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.06]">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Prompt Engine Active</span>
            </div>
          </div>

          {/* Inquiry Chips */}
          <div className="pt-6 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Recommended Inquiries:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {recruiterCopilotQA.map((qa) => (
                <button
                  key={qa.id}
                  onClick={() => handleSelectQuestion(qa)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                    selectedQuestion === qa.id
                      ? 'bg-white text-slate-900 font-semibold shadow-sm'
                      : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:text-white border border-white/[0.06]'
                  }`}
                >
                  <span>{qa.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Display Box */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#060912] border border-white/[0.08] relative">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                AI Copilot Response
              </span>
              <span className="text-[11px] text-slate-500">Claude-3.7-Engineered</span>
            </div>

            {isTyping ? (
              <div className="flex items-center gap-2.5 text-slate-400 text-xs py-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]" />
                <span className="font-mono-code">Synthesizing verified background...</span>
              </div>
            ) : (
              <div className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {activeAnswer}
              </div>
            )}
          </div>

          {/* Question Input */}
          <form onSubmit={handleCustomSubmit} className="mt-5 flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask anything (e.g. 'How did he optimize SQL by 40%?' or 'Describe his client role at TCS')..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/[0.2] transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-slate-900" />
              <span>Ask Copilot</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default AIEraAdvantage;
