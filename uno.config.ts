// uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}"],
  },
  theme: {
    boxShadow: {
      custom: `2px 2px 0`,
      "custom-hover": `1px 1px 0`,
    },
    fontFamily: {
      // Both families are self-hosted from /public/fonts (see BasicLayout.astro).
      sans: "Satoshi, ui-sans-serif, system-ui, sans-serif",
      heading: "CabinetGrotesk, Satoshi, ui-sans-serif, system-ui, sans-serif",
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#666666",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "rgba(var(--buttons-icon))",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "rgba(var(--buttons-bg))",
      },
      darkslate: {
        50: "#f7f7f7",
        100: "rgba(var(--border))" /* Card / button borders, theme aware */,
        200: "#c9c9c9",
        300: "#6b6b6b",
        400: "#383838",
        500: "rgba(var(--boxes))" /* Card background, theme aware */,
        600: "#141414",
        700: "#111111",
        800: "#0e0e0e",
        900: "#0b0b0b",
      },
      primary: {
        100: "#F9CDD3",
        200: "#F3A3AA",
        300: "#EC7981",
        400: "#E64F59",
        500: "rgba(var(--accent))" /* Accent colour, theme aware */,
        600: "#CF2F3D",
        700: "#B82534",
        800: "#A01B2B",
        900: "#891321",
      },
      muted: "rgba(var(--texts-muted))" /* Secondary text, theme aware */,
      page: "rgba(var(--background))" /* Page background, theme aware */,
    },
  },
  presets: [presetUno()],
});
