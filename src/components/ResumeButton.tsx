import React from 'react';
import { FileText, Download } from 'lucide-react';

interface ResumeButtonProps {
  className?: string;
  variant?: 'outline' | 'gradient';
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  className = '',
  variant = 'outline',
}) => {
  return (
    <a
      href="/Sourav_Gupta_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="Sourav_Gupta_Resume.pdf"
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/15 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer select-none active:scale-95 shadow-lg ${className}`}
    >
      <FileText className="w-4 h-4 text-[#D7E2EA]" />
      <span>Resume</span>
    </a>
  );
};

export default ResumeButton;
