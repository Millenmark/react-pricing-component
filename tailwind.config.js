/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "gradient-start": "hsl(236, 72%, 79%)",
          "gradient-end": "hsl(237, 63%, 64%)",
        },
        neutral: {
          "very-light-grayish-blue": "hsl(240, 78%, 98%)",
          "light-grayish-blue": "hsl(234, 14%, 74%)",
          "grayish-blue": "hsl(233, 13%, 49%)",
          "dark-grayish-blue": "hsl(232, 13%, 33%)",
        },
      },
      fontFamily: {
        monse: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [typography()],
};
