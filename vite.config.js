// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),         // Page d'accueil
        post: resolve(__dirname, 'post/index.html'), // Page secondaire
        people: resolve(__dirname, 'people/index.html'), // Page secondaire
        contact: resolve(__dirname, 'contact/index.html'), // Page secondaire
      },
    },
  },
})