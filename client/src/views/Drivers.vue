<template>
  <div class="drivers">
    <h1>Drivers</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Birthdate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in drivers" :key="driver.id">
          <th scope="row">{{ driver.id }}</th>
          <td>{{ driver.name }}</td>
          <td>{{ driver.birthdate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DriversService from '@/services/Drivers'

export default {
  data () {
    return {
      drivers: null
    }
  },
  async mounted () {
    try {
      const response = await DriversService.getAllDrivers()
      this.drivers = response.data.drivers
    } catch (error) {
      throw error
    }
  }
}
</script>
