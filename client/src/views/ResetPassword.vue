<template>
  <div class="reset-password">
    <form class="form-box">
      <h2>Reset password</h2>
      <div class="form-group">
        <input type="text" class="form-control" id="code" placeholder="Enter your code" v-model="code" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="password" placeholder="Enter your new password" v-model="password" required>
      </div>
      <div>
        <button class="btn btn-primary btn-block" @click="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      password: ''
    }
  },
  methods: {
    reset () {}
  }
}
</script>
