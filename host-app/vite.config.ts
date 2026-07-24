import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    federation({
      name: 'host_app',
      remotes: {
        products_app: 'http://localhost:5001/assets/remoteEntry.js',
        cart_app: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: []
    })
  ],
  build: {
    target: 'esnext'
  }
})