<template>
  <div id="password-recovery">
    <form>
      <div>
        <h1>Recover Password</h1>
        <hr>
        <div>
          <label for="email">Mail</label>
          <input type="text" id="email" v-model="email" required>
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
  name: 'PasswordRecovery',
  el: '#password-recovery',
  data: function () {
    return {
      email: '',
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
