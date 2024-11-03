/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Open Sans"', "sans-serif"],
        heading: ['"Playfair Display"', "serif"],
        inherit: "inherit",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
