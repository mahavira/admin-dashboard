/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import {API_BASE_PATH, API_HOST} from '@/config'

axios.defaults.baseURL = API_HOST + API_BASE_PATH
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(response => {
  if (response.data && response.data.status && response.data.status === 100) {
    store.dispatch('auth/logout')
  }
  return response
}, (error) => {
  if (error.response.status === 401) {
    store.dispatch('auth/logout')
  }
  return Promise.reject(error)
})

// Bind Axios to Vue.
Vue.$http = axios
Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return axios
  }
})
