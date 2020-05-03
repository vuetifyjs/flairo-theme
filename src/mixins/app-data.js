export default {
  computed: {
    appData () {
      return {
        title: 'Flairo',
        socialLinks: [
          { name: 'Facebook', icon: 'mdi-facebook', link: 'https://facebook.com', color: '#0F98F6' },
          { name: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com', color: '#EF0075' },
          { name: 'Twitter', icon: 'mdi-twitter', link: 'https://twitter.com', color: '#1A91DA' },
          { name: 'Soundcloud', icon: 'mdi-soundcloud', link: 'https://soundcloud.com', color: '#FF5501' },
          { name: 'Twitch', icon: 'mdi-twitch', link: 'https://twitch.tv', color: '#9147FF' },
          { name: 'Youtube', icon: 'mdi-youtube', link: 'https://youtube.com', color: '#FE0200' },
          { name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://linkedin.com', color: '#0077B5' },
        ],
        contact: {
          phone: { value: '+1 555 555-5555', icon: 'mdi-phone' },
          email: { value: 'sample@example.com', icon: 'mdi-email' },
        },
        recentNews: [
          'Lorem ipsum dolor sit amet, consectetur.',
          'Donec at nunc eget massa bibendum ultrices.',
          'Donec non sem fermentum, malesuada augue.',
          'Sed pharetra metus vitae diam blandit.',
          'Proin quis lacus lobortis, semper arcu.',
        ],
        recentPosts: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur. Donec at nunc eget massa bibendum ultrices.',
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          },
          {
            text: 'Donec non sem fermentum, malesuada augue. Sed pharetra metus vitae diam blandit.',
            date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          },
        ],
      }
    },
  },
}
