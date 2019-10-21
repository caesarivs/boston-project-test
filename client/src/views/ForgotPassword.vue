<template>
  <div class="forgot-password">
    <h1>Forgot password</h1>
    <div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <button @click="submit">Recover</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
