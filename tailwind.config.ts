import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E8",
        paper: "#FFFDF9",
        charcoal: "#272522",
        rose: "#C98F8F",
        blush: "#E8CBC5",
        tan: "#B99B7B",
        sage: "#A7AF9E",
        line: "#E6DED3"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"]
      },
      boxShadow: {
        editorial: "0 18px 45px rgba(39, 37, 34, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
