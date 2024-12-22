import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'custom-dark-bg': '#0a2540', // Updated to a darker blue color
        'custom-dark-text': '#e0e0e0', // Your desired dark mode text color
        'custom-dark-header': '#0a2540', // Your desired dark mode header color
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};