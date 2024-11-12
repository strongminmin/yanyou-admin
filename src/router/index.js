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
      name: 'Home',
      component: () => import('@/views/Home/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },
  // 轮播图管理
  {
    path: '/banner',
    component: Layout,
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
    redirect: '/advisory/advisory',
    meta: { title: '每日热点管理', icon: 'advisory' },
    children: [{
      path: 'advisory',
      name: 'Advisory',
      component: () => import('@/views/Advisory/index'),
      meta: { title: '热点列表', icon: 'advisory' }
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: () => import('@/views/Advisory/edit'),
      meta: { title: '发布热点', icon: 'advisory' }
    }]
  },

  // 校研会管理
  {
    path: '/meet',
    component: Layout,
    redirect: '/meet/meet',
    meta: { title: '校研会管理', icon: 'meet' },
    children: [{
      path: 'meet',
      name: 'Meet',
      component: () => import('@/views/Meet/index'),
      meta: { title: '会议列表', icon: 'meet' }
    },
    {
      path: 'edit/:id',
      name: 'Edit',
      component: () => import('@/views/Meet/edit'),
      meta: { title: '发布会议', icon: 'meet' }
    }]
  },
  // 院校信息管理
  {
    path: '/college',
    component: Layout,
    redirect: '/college/college',
    meta: { title: '院校信息管理', icon: 'college' },
    children: [{
      path: 'college',
      name: 'College',
      component: () => import('@/views/College/index'),
      meta: { title: '院校列表', icon: 'college' }
    }, {
      path: 'edit/:id',
      name: 'Edit',
      component: () => import('@/views/College/edit'),
      meta: { title: '添加院校', icon: 'college' }
    }]
  },
  {
    path: '/resources',
    component: Layout,
    children: [{
      path: 'resources',
      name: 'Resources',
      component: () => import('@/views/Resources/index'),
      meta: { title: '资源管理', icon: 'college' }
    }]
  },
  // 用户管理
  {
    path: '/user',
    component: Layout,
    children: [{
      path: 'user',
      name: 'User',
      component: () => import('@/views/User/index'),
      meta: { title: '用户管理', icon: 'user' }
    }]
  },
  // 心情管理
  {
    path: '/talk',
    component: Layout,
    children: [{
      path: 'talk',
      name: 'talk',
      component: () => import('@/views/Talk/index'),
      meta: { title: '心情管理', icon: 'feedback' }
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
