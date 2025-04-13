/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Dark theme
        dark: {
          background: '#1C1C1E',
          surface: '#C5BBAF',
          primaryAccent: '#D4AF37',
          secondaryAccent: '#FFCC80',
          creativeAccent: '#00796B',
          textPrimary: '#F5F5F5',
          textSecondary: '#DADADA',
          border: '#E1C16E',
          error: '#D9534F',
        },
        // Light theme
        light: {
          background: '#F9F9F9',
          surface: '#EFE9E3',
          primaryAccent: '#00796B',
          secondaryAccent: '#D4AF37',
          creativeAccent: '#2AA79B',
          textPrimary: '#1C1C1E',
          textSecondary: '#4A4A4A',
          border: '#DCD2C0',
          error: '#C62828',
        },
        // Legacy colors - keeping for compatibility
        primary: '#283149',
        accent: '#DBC078',
        'blue-dark': '#3a476a',
        charcoal: '#161b28',
        beige: '#e6d3a0',
        gold: '#d0ad50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Add utilities for animation delay
      transitionDelay: {
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Add a custom plugin for animation delay classes
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-1500': {
          'animation-delay': '1500ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2000ms',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};