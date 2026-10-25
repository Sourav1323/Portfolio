import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Zap, Star, Award, CheckCircle2, Camera, Upload } from 'lucide-react';

export default function About() {
  const [photoSrc, setPhotoSrc] = useState('/photo.jpg');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const custom = localStorage.getItem('sourav_custom_photo_v2');
    if (custom) setPhotoSrc(custom);

    const onPhotoUpdated = () => {
      const updated = localStorage.getItem('sourav_custom_photo_v2');
      if (updated) setPhotoSrc(updated);
    };

    window.addEventListener('photo_updated', onPhotoUpdated);
    window.addEventListener('storage', onPhotoUpdated);
    return () => {
      window.removeEventListener('photo_updated', onPhotoUpdated);
      window.removeEventListener('storage', onPhotoUpdated);
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          const result = uploadEvent.target.result;
          setPhotoSrc(result);
          localStorage.setItem('sourav_custom_photo_v2', result);
          window.dispatchEvent(new Event('photo_updated'));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const stats = [
    { num: '99.4%', label: 'SLA Adherence' },
    { num: '40%', label: 'DB Speed Boost' },
    { num: '5-Star', label: 'C++ & SQL Rank' },
    { num: '30+', label: 'Incidents/Wk Fixed' },
  ];

  const highlights = [
    'Primary Technical POC for 200–500 Netherlands enterprise users at TCS',
    'Optimized complex SQL schemas eliminating 2.4M-row full scans at Celebal',
    'Dual-Certified ServiceNow CAD/CSA & Anthropic Claude Developer',
    'Top 20 of 250 squads nationwide in Smart City Hackathon 24-hr sprint',
  ];

  return (
    <section id="about" className="relative w-[92%] max-w-[1440px] mx-auto py-24 sm:py-32 border-t border-[#c2a4ff]/10">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c2a4ff] mb-3">
          Who I Am
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#eae5ec]">
          Engineering scalable systems with <span className="text-[#c2a4ff]">precision</span>
        </h2>
      </div>

      {/* Grid: Bio + Stats & Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (Bio + Stats) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <p className="text-base sm:text-lg text-[#eae5ec]/80 leading-relaxed font-light">
            I'm <strong className="text-white font-semibold">Sourav Gupta</strong> — a Backend Software Developer and Systems Engineer currently at <span className="text-[#c2a4ff] font-medium">Tata Consultancy Services (TCS)</span>, serving as the primary technical point of contact for an international enterprise engineering client based in the Netherlands.
          </p>

          <p className="text-sm sm:text-base text-[#eae5ec]/65 leading-relaxed">
            I specialize in crafting high-throughput server backends, tuning relational database architectures, and engineering automated platform workflows. With a foundation rooted in algorithmic rigor (5-Star C++ and SQL on HackerRank) and certified expertise across ServiceNow and the Anthropic Claude ecosystem, I build resilient systems that perform under enterprise SLA pressure.
          </p>

          {/* Key Bullet Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#eae5ec]/75">
                <CheckCircle2 className="w-4 h-4 text-[#c2a4ff] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Big Stat Counters matching ehansih about-stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#c2a4ff]/10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#c2a4ff] tracking-tight">
                  {s.num}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#eae5ec]/50 font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sleek Photo Card with Aura */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#c2a4ff]/20 bg-[#110e14] group shadow-2xl shadow-[#c2a4ff]/10">
            {/* Glowing Accent Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c2a4ff]/20 rounded-full filter blur-2xl pointer-events-none" />

            {/* Change Photo Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#0b080c]/80 backdrop-blur-md border border-[#c2a4ff]/30 text-[#c2a4ff] hover:text-white hover:border-[#c2a4ff] text-[11px] font-medium flex items-center gap-1.5 shadow-lg transition-all"
              title="Upload another photo from your device"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Change Photo</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={photoSrc}
                alt="Sourav Gupta"
                className="w-full h-full object-cover object-top filter brightness-[0.96] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = '/photo.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b080c] via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Card Footer Info */}
            <div className="p-6 relative z-10 -mt-12 bg-gradient-to-b from-transparent to-[#110e14]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">Sourav Gupta</h3>
                  <p className="text-xs text-[#c2a4ff]">B.Tech IT · JECRC (CGPA 8.4)</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#0b080c] border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE POC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
