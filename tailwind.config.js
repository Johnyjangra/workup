/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "54px",
      },
      backgroundImage: {
        gradientOne: "linear-gradient(105deg, #2ABAE9 0%, #1B77CC 100%)",
        gradientTwo: "linear-gradient(90.79deg, #994FFF 0.27%, #4AB6FE 98.57%)",
        btnGradient: "linear-gradient(91deg, #994FFF 0.27%, #4AB6FE 98.57%)",
        planCard: "linear-gradient(225deg, #E939D9 2.18%, #2ABAE9 111.89%), linear-gradient(91deg, #994FFF 0.27%, #4AB6FE 98.57%);",
      },
      colors: {
        // text-colors
        blue: "#2ABAE9",
        lightBlack: "#1C1D1D",
        darkBlue: "#111223",
        // background-color
        lightpurple: "#1F0E35",
      },
    },
  },
  plugins: [],
};
