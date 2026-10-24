/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aurora: {
          bg: '#080c18',
          card: 'rgba(255, 255, 255, 0.035)',
          border: 'rgba(255, 255, 255, 0.07)',
          accent: '#818cf8',
          cyan: '#38bdf8',
          violet: '#a855f7',
          rose: '#f43f5e',
          emerald: '#34d399'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 10s ease-in-out infinite',
        'pulse-calm': 'pulseCalm 6s ease-in-out infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(16px)' },
        },
        pulseCalm: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
