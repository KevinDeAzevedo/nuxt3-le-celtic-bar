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
    '@nuxt/content',
    '@nuxtjs/strapi'
  ],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  content: {
    markdown: {
      tags: {
        h2: 'ProseH2',
        h3: 'ProseH3',
      }
    }
  },
});