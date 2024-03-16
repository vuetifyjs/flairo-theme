<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
  const features = ref<{
    icon: string,
    title: string,
    text: string
  }[]>([
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
  ])
</script>

<template>
  <Section
    id="welcome-feature"
  >
    <div class="justify-center align-center">
      <Heading
        :title="`Welcome to ${appData.title}`"
        align="center"
        class="font-weight-bold"
      />
      <Divider
        align="center"
        color="primary"
      />
      <Body
        align="center"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
      />
    </div>
    <v-row
      align="center"
      class="px-10"
      justify="center"
    >
      <template v-for="(feature, _i) in features" :key="_i">
        <v-col
          cols="12"
          md="3"
        >
          <Feature
            class="pa-3"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
