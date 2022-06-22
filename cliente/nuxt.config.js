import TerserPlugin from 'terser-webpack-plugin'
const URL="http://localhost:3001"

export default {  
  server: {
    port: 9001, // default: 3000
    host: '0.0.0.0' // default: localhost
  }, 
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: "La tasa más baja del mercado | Doopla",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'ashgrim, ashgrim.net,doopla clone,doopla clon'},
      { hid: 'description', name: 'description', content:'clon del sitio doopla.mx' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [{src:'@/plugins/vue-carousel-3d.js',ssr:false} ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy:true,
    browserBaseURL: "http://localhost:3001",
    baseURL:"http://doopla-backend:3001"
  },
  proxy: {
    '/api':"http://doopla-backend:3001"
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: false
        })
      ]
    }
  }
}
