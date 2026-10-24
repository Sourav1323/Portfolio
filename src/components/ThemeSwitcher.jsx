import React from 'react';
import { Palette, Check } from 'lucide-react';

export const themes = [
  {
    id: 'obsidian',
    name: 'Executive Obsidian',
    tagline: 'Stripe & Linear SDE Standard',
    accent: 'bg-blue-500',
    colors: ['#080b12', '#3b82f6', '#93c5fd']
  },
  {
    id: 'fintech',
    name: 'FinTech Terminal',
    tagline: 'Bloomberg & Wall St. Precision',
    accent: 'bg-amber-500',
    colors: ['#060a14', '#f59e0b', '#10b981']
  },
  {
    id: 'minimal',
    name: 'Clean Minimalist',
    tagline: 'Apple & Vercel Monochrome',
    accent: 'bg-slate-400',
    colors: ['#090d16', '#e2e8f0', '#38bdf8']
  },
  {
    id: 'cosmic',
    name: 'Cosmic Twilight',
    tagline: 'Aurora & Deep Atmosphere',
    accent: 'bg-purple-500',
    colors: ['#090d1e', '#a855f7', '#818cf8']
  }
];

const ThemeSwitcher = ({ currentTheme, onSelectTheme }) => {
  return (
    <div className="p-2 sm:p-2.5 rounded-2xl aurora-card border border-white/[0.08] flex items-center gap-1.5 sm:gap-2">
      <div className="hidden md:flex items-center gap-1.5 pl-2 pr-1 text-xs font-mono text-slate-400">
        <Palette className="w-3.5 h-3.5 text-blue-400" />
        <span>Theme:</span>
      </div>

      <div className="flex items-center gap-1 sm:gap-1.5">
        {themes.map((t) => {
          const isActive = currentTheme === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTheme(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-2 border ${
                isActive
                  ? 'bg-white/[0.12] text-white border-white/[0.25] shadow-md'
                  : 'bg-transparent text-slate-400 hover:text-white border-transparent hover:bg-white/[0.05]'
              }`}
              title={`${t.name} - ${t.tagline}`}
            >
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: t.colors[1] }} 
              />
              <span className="hidden sm:inline">{t.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
