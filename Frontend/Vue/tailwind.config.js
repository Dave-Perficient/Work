/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loginImage: "url('./spaceImage2.jpg')",
        spaceImage: "url('./spaceImage.jpg')",
      },
    },
  },
  plugins: [],
};
