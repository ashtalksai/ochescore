import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        background: '#0F0F0F',
        surface: '#1A1A1A',
        'text-primary': '#FAFAFA',
        'text-secondary': '#A1A1A1',
        success: '#10B981',
        destructive: '#EF4444',
        'dart-bullseye': '#7C3AED',
        'dart-outer-bull': '#F97316',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '72': '72px',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      spacing: {
        'section-mobile': '48px',
        'section-desktop': '80px',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
