/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a2b3c',
          dark: '#061e2b',
          light: '#0f3d56',
        },
        'brand-orange': {
          DEFAULT: '#ff8c42',
          dark: '#e67a30',
        },
        'brand-yellow': '#FFD700',
        'light-gray': '#f4f7fb',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
        modal: '0 25px 60px rgba(0,0,0,0.3)',
        float: '0 4px 16px rgba(0,0,0,0.25)',
      },
      animation: {
        'slide-up': 'slideUp 0.25s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
        'hero-float': 'heroFloat 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
        'card-fade-in': 'cardFadeIn 0.5s ease-out both',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        whatsappPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.5), 0 8px 24px rgba(34,197,94,0.3)' },
          '50%': { boxShadow: '0 0 0 12px rgba(34,197,94,0), 0 8px 32px rgba(34,197,94,0.5)' },
        },
        cardFadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
