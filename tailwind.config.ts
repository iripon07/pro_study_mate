import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#184E77",
        secondary: "#4189DD",
        grey: "#4B5155",
        white: "#FFFFFF",
        blue: "#1877F2",
        black: "#000000",
        red: "#FA171B",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        prosto: ["var(--font-prosto)", "cursive"],
        handwriting: ["var(--font-nothing-you-could-do)", "cursive"],
        alkatra: ["var(--font-alkatra)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
