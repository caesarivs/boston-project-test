import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import PasswordRecovery from './components/PasswordRecovery.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
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
        path: '/password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery
    }
  ]
})