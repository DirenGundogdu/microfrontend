import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";
import fs from 'fs';
import path from 'path';

// Vite 8 + federation eklentisi CSS bug fix
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
        // @ts-ignore
        federation({
            name: 'cart_app',
            filename: 'remoteEntry.js',
            exposes: {
                './Cart': './src/main.ts',
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
        port: 5002,
        strictPort: true,
    },
    preview: {
        port: 5002,
        strictPort: true,
    }
});