import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090A",
          900: "#0B0C0E",
          850: "#0F1113",
          800: "#131518",
          750: "#171A1E",
          700: "#1D2126",
          600: "#262B31",
        },
        line: {
          DEFAULT: "#1F2429",
          soft: "#181C21",
          strong: "#2B3138",
        },
        chalk: {
          DEFAULT: "#F2F3F5",
          muted: "#9AA1AA",
          faint: "#666D76",
        },
        flare: {
          DEFAULT: "#FF5A1F",
          bright: "#FF7A45",
          deep: "#D8410E",
          wash: "rgba(255,90,31,0.10)",
        },
        gain: { DEFAULT: "#2FD08A", soft: "rgba(47,208,138,0.12)" },
        loss: { DEFAULT: "#F0553D", soft: "rgba(240,85,61,0.12)" },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      keyframes: {
        "pulse-live": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.86)" },
        },
        "slide-up-fade": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-live": "pulse-live 1.6s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.4s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
