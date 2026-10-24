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
      colors: ['#818cf8', '#c084fc', '#38bdf8', '#34d399']
    });
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-200 relative selection:bg-indigo-500/30 selection:text-indigo-200">
      
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
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 p-2 rounded-2xl aurora-card-glow border border-indigo-400/30 shadow-2xl backdrop-blur-2xl">
        <button
          onClick={() => setRecruiterModalOpen(true)}
          className="px-4 py-2.5 rounded-xl text-xs font-bold text-indigo-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all flex items-center gap-2"
          title="Open Recruiter Summary"
        >
          <Target className="w-4 h-4 text-indigo-400" />
          <span>ATS Dossier</span>
        </button>

        <a
          href={personalInfo.resumeUrl}
          download="Sourav_Gupta_Resume.pdf"
          onClick={triggerDownloadConfetti}
          className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25"
          title="Download PDF Resume"
        >
          <FileDown className="w-4 h-4 text-white" />
          <span>Resume (PDF)</span>
        </a>
      </div>

    </div>
  );
}

export default App;
