import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
const { resolve } = require('path')

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './assets/d3.v3.min.js',
          dest: 'assets'
        }
      ]
    })
  ],
})