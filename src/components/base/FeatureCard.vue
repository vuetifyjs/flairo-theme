<script setup lang="ts">
  interface Props {
    color?: string
    icon: string
    heading: string
    body?: string
    rounded?: boolean
    tile?: boolean
    avatarColor?: string
    outlined?: boolean,
    outlineColor?: string,
    to?: string
  }

  withDefaults(defineProps<Props>(), {
    color: 'white',
    body: '',
    rounded: false,
    tile: false,
    avatarColor: 'primary'
  })
</script>

<template>
  <v-card
    width="400"
    variant="outlined"
  >
    <v-card-text>
      <v-row justify="center">
        <v-col cols="12" class="my-1">
          <Avatar
            :tile="tile"
            :rounded="rounded"
            :icon="icon"
            size="70"
            icon-size="25"
            :color="avatarColor"
            :outlined="outlined"
            :outline-color="outlineColor"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <span
            class="title primary--text"
            v-text="heading"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="body"
        justify="center"
      >
        <v-col cols="12">
          <span
            class="body-2"
            v-text="body"
          />
        </v-col>
        <v-btn
          variant="outlined"
          size="small"
          color="primary"
          class="text-white"
          :to="to"
        >
          Read More
          <v-icon
            location="right"
            icon="mdi-chevron-right"
          />
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>
