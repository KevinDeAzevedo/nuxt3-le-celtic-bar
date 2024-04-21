// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: "node-server",
  },
  runtimeConfig: {
    PORT: '',
    HOST: '',
    NITRO_PORT: '',
    NITRO_HOST: '',
    public: {
      strapiUrl: process.env.STRAPI_URL,
      nuxtUrl: process.env.NUXT_URL,
    },
  },
  modules: [
    '@nuxtjs/strapi',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'GTM-W9RF3JN'
  },
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
});