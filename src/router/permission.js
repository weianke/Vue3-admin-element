import router from './index'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  // token 存在，并且要去 login, 就回后台系统的首页, 否则就去要去的页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // token 不存在，并且要去 login, 就跳转到 login, 否则就直接回 login
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
