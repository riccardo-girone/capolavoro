/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css"
  ],
  theme: {
    colors: {
      'color-primary': '#1b1b1a',
      'color-blue': '#1b16df',
      'color-white': '#ffffff'
    },

    fontSize: {
      'number-fontsize': 'clamp(3rem, 6vw, 30rem)',
      'sub-titel': 'clamp(0.3rem, 5vw, 1.2rem)',
    },

    extend: {
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
        secondary: ["Roboto Mono", "monospace"],
      }
    },
  },
  plugins: [],
};
