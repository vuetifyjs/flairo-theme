<script setup lang="ts">
  interface Props {
    tweet: {
      author: string
      text: string
      date?: string
    },
    clamp?: number | string
  }

  withDefaults(defineProps<Props>(), {
    clamp: 0
  })
</script>

<template>
  <v-row no-gutters>
    <v-col class="shrink">
      <Avatar
        :key="`tweet-date`"
        icon="mdi-twitter"
        icon-color="#1A91DA"
        color="grey lighten-3"
        tile
        size="100"
        class="ma-2"
      />
    </v-col>
    <v-col class="pl-2 py-2">
      <Subheading
        :title="tweet.author"
        size="title"
        class="primary--text"
        space="0"
      />
      <Body
        :key="`tweet-text`"
        space="0"
        :clamp="3"
        :text="tweet.text"
      />
      <div
        v-if="tweet.date"
        class="font-italic"
        v-text="tweet.date"
      />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

</style>
