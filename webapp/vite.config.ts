
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure "@/components" works
    },
  },
  // Base path should be '/' since we're handling routing at the server level
  base: '/',
});
