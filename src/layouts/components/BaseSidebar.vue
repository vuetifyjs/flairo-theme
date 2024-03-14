<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  
  interface Props {
    drawer?: boolean
    items: {
      icon: string
      name : string
    }[] | []
  }

  withDefaults(defineProps<Props>(), {
    drawer: false,
    items: () => { return []}
  })

  const appData = useAppData();
</script>

<template>
  <v-navigation-drawer
    :model-value="drawer"
    fixed
    style="height: 100vh;"
    :elevation="20"
    hide-overlay
    location="right"
    @input="$emit('input', $event)"
  >
    <v-list
      nav
      dense
      :items="items"
      items-props
    >
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.name === 'Home'? '/' : item.name"
          :exact="item.name === 'Home'"
          selected-class="text-white"
          :ripple="false"
          :value="item.name"
        >
          <template #append>
             <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title > {{ item.name }} </v-list-item-title>
        </v-list-item>
    </v-list>
    <template #append>
      <v-btn
        variant="text"
        :ripple="false"
        :href="`tel:${appData.contact.phone.value}`"
      >
        <v-icon
          class="mr-2"
          :icon="appData.contact.phone.icon"
        />
        <span
          v-text="appData.contact.phone.value"
        />
      </v-btn>

      <v-btn
        variant="text"
        tile
        height="60px"
        :ripple="false"
        :href="`mailto:${appData.contact.email.value}`"
      >
        <v-icon
          class="mr-2"
          :icon="appData.contact.email.icon"
        />
        <span
          v-text="appData.contact.email.value"
        />
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>
