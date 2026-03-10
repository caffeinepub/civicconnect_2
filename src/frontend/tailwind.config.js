/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'oklch(var(--card) / <alpha-value>)',
          foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
          foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)',
        },
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        success: 'oklch(var(--success) / <alpha-value>)',
        warning: 'oklch(var(--warning) / <alpha-value>)',
        // Navy palette
        navy: {
          darkest: '#0a1628',
          dark: '#0d1f3c',
          mid: '#112244',
          light: '#1a2f55',
          border: '#1e3a6e',
        },
        // Gold palette
        gold: {
          bright: '#f5c842',
          mid: '#e6b830',
          muted: '#c9a020',
          pale: '#a07c10',
        },
        // Backward-compatible civic aliases
        civic: {
          navy: '#0d1f3c',
          gold: '#f5c842',
          blue: '#0d1f3c',
          teal: '#f5c842',
          green: '#f5c842',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'gold-sm': '0 2px 8px oklch(0.82 0.18 85 / 0.2)',
        'gold-md': '0 4px 16px oklch(0.82 0.18 85 / 0.25)',
        'gold-lg': '0 8px 32px oklch(0.82 0.18 85 / 0.3)',
        'navy-sm': '0 2px 8px oklch(0.10 0.04 250 / 0.4)',
        'navy-md': '0 4px 16px oklch(0.10 0.04 250 / 0.5)',
        'navy-lg': '0 8px 32px oklch(0.10 0.04 250 / 0.6)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
