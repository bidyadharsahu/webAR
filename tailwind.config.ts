import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A3D',
        'primary-dark': '#1E3D29',
        'primary-light': '#3D7A52',
        cream: '#FAF9F6',
        'cream-dark': '#F5F3EE',
        sand: '#E8E4DC',
        'sand-light': '#F0EDE6',
        dark: '#2C2C2C',
        'dark-muted': '#5C5C5C',
        // New accent colors for visual interest
        sage: '#B8C4B8',
        'sage-light': '#D4DCD4',
        moss: '#5A7A5A',
        olive: '#8B9A6B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'fade-left': 'fadeLeft 0.8s ease-out forwards',
        'fade-right': 'fadeRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(45, 90, 61, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(45, 90, 61, 0.4)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
