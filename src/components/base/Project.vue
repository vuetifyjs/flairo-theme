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
        <v-fade-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out v-card--reveal primary"
            style="height: 100%; opacity: .9"
          >
            <v-row
              class="flex-column"
              justify="center"
              align="center"
            >
              <v-btn
                :to="`/project/${id}`"
                class="mx-2 mb-2"
                variant="text"
                rounded
                theme="dark"
                size="x-large"
              >
                <v-icon
                  class="mx-0"
                  size="x-large"
                  icon="mdi-link"
                  color="primary"
                />
              </v-btn>
              <div
                class="font-weight-black mb-2 text-white"
                v-text="title"
              />
              <div
                class="mb-2 text-white"
                v-text="subtitle"
              />
            </v-row>
          </div>
        </v-fade-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>

</style>
