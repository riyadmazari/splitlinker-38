
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // For GitHub Pages with custom domain
  base: '/',
  server: {
    // Ensure proper MIME types are used
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
  build: {
    // Generate a 404.html file for SPA routing
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
