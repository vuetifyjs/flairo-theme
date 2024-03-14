<script setup lang="ts">
  interface Props {
    icon?: string
    size?: string
    rounded?: boolean
    tile?: boolean
    avatarColor?: string
    outlined?: boolean
    outlineColor?: string
    title: string
    text: string
    to?: string
  }

  withDefaults(defineProps<Props>(), {
    rounded: false,
    tile: false,
    avatarColor: 'primary',
    text: '',
    size: 'text-h4'
  })
</script>

<template>
  <v-card
    class="feat-alt"
    flat
    v-bind="$attrs"
  >
    <v-card-text class="py-0 my-2">
      <v-row
        align="start"
        justify="center"
      >
        <v-col cols="4" class="my-1">
          <Avatar
            class="mr-6"
            :tile="tile"
            :rounded="rounded"
            :icon="icon"
            size="70"
            icon-size="25"
            :color="avatarColor"
            :outlined="outlined"
            :outline-color="outlineColor"
          />
        </v-col>
        <v-col
          cols="8"
          class="text-left"
        >
          <Title
            class="primary--text"
            space="2"
            :size="size"
            :title="title"
          />
          <Body
            :text="text"
            space="2"
          />
          <RouterLink
            v-if="to"
            class="link"
            :to="to"
          > Read More </RouterLink>
          <v-icon
            v-if="to"
            color="primary"
            right
            small
            icon="mdi-chevron-right"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none !important
}
</style>
