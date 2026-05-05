/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#263238',
          light: '#2e3c43',
          dark: '#1a2329',
          deeper: '#0f1a1f',
        },
        cobalt: {
          DEFAULT: '#00CFFF',
          dim: '#00a8cc',
          glow: '#00CFFF',
          dark: '#007a99',
        },
        titanium: {
          DEFAULT: '#BFC1C2',
          light: '#d9dbdc',
          dark: '#8a8c8e',
        },
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'cobalt-sm': '0 0 10px rgba(0, 207, 255, 0.3)',
        'cobalt-md': '0 0 20px rgba(0, 207, 255, 0.4)',
        'cobalt-lg': '0 0 40px rgba(0, 207, 255, 0.5)',
        'cobalt-xl': '0 0 60px rgba(0, 207, 255, 0.6)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
        'cobalt-gradient': 'linear-gradient(135deg, #00CFFF, #007a99)',
        'obsidian-gradient': 'linear-gradient(180deg, #0f1a1f 0%, #263238 50%, #1a2329 100%)',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(0, 207, 255, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0, 207, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(191, 193, 194, 0.05) 0%, transparent 50%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'cobalt-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 207, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 207, 255, 0.7)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'circuit-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'cobalt-pulse': 'cobalt-pulse 2s ease-in-out infinite',
        'scroll-x': 'scroll-x 30s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'circuit-glow': 'circuit-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
