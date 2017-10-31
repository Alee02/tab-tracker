import Vue from 'vue'
import Vuex from 'vuex'

//  Access the store and vue componenets
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    //  Global states that we keep track of
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})