<template>
  <div class="confirm">
    <form class="form-box">
      <h2>Confirm signup</h2>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="number" class="form-control" id="code" placeholder="Enter your code" v-model="code" required>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary btn-block" @click="confirm">Confirm</button>
      </div>
      <div class="clearfix">
        Lost the code?<br>
        <button type="button" class="btn btn-link" @click="resend">Resend</button>
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
      code: ''
    }
  },
  methods: {
    async confirm () {
      try {
        await AuthService.confirm({
          email: this.email,
          code: this.code
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
    },
    async resend () {
      try {
        await AuthService.resend({
          email: this.email
        })
        alert('Verification code sent successfully')
      } catch (error) {
        throw error
      }
    }
  }
}
</script>
