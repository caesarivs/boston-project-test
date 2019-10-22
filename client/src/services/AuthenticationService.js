import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  confirm (credentials) {
    return Api().post('confirm', credentials)
  },
  resend (credentials) {
    return Api().post('resend', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  logout (credentials) {
    return Api().post('logout', credentials)
  },
  recover (credentials) {
    return Api().post('recover-password', credentials)
  },
  reset (credentials) {
    return Api().post('reset-password', credentials)
  }
}
