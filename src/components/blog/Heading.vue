<script setup lang="ts">
  interface Props {
    title: string
    author: string
    date: string
    commentCount: number | string
  }
  
  defineProps<Props>()
</script>

<template>
  <div>
    <Subheading
      :title="title"
    />
    <div class="caption">
      <v-icon
        small
        icon="mdi-file-document-edit-outline"
      />
      <span
        class="ma-1"
        v-text="`by ${author}`"
      />
      <v-icon
        small
        class="ml-2"
        icon="mdi-clock"
      />
      <span
        class="ma-1"
        v-text="date"
      />
      <v-icon
        small
        class="ml-2"
        icon="mdi-comment"
      />
      <span
        class="ma-1"
        v-text="commentCount"
      />
      <span v-text="'Comments'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
