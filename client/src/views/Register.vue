<template>
  <div class="register">
    <form class="form-box">
      <h2>Register</h2>
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="admin" value="Admin" v-model="account_type">
          <label class="form-check-label" for="admin">Admin</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="manager" value="Manager" v-model="account_type">
          <label class="form-check-label" for="manager">Manager</label>
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
        <button class="btn btn-primary btn-block" @click="register">Register</button>
      </div>
      <div class="clearfix">
        Have an account? <router-link to="/login">Log in</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

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
      const response = await AuthenticationService.register({
        account_type: this.account_type,
        name: this.name,
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
