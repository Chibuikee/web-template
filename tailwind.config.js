module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wavvy: {
          "0%": {
            transform: "translateX(0) translateZ(0) scaleY(1)",
          },
          "50%": {
            transform: "translateX(-25%) translateZ(0) scaleY(0.55)",
          },
          "100%": {
            transform: "translateX(-50%) translateZ(0) scaleY(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
