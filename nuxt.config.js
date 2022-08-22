import smConfig from './sm.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Norman Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss'
  ],

  styleResources: {
    scss: '@/assets/styles/_abstracts.scss',
    hoistUseStatements: true
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/prismic', {
        endpoint: smConfig.apiEndpoint || ''
      }
    ]
  ],
  // router: {
  //   extendRoutes (routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: 'projects',
  //       component: resolve(__dirname, 'pages/projects_archive.vue')
  //     })
  //   }
  // },
  prismic: {
    endpoint: 'https://norman-porfolio.cdn.prismic.io/api/v2',
    modern: true,
    apiOptions: {
      routes: [
        {
          type: 'projects_archive',
          path: '/project'
        }
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@prismicio/vue',
      'vue-slicezone',
      'gsap'
    ]
  },
  pageTransition: {
    beforeEnter (el) {
      console.log('beforeEnter Enter')
    },
    enter (el, done) {
      console.log('enter')
      done()
    },
    afterEnter (el) {
      console.log('afterEnter Leave')
      this.$nuxt.$emit('hoverLeave')
    },
    beforeLeave (el) {
      console.log('beforeLeave Leave')
      this.$nuxt.$emit('hoverLeave')
    },
    afterLeave (el) {
      console.log('afterLeave Leave')
      this.$nuxt.$emit('hoverLeave')
    },
    leave (el, done) {
      console.log(' leave')
      done(1)
    }
  }
}
