import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Drivers from '@/views/Drivers.vue'
import Cars from '@/views/Cars.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: Drivers
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  }
]

const router = new VueRouter({
  routes
})

export default router
