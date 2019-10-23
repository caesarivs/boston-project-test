<template>
  <div class="register">
    <form class="form-box">
      <h2>Register</h2>
      <div class="form-group">
        <div class="custom-control custom-radio custom-control-inline">
          <input class="custom-control-input" type="radio" id="admin" value="Admin" v-model="account_type">
          <label class="custom-control-label" for="admin">Admin</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input class="custom-control-input" type="radio" id="manager" value="Manager" v-model="account_type">
          <label class="custom-control-label" for="manager">Manager</label>
        </div>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="name" placeholder="Enter your name" v-model="name" required>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Enter your password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary btn-block" @click="register">Register</button>
      </div>
      <div class="clearfix">
        Have an account? <router-link to="/login">Log in</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/Auth'

export default {
  data () {
    return {
      account_type: 'Manager',
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthService.register({
          account_type: this.account_type,
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'confirm',
          params: {
            email: this.email
          }
        })
      } catch (error) {
        throw error
      }
    }
  }
}
</script>
