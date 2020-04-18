<template>
  <v-img
    :src="require('@/assets/background.png')"
    class="white--text"
    max-width="100%"
    gradient="to right, rgba(59, 64, 69, .4), rgba(59, 64, 69, .9)"
  >
    <v-container class="fill-height px-5 py-12">
      <v-responsive
        class="d-flex align-center"
        :class="`text-${align}`"
        height="100%"
        width="100%"
      >
        <v-row>
          <v-col :cols="stacked ? 12 : 10">
            <div
              class="text-uppercase title font-weight-bold"
              v-text="heading"
            />
            <div
              class="subtitle"
              v-text="body"
            />
          </v-col>
          <v-col :cols="stacked ? 12 : 2">
            <!-- Action Slot -->
            <slot />
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-img>
</template>

<script>
  export default {
    name: 'Banner',

    props: {
      src: {
        type: String,
      },
      min: Boolean,
      stacked: Boolean,
      align: {
        type: String,
        default: 'center',
        validator: (v) => ['none', 'left', 'center', 'right'].includes(v),
      },
      heading: String,
      body: String,
    },
  }
</script>
