export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    meta: {
      auth: true, // 是否需要授权
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'auth.login',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'auth.register',
    component: () => import('@/views/register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/layout.vue'),
    children: [{
      path: '',
      name: 'dashboard.index',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: '首页',
        auth: true
      }
    }]
  },
  {
    path: '/*',
    redirect: '/'
  }
]
