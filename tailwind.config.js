/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1150px",
      xl: "1280px",
      "2xl": "1536px",
    },

    colors: {
      primary: "#1A3B3B",
      secondary: "#1A3B3B",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      charoal: "#191617",
      blue: "#0066FF",
      lightblue: "#d9e8ff",
      aqua: "#82C9C0",
      darkpurple: "#8D1A81",
      hopurple: "#6d1664",
      lightgrey: "#F4F5F6",
      navyblue: "#00224A",
      darkblue: "#1E013A",
      offwhite: "rgba(255, 255, 255, 0.75)",
      lightblack: "rgba(0, 0, 0, 0.55)",
      bluish: "rgba(14, 13, 13, 0.75)",
      testColor: "rgba(54, 54, 54, 0.75)",
      grey: "#909090",
      bgblue: "#02398A",
      darkgrey: "#747474",
      faqblue: "#0861FF",
      gold: "#FAAF38",
      hoblue: "#0000FF",
      btnblue: "#267dff",
      bggrey: "#DDDDDD",
      footer: "rgba(226, 223, 223, 0.75)",
      linegrey: "#fcfdfd",
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "1",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
      "65xl": [
        "65px",
        {
          lineHeight: "1",
        },
      ],
      "80xl": [
        "80px",
        {
          lineHeight: "6rem",
        },
      ],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
