import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          1: "hsl(var(--background-1) / <alpha-value>)",
          2: "hsl(var(--background-2) / <alpha-value>)",
          3: "hsl(var(--background-3) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        surface: {
          1: "hsl(var(--surface-1) / <alpha-value>)",
          2: "hsl(var(--surface-2) / <alpha-value>)",
          3: "hsl(var(--surface-3) / <alpha-value>)",
        },
        text: {
          1: "hsl(var(--text-1) / <alpha-value>)",
          2: "hsl(var(--text-2) / <alpha-value>)",
          3: "hsl(var(--text-3) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          soft: "hsl(var(--accent-soft) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        shadow: "hsl(var(--shadow) / <alpha-value>)",
      },
      boxShadow: {
        sm: "0 0 5px 0 hsl(var(--shadow) / 0.05)",
        md: "0 0 10px 0 hsl(var(--shadow) / 0.1)",
        lg: "0 0 15px 0 hsl(var(--shadow) / 0.1)",
        xl: "0 0 25px 0 hsl(var(--shadow) / 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config

export default config