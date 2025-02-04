import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-theme': '#1E40AF',
        'yellow-theme': '#F59E0B',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(254, 235, 243, 1) 0%, rgba(148, 187, 233, 1) 100%)',
      },
    },
  },
  plugins: [],
});
