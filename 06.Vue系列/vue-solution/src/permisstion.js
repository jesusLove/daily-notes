import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

// 路由守卫

router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    // 存在 token 进入首页
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有 token，进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
