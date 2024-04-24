import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // Add React plugin if not already included
    // Add other plugins as needed
  ],
  resolve: {
    // Ensure .js and .jsx files are resolved
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  },
  build: {
    // Specify the entry file
    rollupOptions: {
      input: {
        main: '/src/main.jsx',
      },
    },
  },
});
