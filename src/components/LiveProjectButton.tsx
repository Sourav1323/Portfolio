import React from 'react';

interface LiveProjectButtonProps {
  url?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ url = '#', className = '' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-300 inline-flex items-center justify-center cursor-pointer select-none active:scale-95 ${className}`}
    >
      Live Project
    </a>
  );
};

export default LiveProjectButton;
