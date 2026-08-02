<script setup>
import { formFieldProps } from './shared-props'
import { validationRules } from './validation'

const props = defineProps({
  label: String,
  required: { type: Boolean, default: formFieldProps.required },
  modelValue: { type: [String, Number], default: '' },
})
</script>

<template>
  <div>
    <v-select
      v-bind="{ variant: formFieldProps.variant, ...$attrs, density: formFieldProps.density }"
      :class="formFieldProps.class"
      :label="props.required ? `${props.label}*` : props.label"
      :required="props.required ? props.required : formFieldProps.required"
      :rules="props.required ? validationRules.requiredRule : []"
    ></v-select>
  </div>
</template>
