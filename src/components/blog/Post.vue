<template>
  <v-row>
    <v-col class="shrink">
      <base-avatar
        :key="`post-date`"
        color="grey"
        tile
        size="100"
        class="ma-2"
      />
    </v-col>
    <v-col>
      <base-subheading
        :title="post.title"
        class="primary--text"
        space="0"
      />
      <base-body
        :key="`post-text`"
        space="0"
        :text="post.text"
      />
      <div>
        <router-link
          :to="post.to"
          class="text-none"
          v-text="'Read More'"
        />
        <v-icon
          class="ml-4 mr-2"
          small
          v-text="'mdi-clock-outline'"
        />
        <span v-text="post.date" />
        <v-icon
          class="ml-4 mr-2"
          v-text="'mdi-comment'"
        />
        <span
          class="font-italic"
          v-text="'comments'"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
