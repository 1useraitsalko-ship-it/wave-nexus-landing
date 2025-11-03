import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: "hsl(var(--blue))",
        cyan: "hsl(var(--cyan))",
        violet: "hsl(var(--violet))",
        orange: "hsl(var(--orange))",
        red: "hsl(var(--red))",
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(90deg, hsl(var(--blue)), hsl(var(--cyan)))',
        'gradient-text': 'linear-gradient(90deg, #6AA7FF, #18D1E9)',
        'gradient-wave': 'radial-gradient(1200px 600px at 50% 0%, hsl(var(--cyan) / 0.10), transparent 60%), radial-gradient(900px 500px at 20% 40%, hsl(var(--blue) / 0.10), transparent 60%), radial-gradient(900px 500px at 80% 60%, hsl(var(--violet) / 0.10), transparent 60%)',
        'gradient-orange': 'linear-gradient(135deg, hsl(var(--orange)), #FCD34D)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--cyan) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--cyan) / 0.6), 0 0 60px hsl(var(--blue) / 0.4)" },
        },
        ...{
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
