// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/global.css'],

  runtimeConfig: {
    maptilerApiKey: process.env.MAPTILER_API_KEY,          // only on server
    public: {
      // Don't expose the key
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-svgo',
    '@pinia/nuxt',
    '@nuxtjs/device'
  ],

  fonts: {
    defaults: {
      weights: ['100 900'],
    },

  },

  app: {
    head: {
      title: `AmpUp`,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  }
})