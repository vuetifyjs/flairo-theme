<script setup lang="ts">
  import BlogSidebar from './BlogSidebar.vue';
  import BaseSidebar from './BaseSidebar.vue';
  import { useAppData } from '@/stores/mockup';
  import { useDisplay } from 'vuetify';
  import { useRoute } from 'vue-router';
  import CompfireImg from '@/assets/campfire.svg';

  interface Props {
    block: boolean
    search: boolean
    color?: string
  }

  const props = defineProps<Props>()
  const appData = useAppData();
  const route = useRoute();
  const { mdAndUp } = useDisplay();
  const drawer = ref(false)
  const items = ref([
    { name: 'Home', icon: 'mdi-home' },
    { name: 'About', icon: 'mdi-account-group' },
    { name: 'Services', icon: 'mdi-book-open-variant' },
    { name: 'Portfolio', icon: 'mdi-book' },
    { name: 'Blog', icon: 'mdi-web' },
    { name: 'Contact', icon: 'mdi-phone' },
  ])

  const tabAttrs = computed(() => {
    const attrs : { height: string } = { height: '0px'}
      if (props.block) attrs.height = '150px'
      return attrs
  });
  
</script>

<template>
  <v-app-bar
    scroll-behavior="elevate"
    style="right: 0;"
    :color="color || 'white'"
    :height="mdAndUp ? '150px' : '60px'"
  >
    <v-img
      class="hidden-sm-and-down"
      :max-width="mdAndUp ? '200px' : '100px'"
      max-height="120px"
      min-height="120px"
      :src="CompfireImg"
    />
    <v-toolbar-title>
      <RouterLink
        to="/"
        class="text-offblack font-weight-bold text-h4"
        style="cursor: pointer; text-decoration: none;"
        :text="appData.title"
      />
    </v-toolbar-title>
    <v-spacer />
    <div v-if="mdAndUp">
      <v-tabs
        hide-slider
        optional
        bg-color="transparent"
        v-bind="tabAttrs"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          :to="item.name === 'Home'? '/' : ('/' + item.name.toLowerCase())"
          :exact="item.name === 'Home'"
          :ripple="false"
          selected-class="text-primary"
          class="font-weight-medium text-none"
          min-width="120px"
          text
        >
          <span v-text="item.name" />
          <v-icon
            v-if="item.icon && mdAndUp"
            small
            right
            class="ms-2"
            :icon="item.icon"
          />
        </v-tab>
      </v-tabs>
    </div>
    <div v-else>
      <v-btn
        icon
        @click="drawer=true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <BlogSidebar
        v-if="route.name === '/blog'"
        :drawer="drawer"
        @input="drawer = $event"
      />
      <BaseSidebar
        v-else
        :items="items"
        :drawer="drawer"
        @input="drawer = $event"
      />
    </div>
  </v-app-bar>
</template>
