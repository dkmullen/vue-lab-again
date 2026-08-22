<script setup>
import { formFieldProps } from './shared-props'

const { label, icon } = defineProps({
  label: String,
  icon: String,
})
</script>

<template>
  <v-btn
    v-bind="{ color: 'primary', variant: 'flat', ...$attrs }"
    class="custom-button ma-1"
    :tabindex="formFieldProps.tabindex"
    :prepend-icon="icon"
  >
    <slot>{{ label }}</slot>
  </v-btn>
</template>

<style scoped>
.custom-button:focus {
  outline: 2px solid #1976d2;
  outline-offset: 2px;
}
</style>
