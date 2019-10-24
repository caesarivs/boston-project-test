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
        <button type="button" class="btn btn-primary btn-block" @click="login">Login</button>
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
import AuthService from '@/services/Auth'

export default {
  data () {
    return {
      email: this.$route.params.email,
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        // const idToken = response.data.signInUserSession.idToken.jwtToken
        // const accessToken = response.data.signInUserSession.accessToken.jwtToken
        // const refreshToken = response.data.signInUserSession.refreshToken.token
        const userAttributes = response.data.attributes
        // this.$store.dispatch('setIdToken', idToken)
        // this.$store.dispatch('setAccessToken', accessToken)
        // this.$store.dispatch('setRefreshToken', refreshToken)
        this.$store.dispatch('setUserAttributes', userAttributes)
        this.$router.push({
          name: 'cars'
        })
      } catch (error) {
        throw error
      }
    }
  }
}
</script>
