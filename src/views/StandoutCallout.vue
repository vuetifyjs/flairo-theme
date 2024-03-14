<script setup lang="ts">
  import { useAppData } from '@/stores/mockup';

  const appData = useAppData();
</script>

<template>
  <Section
    id="callout"
    class="bg-primary"
  >
    <div class="justify-center align-center text-center">
      <Heading
        class="font-weight-bold"
        title="30+ reuseable components!"
        align="center"
        space="0"
      />
      <Btn
        rounded
        class="mt-10 mb-2 elevation-0"
        color="white text-primary"
        variant="flat"
        href="https://store.vuetifyjs.com/products/flairo-theme-pro"
        target="_blank"
      >
        <span
          class="font-weight-black text-none"
          v-text="`Purchase ${appData.title}`"
        />
      </Btn>
    </div>
  </Section>
</template>

<style lang="scss" scoped>

</style>
