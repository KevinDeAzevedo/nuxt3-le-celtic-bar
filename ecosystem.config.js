module.exports = {
  apps: [
    {
      name: 'nuxt3-base-2000',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        PORT: 2000,
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
      script: './.output/server/index.mjs',
    },
  ],
};
