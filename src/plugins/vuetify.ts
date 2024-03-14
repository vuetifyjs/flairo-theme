
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors : {
          primary: '#f09f54',
          offblack: '#333333',
        }
      },
      dark: {}
    },
  },
})

