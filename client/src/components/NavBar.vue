<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
          <router-link class="nav-link" to="/register">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
