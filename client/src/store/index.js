import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    // idToken: null,
    // accessToken: null,
    // refreshToken: null,
    userAttributes: null,
    isUserLoggedIn: false
  },
  mutations: {
    // setIdToken (state, token) {
    //   state.idToken = token
    // },
    // setAccessToken (state, token) {
    //   state.accessToken = token
    // },
    // setRefreshToken (state, token) {
    //   state.refreshToken = token
    // },
    setUserAttributes (state, user) {
      state.userAttributes = user
      if (user) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    }
  },
  actions: {
    // setIdToken ({ commit }, token) {
    //   commit('setIdToken', token)
    // },
    // setAccessToken ({ commit }, token) {
    //   commit('setAccessToken', token)
    // },
    // setRefreshToken ({ commit }, token) {
    //   commit('setRefreshToken', token)
    // },
    setUserAttributes ({ commit }, user) {
      commit('setUserAttributes', user)
    }
  },
  modules: {
  }
})
