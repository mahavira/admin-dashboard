// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/element-theme.css'
import VuexRouterSync from 'vuex-router-sync'
import router from './router'
import store from './store'
import './http'
import './assets/index.css'
import App from './App'

Vue.config.productionTip = false
VuexRouterSync.sync(store, router)
Vue.use(ElementUI)
store.commit('auth/check')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
