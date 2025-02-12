import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        subway: "url('images/background_subway-dark.jpg')",
      },
      fontFamily: {
        sans: ["Atkinson", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          // this is for prose class
          css: {
            maxWidth: "full",
            // color: theme('colors.yourSpecificColor'), // change global color scheme
            p: {
              // fontSize: "14px", // key can be in camelCase...
              // "text-align": "center", // or as it is in css (but in quotes).
            },
            a: {
              // change anchor color and on hover
              color: "#03989E",
              "&:hover": {
                // could be any. It's like extending css selector
                color: "#F7941E",
              },
            },
            ul: {
              "> li": {
                "&::before": {
                  // more complex example - add before to an li element.
                  content: "",
                },
              },
            },
          },
        },
        sm: {
          // and this is for prose-sm.
          css: {},
        },
      },
      rotate: {
        45: "45deg",
        135: "135deg",
        225: "225deg",
        315: "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": {
            opacity: 0,
            transform: "rotate(0deg)",
          },
          "50%": {
            opacity: 1,
            transform: "rotate(180deg)",
          },
          "100%": {
            opacity: 0,
            transform: "rotate(360deg)",
          },
        },
        meteor: {
          "0%": {
            opacity: 0,
            transform: "translateY(200%)",
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
