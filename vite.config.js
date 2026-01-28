import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 70 }, // lossy WebP for smaller size
      filter: (file) => {
        // Skip tiny images <20KB to prevent bloat
        const stats = fs.statSync(file);
        return stats.size > 20 * 1024;
      },
      // Optional: skip specific folders (like icons)
      skip: (file) => {
        const name = path.basename(file);
        const tinyIcons = ['Arrow right-circle.svg','dail.svg','icon1.svg','Message square.svg'];
        return tinyIcons.includes(name);
      },
    }),
  ],
  build: {
    sourcemap: false, // disable source maps for production
  },
});
