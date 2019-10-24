import axios from 'axios'

const getAllDrivers = () => {
  return axios.get('drivers')
}

const createDriver = (values) => {
  return axios.post('drivers', values)
}

export default {
  getAllDrivers,
  createDriver
}
