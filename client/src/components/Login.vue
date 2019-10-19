<template>
  <div id="login">
    <form>
      <div>
        <h1>Login</h1>
        <hr>
        <div>
          <label for="email">Mail</label>
          <input type="text" id="email" v-model="userData.email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="userData.password" required>
        </div>
      </div>
      <router-link :to="{ name: 'password-recovery' }">Forgot password?</router-link>
      <hr>
      <div>
        <button @click.prevent="submitted">Submit!</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  el: '#login',
  data: function () {
    return {
      userData: {
        email: '',
        password: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
    }
  }
}
</script>

<style>
</style>
