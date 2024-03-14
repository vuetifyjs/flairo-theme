<script setup lang="ts">
  interface Props {
    id: string | number
    title: string
    subtitle: string
    src: string
    date: string
    description: string
    tags: string[]
    category: string
  }

  defineProps<Props>()
</script>

<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card
      max-height="400"
      width="auto"
      class="px-auto"
      variant="flat"
      tile
      v-bind="props"
    >
      <v-img
        min-height="300"
        max-height="300"
        cover
        :src="src"
      >
        <v-overlay
            :model-value="isHovering"
            class="d-flex transition-fast-in-fast-out v-card--reveal align-center justify-center text-offblock text-center bg-primary"
            style="opacity: .8;"
            contained
          >
            <v-btn
              :to="`/project/${id}`"
              variant="tonal"
              class="ml-n2 mb-2"
              rounded
              size="50"
            >
              <v-icon
                class="mx-0"
                size="40"
                icon="mdi-link"
                color="primary"
              />
            </v-btn>
            <div
              class="font-weight-black mb-2"
              v-text="title"
            />
            <div
              class="mb-2"
              v-text="subtitle"
            />
        </v-overlay>
      </v-img>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>

</style>
