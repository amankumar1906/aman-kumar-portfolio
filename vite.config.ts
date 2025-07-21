import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/aman-kumar-portfolio/', // make sure this matches your repo
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
