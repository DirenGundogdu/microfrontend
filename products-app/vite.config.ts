import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // @ts-ignore
    federation({
      name: 'products_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Products': './src/main.ts',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 5001,
    strictPort: true,
  }
})