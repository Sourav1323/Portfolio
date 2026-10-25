import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERTISE', href: '#services' },
    { name: 'JOURNEY', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CREDENTIALS', href: '#credentials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-6 sm:px-12 py-5 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-[#0b080c]/80 border-b border-[#c2a4ff]/10 py-4 shadow-lg shadow-black/40' : ''
        }`}
      >
        {/* Left Branding */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c2a4ff] shadow-[0_0_8px_#c2a4ff] animate-pulse"></span>
          <span className="font-bold text-sm tracking-widest text-[#eae5ec] group-hover:text-[#c2a4ff] transition-colors">
            sourav.gupta
          </span>
        </a>

        {/* Center Email (Desktop) */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="hidden md:inline-block text-xs text-[#eae5ec]/60 hover:text-[#c2a4ff] tracking-wider transition-colors"
        >
          {personalInfo.email}
        </a>

        {/* Right Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 list-none m-0 p-0 text-xs font-semibold tracking-widest text-[#eae5ec]/70">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#c2a4ff] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#0b080c] bg-[#c2a4ff] hover:bg-white transition-all shadow-md shadow-[#c2a4ff]/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#0b080c] bg-[#c2a4ff]"
          >
            RESUME
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#eae5ec] hover:text-[#c2a4ff] p-1.5 rounded-lg border border-[#c2a4ff]/20 bg-[#110e14]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b080c]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold tracking-widest text-[#eae5ec] hover:text-[#c2a4ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs text-[#c2a4ff]/70 tracking-wider mt-4"
          >
            {personalInfo.email}
          </a>
        </div>
      )}
    </>
  );
}
