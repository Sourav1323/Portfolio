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
    }, 250);
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
    }, 300);
  };

  return (
    <section id="ai-paradigm" className="py-32 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="aurora-blob top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/10" />
      <div className="aurora-blob bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-md">
            <BrainCircuit className="w-4 h-4 text-purple-400" />
            The AI Era Engineering Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why AI Replaces Commodity Coders, <br />
            <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
              But Multiplies Core Engineers
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            AI automates boilerplate templates. The developers who flourish possess deep foundational Computer Science principles 
            and treat AI as an exponential force multiplier.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid - Airy & Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          
          {/* Card 1: Vulnerable Commodity Developer */}
          <div className="p-8 sm:p-10 rounded-3xl aurora-card border border-white/[0.08] relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-white/[0.06]">
              <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-300 border border-rose-500/20">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  Vulnerable in 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">The Commodity Coder</h3>
              </div>
            </div>

            <div className="space-y-5">
              {aiVsLegacyComparison.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <div className="text-xs font-bold text-rose-300/90 uppercase tracking-wide">
                    {item.dimension}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.legacy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: AI-Augmented Systems Engineer (Sourav) */}
          <div className="p-8 sm:p-10 rounded-3xl aurora-card-glow border-indigo-400/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              HIGH RECRUITER VALUE
            </div>

            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-white/[0.08]">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                  Future-Proof Standard
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Sourav: AI-Augmented Engineer</h3>
              </div>
            </div>

            <div className="space-y-5">
              {aiVsLegacyComparison.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-indigo-400/20 space-y-1.5">
                  <div className="text-xs font-bold text-indigo-200 uppercase tracking-wide flex items-center justify-between">
                    <span>{item.dimension}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {item.sourav}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive "AI Recruiter Copilot" Terminal - Spacious & Relaxing */}
        <div className="aurora-card rounded-2xl sm:rounded-3xl p-5 sm:p-12 lg:p-14 shadow-2xl border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-white/[0.08]">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Interactive AI Recruiter Copilot
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    READY
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Instant, verified candidate insights tailored for technical recruiters & hiring managers.
                </p>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2 self-start sm:self-center bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.06]">
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
              <span>Prompt Engine Active</span>
            </div>
          </div>

          {/* Inquiry Chips */}
          <div className="pt-6 sm:pt-8 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-300" />
              <span>Recommended Recruiter Inquiries:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {recruiterCopilotQA.map((qa) => (
                <button
                  key={qa.id}
                  onClick={() => handleSelectQuestion(qa)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedQuestion === qa.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
                  }`}
                >
                  <span>{qa.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Display Box */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-8 rounded-2xl bg-[#070b16] border border-white/[0.08] relative shadow-inner">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                AI Copilot Response
              </span>
              <span>Model: Claude-3.7-Engineered</span>
            </div>

            {isTyping ? (
              <div className="flex items-center gap-3 text-slate-400 text-sm py-4">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-bounce" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs font-mono">Synthesizing verified background...</span>
              </div>
            ) : (
              <div className="text-slate-100 text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
                {activeAnswer}
              </div>
            )}
          </div>

          {/* Question Input */}
          <form onSubmit={handleCustomSubmit} className="mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask anything (e.g. 'How did he optimize SQL by 40%?' or 'Describe his client role at TCS')..."
              className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
            />
            <button
              type="submit"
              className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-indigo-500/25"
            >
              <Send className="w-4 h-4" />
              <span>Ask Copilot</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default AIEraAdvantage;
