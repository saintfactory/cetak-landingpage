import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import DashboardCustomer from '@/components/customer/Dashboard'
import DashboardVendor from '@/components/vendor/Dashboard'
import Order from '@/components/Order'
//import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard-customer',
      name: 'DashboardCustomer',
      component: DashboardCustomer,
      meta: {
        requiresAuth: true
      },
      children: []
    },
    {
      path: '/dashboard-vendor',
      name: 'DashboardVendor',
      component: DashboardVendor,
      meta: {
        requiresAuth: true
      },
      children: []
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

export default router