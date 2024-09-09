/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: ["12px", { lineHeight: "18px", letterSpacing: "0.1px" }],
      sm: ["14px", { lineHeight: "22px", letterSpacing: "0.1px" }],
      md: ["20px", { lineHeight: "22px", letterSpacing: "0.1px" }],
      lg: ["26px", { lineHeight: "34px" }],
      xl: ["40px", { lineHeight: "50px" }],
      xxl: ["80px"],
    },
    fontFamily: {
      poppins: ["Poppins", "Arial", "sans-serif"],
      navfont: ["Open Sans", "sans-serif"],
    },
    letterSpacing: {
      wide: ".25rem",
    },
    extend: {
      colors: {
        customWhite: "#FAF9F6",
        customYellow: "#FE9E14",
        customDark: "#121212",
        customDark2: "#1f1f1f",
        customDark3: "#090909",
        customGray: "#2D3335",
        customGray2: "#B0AFAD",
        customGray3: "#717171",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('../src/assets/images/hero-background-image.jpg')",
        "suit-pattern":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 53.75%), url('../src/assets/images/home-page/home-banner-background.jfif')",
        "about-hero":
          "linear-gradient(228.42deg, rgba(0, 0, 0, 0.4) 1.94%, rgba(0, 0, 0, 0.8) 79.63%), url('../src/assets/images/about-page/about-page-background.jfif')",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "fade-in": {
          "0%": { transform: "translateY(30px) scale(0.8)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.3s ease forwards",
        "fade-in": "fade-in 0.3s ease",
      },
    },
  },
  plugins: [],
};
