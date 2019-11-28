/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import Based from '@/components/layouter/Based'

import Home from '@/components/homepage/Home'
import TentangKami from '@/components/homepage/TentangKami'
import CaraPrint from '@/components/homepage/CaraPrint'

import DashboardCustomer from '@/components/customer/DashboardCustomer'
import PilihVendor from '@/components/customer/PilihVendor'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/home'
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
      ]
    },
    {
      path: '/dashboard-customer',
      name: 'DashboardCustomer',
      component: DashboardCustomer,
      children: [
        {
          path: '',
          component: PilihVendor
        },
        {
          path: '/pilih-vendor',
          component: PilihVendor
        }
      ]
    },
  ]
})

export default router