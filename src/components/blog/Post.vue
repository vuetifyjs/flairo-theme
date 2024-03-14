<script setup lang="ts">
  interface Props {
    post: {
      src?: string
      title: string
      author?: string
      date: string
      commentCount?: string
      text: string
      description?: string
      to: string
      comments?: any[]
    },
    clamp?: number | string
  }
  
  withDefaults(defineProps<Props>(), {
    clamp: 0,
    text: ""
  })
</script>

<template>
  <v-row>
    <Avatar
        :key="`post-date`"
        color="grey"
        tile
        size="100"
        class="ma-2"
      />
    <v-col class="pl-2">
      <Title
        :title="post.title"
        size="title"
        class="text-primary"
        space="0"
      />
      <Body
        :key="`post-text`"
        space="0"
        :clamp="clamp"
        :text="post.text"
      />
      <div>
        <RouterLink
          v-if="post.to"
          :to="post.to"
          style="text-decoration: none;"
          class="text-primary"
        > Read More </RouterLink>
        <template v-if="post.date">
          <v-icon
            class="ml-4 mr-2"
            small
            icon="mdi-clock-outline"
          />
          <span v-text="post.date" />
        </template>
        <template v-if="post.comments">
          <v-icon
            class="ml-4 mr-2"
            icon="mdi-comment"
          />
          <span
            class="font-italic"
            v-text="'comments'"
          />
        </template>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

</style>
