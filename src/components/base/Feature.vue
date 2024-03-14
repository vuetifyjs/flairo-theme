<script setup lang="ts">
  interface Props {
    icon?: string
    tile?: boolean
    title?: string
    text?: string
    avatarColor?: string
    outlined?: boolean
    outlineColor?: string
  }

  withDefaults(defineProps<Props>(), {
    tile: false,
    text: '',
    avatarColor: 'primary'
  })
</script>

<template>
  <v-card
    flat
    v-bind="$attrs"
  >
    <v-card-text class="mt-2">
      <v-row justify="center">
        <Avatar
          :icon="icon"
          :tile="tile"
          :color="avatarColor"
          :outlined="outlined"
          :outlineColor="outlineColor"
        />
      </v-row>
      <div
        class="text-center flex-column"
      >
        <Subheading
          class="title text-primary mt-6"
          align="center"
          :title="title"
        />
        <Body
          v-if="text"
          :text="text"
          align="center"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

