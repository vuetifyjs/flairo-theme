// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/base/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'sink',
          name: 'Sink',
          component: () => import('@/views/sink/Index.vue'),
        },
      ],
    },
  ],
})

export default router
