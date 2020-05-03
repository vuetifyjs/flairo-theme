<template>
  <base-section
    id="callout"
    class="grey lighten-3"
  >
    <div class="justify-center align-center text-center">
      <base-heading
        class="font-weight-bold"
        title="SUPER FLEXIBLE"
        align="center"
      />
      <base-body
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
        align="center"
      />
      <base-btn
        rounded
        color="offblack"
        dark
      >
        <span
          class="font-weight-medium text-none"
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
