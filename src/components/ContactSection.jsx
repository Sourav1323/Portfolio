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
      {/* Background glow */}
      <div className="aurora-blob bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            <Mail className="w-4 h-4 text-indigo-400" />
            Let's Build Something High-Performance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready To Hire An <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">AI-Augmented Engineer?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
            Actively open for Backend Software Developer, Systems Engineer, and AI-Augmented Developer roles.
            Reach out directly or connect on professional channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 sm:p-10 rounded-3xl aurora-card-glow border-indigo-400/30 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span>Direct Contact Channels</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-indigo-400/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Email Directly</div>
                    <div className="font-semibold text-indigo-200 group-hover:underline text-sm sm:text-base">{personalInfo.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-emerald-400/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-300 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Phone / WhatsApp</div>
                    <div className="font-semibold text-emerald-300 text-sm sm:text-base">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-slate-200">
                  <div className="p-3 rounded-xl bg-purple-500/15 text-purple-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Location</div>
                    <div className="font-semibold text-white text-sm sm:text-base">{personalInfo.location}</div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/[0.08] flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl aurora-card hover:border-indigo-400/40 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02]"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl aurora-card hover:border-indigo-400/40 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02]"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right 7 Cols: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl aurora-card border border-white/[0.08] space-y-6">
              
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                  <span>Send A Priority Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in your details to launch a pre-addressed email draft.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span>Thank you! Your email client has been prepared. I typically respond within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Your Name / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex (Tech Recruiter)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Role / Opportunity Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Backend Software Engineer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Message / Role Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, technical stack, or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-500/25 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
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
