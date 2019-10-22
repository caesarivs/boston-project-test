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
  }
}
