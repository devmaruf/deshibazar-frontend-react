/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#3f54ff",
        secondary: "#364A63",
      },
      spacing: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "100%": "100%",
        "25%": "25%",
        "35%": "35%",
        "45%": "45%",
        "55%": "55%",
        "65%": "65%",
        "75%": "75%",
        "85%": "85%",
        "87%": "87%",
        "95%": "95%",
        "97%": "97%",
        "98%": "98%",
        "99%": "99%",
      },
      boxShadow: {
        bazaar: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      },
    },
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },

    variants: {
      extend: {
        display: ["group-hover"],
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [],
};
