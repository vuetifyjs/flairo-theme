<script setup lang="ts">
  import { useDisplay } from 'vuetify';

  const { mobile } = useDisplay();

  interface Props {
    statNumber: number | string
    text: string
    color?: string
    outlined?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    outlined: false
  })

  const styles = computed(() => {
    return {
      border: (props.outlined && !mobile.value) ? `2px ${props.color} solid !important` : 'unset',
    }
  })
</script>

<template>
  <v-avatar
    size="270"
    :style="styles"
  >
    <div
      :class="`text-${color}`"
    >
      <Heading
        space="2"
        align="center"
        :color="props.color"
      > {{ props.statNumber }} </Heading>
      <Divider />
      <Body
        class="text-uppercase headline"
        align="center"
        space="2"
        :text="props.text"
      />
    </div>
  </v-avatar>
</template>

<style lang="scss" scoped>

</style>
