// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),        // Page d'accueil
        product: resolve(__dirname, 'product/index.html'), // Page secondaire
        products: resolve(__dirname, 'products/index.html'), // Page secondaire
        people: resolve(__dirname, 'people/index.html'), // Page secondaire
        contact: resolve(__dirname, 'contact/index.html'), // Page secondaire
      },
    },
  },
})