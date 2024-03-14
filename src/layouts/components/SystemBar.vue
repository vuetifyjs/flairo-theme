<script setup lang="ts">
  import { useAppData } from '@/stores/mockup';
  import { useDisplay } from 'vuetify';
  
  const { mdAndUp } = useDisplay();
  const appData = useAppData();

</script>

<template>
  <v-system-bar
    color="primary"
    :height="60"
    :ripple="false"
  >
    <v-btn
      class="mx-2 text-white"
      variant="text"
      tile
      height="60px"
      :ripple="false"
      :href="`tel:${appData.contact.phone.value}`"
    >
      <v-icon
        :left="mdAndUp"
        class="mr-2"
        :icon="appData.contact.phone.icon"
      />
      <span
        class="hidden-sm-and-down"
        v-text="appData.contact.phone.value"
      />
    </v-btn>

    <v-btn
      class="mx-2 text-white"
      variant="text"
      tile
      height="60px"
      :ripple="false"
      :href="`mailto:${appData.contact.email.value}`"
    >
      <v-icon
        :left="mdAndUp"
        class="mr-2"
        :icon="appData.contact.email.icon"
      />
      <span
        class="hidden-sm-and-down"
        v-text="appData.contact.email.value"
      />
    </v-btn>
    <v-spacer v-if="mdAndUp" />
    <template v-if="mdAndUp">
      <v-btn
        v-for="site in appData.socialLinks"
        :key="site.name"
        :href="site.link"
        target="_blank"
        class="mx-2"
        variant="text"
        icon
      >
        <v-icon
          class="mx-0 text-white"
          :icon="site.icon"
        />
      </v-btn>
    </template>
  </v-system-bar>
</template>

