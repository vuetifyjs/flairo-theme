<template>
  <v-app>
    <base-system-bar />
    <base-app-bar
      block
      search
    />

    <base-view />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',

    components: {
      BaseSystemBar: () => import('./SystemBar'),
      BaseAppBar: () => import('./AppBar'),
      BaseView: () => import('./View'),
    },
  }
</script>
