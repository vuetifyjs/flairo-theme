<template>
  <v-app>
    <system-bar />
    <app-bar
      block
      search
    />
    <base-view />
    <blog-sidebar v-if="$route.name === 'Blog'" />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',

    components: {
      AppBar: () => import('@/layouts/base/AppBar'),
      SystemBar: () => import('@/layouts/base/SystemBar'),
      BlogSidebar: () => import('@/layouts/base/BlogSidebar'),
      BaseView: () => import('@/layouts/base/View'),
    },
  }
</script>
