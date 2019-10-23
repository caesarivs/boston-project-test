<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">A Transportation Company</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/drivers">Drivers</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container {
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
