/* eslint-disable */

import Vue from 'vue'
const App = () => import('./App.vue')
import { createRouter } from './router'
import 'bootstrap'
import './assets/fonts/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuefire'

const router = createRouter()
const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
}
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

Vue.config.performance = true
Vue.config.productionTip = false
