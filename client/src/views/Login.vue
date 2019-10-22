<template>
  <div class="login">
    <form class="form-box">
      <h2>Log in</h2>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Enter your password" v-model="password" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block" @click="login">Login</button>
      </div>
      <div class="clearfix">
        Forgot your password? <router-link to="/recover-password">Recover password</router-link>
      </div>
      <div class="clearfix">
        No account? <router-link to="/register">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
