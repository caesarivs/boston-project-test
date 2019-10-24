<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">A Transportation Company</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="$store.state.isUserLoggedIn">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li>
          <li class="nav-item" v-if="$store.state.isUserLoggedIn">
            <router-link class="nav-link" to="/drivers">Drivers</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item" v-if="!$store.state.isUserLoggedIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!$store.state.isUserLoggedIn">
            <router-link class="nav-link" to="/register">Sign Up</router-link>
          </li>
          <li class="nav-item" v-if="$store.state.isUserLoggedIn">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthService from '@/services/Auth'

export default {
  methods: {
    async logout () {
      try {
        await AuthService.logout({})
        this.$store.dispatch('setIdToken', null)
        this.$store.dispatch('setAccessToken', null)
        this.$store.dispatch('setRefreshToken', null)
        this.$store.dispatch('setUserAttributes', null)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        throw error
      }
    }
  }
}
</script>
