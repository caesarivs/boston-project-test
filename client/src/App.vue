<template>
  <div id="app">
    <NavBar />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import './styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
main.container {
  margin: 25px auto;
}
.form-box {
  width: 340px;
  margin: 50px auto;
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.form-box h2 {
  margin: 0px 0px 15px;
}
.form-control, .btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn-block {
  font-size: 15px;
  font-weight: bold;
}
.btn-link {
  padding: 0;
  font-size: 12px;
}
.clearfix {
  font-size: 12px;
}
</style>
