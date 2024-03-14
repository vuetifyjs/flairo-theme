<script setup lang="ts">
  import { useDisplay } from 'vuetify';

  const { smAndDown } = useDisplay();
  const menu = ref(false);

</script>

<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    location="bottom left"
    max-width="90%"
    min-width="275"
    origin="top right"
    transition="scale-transition"
  >
    <template #activator="{ props }">
      <v-card
        class="py-2 px-4"
        color="#0000004D"
        dark
        flat
        :style="`position: fixed; top: ${smAndDown ? '70px': '230px'}; right: -35px;`"
        width="90"
        v-bind="props"
      >
        <v-icon>
          mdi-cog
        </v-icon>
      </v-card>
    </template>

    <v-card class="py-2">
      <v-card-text>
        <Btn
          :to="'/sink'"
          block
          text
          color="grey darken-1"
          dark
          @click="menu = false"
        >
          View Components
        </Btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
