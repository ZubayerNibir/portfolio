import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Lean config. GSAP + Lenis are small; React is the only heavy dep.
// We split GSAP into its own chunk so the initial HTML paints before motion loads.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
        },
      },
    },
  },
});
