<script setup lang="ts">
  const features = ref(
    [
      {
        icon: 'mdi-flash',
        title: 'Fast Loads',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-cog',
        outlined: true,
        title: 'Customizable Sections',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-responsive',
        avatarColor: 'offblack',
        outlined: true,
        title: 'Responsive',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-face-agent',
        title: 'Friendly Support',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-auto-fix',
        title: 'Beautiful Designs',
        avatarColor: '#0077b5',
        outlined: true,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-calendar',
        title: 'Flexible Schedule',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-magnify',
        title: 'Search Engine Optimization',
        avatarColor: '#0077b5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
      {
        icon: 'mdi-thought-bubble',
        title: 'Versatile Content Support',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis.',
      },
    ]
  )
</script>

<template>
  <Section
    id="our-services"
    space="16"
  >
    <div class="justify-center align-center">
      <Heading
        class="font-weight-bold"
        title="Our Services"
        align="center"
      />
      <Divider
        color="primary"
        align="center"
      />
    </div>
    <v-row
      justify="center"
      align="stretch"
      class="px-3"
    >
      <template v-for="(feature, _i) in features" :key="_i">
        <v-col
          cols="12"
          md="6"
          lg="3"
        >
          <FeatureAlt
            class="pa-1"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
