
<script setup lang="ts">  interface Props {
    width? : number | string
    skill: string
    value: number | string
  }

  withDefaults(defineProps<Props>(), {
    width: '100%'
  })
</script>

<template>
  <div :style="{ width }">
    <v-row
      justify="space-between"
      no-gutters
      class="my-2"
    >
      <span v-text="skill" />
      <span v-text="`${value}%`" />
    </v-row>
    <v-row
      no-gutters
      class="my-2"
    >
      <v-progress-linear
        height="20"
        :model-value="value"
        v-bind="$attrs"
      />
    </v-row>
  </div>
</template>

<style lang="scss" scoped>

</style>