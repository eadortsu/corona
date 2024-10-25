import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + 'Corona App',
    title: 'Corona App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'an app that will help the general public quickly access their risk level of infection as well as get reliable and up to date information on the corona virus.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'
  ],
  firebase: {
    // options
    config: {
      production: {
        apiKey: 'AIzaSyDGkxbGsTmdORwTGovQk27NUZbcvx-558c',
        authDomain: 'corona-gh.firebaseapp.com',
        databaseURL: 'https://corona-gh.firebaseio.com',
        projectId: 'corona-gh',
        storageBucket: 'corona-gh.appspot.com',
        messagingSenderId: '427890051773',
        appId: '1:427890051773:web:89517655300ec634e5c5d4',
        measurementId: 'G-Z26C3K54CQ'
      },
      development: {
        apiKey: 'AIzaSyDGkxbGsTmdORwTGovQk27NUZbcvx-558c',
        authDomain: 'corona-gh.firebaseapp.com',
        databaseURL: 'https://corona-gh.firebaseio.com',
        projectId: 'corona-gh',
        storageBucket: 'corona-gh.appspot.com',
        messagingSenderId: '427890051773',
        appId: '1:427890051773:web:89517655300ec634e5c5d4',
        measurementId: 'G-Z26C3K54CQ'
      }
    },
    customEnv: false,
    onFirebaseHosting: false,
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: null,
          onAuthStateChangedAction: null
        },
        ssr: {
          // !! NEVER deploy a service account file to github or to a publicly accessible folder on your server !!
          credential: '~/assets/firebase/serviceAccount.json',
          ignorePaths: ['/api/'],
          // Experimental Feature, use with caution.
          serverLogin: {
            sessionLifetime: 60 * 60 * 1000 // one hour
          }
        }
      },
      firestore: true,
      functions: {
        location: 'us-central1', // Default
        emulatorPort: 12345
      },
      storage: true,
      realtimeDb: true,
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000 // Default
        },
        defaultConfig: {
          welcome_message: 'Welcome'
        }
      },
      messaging: {
        createServiceWorker: true
      }
    }
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
