import axios from 'axios'

const getAllCars = () => {
  return axios.get('cars')
}

const createCar = (values) => {
  return axios.post('cars', values)
}

export default {
  getAllCars,
  createCar
}
