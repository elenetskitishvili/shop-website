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
      // animation: { spinCustom: "spin 1s linear infinite" },
      // keyframes: {
      //   spin: {
      //     to: {
      //       transform: "rotate(360deg)",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
  darkMode: "class",
};
