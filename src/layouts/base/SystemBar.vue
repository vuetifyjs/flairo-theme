<template>
  <v-system-bar
    app
    dark
    color="primary"
    height="60px"
  >
    <v-btn
      class="mx-2"
      text
      tile
      height="60px"
      :ripple="false"
      :href="`tel:${contact.phone.value}`"
    >
      <v-icon
        left
        class="mr-2"
        v-text="contact.phone.icon"
      />
      <span v-text="contact.phone.value" />
    </v-btn>

    <v-btn
      class="mx-2"
      text
      tile
      height="60px"
      :ripple="false"
      :href="`mailto:${contact.email.value}`"
    >
      <v-icon
        left
        class="mr-2"
        v-text="contact.email.icon"
      />
      <span v-text="contact.email.value" />
    </v-btn>
    <v-spacer />
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="site in socialLinks"
        :key="site.name"
        :href="site.link"
        target="_blank"
        class="mx-2"
        icon
      >
        <v-icon
          class="mx-0"
          v-text="site.icon"
        />
      </v-btn>
    </template>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'BaseSystemBar',

    data () {
      return {
        socialLinks: [
          { name: 'Facebook', icon: 'mdi-facebook', link: 'https://facebook.com' },
          { name: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com' },
          { name: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com' },
          { name: 'Soundcloud', icon: 'mdi-soundcloud', link: 'https://soundcloud.com' },
          { name: 'Twitch', icon: 'mdi-twitch', link: 'https://twitch.tv' },
          { name: 'Youtube', icon: 'mdi-youtube', link: 'https://youtube.com' },
        ],
        contact: {
          phone: { value: '+1 555 555-5555', icon: 'mdi-phone' },
          email: { value: 'sample@example.com', icon: 'mdi-email' },
        },
      }
    },
  }
</script>
