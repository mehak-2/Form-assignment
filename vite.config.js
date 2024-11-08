// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add the modules you want to externalize here
      external: ['@dnd-kit/core', '@dnd-kit/sortable'],
    },
  },
});
