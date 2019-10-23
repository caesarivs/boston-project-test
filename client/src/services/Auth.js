import axios from 'axios'

export default {
  register (credentials) {
    return axios.post('register', credentials)
  },
  confirm (credentials) {
    return axios.post('confirm', credentials)
  },
  resend (credentials) {
    return axios.post('resend', credentials)
  },
  login (credentials) {
    return axios.post('login', credentials)
  },
  logout (credentials) {
    return axios.post('logout', credentials)
  },
  recover (credentials) {
    return axios.post('recover-password', credentials)
  },
  reset (credentials) {
    return axios.post('reset-password', credentials)
  }
}
