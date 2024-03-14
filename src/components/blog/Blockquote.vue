<script setup lang="ts">
  interface Props {
    author: string
    quote: string
  }
  
  defineProps<Props>()

</script>

<template>
  <v-card
    color="grey lighten-3"
    flat
    class="ma-4"
  >
    <v-card-text class="font-italic">
      <Body
        space="0"
        :text="quote"
      />
    </v-card-text>
    <v-card-text class="text-primary text-uppercase">
      <Title
        space="0"
        weight="bold"
        size="text-h6"
        color="text-primary"
        :title="author"
      />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
