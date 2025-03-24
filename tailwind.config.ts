import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        powerblue: {
          dark: "#05538B",
          light: "#2195E8",
        },

        primary: {
          DEFAULT: "#2195E8",
          foreground: "#000000",
        },
        focus: "#BEF264",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      keyframes: {
        'horizontal-vibrate': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
      },
      animation: {
        'horizontal-vibrate': 'horizontal-vibrate 2s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
