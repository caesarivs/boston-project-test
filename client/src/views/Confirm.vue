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
        <button class="btn btn-primary btn-block" @click="confirm">Confirm</button>
      </div>
      <div class="clearfix">
        Lost the code? <a href="#" @click="resend">Resend</a>
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
      code: ''
    }
  },
  methods: {
    async confirm () {
      const response = await AuthenticationService.confirm({
        email: this.email,
        code: this.code
      })
      console.log(response.data)
    },
    async resend () {
      const response = await AuthenticationService.resend({
        email: this.email
      })
      console.log(response.data)
    }
  }
}
</script>
