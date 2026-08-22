<script setup>
import { computed, ref } from 'vue'
import { validationRules } from './validation'
import { vMaska } from 'maska/vue'
import { formFieldProps } from './shared-props'

const isRequired = computed(() => props.required)

const props = defineProps({
  id: { type: String },
  label: { type: String },
  required: { type: Boolean, default: formFieldProps.required },
  type: { type: String, default: 'text' },
  modelValue: { type: [String, Number], default: '' },
  placeholder: { type: String },
  icon: { type: String },
  trim: { type: Boolean, default: true },
  counter: { type: Boolean, default: true },
  tabindex: { type: Number, default: formFieldProps.tabindex },
  maxlength: { type: Number, default: 40 },
})

const emit = defineEmits(['update:modelValue', 'hitEnter'])

const typeConfig = {
  ssn: { hint: 'xxx-xx-xxxx', mask: { mask: '###-##-####' } },
  phone: { hint: 'xxx-xxx-xxxx', mask: { mask: '###-###-####' } },
  zip: { hint: 'xxxxx or xxxxx-xxxx', mask: { mask: '#####-####' } },
  longdate: { hint: 'MM-DD-YYYY', mask: { mask: '##-##-####' } },
}

const { hint, mask } = typeConfig[props.type] || {}

const typeRule = computed(() => {
  const rules = []
  if (validationRules[props.type]) {
    rules.push(...validationRules[props.type])
  }
  if (validationRules[props.xtraRuleType]) {
    rules.push(...validationRules[props.xtraRuleType])
  }
  if (isRequired.value) {
    rules.unshift(...validationRules.requiredRule)
  }
  return rules
})

const internalValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    let output = value

    if (props.trim && typeof value === 'string') {
      output = value.trim()
    }

    emit('update:modelValue', output)
  },
})

defineExpose({ focus })
const input = ref()
function focus() {
  input.value.focus()
}
</script>

<template>
  <div>
    <v-text-field
      v-model="internalValue"
      :id="id"
      :label="isRequired ? `${props.label}*` : props.label"
      v-bind="{
          variant: formFieldProps.variant,
          density: formFieldProps.density,
          ...$attrs,
        }"
      :class="formFieldProps.class"
      :required="isRequired"
      :rules="typeRule"
      :placeholder="hint ? hint : props.placeholder"
      v-maska="mask"
      :type="type"
      :counter="counter"
      :tabindex="props.tabindex"
      @keyup.enter="emit('hitEnter')"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      ref="input"
      :maxlength="maxlength"
      ><v-icon size="small" v-if="props.icon">{{ props.icon }}</v-icon>
    </v-text-field>
  </div>
</template>
