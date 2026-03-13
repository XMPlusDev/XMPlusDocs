module.exports = {
  apps: [
    {
      name: 'XMPlusDocs',
      script: '.output/server/index.mjs',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      env: {
        API_URL: 'https://documentation.xmplus.dev',
		PORT: 3000,
      }
    }
  ]
}
