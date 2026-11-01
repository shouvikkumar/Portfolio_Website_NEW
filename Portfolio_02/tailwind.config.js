/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060608',
        bg1: '#0d0d12',
        bg2: '#12121a',
        ink: '#f0eee8',
        muted: '#5a5868',
        muted2: '#8a8698',
        a1: '#7c6dfa', // purple
        a2: '#fa6d8a', // pink
        a3: '#6dfac8', // mint
        a4: '#fac96d', // amber
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        up: {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        ping2: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.4)' },
        },
        tickerSlide: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeCard: {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        up: 'up .8s ease forwards',
        ping2: 'ping2 2s infinite',
        tickerSlide: 'tickerSlide .5s ease',
        fadeCard: 'fadeCard .5s ease both',
      },
    },
  },
  plugins: [],
};
