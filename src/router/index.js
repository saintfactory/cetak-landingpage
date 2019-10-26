/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Login from '@/components/Login'
// import Register from '@/components/Register'
// import DashboardCustomer from '@/components/customer/Dashboard'
// import DashboardVendor from '@/components/vendor/Dashboard'
// import Order from '@/components/Order'
//import Dashboard from '@/components/Dashboard'

import Based from '@/components/layouter/Based'

import Home from '@/components/homepage/Home'
import TentangKami from '@/components/homepage/TentangKami'
import CaraPrint from '@/components/homepage/CaraPrint'
import Kebijakan from '@/components/homepage/Kebijakan'


import Login from '@/components/login/Login'
import Join from '@/components/login/Join'
import RegisterCustomer from '@/components/login/RegisterCustomer'
import RegisterVendor from '@/components/login/RegisterVendor'

import DashboardCustomer from '@/components/customer/DashboardCustomer'
import DashboardVendor from '@/components/vendor/Dashboard'

import firebase from 'firebase'

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
          { 
              path: '/join', 
              component: Join 
          },
          { 
            path: '/login', 
            component: Login 
          },
          { 
            path: '/register-customer', 
            component: RegisterCustomer 
          },
          { 
            path: '/register-vendor', 
            component: RegisterVendor
          },

      ]
    },
    {
      path: '/dashboard-customer',
      name: 'DashboardCustomer',
      component: DashboardCustomer,
      meta: {
        requiresAuth: true,
        //customerAuth: true,
        //vendorAuth: false
      },
      children: []
    },

    
    {
      path: '/dashboard-vendor',
      name: 'DashboardVendor',
      component: DashboardVendor,
      meta: {
        requiresAuth: true,
        //customerAuth: false,
        //vendorAuth: true
      },
      children: []
    }
    
  ]
})

export default router