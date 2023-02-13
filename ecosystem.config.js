module.exports = {
  apps: [
    {
      name: 'Nuxt3-Le-Celtic-Bar-1347',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        PORT: 1347,
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
      script: './.output/server/index.mjs',
    },
  ],
};
