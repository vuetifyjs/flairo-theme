export const routes = [
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/home.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/pages/about.vue'),
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('@/pages/services.vue'),
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('@/pages/portfolio.vue'),
        },
        {
          path: 'project/:id',
          name: 'ProjectDetail',
          props: true,
          component: () => import('@/pages/portfolio-detail.vue'),
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import('@/pages/blog.vue'),
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('@/pages/contact.vue'),
        },
        {
          path: 'sink',
          name: 'Sink',
          component: () => import('@/pages/sink.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/pages/[...error].vue'),
        },
      ],
    },
  ]
  