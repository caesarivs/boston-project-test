<template>
  <div>
    <div class="cars" v-if="$store.state.isUserLoggedIn">
      <h1>Cars</h1>
      <div class="create-car">
        <form>
          <div class="form-group row">
            <label for="car_plate" class="col-sm-3 col-form-label">Car Plate</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="car_plate" placeholder="Enter car plate" v-model="car_plate" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="car_model" class="col-sm-3 col-form-label">Car Model</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="car_model" placeholder="Enter car model" v-model="car_model" required>
            </div>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary" @click="createCar">Create car</button>
          </div>
        </form>
      </div>
      <hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
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
    <div class="alert alert-danger" role="alert" v-if="!$store.state.isUserLoggedIn">
      <h3 class="alert-heading">Error!</h3>
      <p>Please login</p>
    </div>
  </div>
</template>

<script>
import CarsService from '@/services/Cars'

export default {
  data () {
    return {
      cars: null,
      car_plate: '',
      car_model: ''
    }
  },
  methods: {
    async createCar () {
      try {
        const response = await CarsService.createCar({
          car_plate: this.car_plate,
          car_model: this.car_model
        })
        this.cars.push(response.data.car)
        this.car_plate = ''
        this.car_model = ''
      } catch (error) {
        throw error
      }
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
