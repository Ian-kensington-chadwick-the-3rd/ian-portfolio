import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port:3001,
        open:true
    },
    build: {
        assetsDir: './src/pages/assets', // the folder where your assets are located
      },
})