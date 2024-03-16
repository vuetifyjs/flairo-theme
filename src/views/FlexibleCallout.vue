<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
</script>

<template>
  <Section
    id="callout"
    class="bg-grey-lighten-3"
  >
    <div class="justify-center align-center text-center">
      <Heading
        align="center"
        class="font-weight-bold"
        title="SUPER FLEXIBLE"
      />
      <Body
        align="center"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
      />
      <Btn
        color="offblack"
        href="https://store.vuetifyjs.com/products/flairo-theme-pro"
        target="_blank"
        dark
        rounded
      >
        <span
          class="font-weight-medium text-none"
          v-text="`Purchase ${appData.title}`"
        />
      </Btn>
    </div>
  </Section>
</template>

<style lang="scss" scoped>

</style>
