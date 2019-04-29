import packageData from './package.json'

module.exports = {
  srcDir: 'app/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nust.js deploy ready for firebase functions and host' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [],
    less: []
  },
  /*
  ** Build configuration
  */
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
    VERSION: packageData.version
  },
  build: {
    /*
    ** Run ESLint on save
    */
    publicPath: '/assets/',

    extend (config, { isDev, isClient, isServer }) {

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if(isServer) {
      }
    }
  },
  serverMiddleware: [
    // API middleware
    './server/api/index'
  ]
}

