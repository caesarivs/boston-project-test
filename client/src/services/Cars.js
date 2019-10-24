import axios from 'axios'

const getAllCars = () => {
  return axios.get('cars')
}

export default {
  getAllCars
}
