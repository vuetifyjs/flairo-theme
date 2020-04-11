<template>
  <v-avatar
    size="270"
    :style="styles"
  >
    <div :class="`${color}--text`">
      <span
        class="font-weight-bold display-3"
        v-text="number"
      />
      <v-divider
        class="my-3 mx-auto"
        style="width: 50px"
      />
      <span
        class="text-uppercase headline"
        v-text="text"
      />
    </div>
  </v-avatar>
</template>

<script>
  export default {
    name: 'Stat',
    props: {
      number: {
        type: [Number, String],
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: 'primary',
      },
      outlined: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      styles () {
        const isDark = this.$vuetify.theme.isDark
        const namedColor = this.$vuetify.theme.themes[isDark ? 'dark' : 'light'][this.color]
        return {
          border: this.outlined ? `2px ${namedColor ?? this.color} solid !important` : 'unset',
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
