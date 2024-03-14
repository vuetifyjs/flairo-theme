<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  import BackgroundImg from '@/assets/background.png'
  import CampingImg from '@/assets/camping.svg'

  const appData = useAppData();
</script>

<template>
  <Section
    id="hero"
    space="0"
  >
    <v-img
      :src="BackgroundImg"
      :min-height="695"
      cover
    >
      <v-theme-provider>
        <v-container class="fill-height px-5 py-12">
          <v-responsive
            class="d-flex align-center justify-center"
            height="100%"
            width="99%"
          >
            <v-row align="center">
              <v-col
                cols="12"
                md="6"
                class="text-white"
              >
                <Heading
                  class="text-uppercase font-weight-bold"
                  :title="`Why ${appData.title}?`"
                />
                <Subheading
                  title="Awesome, Clean & Unique"
                />
                <Body
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
                />
                <Btn
                  rounded
                  height="50px"
                  color="white"
                  class="text-primary font-weight-bold text-none mr-4 mb-1"
                  href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                  target="_blank"
                >
                  <span v-text="`Purchase ${appData.title}`" />
                </Btn>
                <Btn
                  variant="outlined"
                  rounded
                  height="50px"
                  color="white"
                  class="font-weight-bold text-none mr-4 mb-1"
                  href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                  target="_blank"
                >
                  <span v-text="`Purchase ${appData.title}`" />
                </Btn>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-img
                  :src="CampingImg"
                  min-height="365px"
                  max-width="650px"
                />
              </v-col>
            </v-row>
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-img>
  </Section>
</template>

<style lang="scss" scoped>

</style>
