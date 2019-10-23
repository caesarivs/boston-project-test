import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Confirm from '@/views/Confirm.vue'
import Login from '@/views/Login.vue'
import RecoverPassword from '@/views/RecoverPassword.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import Cars from '@/views/Cars.vue'
import Drivers from '@/views/Drivers.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/recover-password',
      name: 'recover-password',
      component: RecoverPassword
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: Drivers
    }
  ]
})

export default router
