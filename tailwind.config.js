/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('/src/Assets/bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3A41FB",

          secondary: "#F4F8FF",

          accent: "#D2E9FC",

          neutral: "#D0F2FF",

          "base-100": "#FFFFFF",
          "info-dark": "#103996",

          info: "#FFF7CD",
          success: "#FEE7D9",
          warning: "#B72136",
          error: "#103996",
        },
      },
    ],
  },
};
