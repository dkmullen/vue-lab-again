<script setup>
import { formFieldProps } from './shared-props'

defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  items: { type: Array },
  inputType: { type: String, default: 'text' },
  rows: { type: Number, default: 4 },
})
</script>
<template>
  <div v-if="props.inputType === 'text'">
    <v-text-field v-bind="{ ...formFieldProps, ...$attrs }"></v-text-field>
  </div>
  <div v-if="props.inputType === 'select'">
    <v-select v-bind="{ ...formFieldProps, ...$attrs }" :items="props.items"></v-select>
  </div>
  <div v-if="props.inputType === 'textarea'">
    <v-textarea v-bind="{ ...formFieldProps, ...$attrs }" :rows="props.rows"></v-textarea>
  </div>
</template>
