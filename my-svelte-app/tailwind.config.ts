import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("@catppuccin/tailwindcss")]
} satisfies Config;
