<template>
  <v-app>
    <system-bar v-if="$vuetify.breakpoint.mdAndUp" />
    <app-bar
      block
      search
    />
    <base-view />
    <blog-sidebar v-if="$route.name === 'Blog'" />
    <settings />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',

    components: {
      AppBar: () => import('@/layouts/base/AppBar'),
      SystemBar: () => import('@/layouts/base/SystemBar'),
      Settings: () => import('@/layouts/base/Settings'),
      BlogSidebar: () => import('@/layouts/base/BlogSidebar'),
      BaseView: () => import('@/layouts/base/View'),
    },
  }
</script>
