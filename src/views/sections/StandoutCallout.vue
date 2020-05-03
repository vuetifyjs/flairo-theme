<template>
  <base-section
    id="callout"
    class="primary"
  >
    <div class="justify-center align-center text-center">
      <base-heading
        class="font-weight-bold"
        title="READY TO STAND OUT?"
        align="center"
      />
      <base-btn
        rounded
        class="my-10 elevation-0"
        color="white primary--text"
        flat
      >
        <span
          class="font-weight-black text-none"
          v-text="`Purchase ${appData.title}`"
        />
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionCallout',
    data () {
      return {
        features: [
          {
            icon: 'mdi-flash',
            title: 'Fast',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-cog',
            title: 'Customizable',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-responsive',
            title: 'Responsive',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
          {
            icon: 'mdi-face-agent',
            title: 'Friendly Support',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
