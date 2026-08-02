<script setup>
const { label, icon } = defineProps({
  label: String,
  icon: String,
})
</script>

<template>
  <v-btn
    v-bind="{ color: 'primary', variant: 'flat', ...$attrs }"
    class="custom-button"
    :prepend-icon="icon"
  >
    <slot>{{ label }}</slot>
  </v-btn>
</template>
