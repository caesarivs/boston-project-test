<template>
  <div id="register">
    <form>
      <div>
        <h1>Register</h1>
        <hr>
        <div>
          <label for="admin">
            <input type="radio" id="admin" value="Admin" v-model="userData.accountType" required> Admin
          </label>
          <label for="manager">
            <input type="radio" id="manager" value="Manager" v-model="userData.accountType" required> Manager
          </label>
        </div>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="userData.name" required>
        </div>
        <div>
          <label for="email">Mail</label>
          <input type="text" id="email" v-model="userData.email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="userData.password" required>
        </div>
      </div>
      <hr>
      <div>
        <button @click.prevent="submitted">Submit!</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  el: '#register',
  data: function () {
    return {
      userData: {
        accountType: '',
        name: '',
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
