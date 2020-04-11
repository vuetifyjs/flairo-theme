<template>
  <v-card
    width="300"
    flat
  >
    <v-card-text>
      <v-row justify="center">
        <base-avatar
          :icon="icon"
          :tile="tile"
          :color="avatarColor"
          :outlined="outlined"
          :outline-color="outlineColor"
        />
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
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Feature',

    props: {
      icon: {
        type: String,
        required: true,
      },
      tile: {
        type: Boolean,
        default: false,
      },
      heading: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        default: '',
      },
      avatarColor: {
        type: String,
        default: 'primary',
      },
      outlined: Boolean,
      outlineColor: String,
    },
  }
</script>
