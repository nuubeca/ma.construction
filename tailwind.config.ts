import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#16161A",
          700: "#1F1F23",
        },
        concrete: {
          50: "#F4F2EE",
          100: "#E8E5DE",
          200: "#D6D2C8",
          300: "#B8B3A6",
          400: "#8E887A",
          500: "#6B6557",
          600: "#4D483C",
          700: "#3A362C",
          800: "#272420",
          900: "#161412",
        },
        safety: {
          DEFAULT: "#FDB01A",
          50: "#FFF8E5",
          400: "#FDC34E",
          500: "#FDB01A",
          600: "#E69A0F",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-anton)", "Impact", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        crush: "-0.04em",
      },
      fontSize: {
        mega: ["clamp(4rem, 14vw, 18rem)", { lineHeight: "0.95", letterSpacing: "-0.05em" }],
        colossal: ["clamp(3rem, 9vw, 9rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        massive: ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.2em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        grain:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
