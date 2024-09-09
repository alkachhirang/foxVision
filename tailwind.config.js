/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        textStrokeWidth: {
          0.5: "0.5px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkblue: "#071838",
        sky: "#05D5FB",
        purple: "#5925F2",
        offgrey: " #515D74",
        lightpurple: "#E6DEFF",
        lightsky: "#E9FCFF",
        lightlbue: "#50E2FC",
        darkpurple: "#4B17E6",
        offpurple: " #E7E0FB",
        lightsky2: "#50E2FC",
        lightBlue: "#4B17E61A",
        grey: "#B3B3B3",
        lightGrey: "#A6A6A6",
        offGrey: "#D3D3D3",
        extraLightgrey: "#F9F9F9",
        lightOffGrey: "#CCCCCC",
        extraLightOffGrey: "#E5E5E5",
      },
      fontSize: {
        " xxsm": "8px",
        "4xxl": "40px",
        "6xxl": "64px",
        "8xxl": "88px",
      },
      lineHeight: {
        sm: "108%",
        md: "121%",
        "3md": "123%",
        lg: "183%",
      },
      screens: {
        "1xl": "1350px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-0\\.5": {
          "-webkit-text-stroke-width": "0.5px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
