import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary)',
          100: 'var(--primary)',
          200: 'var(--primary)',
          300: 'var(--primary)',
          400: 'var(--primary)',
          500: 'var(--primary)',
          600: 'var(--primary)',
          700: 'var(--primary)',
          800: 'var(--primary)',
          900: 'var(--primary)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          50: 'var(--secondary)',
          100: 'var(--secondary)',
          200: 'var(--secondary)',
          300: 'var(--secondary)',
          400: 'var(--secondary)',
          500: 'var(--secondary)',
          600: 'var(--secondary)',
          700: 'var(--secondary)',
          800: 'var(--secondary)',
          900: 'var(--secondary)',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)',
          50: 'var(--tertiary)',
          100: 'var(--tertiary)',
          200: 'var(--tertiary)',
          300: 'var(--tertiary)',
          400: 'var(--tertiary)',
          500: 'var(--tertiary)',
          600: 'var(--tertiary)',
          700: 'var(--tertiary)',
          800: 'var(--tertiary)',
          900: 'var(--tertiary)',
        },
        textprimary: 'var(--textprimary)',
        textsecondary: 'var(--textsecondary)',
        texttertiary: 'var(--texttertiary)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-slow': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
