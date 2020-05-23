<template>
  <v-app-bar
    app
    elevate-on-scroll
    style="right: 0"
    :color="color || 'white'"
    :height="$vuetify.breakpoint.mdAndUp ? '150px' : '60px'"
  >
    <v-img
      class="hidden-sm-and-down"
      :max-width="$vuetify.breakpoint.mdAndUp ? '200px' : '100px'"
      max-height="120px"
      min-height="120px"
      :src="require('@/assets/campfire.svg')"
    />
    <v-toolbar-title class="headline">
      <router-link
        :to="{ name: 'Home' }"
        tag="h4"
        style="cursor: pointer"
        v-text="appData.title"
      />
    </v-toolbar-title>
    <v-spacer />
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-tabs
        hide-slider
        optional
        background-color="transparent"
        v-bind="tabAttrs"
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
            v-if="item.icon && $vuetify.breakpoint.mdAndUp"
            small
            right
            v-text="item.icon"
          />
        </v-tab>
      </v-tabs>
    </div>
    <div v-else>
      <v-btn
        icon
        @click="drawer = true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-navigation-drawer
        v-model="drawer"
        app
        hide-overlay
        absolute
        right
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            active-class="primary--text text--accent-4"
          >
            <v-list-item
              v-for="item in items"
              :key="item.name"
              :to="{ name: item.name }"
              :exact="item.name === 'Home'"
              :ripple="false"
            >
              <v-list-item-icon><v-icon v-text="item.icon" /></v-list-item-icon>
              <v-list-item-title v-text="item.name" />
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template #append>
          <v-btn
            text
            :ripple="false"
            :href="`tel:${appData.contact.phone.value}`"
          >
            <v-icon
              class="mr-2"
              v-text="appData.contact.phone.icon"
            />
            <span
              v-text="appData.contact.phone.value"
            />
          </v-btn>

          <v-btn
            text
            tile
            height="60px"
            :ripple="false"
            :href="`mailto:${appData.contact.email.value}`"
          >
            <v-icon
              class="mr-2"
              v-text="appData.contact.email.icon"
            />
            <span
              v-text="appData.contact.email.value"
            />
          </v-btn>
        </template>
      </v-navigation-drawer>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'BaseAppBar',

    props: {
      block: Boolean,
      search: Boolean,
      color: String,
    },

    data () {
      return {
        drawer: false,
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

    computed: {
      tabAttrs () {
        const attrs = {}
        if (this.block) attrs.height = '150px'
        return attrs
      },
    },
  }
</script>
