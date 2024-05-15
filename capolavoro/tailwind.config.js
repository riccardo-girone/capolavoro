/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'bg-color-primary': '#1b1b1a',
      'bg-color-blue': '#1b16df',
      'font-color': '#ffffff'
    },


    extend: {
    },
  },
  plugins: [],
};
