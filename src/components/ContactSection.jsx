import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            Let's Build Something High-Performance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Connect With An <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-slate-300">AI-Augmented Engineer</span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Actively interviewing for Backend Software Engineer, Systems Engineer, and AI-Augmented Developer roles at Tier-1 MNCs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 sm:p-10 rounded-2xl pro-card-glow space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-between">
                <span>Direct Contact Channels</span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-normal">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </h3>

              <div className="space-y-3.5 text-sm">
                
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl pro-card text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Email Directly</div>
                    <div className="font-medium text-white group-hover:text-blue-300 transition-colors text-sm sm:text-base">{personalInfo.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl pro-card text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Phone / WhatsApp</div>
                    <div className="font-medium text-white group-hover:text-emerald-300 transition-colors text-sm sm:text-base">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl pro-card text-slate-200">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Location</div>
                    <div className="font-medium text-white text-sm sm:text-base">{personalInfo.location}</div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-800/80 flex gap-3.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl pro-card text-slate-300 hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all hover:border-slate-600"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl pro-card text-slate-300 hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all hover:border-slate-600"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right 7 Cols: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl pro-card space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Send A Priority Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in your details to launch a pre-addressed email draft to Sourav.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Thank you! Your email client has been prepared. I typically respond within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex (Engineering Recruiter)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Role / Opportunity Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Backend Software Engineer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Message / Role Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, technical stack, or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Priority Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
