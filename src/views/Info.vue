<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import { useAppData } from '@/stores/mockup';

  const { mdAndUp } = useDisplay();
  const appData = useAppData();
</script>

<template>
  <Section class="bg-offblack" >
    <v-theme-provider>
      <v-row
        no-gutters
        class="px-12"
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <Subheading :title="`About ${appData.title}`" />
          <Divider
            color="white"
            align="left"
          />
          <Body text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus varius, malesuada nulla sed, ultrices est. Proin sed nisl tortor. Sed ex mi, volutpat et lobortis sit amet, fringilla at leo." />
          <Body text="Proin sed nisl tortor. Sed ex mi, volutpat et lobortis sit amet, fringilla at leo." />
        </v-col>
        <v-col
          v-if="mdAndUp"
          cols="3"
          class="px-3"
        >
          <Subheading title="Recent News" />
          <Divider
            color="white"
            align="left"
          />
          <template v-for="(news, _i) in appData.recentNews" :key="`news-text-${_i}`">
            <Body
              tag="div"
              space="0"
              class="py-3"
              :text="news"
            />
            <v-divider />
          </template>
        </v-col>
        <v-col
          v-if="mdAndUp"
          cols="3"
          class="px-3"
        >
          <Subheading title="Recent Posts" />
          <Divider
            color="white"
            align="left"
          />
          <template v-for="(post, i) in appData.recentPosts" :key="`post-row-${i}`">
            <v-row >
              <v-col
                v-if="mdAndUp"
                cols="3"
              >
                <Avatar
                  :key="`post-date-${i}`"
                  color="primary"
                  outlined
                  size="60"
                  class="ma-2"
                  :text="post.date"
                />
              </v-col>
              <v-col
                cols="12"
                md="9"
              >
                <Body
                  :key="`post-text-${i}`"
                  tag="span"
                  space="0"
                  class="py-3"
                  :text="post.text"
                />
              </v-col>
            </v-row>
            <v-divider
              color="grey"
              max-width="100%"
            />
          </template>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="px-3"
        >
          <Subheading title="Contact Us" />
          <Divider
            color="white"
            align="left"
          />
          <Subtitle
            title="Phone:"
            weight="bold"
          />
          <Body
            space="2"
            text="(555) 555-5555"
          />
          <Subtitle
            title="Email:"
            weight="bold"
          />
          <Body
            space="2"
            :text="`email@${appData.title.toLowerCase()}.com`"
          />
          <Subtitle
            title="Twitter:"
            weight="bold"
          />
          <Body
            space="2"
            text="@twitter"
          />
          <Subheading title="Follow Us" />
          <Divider
            color="white"
            align="left"
          />
          <Btn
            v-for="media in appData.socialLinks"
            :key="media.link"
            :href="media.link"
            target="_blank"
            class="ma-1"
            min-width="40px"
            width="40px"
            variant="flat"
            :color="media.color"
            :icon="media.icon"
          />
        </v-col>
      </v-row>
    </v-theme-provider>
  </Section>
</template>

<style lang="scss" scoped>

</style>
