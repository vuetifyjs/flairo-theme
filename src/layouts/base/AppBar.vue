<template>
  <v-app-bar
    app
    color="white"
    height="150px"
  >
    <v-toolbar-title class="headline">
      <span>App</span>
    </v-toolbar-title>
    <v-spacer />
    <div>
      <v-tabs
        hide-slider
        optional
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          :to="{ name: item.name }"
          :exact="item.name === 'Home'"
          :ripple="false"
          active-class="primary--text"
          class="font-weight-medium text-none"
          min-width="120px"
          text
        >
          <span v-text="item.name" />
          <v-icon
            small
            right
            v-text="item.icon"
          />
        </v-tab>
      </v-tabs>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'BaseAppBar',

    data () {
      return {
        items: [
          { name: 'Home', icon: 'mdi-home' },
          { name: 'About', icon: 'mdi-account-group' },
          { name: 'Services', icon: 'mdi-book-open-variant' },
          { name: 'Portfolio', icon: 'mdi-book' },
          { name: 'Blog', icon: 'mdi-web' },
          { name: 'Contact', icon: 'mdi-phone' },
        ],
      }
    },
  }
</script>
