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
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('https://s3-alpha-sig.figma.com/img/04a0/cf9c/8736a0f9b272b299ee363c98bee53ea5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCmxhUECQLFOpXcus4KPm8AOEZtwqeSND7pgx-gkAu6ZRyDR5zJE0ChEHE1-PT0tK5KqQC50nsnUJbrQuB47NFnNqgBvbbkNJ114KIAUoGLsgTGOWDw2A5GpcTwt0xnaVXl1W8mYnZlx9n6nJtEJm~vMa5FJv-wOXZJwzRRZRuLpt9SM5~5dwh4myfEi4uc-OIHuGM8DYxG5RSq674QLDe~jK9RoWLAiwOzOaguhW06xhwCmNw-549rFmZDH2pdgg4MiDBnIiJ5wmUNXCGPm6gaib6EncVaCYihyyYvV--Q3MiMI5qalAKH-WSiWN-VYJCmpAiUJYz~LbRFmNo9qOQ__')",
        "suit-pattern":
          "linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 75.75%), url('https://s3-alpha-sig.figma.com/img/baba/8e37/b7962d2fd1b93ce306bd7c067f2700bb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P7GvhrUOOtXOTX5D0U~ETaFOv-a4bY7GX1LUnkeygMmZcde4BsQ5DwSNA3ZYH3~PGzOoF2-snGTjcecSrdkt2aQnctmNKvjXNsvO23YVhmPGYJbXvXnNmNeoD1sI4zDsI3In-MY1MpDI~O2afofNaMmUtXOEEmCz8QqN2kXiX4ryCrFR2J32GhRP1y6yXaT0PM03bX0-gcfmAmNVviPrGoPYZbZl3MlKkn5fYBeZV-69-Tb5Zg7ICYn~9AcnD1xFtuuh1ZVbFOxrNquRFn37IAku3fpWtHADynHLGCBinaeSPqKcBfjmIWXpOUvIjlfap-n6MSCBZ3u1i9K~rk0RqQ__')",
        "about-hero":
          "linear-gradient(228.42deg, rgba(0, 0, 0, 0.4) 1.94%, rgba(0, 0, 0, 0.8) 79.63%), url('https://s3-alpha-sig.figma.com/img/82f2/8087/57546306cc7b0672ea88ffb98ba893e0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0SYlRc204xWa6SBfZJItBmk~ZQ5gNNYhm3mpBEYDjRjcS6d8XpzilbMWoMKnYv9I9PRz3Mh2Ga5Y58WgzLjXGFoKSX3A3xH9aU9tnm5axDFnjb6dnHvfBlfYobjQ8rR5o7D9NtSKjRzLB2mC7Ndp6Sn4zN0cFJ36HpkxN8-6H45yTjpiy47A22eAlICkQsMX6ko6veC6iab6b-Al9ytKfBPg0zTF93CApOHpdsSEMq-5mSdskv4hBTbZjj2aS7JgeLs1hlBAoYCfLVTWS5d~tIccpOUUMlEVmJTvOC~-kCWDDXwvW--pJQzQRsmEyI4-wPxMVbmd7DY9wjVDlPqJA__')",
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
