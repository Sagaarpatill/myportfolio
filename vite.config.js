import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Make sure this matches your repo name
  build: {
    outDir: 'build'  // This will generate 'build/' instead of 'dist/'
  },
  rollupOptions: {
    external: ["locomotive-scroll"],
  },
});
