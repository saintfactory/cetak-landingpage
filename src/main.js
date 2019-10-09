import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuefire'
//import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// let app = ''

// firebase.auth().onAuthStateChanged(() => {
//   if(!app) {
//     app = new Vue({
//       render: h => h(App),
//       router
//     }).$mount('#app')
//   }
// })
