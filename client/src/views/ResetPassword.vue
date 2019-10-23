<template>
  <div class="reset-password">
    <form class="form-box">
      <h2>Reset password</h2>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="number" class="form-control" id="code" placeholder="Enter your code" v-model="code" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Enter your new password" v-model="password" required>
      </div>
      <div>
        <button class="btn btn-primary btn-block" @click="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/Auth'

export default {
  data () {
    return {
      email: '',
      code: '',
      password: ''
    }
  },
  methods: {
    async recover () {
      try {
        await AuthService.reset({
          email: this.email,
          code: this.code,
          password: this.password
        })
        this.$router.push({
          name: 'login',
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
