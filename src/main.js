import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuefire'
// import * as Sentry from '@sentry/browser';
// import * as Integrations from '@sentry/integrations';
import firebase from 'firebase'

// Sentry.init({
//   dsn: 'https://353b98443b6b49fc88022fd374ef9155@sentry.io/1727578',
//   integrations: [new Integrations.Vue({Vue, attachProps: true})],
// });

Vue.config.productionTip = false
let app = ''

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
})
