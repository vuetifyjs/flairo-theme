<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { useAppData } from '@/stores/mockup';

  const appData = useAppData();
  const { params } = useRoute();
  const activeProject = computed(() => {
    const id = params.id
    return appData.projects.find(prj => +prj.id === +id)
  })
</script>

<template>
  <Section
    id="story-alt"
    class="grey lighten-4 pb-12"
    space="10"
  >
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          class="ma-1"
          min-height="500px"
          min-width="50%"
          :src="activeProject?.src"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="px-5 py-2"
      >
        <Heading
          class="font-weight-bold"
          :title="activeProject?.title"
          align="left"
        />
        <Subheading
          :title="activeProject?.subtitle"
        />
        <Subtitle
          title="Date"
          weight="bold"
        />
        <Body
          space="2"
          :text="activeProject?.date"
        />
        <Subtitle
          title="Description"
          weight="bold"
        />
        <Body
          :text="activeProject?.description"
          space="3"
        />
        <Subtitle
          title="Tags"
          weight="bold"
        />
        <template v-for="(tag, _i) in activeProject?.tags" :key="_i">
          <Tag
            :text="tag"
          />
        </template>
        <div />
        <Btn
          class="mt-10 elevation-0 mx-1"
          color="black"
          dark
          depressed
        >
          <span
            class="font-weight-black text-none"
            v-text="'Order Work'"
          />
        </Btn>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
