<template>
  <div class="cars">
    <h1>Cars</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Plate</th>
          <th scope="col">Model</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <th scope="row">{{ car.id }}</th>
          <td>{{ car.car_plate }}</td>
          <td>{{ car.car_model }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CarsService from '@/services/Cars'

export default {
  data () {
    return {
      cars: null
    }
  },
  async mounted () {
    try {
      const response = await CarsService.getAllCars()
      this.cars = response.data.cars
    } catch (error) {
      throw error
    }
  }
}
</script>
