import axios from 'axios'

const getAllDrivers = () => {
  return axios.get('drivers')
}

export default {
  getAllDrivers
}
