<script setup lang="ts">  interface Props {
    name: string
    bio: string
    src: string
  }

  defineProps<Props>()
</script>

<template>
  <v-card
    color="grey lighten-4 pa-2"
    flat
    class="ma-4"
  >
    <v-card-text>
      <v-row>
        <v-avatar
          size="128"
          tile
        >
          <v-img
            :src="src"
            min-height="128px"
          />
        </v-avatar>
        <v-col>
          <Title
            space="2"
            weight="bold"
            size="text-h5"
            :title="name"
          />
          <Body
            space="0"
            :text="bio"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>