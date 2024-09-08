import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: process.env.PORT || 3000,  
    proxy: {
      '/patrimoine': {
        target: process.env.REACT_APP_API_URL || 'http://localhost:3000',  
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
