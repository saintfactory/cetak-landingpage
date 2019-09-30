import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'


import Based from '@/components/layouter/Based'

import Home from '@/components/homepage/Home'
import TentangKami from '@/components/homepage/TentangKami'
import CaraPrint from '@/components/homepage/CaraPrint'
import Kebijakan from '@/components/homepage/Kebijakan'
//import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },

    { 
      path: '/', 
      name: 'based',
      component: Based,
      children: [
          {
              path: '',
              component: Home
          },
          {
              path: '/home',
              component: Home
          },
          { 
              path: '/tentang', 
              component: TentangKami 
          },
          { 
              path: '/cara', 
              component: CaraPrint 
          },
          {
              path: '/kebijakan', 
              component: Kebijakan 
          },
          // { 
          //     path: '/join', 
          //     component: Join 
          // },
      ]
    },

    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if(requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('home')
//   else next()
// })

//export default router