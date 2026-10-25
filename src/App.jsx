import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsShowcase from './components/SkillsShowcase';
import IndustryPillars from './components/IndustryPillars';
import LeadershipSection from './components/LeadershipSection';
import AIEraAdvantage from './components/AIEraAdvantage';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsSection from './components/ProjectsSection';
import CertificationsBadges from './components/CertificationsBadges';
import ATSRecruiterHub from './components/ATSRecruiterHub';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RecruiterModal from './components/RecruiterModal';
import { FileDown, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from './data/portfolioData';

function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#ffffff', '#60a5fa', '#34d399', '#818cf8']
    });
  };

  return (
    <div className="min-h-screen relative bg-[#080c15] text-slate-200">
      
      {/* Top Glass Navbar */}
      <Navbar onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
        <SkillsShowcase />
        <div id="architectures">
          <IndustryPillars />
        </div>
        <div id="leadership">
          <LeadershipSection />
        </div>
        <AIEraAdvantage />
        <ExperienceTimeline />
        <ProjectsSection />
        <CertificationsBadges />
        <ATSRecruiterHub />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Fast-Track Modal */}
      <RecruiterModal 
        isOpen={recruiterModalOpen} 
        onClose={() => setRecruiterModalOpen(false)} 
      />

      {/* Floating Recruiter Quick Access Bar (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-2xl pro-card-glow shadow-2xl">
        <button
          onClick={() => setRecruiterModalOpen(true)}
          className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all flex items-center gap-1.5"
          title="Open Recruiter Summary"
        >
          <Target className="w-3.5 h-3.5 text-blue-400" />
          <span>ATS Dossier</span>
        </button>

        <a
          href={personalInfo.resumeUrl}
          download="Sourav_Gupta_Resume.pdf"
          onClick={triggerDownloadConfetti}
          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-md active:scale-95"
          title="Download PDF Resume"
        >
          <FileDown className="w-3.5 h-3.5 text-slate-950" />
          <span>Resume (PDF)</span>
        </a>
      </div>

    </div>
  );
}

export default App;
