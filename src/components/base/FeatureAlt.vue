<template>
  <v-card flat>
    <v-card-text>
      <base-avatar
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
      <span
        class="title primary--text"
        v-text="title"
      />
      <div
        class="body-2"
        :class="{ 'pl-12': indented, 'ml-12': indented }"
        v-text="text"
      />
      <router-link
        v-if="to"
        class="link"
        :to="to"
        :class="{ 'pl-12': indented, 'ml-12': indented }"
        v-text="'Read More'"
      />
      <v-icon
        v-if="to"
        color="primary"
        right
        small
        v-text="'mdi-chevron-right'"
      />
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Feature',

    props: {
      icon: {
        type: String,
        required: true,
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      tile: {
        type: Boolean,
        default: false,
      },
      avatarColor: {
        type: String,
        default: 'primary',
      },
      outlined: Boolean,
      outlineColor: String,
      indented: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        default: '',
      },
      to: Object,
    },
  }
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none !important
}
</style>
