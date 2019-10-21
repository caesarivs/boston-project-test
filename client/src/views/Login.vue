<template>
  <div class="login">
    <form>
      <h2>Login</h2>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block" @click="submit">Login</button>
      </div>
      <div class="clearfix">
        <router-link to="/forgot-password">Forgot password?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .login {
    width: 340px;
    margin: 50px auto;
  }
  .login form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  .login h2 {
    margin: 0 0 15px;
  }
  .form-control, .btn {
    min-height: 38px;
    border-radius: 2px;
  }
  .btn {
    font-size: 15px;
    font-weight: bold;
  }
</style>
