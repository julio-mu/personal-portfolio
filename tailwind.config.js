module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./versions/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '641px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'}
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "50%": {
            opacity: ".5",
          },
          "100%": { opacity: "1" },
        },
        slideleft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideright: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        appear: "appear ease-in-out 2500ms",
        slideleft: "slideleft ease-in-out 2000ms",
        slideright: "slideright ease-in-out 2000ms",
      },
    },
  },
  plugins: [],
}