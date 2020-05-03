<template>
  <base-section
    id="why-choose-us"
    class="grey lighten-4"
  >
    <v-row
      no-gutters
      class="px-12"
      align="start"
      justify="center"
    >
      <v-col
        cols="6"
        class="px-3"
      >
        <base-subheading
          title="Why Choose Us"
          class="primary--text"
        />
        <base-divider
          color="white"
          align="left"
        />
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(reason, i) in reasons"
            :key="i"
          >
            <v-expansion-panel-header>
              <span v-text="reason.title" />
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text v-text="reason.description" />
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="6"
        class="px-3"
      >
        <base-subheading
          title="Blog Posts"
          class="primary--text"
        />
        <base-divider
          color="white"
          align="left"
        />
        <v-row
          v-for="(post, i) in appData.blogPosts"
          :key="i"
        >
          <v-col class="shrink">
            <base-avatar
              :key="`post-date-${i}`"
              color="grey"
              tile
              size="100"
              class="ma-2"
            />
          </v-col>
          <v-col>
            <base-subheading
              :title="post.title"
              class="primary--text"
              space="0"
            />
            <base-body
              :key="`post-text-${i}`"
              space="0"
              :text="post.text"
            />
            <div>
              <router-link
                :to="post.to"
                class="text-none"
                v-text="'Read More'"
              />
              <v-icon
                class="ml-4 mr-2"
                small
                v-text="'mdi-clock-outline'"
              />
              <span v-text="post.date" />
              <v-icon
                class="ml-4 mr-2"
                v-text="'mdi-comment'"
              />
              <span
                class="font-italic"
                v-text="'comments'"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionWhyChooseUs',
    data () {
      return {
        reasons: [
          { title: 'Solutions Based', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
          { title: 'Professional Developers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
          { title: 'Modular, Adoptable Code', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
          { title: 'Customizable', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
