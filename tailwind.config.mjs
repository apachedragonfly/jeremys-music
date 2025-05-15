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
        'custom-dark-bg': '#1E2A23', //
        'custom-dark-text': '#e0e0e0', // 
        'custom-dark-header': '#1E2A23', // 
        'custom-dark-link': '#e0e0e0', // 
        'custom-dark-hover': '#e0e0e0', // 
        'custom-dark-active': '#e0e0e0', // 
        'custom-dark-border': '#e0e0e0', // 
        'custom-dark-input': '#e0e0e0', // 
        'custom-dark-button': '#e0e0e0', // 
        'custom-dark-button-text': '#e0e0e0', // 
        'custom-light-bg': '#ffffff', // Example light background
        'custom-light-text': '#333333', // Example light text
        'custom-light-header': '#f8f8f8', // Example light header
        'custom-light-link': '#007bff', // Example light link
        'custom-light-hover': '#0056b3', // Example light link hover
        'custom-light-active': '#004085', // Example light link active
        'custom-light-border': '#cccccc', // Example light border
        'custom-light-input': '#eeeeee', // Example light input
        'custom-light-button': '#007bff', // Example light button
        'custom-light-button-text': '#ffffff', // Example light button text
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};