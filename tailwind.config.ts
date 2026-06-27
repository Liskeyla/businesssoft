import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F4C81",
          dark: "#082C5A",
          light: "#38BDF8",
          50: "#EFF6FC",
          100: "#D9EAF7",
          200: "#B3D5EF",
          300: "#7DB8E3",
          400: "#4795D2",
          500: "#0F4C81",
          600: "#0D4373",
          700: "#0A355C",
          800: "#082C5A",
          900: "#061F3F",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -2px rgba(15, 76, 129, 0.10)",
        "soft-lg": "0 12px 40px -4px rgba(15, 76, 129, 0.16)",
        glow: "0 0 40px -8px rgba(56, 189, 248, 0.45)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,76,129,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,76,129,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.6s infinite",
        marquee: "marquee 32s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        aurora: "aurora 14s ease-in-out infinite",
        "spin-slow": "spin 26s linear infinite",
        "spin-slow-reverse": "spin-reverse 26s linear infinite",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
