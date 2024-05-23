import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 16px -3px rgba(204, 204, 204, 0.80)",
        cardShadow:
          "0px 5px 30px 0px rgba(103, 110, 118, 0.08), 0px 2px 15px 0px rgba(73, 75, 74, 0.15)",
        // Легкая тень
        light: "0px 0px 4px 4px rgba(204, 204, 204, 0.30)",
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
        sm: "530px",
        sc: "320px",
      },

      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".position-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".hidden-text": {
          border: "0",
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          "white-space": "nowrap",
          width: "1px",
        },
        ".custom-scrollbar": {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            "background-color": "#F0F0F0",
          },
          "&::-webkit-scrollbar-thumb": {
            "background-color": "#a8a8a8",
            "border-radius": "8px",
            "&:hover": {
              "background-color": "#949292",
            },
            "&:active": {
              "background-color": "#787878",
            },
          },
        },
        ".scrollbar-hide": {
          "&::-webkit-scrollbar": {
            display: "none",
            width: "0",
          },
        },
        ".bottom-line": {
          "&::after": {
            content: '""',
            borderBottom: "3px solid #1E8F79",
            width: "40px",
            display: "block",
            margin: "8px auto 0 auto",
            borderRadius: "4px",
          },
        },
      });
    }),
  ],
};

export default config;
