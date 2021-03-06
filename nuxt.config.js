module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  
  head: {
    title: 'nuxt-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: '/css/main.550dcf66.css'}
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'},
      { src:'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'},
      { src: '/js/main.js', type: 'javascript'}
    ]

  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [{src:'~/plugins/vue-scrollto.js', ssr: false}],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-scrollto'],

    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
