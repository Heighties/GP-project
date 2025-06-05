/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        parallax: 'url("../public/technology.jpg")',
      },
      aspectRatio: {
        card: "0.71",
        card2: "2",
      },
      borderRadius: {
        32: "2rem",
        "32-tl-bl": "2rem 0 0 2rem",
        "32-tr-br": "0 2rem 2rem 0",
        "32-tl-tr": "2rem 2rem 0 0",
      },
    },
  },
  plugins: [],
};
