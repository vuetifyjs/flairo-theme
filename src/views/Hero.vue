<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  import BackgroundImg from '@/assets/background.png'
  import CampingImg from '@/assets/camping.svg'

  const appData = useAppData()
</script>

<template>
  <Section
    id="hero"
    space="0"
  >
    <v-img
      :min-height="695"
      :src="BackgroundImg"
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
                class="text-white"
                cols="12"
                md="6"
              >
                <Heading
                  :title="`Why ${appData.title}?`"
                  class="text-uppercase font-weight-bold"
                  color="white"
                />
                <Subheading
                  color="white"
                  title="Awesome, Clean & Unique"
                />
                <Body
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
                />
                <Btn
                  class="text-primary font-weight-bold text-none mr-4 mb-1"
                  color="white"
                  height="50px"
                  href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                  target="_blank"
                  rounded
                >
                  <span v-text="`Purchase ${appData.title}`" />
                </Btn>
                <Btn
                  class="font-weight-bold text-none mr-4 mb-1"
                  color="white"
                  height="50px"
                  href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                  target="_blank"
                  variant="outlined"
                  rounded
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
                  max-width="650px"
                  min-height="365px"
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
