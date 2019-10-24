<template>
  <div>
    <div class="drivers" v-if="$store.state.isUserLoggedIn">
      <h1>Drivers</h1>
      <div class="create-driver" v-if="$store.state.userAttributes['custom:account_type'] === 'Admin'">
        <form>
          <div class="form-group row">
            <label for="name" class="col-sm-3 col-form-label">Driver name</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="name" placeholder="Enter driver name" v-model="name" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="birthdate" class="col-sm-3 col-form-label">Driver birthdate</label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="birthdate" v-model="birthdate" required>
            </div>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary" @click="createDriver" >Create driver</button>
          </div>
        </form>
      </div>
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
    <div class="alert alert-danger" role="alert" v-if="!$store.state.isUserLoggedIn">
      <h3 class="alert-heading">Error!</h3>
      <p>Please login</p>
    </div>
  </div>
</template>

<script>
import DriversService from '@/services/Drivers'

export default {
  data () {
    return {
      drivers: null,
      name: '',
      birthdate: ''
    }
  },
  methods: {
    async createDriver () {
      try {
        const response = await DriversService.createDriver({
          name: this.name,
          birthdate: this.birthdate
        })
        this.drivers.push(response.data.driver)
        this.name = ''
        this.birthdate = ''
      } catch (error) {
        throw error
      }
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
