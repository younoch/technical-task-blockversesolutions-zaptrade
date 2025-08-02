// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  runtimeConfig: {
    public: {
      
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
