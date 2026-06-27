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
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
