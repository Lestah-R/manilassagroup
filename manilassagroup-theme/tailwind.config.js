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
    fontFamily: {
      poppins: ["Poppins", "Arial", "sans-serif"],
      navfont: ["Open Sans", "sans-serif"],
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
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCmxhUECQLFOpXcus4KPm8AOEZtwqeSND7pgx-gkAu6ZRyDR5zJE0ChEHE1-PT0tK5KqQC50nsnUJbrQuB47NFnNqgBvbbkNJ114KIAUoGLsgTGOWDw2A5GpcTwt0xnaVXl1W8mYnZlx9n6nJtEJm~vMa5FJv-wOXZJwzRRZRuLpt9SM5~5dwh4myfEi4uc-OIHuGM8DYxG5RSq674QLDe~jK9RoWLAiwOzOaguhW06xhwCmNw-549rFmZDH2pdgg4MiDBnIiJ5wmUNXCGPm6gaib6EncVaCYihyyYvV--Q3MiMI5qalAKH-WSiWN-VYJCmpAiUJYz~LbRFmNo9qOQ__')",
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
