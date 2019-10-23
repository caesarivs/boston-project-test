<template>
  <div class="reset-password">
    <form class="form-box">
      <h2>Recover password</h2>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="email" required>
      </div>
      <div>
        <button class="btn btn-primary btn-block" @click="recover">Recover</button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/Auth'

export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async recover () {
      try {
        await AuthService.recover({
          email: this.email
        })
        this.$router.push({
          name: 'reset-password',
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
