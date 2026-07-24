import { defineConfig } from 'vite';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        federation({
            name: 'cart_app',
            filename: 'remoteEntry.js',
            exposes: {
                './Cart': './src/main.ts',
            },
            shared: []
        })
    ],
    build: {
        target: 'esnext'
    },
    server: {
        port: 5002,
        strictPort: true,
    }
});