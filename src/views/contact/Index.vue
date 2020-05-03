<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Contact',

    metaInfo: { title: 'Contact' },

    extends: View,

    mixins: [
      LoadSections([
        'construction',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
