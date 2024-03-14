<script setup lang="ts">
</script>

<template>
  <v-text-field
    outlined
    dense
    v-bind="$attrs"
  >
    <template v-slot:append-outer>
<slot
      
      name="append-outer"
    />
</template>
  </v-text-field>
</template>

<style lang="sass">
  //
</style>
