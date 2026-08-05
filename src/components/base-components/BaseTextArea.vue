<script setup>
import { formFieldProps } from './shared-props'
import { validationRules } from './validation'

const props = defineProps({
  label: String,
  required: { type: Boolean, default: formFieldProps.required },
  modelValue: { type: [String, Number], default: '' },
  maxlength: { type: Number, default: 800 },
  counter: { type: Boolean, default: true },
})

</script>
<template>
  <v-textarea
    v-bind="{ variant: formFieldProps.variant, ...$attrs }"
    :class="formFieldProps.class"
    :label="props.required ? `${props.label}*` : props.label"
    :required="props.required ? props.required : formFieldProps.required"
    :rules="props.required ? validationRules.requiredRule : []"
    :maxlength="props.maxlength"
    :counter="props.counter"
  ></v-textarea>
</template>
