<script setup lang="ts">
  interface Props {
    name: string
    src: string
    title: string

    /* TODO: implement validator */
    // validator: (val) => {
    //       return val.every(v => ({}).hasOwnProperty.call(v, 'link') && ({}).hasOwnProperty.call(v, 'icon'))
    // }
    socialLinks : {
      link: string
      icon: string
    }[]
  }
  defineProps<Props>()
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        max-height="400"
        width="auto"
        class="pa-2"
        variant="outlined"
        v-bind="props"
      >
        <v-img
          min-height="300"
          height="100%"
          :src="src"
          cover
        >
          <v-fade-transition>
            <div 
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out v-card--reveal text-white grey lighten-3"
              style="height: 100%; opacity: .8"
            >
              <v-row
                justify="center"
                align="center"
              >
                <v-btn
                  v-for="site in socialLinks"
                  :key="site.link"
                  :href="site.link"
                  target="_blank"
                  class="mx-1"
                  variant="outlined"
                  rounded
                  size='x-large'
                >
                  <v-icon
                    size='x-large'
                  >{{ site.icon }}</v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-fade-transition>
        </v-img>
        <v-card-text
          class="pt-3"
          style="position: relative;"
        >
          <div
            class="font-weight-bold mb-2 text-left"
            v-text="name"
          />
          <div
            class="mb-2 text-left"
            v-text="title"
          />
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<style lang="scss" scoped>

</style>
