import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "subtle-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            boxShadow: "0 0 15px rgba(88, 84, 242, 0.4), 0 0 30px rgba(88, 84, 242, 0.2)" 
          },
          "50%": { 
            transform: "scale(1.01)",
            boxShadow: "0 0 20px rgba(88, 84, 242, 0.6), 0 0 40px rgba(88, 84, 242, 0.3)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-pulse": "subtle-pulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "cosmic-glow": "0 0 25px rgba(88, 84, 242, 0.7), 0 0 50px rgba(88, 84, 242, 0.4)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0.05rem 0.05rem 0.05rem rgba(0,0,0,0.21)',
        },
        '.text-shadow-sm': {
          textShadow: '0.05rem 0.05rem 0.03rem rgba(0,0,0,0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0.08rem 0.08rem 0.08rem rgba(0,0,0,0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      });
    }
  ],
} satisfies Config;
