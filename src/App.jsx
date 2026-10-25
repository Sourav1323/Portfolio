import React, { useState, useEffect } from 'react';
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
import { 
  FileDown, 
  Target, 
  ArrowRight, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  Sparkles,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from './data/portfolioData';

// Reusable Next Page Transition Banner
const PageTransitionBanner = ({ nextPage, pageNumber, title, subtitle, onSelectPage, icon: Icon }) => (
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
    <div 
      onClick={() => onSelectPage(nextPage)}
      className="p-6 sm:p-8 rounded-2xl pro-card hover:border-slate-600 transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl"
    >
      <div className="flex items-center gap-4">
        <div className="p-3.5 rounded-xl bg-slate-800/80 text-blue-400 border border-slate-700/60 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <span>Next Chapter • {pageNumber}</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-slate-800/80 group-hover:bg-white group-hover:text-slate-950 px-4 py-2.5 rounded-xl border border-slate-700/60 transition-all self-start sm:self-center shrink-0">
        <span>Proceed</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </div>
);

function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['overview', 'engineering', 'experience', 'projects'].includes(hash)) {
      return hash;
    }
    return 'overview';
  });
  const [isAllView, setIsAllView] = useState(false);

  // Sync hash on URL changes or tab changes
  const handleSelectPage = (pageId) => {
    setActivePage(pageId);
    setIsAllView(false);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleAllView = () => {
    setIsAllView((prev) => {
      const next = !prev;
      if (next) {
        window.location.hash = 'all';
      } else {
        window.location.hash = activePage;
      }
      return next;
    });
  };

  // Keyboard navigation shortcuts [1, 2, 3, 4, A]
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore keydown if user is typing in input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === '1') handleSelectPage('overview');
      if (e.key === '2') handleSelectPage('engineering');
      if (e.key === '3') handleSelectPage('experience');
      if (e.key === '4') handleSelectPage('projects');
      if (e.key === 'a' || e.key === 'A') handleToggleAllView();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
      
      {/* Top Glass Navbar & Floating Capsule Dock */}
      <Navbar 
        activePage={activePage}
        onSelectPage={handleSelectPage}
        onOpenRecruiterModal={() => setRecruiterModalOpen(true)}
        isAllView={isAllView}
        onToggleAllView={handleToggleAllView}
      />

      {/* Main Content Area */}
      <main className="min-h-[85vh]">
        {isAllView ? (
          /* Continuous Scroll: View All */
          <div>
            <Hero onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
            <SkillsShowcase />
            <div id="architectures">
              <IndustryPillars />
            </div>
            <AIEraAdvantage />
            <div id="experience">
              <ExperienceTimeline />
            </div>
            <div id="leadership">
              <LeadershipSection />
            </div>
            <CertificationsBadges />
            <div id="projects">
              <ProjectsSection />
            </div>
            <div id="ats-hub">
              <ATSRecruiterHub />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
          </div>
        ) : (
          /* Structured Multi-Page Views (Eliminates Text & Content Fatigue) */
          <div>
            {activePage === 'overview' && (
              <div className="animate-in fade-in duration-300">
                <Hero onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
                <PageTransitionBanner
                  nextPage="engineering"
                  pageNumber="02"
                  title="Engineering & AI Systems Architecture"
                  subtitle="Explore interactive skills sandbox, low-latency SQL benchmarks, and specialized domain architectures."
                  onSelectPage={handleSelectPage}
                  icon={Cpu}
                />
              </div>
            )}

            {activePage === 'engineering' && (
              <div className="animate-in fade-in duration-300 pt-20">
                <SkillsShowcase />
                <IndustryPillars />
                <AIEraAdvantage />
                <PageTransitionBanner
                  nextPage="experience"
                  pageNumber="03"
                  title="Career Trajectory & Leadership Milestones"
                  subtitle="Review TCS European client operations, 40% database tuning at Celebal, and verified credentials."
                  onSelectPage={handleSelectPage}
                  icon={Briefcase}
                />
              </div>
            )}

            {activePage === 'experience' && (
              <div className="animate-in fade-in duration-300 pt-20">
                <ExperienceTimeline />
                <LeadershipSection />
                <CertificationsBadges />
                <PageTransitionBanner
                  nextPage="projects"
                  pageNumber="04"
                  title="Featured Projects & 98.5% ATS Recruiter Hub"
                  subtitle="Inspect production software architectures, 1-click ATS plain-text copy, and official resume download."
                  onSelectPage={handleSelectPage}
                  icon={FolderGit2}
                />
              </div>
            )}

            {activePage === 'projects' && (
              <div className="animate-in fade-in duration-300 pt-20">
                <ProjectsSection />
                <ATSRecruiterHub />
                <ContactSection />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Fast-Track Modal */}
      <RecruiterModal 
        isOpen={recruiterModalOpen} 
        onClose={() => setRecruiterModalOpen(false)} 
      />

      {/* Floating Recruiter Quick Access Bar (Bottom Right on Desktop) */}
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