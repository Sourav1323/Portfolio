import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Mailto fallback or simulation
    setTimeout(() => {
      setStatus('sent');
      const subject = encodeURIComponent(`Engineering Inquiry from ${formData.name} (${formData.organization || 'Direct'})`);
      const body = encodeURIComponent(`Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="relative w-[92%] max-w-[1440px] mx-auto py-24 sm:py-32 border-t border-[#c2a4ff]/10">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#c2a4ff] mb-3">
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#eae5ec]">
          Let's <span className="text-[#c2a4ff]">connect</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Contact Form matching ehansih style */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-[#c2a4ff] block mb-2">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Satya Nadella / Hiring Manager"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-[#c2a4ff]/20 text-[#eae5ec] py-2.5 text-sm focus:outline-none focus:border-[#c2a4ff] transition-colors placeholder-[#eae5ec]/20"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-[#c2a4ff] block mb-2">
              Organization / Company
            </label>
            <input
              type="text"
              placeholder="e.g. Google, Microsoft, Tech Startup"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full bg-transparent border-b border-[#c2a4ff]/20 text-[#eae5ec] py-2.5 text-sm focus:outline-none focus:border-[#c2a4ff] transition-colors placeholder-[#eae5ec]/20"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-[#c2a4ff] block mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="your.email@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-[#c2a4ff]/20 text-[#eae5ec] py-2.5 text-sm focus:outline-none focus:border-[#c2a4ff] transition-colors placeholder-[#eae5ec]/20"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold tracking-widest uppercase text-[#c2a4ff] block mb-2">
              Message / Opportunity Details
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about the engineering role, team, or project challenge..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b border-[#c2a4ff]/20 text-[#eae5ec] py-2.5 text-sm focus:outline-none focus:border-[#c2a4ff] transition-colors resize-none placeholder-[#eae5ec]/20"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#c2a4ff] hover:bg-white text-[#0b080c] font-bold text-xs tracking-wider transition-all shadow-lg shadow-[#c2a4ff]/20 active:scale-95 disabled:opacity-50"
            >
              <span>{status === 'sending' ? 'PREPARING...' : 'SEND MESSAGE →'}</span>
            </button>

            {status === 'sent' && (
              <p className="text-xs text-emerald-400 mt-3 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Message composer launched. Looking forward to discussing!</span>
              </p>
            )}
          </div>
        </form>

        {/* Right: Contact Links matching ehansih contact-links */}
        <div className="flex flex-col gap-6 pt-2">
          <div className="flex flex-col pb-5 border-b border-[#c2a4ff]/10">
            <span className="text-[11px] tracking-widest uppercase text-[#c2a4ff] mb-1 font-semibold">
              LinkedIn
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-[#eae5ec]/75 hover:text-[#c2a4ff] transition-colors flex items-center gap-1.5"
            >
              <span>linkedin.com/in/sourav-gupta-3ab283228</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col pb-5 border-b border-[#c2a4ff]/10">
            <span className="text-[11px] tracking-widest uppercase text-[#c2a4ff] mb-1 font-semibold">
              GitHub
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-[#eae5ec]/75 hover:text-[#c2a4ff] transition-colors flex items-center gap-1.5"
            >
              <span>github.com/Sourav1323</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col pb-5 border-b border-[#c2a4ff]/10">
            <span className="text-[11px] tracking-widest uppercase text-[#c2a4ff] mb-1 font-semibold">
              Direct Email
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm sm:text-base text-[#eae5ec]/75 hover:text-[#c2a4ff] transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-col pb-5 border-b border-[#c2a4ff]/10">
            <span className="text-[11px] tracking-widest uppercase text-[#c2a4ff] mb-1 font-semibold">
              Direct Phone / WhatsApp
            </span>
            <a
              href="tel:+918619377860"
              className="text-sm sm:text-base text-[#eae5ec]/75 hover:text-[#c2a4ff] transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>

          <div className="flex flex-col pb-5 border-b border-[#c2a4ff]/10">
            <span className="text-[11px] tracking-widest uppercase text-[#c2a4ff] mb-1 font-semibold">
              Target Roles
            </span>
            <span className="text-sm sm:text-base text-[#eae5ec]/75">
              Software Development Engineer (SDE-1 / SDE-2) · Backend Engineer · Systems Architect
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] tracking-widest uppercase text-[#c2a4ff] mb-1 font-semibold">
              Location & Timezone
            </span>
            <span className="text-sm sm:text-base text-[#eae5ec]/75">
              India · Bangalore / Jaipur · IST (UTC+5:30) · Open to Relocation & Global Remote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
