<script setup lang="ts">
  import ClayBanksImg from '@/assets/about/clay-banks-LjqARJaJotc-unsplash.jpg'
  import { useDisplay } from 'vuetify';
  import { useAppData } from '@/stores/mockup';

  const { mdAndUp } = useDisplay();
  const appData = useAppData();

</script>

<template>
  <Section
    id="story-alt"
    class="bg-grey-lighten-4 pa-6"
    space="8"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :min-height="mdAndUp ? '500px' : '200px'"
          :height="mdAndUp ? '500px' : '200px'"
          :min-width="mdAndUp ? '600px' : '300px'"
          :src="ClayBanksImg"
          cover
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="px-10"
      >
        <Heading
          class="font-weight-bold py-3"
          title="Our Values"
          align="left"
        />
        <Body
          text="Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue."
        />
        <Btn
          class="my-10 elevation-0 mx-1"
          rounded
          color="black"
          theme="dark"
          variant="flat"
          href="https://store.vuetifyjs.com/products/flairo-theme-pro"
          target="_blank"
        >
          <span
            class="font-weight-black text-none"
            v-text="`Purchase ${appData.title}`"
          />
        </Btn>
        <Btn
          rounded
          class="my-10 elevation-0 mx-1"
          depressed
        >
          <span
            class="font-weight-black text-white"
            v-text="'Learn More'"
          />
        </Btn>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
