import React, { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer matching ehansih scroll-reveal
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 4) * 0.08}s`;
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0b080c] text-[#eae5ec] selection:bg-[#c2a4ff]/30 selection:text-white">
      {/* Sleek Custom Mouse Follower */}
      <Cursor />

      {/* Ambient Glowing Orbs */}
      <div className="circle1" aria-hidden="true" />
      <div className="circle2" aria-hidden="true" />
      <div className="nav-fade" aria-hidden="true" />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Services />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
