import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import fs from 'fs'
import path from 'path'

function fixFederationCss() {
  return {
    name: 'fix-federation-css',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist/assets')
      if (!fs.existsSync(distDir)) return
      const files = fs.readdirSync(distDir)
      for (const file of files) {
        if (file.includes('remoteEntry')) {
          const filePath = path.join(distDir, file)
          let code = fs.readFileSync(filePath, 'utf-8')
          code = code.replace(
            /e\.forEach/g,
            '(Array.isArray(e)?e:[]).forEach'
          )
          fs.writeFileSync(filePath, code)
          console.log(`[fix-federation-css] Patched ${file}`)
        }
      }
    }
  }
}

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
      shared: []
    }),
    fixFederationCss()
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false
  },
  server: {
    port: 5001,
    strictPort: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  }
})