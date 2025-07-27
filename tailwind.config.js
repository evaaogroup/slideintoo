/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(0, 0, 0, 0.1)",
        background: "#ffffff",
        foreground: "#030213",
        primary: "#030213",
        "primary-foreground": "#ffffff",
        secondary: "#f3f3f5",
        "secondary-foreground": "#030213",
        muted: "#ececf0",
        "muted-foreground": "#717182",
        accent: "#e9ebef",
        "accent-foreground": "#030213",
      },
    },
  },
  plugins: [],
} 