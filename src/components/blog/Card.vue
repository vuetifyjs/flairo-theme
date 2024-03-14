<script setup lang="ts">
  interface Props {
    post: {
      id: number
      src: string
      title: string
      author: string
      date: string
      commentCount: number
      description: string
    }
  }

  defineProps<Props>()

</script>

<template>
  <v-card
    flat
    outlined
  >
    <v-img
      height="350"
      :src="post.src"
    />

    <v-card-title>
      <Title :title="post.title" />
    </v-card-title>
    <v-card-text>
      <div class="caption">
        <v-icon
          small
          icon="mdi-file-document-edit-outline"
        />
        <span
          class="ma-1"
          v-text="post.author"
        />
        <v-icon
          small
          class="ml-2"
          icon="mdi-clock"
        />
        <span
          class="ma-1"
          v-text="post.date"
        />
        <v-icon
          small
          class="ml-2"
          icon="mdi-comment"
        />
        <span
          class="ma-1"
          v-text="post.commentCount"
        />
        <span v-text="'Comments'" />
      </div>
      <Body
        class="mt-4"
        :text="post.description"
      />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
