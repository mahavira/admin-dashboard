/* ============
 * Auth Module
 * ============
 */
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    check (state) {
      state.token = localStorage.getItem('token') || ''
      if (state.token) {
        Vue.$http.defaults.headers.common.Authorization = state.token
      }
    },
    register () {
      //
    },
    login (state, token) {
      state.token = token
      localStorage.setItem('token', token)
      Vue.$http.defaults.headers.common.Authorization = token
    },
    /**
     * 记住密码
     */
    remember (state, account) {
      if (account.remember) {
        localStorage.setItem('remember:username', account.username)
        localStorage.setItem('remember:password', account.password)
        localStorage.setItem('remember', 1)
      } else {
        localStorage.removeItem('remember:username')
        localStorage.removeItem('remember:password')
        localStorage.removeItem('remember')
      }
    },
    logout (state) {
      state.token = ''
      localStorage.removeItem('token')
      Vue.$http.defaults.headers.common.Authorization = ''
    }
  },
  actions: {
    logout ({ commit }) {
      commit('logout')
      Vue.router.push('/login')
    }
  }
}
