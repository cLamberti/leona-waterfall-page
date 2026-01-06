// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts'
  ],
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Configuración para SSR (MPA)
  ssr: true,
  
  // Asegúrate de NO tener preset: 'static'
})
