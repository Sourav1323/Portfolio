import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  FileText,
  ExternalLink,
} from 'lucide-react';

// Custom Brand Icons
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('souravgupta.it25@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918619377860');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto URI
    const subjectLine = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Sourav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Website`
    );
    window.location.href = `mailto:souravgupta.it25@gmail.com?subject=${subjectLine}&body=${bodyContent}`;

    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 z-20 select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading: "Contact" */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-14 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
          <p className="mt-4 text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto uppercase tracking-wider font-light">
            Let&apos;s build scalable architectures, backend systems, and innovative digital platforms together.
          </p>
        </FadeIn>

        {/* ── 2-COLUMN CONTACT LAYOUT ── */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Socials (5 Cols) */}
          <FadeIn delay={0.15} y={30} className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] bg-[#141414] border border-[#D7E2EA]/15 shadow-2xl flex flex-col gap-6">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-2.5">
                <MessageSquare className="w-6 h-6 text-[#B600A8]" />
                <span>Get In Touch</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#1C1C1E] border border-[#D7E2EA]/10 flex items-center justify-between gap-3 group hover:border-[#B600A8]/50 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-[#B600A8]/20 flex items-center justify-center flex-shrink-0 text-[#B600A8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
                      Email Address
                    </span>
                    <a
                      href="mailto:souravgupta.it25@gmail.com"
                      className="text-xs sm:text-sm font-mono text-[#D7E2EA] hover:text-[#B600A8] truncate transition-colors"
                    >
                      souravgupta.it25@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-[#252528] hover:bg-[#B600A8] text-[#D7E2EA] hover:text-white transition-all flex-shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#1C1C1E] border border-[#D7E2EA]/10 flex items-center justify-between gap-3 group hover:border-[#7621B0]/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7621B0]/20 flex items-center justify-center flex-shrink-0 text-[#7621B0]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+918619377860"
                      className="text-xs sm:text-sm font-mono text-[#D7E2EA] hover:text-[#7621B0] transition-colors"
                    >
                      (+91) 8619377860
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="p-2 rounded-lg bg-[#252528] hover:bg-[#7621B0] text-[#D7E2EA] hover:text-white transition-all flex-shrink-0 cursor-pointer"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#1C1C1E] border border-[#D7E2EA]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/20 flex items-center justify-center flex-shrink-0 text-[#00F5FF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-[#D7E2EA]">
                    Jaipur, Rajasthan &amp; Bangalore, Karnataka
                  </span>
                </div>
              </div>

              {/* Social Channels & Resume */}
              <div className="pt-2 flex flex-col gap-3">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium">
                  Professional Profiles &amp; CV
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Sourav1323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#D7E2EA]/15 text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:text-white transition-all cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href="https://linkedin.com/in/sourav-gupta-3ab283228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#D7E2EA]/15 text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:text-white transition-all cursor-pointer"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href="/Sourav_Gupta_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#B600A8]/20 hover:bg-[#B600A8]/30 border border-[#B600A8]/50 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#B600A8]" />
                    <span>View Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Send Message Form (7 Cols) */}
          <FadeIn delay={0.25} y={30} className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[40px] bg-[#141414] border border-[#D7E2EA]/15 shadow-2xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light mb-6">
                Fill out the form below to initiate an inquiry or project discussion. Submitting will directly prepare and launch your email client with Sourav.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#1C1C1E] border border-green-500/40 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Email Client Launched!</h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-md">
                    If your email app didn&apos;t automatically open, feel free to write directly to{' '}
                    <span className="font-mono text-[#B600A8]">souravgupta.it25@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-3 px-6 py-2 rounded-full bg-[#252528] text-xs font-medium uppercase tracking-wider text-[#D7E2EA] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#D7E2EA]/15 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#D7E2EA]/15 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Backend Engineering / Job Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#D7E2EA]/15 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Sourav about your project, system architecture requirements, or role details..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#D7E2EA]/15 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full sm:w-auto self-start flex items-center justify-center gap-2.5 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow:
                        '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Sourav</span>
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Footer info & copyright */}
        <div className="mt-20 pt-8 border-t border-[#D7E2EA]/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50 uppercase tracking-wider font-mono">
          <span>&copy; {new Date().getFullYear()} Sourav Gupta. All rights reserved.</span>
          <span>Jaipur &amp; Bangalore &bull; Java &bull; SQL &bull; Backend Engineering</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;