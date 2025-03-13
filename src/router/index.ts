import { createRouter, createWebHistory } from 'vue-router'
import localCache from '@/utils/cache'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'userlogin',
      component: () => import('../views/UserLogin/UserLogin.vue')
    },
    {
      path: '/main',
      name: 'mainPage',
      component: () => import('../views/MainPage/MainPage.vue')
    },
    {
      path: '/:patchMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound/NotFound.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router
