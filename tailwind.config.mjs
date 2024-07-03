/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // primary: "Poppins, sans-serif",
        // primary: "Wotfard, Wotfard-fallback, sans-serif",
        primary: "SofiaPro, sans-serif",
      },
      colors: {
        // primary: "#374151",
        primary: "#363636",
        dark: "#363636",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
