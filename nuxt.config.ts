// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts'
  ],
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  
  // Configuración para SSR (MPA)
  ssr: true,
  
  // Asegúrate de NO tener preset: 'static'
})
