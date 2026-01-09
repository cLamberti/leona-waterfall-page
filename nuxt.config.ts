import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts'
  ],
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  ssr: false,
  
  css: ['~/assets/css/main.css'],
  
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  
  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      sourcemap: false,
    }
  }
})