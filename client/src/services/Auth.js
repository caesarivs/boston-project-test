import axios from 'axios'

const register = (credentials) => {
  return axios.post('register', credentials)
}
const confirm = (credentials) => {
  return axios.post('confirm', credentials)
}
const resend = (credentials) => {
  return axios.post('resend', credentials)
}
const login = (credentials) => {
  return axios.post('login', credentials)
}
const logout = (credentials) => {
  return axios.post('logout', credentials)
}
const recover = (credentials) => {
  return axios.post('recover-password', credentials)
}
const reset = (credentials) => {
  return axios.post('reset-password', credentials)
}

export default {
  register,
  confirm,
  resend,
  login,
  logout,
  recover,
  reset
}
