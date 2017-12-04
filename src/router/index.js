import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import routes from './routes'
Vue.use(Router)

const router = new Router({
  routes: routes
})

/**
 * 页面切换过程中显示进度条
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.state.auth.token) {
    /**
     * 如果用户没有经过身份验证和访问需要身份验证[auth]的页面，重定向到登录页面
     */
    next('login')
  } else if (to.matched.some(m => m.meta.guest) && store.state.auth.token) {
    /**
     * 如果用户通过身份验证和访问一个[guest]页面，重定向到仪表板页面
     */
    next('dashboard.index')
  } else {
    next()
  }
})

Vue.router = router
export default router
