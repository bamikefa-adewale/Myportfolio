/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(270deg, #df8908 10%, #b415ff 10%)",
      },
    },
  },
  plugins: [],
};
