/* ============
 * Account Module
 * ============
 */
export default {
  namespaced: true,
  state: {
    account: {}
  },
  getters: {},
  mutations: {
    save (state, account) {
      state.account = Object.assign(state.account, account)
      localStorage.setItem('account', JSON.stringify(state.account))
    },
    clear (state) {
      state.account = {}
      localStorage.removeItem('account')
    }
  },
  actions: {}
}
