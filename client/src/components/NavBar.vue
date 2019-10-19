<template>
  <div id="navbar">
    <ul>
      <li><router-link :to="{ name: 'register' }">Register</router-link></li>
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
</style>
