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
          <v-overlay
            :model-value="isHovering"
            class="d-flex transition-fast-in-fast-out v-card--reveal align-center justify-center text-offblock"
            style="opacity: .8;"
            scrim="grey-lighten-5"
            contained
          >
            <v-btn
              v-for="site in socialLinks"
              :key="site.link"
              :href="site.link"
              target="_blank"
              class="mx-2"
              size="50"
              variant="outlined"
              rounded
            >
              <v-icon
                size='40'
                class="mx-0"
                :icon="site.icon"
              />
            </v-btn>
          </v-overlay>
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
