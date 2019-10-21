<template>
  <div class="register">
    <form>
      <h2>Register</h2>
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="AM" id="admin" value="Admin" v-model="account_type" required>
          <label class="form-check-label" for="inlineRadio1">Admin</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="AM" id="manager" value="Manager" v-model="account_type" required>
          <label class="form-check-label" for="inlineRadio2">Manager</label>
        </div>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name" required>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block" @click="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .register {
    width: 340px;
    margin: 50px auto;
  }
  .register form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  .register h2 {
    margin: 0px 0px 15px;
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
