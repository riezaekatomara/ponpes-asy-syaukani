/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Biru Royal (dari logo Al-Andalus)
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',  // Main Blue
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        
        // Accent - Kuning/Gold (dari highlight & aksen)
        accent: {
          50: '#fffef0',
          100: '#fffbd6',
          200: '#fff7ad',
          300: '#fff384',
          400: '#ffef5b',
          500: '#ffd700',  // Main Gold
          600: '#ccac00',
          700: '#998100',
          800: '#665600',
          900: '#443900',
        },
        
        // Secondary - Hijau (dari logo tetes air)
        secondary: {
          50: '#e6fff5',
          100: '#ccffeb',
          200: '#99ffd6',
          300: '#66ffc2',
          400: '#33ffad',
          500: '#00cc7a',  // Main Green
          600: '#00a662',
          700: '#008049',
          800: '#005931',
          900: '#003d21',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 102, 255, 0.07), 0 10px 20px -2px rgba(0, 102, 255, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 102, 255, 0.1), 0 10px 30px -5px rgba(0, 102, 255, 0.08)',
        'large': '0 10px 40px -10px rgba(0, 102, 255, 0.15), 0 20px 50px -10px rgba(0, 102, 255, 0.1)',
        'gold': '0 4px 20px -5px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}