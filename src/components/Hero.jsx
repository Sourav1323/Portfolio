import React from 'react';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Container matching ehansih landing container */}
      <div className="relative w-[92%] max-w-[1440px] h-full mx-auto flex items-center justify-center">

        {/* Left Intro Text (Desktop: left-aligned, Mobile: top-centered) */}
        <div className="absolute z-20 top-[14%] lg:top-1/2 lg:-translate-y-1/2 left-4 sm:left-10 lg:left-6 xl:left-12 text-left pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#110e14] border border-[#c2a4ff]/20 text-[11px] font-mono tracking-widest text-[#c2a4ff] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c2a4ff] animate-ping" />
            <span>TCS · ASSISTANT SYSTEM ENGINEER</span>
          </div>
          <h2 className="text-[#c2a4ff] text-lg sm:text-2xl font-light tracking-[0.2em] uppercase m-0">
            Hello! I'm
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#eae5ec] leading-[1.05] mt-1">
            SOURAV<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#eae5ec] to-[#c2a4ff]">
              GUPTA
            </span>
          </h1>

          <div className="hidden sm:flex items-center gap-3 mt-6">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-[#c2a4ff] text-[#0b080c] font-bold text-xs tracking-wider hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#c2a4ff]/20"
            >
              EXPLORE WORK →
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[#110e14] border border-[#c2a4ff]/20 text-[#eae5ec] hover:border-[#c2a4ff] font-semibold text-xs tracking-wider transition-all"
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Center Portrait / Character with Radiant Rim Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70%] sm:h-[82%] lg:h-[92%] z-10 flex items-end justify-center pointer-events-none">
          <div className="relative h-full flex items-end justify-center">
            {/* The Radiant Rim Halo */}
            <div className="character-rim" />

            {/* Avatar Image */}
            <img
              src="/sourav_avatar.png"
              alt="Sourav Gupta - Software Engineer"
              className="h-full object-contain object-bottom relative z-10 filter contrast-[1.08] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(194,164,255,0.2)]"
              onError={(e) => {
                // Fallback to photo.jpg
                e.target.src = '/photo.jpg';
              }}
            />

            {/* Bottom Gradient Fade */}
            <div className="char-fade" />
          </div>
        </div>

        {/* Right Info Text (Desktop: right-aligned, Mobile: bottom-centered) */}
        <div className="absolute z-20 bottom-[10%] lg:bottom-auto lg:top-[52%] lg:-translate-y-1/2 right-4 sm:right-10 lg:right-6 xl:right-12 text-right pointer-events-auto">
          <h3 className="text-[#c2a4ff] text-base sm:text-2xl font-light tracking-[0.2em] uppercase m-0">
            A Software
          </h3>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#c481ff] uppercase leading-[1.08] mt-1">
            Distributed<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#c2a4ff] to-white">
              Architect
            </span>
          </h2>
          <p className="hidden md:block max-w-[280px] ml-auto text-xs text-[#eae5ec]/50 mt-3 font-normal leading-relaxed">
            Java 17, Spring Boot, High-Concurrency DBs, and Enterprise Cloud Systems.
          </p>

          {/* Social Links on Right */}
          <div className="flex items-center justify-end gap-3 mt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#110e14] border border-[#c2a4ff]/20 flex items-center justify-center text-[#eae5ec]/70 hover:text-[#c2a4ff] hover:border-[#c2a4ff] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#110e14] border border-[#c2a4ff]/20 flex items-center justify-center text-[#eae5ec]/70 hover:text-[#c2a4ff] hover:border-[#c2a4ff] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-full bg-[#110e14] border border-[#c2a4ff]/20 flex items-center justify-center text-[#eae5ec]/70 hover:text-[#c2a4ff] hover:border-[#c2a4ff] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Pulsing Scroll Hint at Bottom */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] tracking-[0.3em] uppercase text-[#c2a4ff]/60 hover:text-[#c2a4ff] transition-colors z-20 group"
      >
        <span>scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#c2a4ff]" />
      </a>
    </section>
  );
}
