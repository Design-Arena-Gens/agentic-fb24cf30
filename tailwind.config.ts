import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b132b",
        sky: "#1c2541",
        lagoon: "#3a506b",
        mint: "#5bc0be",
        sand: "#f4f1de"
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        glow: "0 20px 45px rgba(91, 192, 190, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
