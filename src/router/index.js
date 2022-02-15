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
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
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
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '隧洞数据录入', icon: 'dashboard' }
    }]
  },
  // {
  //   path: '/templates',
  //   component: () => import('@/views/templates/redcaveTemplate'),
  //   hidden: true
  // },
  {
    path: '/templates',
    component: Layout,
    children: [
      {
        path: 'redcaveTemplate',
        name: 'Form',
        component: () => import('@/views/templates/redcaveTemplate'),
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '红岩隧洞仪器监控',
    meta: { title: '红岩隧洞仪器监控', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'tree',
        name: '红岩隧洞',
        component: () => import('@/views/tree/index'),
        meta: { title: '生成周报', icon: 'form' }
      },
      {
        path: 'table',
        name: '数据监测',
        component: () => import('@/views/table/index'),
        meta: { title: '周报下载', icon: 'form' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '红岩隧洞原始数据录入', icon: 'form' }
      }
    ]
  },

  {
    path: '/updatemodel',
    component: Layout,
    children: [
      {
        path: 'wordUpdate',
        name: 'model模板',
        component: () => import('@/views/updatemodel/wordUpdate'),
        meta: { title: '隧洞模板上传', icon: 'form' }
      }
    ]
  },

  //新增


  {
    path: '/redcave',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'redcave',
        component: () => import('@/views/redcaveconvergence/index'),
        meta: { title: '仪器初始配置录入', icon: 'form' }
      }
    ]
  },


  {
    path: '/inputfile',
    component: Layout,
    children: [
      {
        path: 'inputData',
        name: 'inputfile',
        component: () => import('@/views/inputFile/inputData'),
        meta: { title: 'excel导入数据', icon: 'form' }
      }
    ]
  },

  //

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '王家湾隧洞',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },


  // 404 page must be placed at the end !!!
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
