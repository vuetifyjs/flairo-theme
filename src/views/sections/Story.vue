<template>
  <base-section
    id="story"
    class="white"
    space="0"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="6"
        class="px-10"
      >
        <base-heading
          class="font-weight-bold"
          title="Who are we?"
          align="left"
        />
        <base-body
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris non dui volutpat, dignissim lectus quis, posuere lectus. Aliquam condimentum consectetur ante nec efficitur. Nulla id enim pulvinar, tincidunt mauris et, fringilla leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec id est vitae neque auctor elementum vitae ut justo. Nam tristique scelerisque fermentum. Sed in tincidunt leo. Nullam eu imperdiet enim. Nam semper leo eu diam rutrum lacinia. Nam fermentum leo nec lacus efficitur, tincidunt fermentum dui blandit. Nunc mattis neque ac turpis sagittis gravida."
          align="left"
        />
        <base-btn
          class="my-10 elevation-0 mx-1"
          rounded
          color="black"
          dark
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="`Purchase ${appData.title}`"
          />
        </base-btn>
        <base-btn
          rounded
          class="my-10 elevation-0 mx-1"
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="'Learn More'"
          />
        </base-btn>
      </v-col>
      <v-col cols="6">
        <v-img
          min-height="500px"
          height="500px"
          min-width="600px"
          :src="require('@/assets/group.jpg')"
        />
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionStory',
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
