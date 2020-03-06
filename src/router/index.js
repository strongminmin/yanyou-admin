import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
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
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
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
      component: () => import('@/views/dashboard/index'),
      meta: { title: '轮播图管理', icon: 'dashboard' }
    }]
  },
  // 每日热点管理
  {
    path: '/advisory',
    component: Layout,
    redirect: '/advisory-layout',
    children: [{
      path: 'advisory',
      name: 'Advisory',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '每日热点管理', icon: 'dashboard' }
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
      component: () => import('@/views/dashboard/index'),
      meta: { title: '校研会管理', icon: 'dashboard' }
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
      component: () => import('@/views/dashboard/index'),
      meta: { title: '院校信息管理', icon: 'dashboard' }
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
      component: () => import('@/views/dashboard/index'),
      meta: { title: '用户管理', icon: 'dashboard' }
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
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统反馈', icon: 'dashboard' }
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
