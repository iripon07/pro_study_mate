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
        white: "#FFFFFF",
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
