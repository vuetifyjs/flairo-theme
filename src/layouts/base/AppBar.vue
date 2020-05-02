<template>
  <v-app-bar
    app
    elevate-on-scroll
    :color="color || 'white'"
    height="150px"
  >
    <v-row
      justify="center"
      align="center"
      style="max-width: 1200px;"
      class="mx-auto"
    >
      <v-img
        max-width="200px"
        max-height="120px"
        :src="require('@/assets/campfire.svg')"
      />
      <v-toolbar-title class="headline">
        <span v-text="appTitle" />
      </v-toolbar-title>
      <v-spacer />
      <div>
        <v-tabs
          hide-slider
          optional
          :background-color="color || 'white'"
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
              v-if="item.icon"
              small
              right
              v-text="item.icon"
            />
          </v-tab>
          <v-menu
            bottom
            left
            offset-y
            content-class="elevation-0"
            :close-on-content-click="false"
          >
            <template #activator="{ on }">
              <v-tab
                :value="undefined"
                active-class="black--text"
                v-on="on"
              >
                <v-icon
                  v-if="search"
                  v-text="'mdi-magnify'"
                />
              </v-tab>
            </template>
            <v-card
              tile
              width="1200"
            >
              <v-text-field
                v-model.trim="searchValue"
                full-width
                background-color="black"
                dark
                solo
                hide-details
                height="100px"
                class="elevation-0"
                single-line
                placeholder="Enter your search..."
                style="font-size: 24px"
                @keyup.enter="onSearch"
              />
            </v-card>
          </v-menu>
        </v-tabs>
      </div>
    </v-row>
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
        appTitle: 'Flairo',
        searchValue: '',
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

    methods: {
      onSearch () {
        console.warn(`Search Not Implemented: search on: ${this.searchValue}`)
      },
    },
  }
</script>
