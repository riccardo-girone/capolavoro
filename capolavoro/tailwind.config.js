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
      'color-white': '#ffffff',
      'color-white-2': '#fefeff'
    },

    fontSize: {
      'number-fontsize': 'clamp(2rem, 8vw, 25rem)',
      'sub-titel': 'clamp(1rem, 1.5vw, 5rem)',
      'ex-fontsize': 'clamp(0.5rem, 1vw, 1.2rem)',
      'normal-fontsize': 'clamp(0.4rem, 1vw, 1rem)',
    },

    spacing: {
      '404-1': '1.3vw',
      '404-2': '5vw'
    },

    extend: {
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
        secondary: ["Roboto Mono", "monospace"],
      },

      lineHeight: {
        'eleven-height': 'clamp(1rem, 4vw, 7rem)',
      },

      backgroundImage: {
        '404': "url('/img/van3.jpg')",
      }
    },
  },
  plugins: [],
};
