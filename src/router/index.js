import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'HomeLayout',
      component: () => import('@/views/Home/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },
  // 轮播图管理
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner-layout',
    children: [{
      path: 'banner',
      name: 'Banner',
      component: () => import('@/views/Banner/index'),
      meta: { title: '轮播图管理', icon: 'banner' }
    }]
  },
  // 每日热点管理
  {
    path: '/advisory',
    component: Layout,
    redirect: '/advisory-layout',
    meta: { title: '每日热点管理', icon: 'advisory' },
    children: [{
      path: 'advisory',
      name: 'Advisory',
      component: () => import('@/views/Advisory/index'),
      meta: { title: '热点列表', icon: 'advisory' }
    },
    {
      path: 'release-advisory/:id',
      name: 'ReleaseAdvisory',
      component: () => import('@/views/Advisory/edit'),
      meta: { title: '发布热点', icon: 'advisory' }
    }]
  },

  // 校研会管理
  {
    path: '/meet',
    component: Layout,
    redirect: '/meet-layout',
    children: [{
      path: 'meet',
      name: 'Meet',
      component: () => import('@/views/Meet/index'),
      meta: { title: '校研会管理', icon: 'meet' }
    }]
  },
  // 院校信息管理
  {
    path: '/college',
    component: Layout,
    redirect: '/college-layout',
    children: [{
      path: 'college',
      name: 'College',
      component: () => import('@/views/College/index'),
      meta: { title: '院校信息管理', icon: 'college' }
    }]
  },
  // 用户管理
  {
    path: '/user',
    component: Layout,
    redirect: '/user-layout',
    children: [{
      path: 'user',
      name: 'User',
      component: () => import('@/views/User/index'),
      meta: { title: '用户管理', icon: 'user' }
    }]
  },
  // 系统反馈
  {
    path: '/feedback',
    component: Layout,
    redirect: '/feedback-layout',
    children: [{
      path: 'feedback',
      name: 'Feedback',
      component: () => import('@/views/Feedback/index'),
      meta: { title: '系统反馈', icon: 'feedback' }
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
