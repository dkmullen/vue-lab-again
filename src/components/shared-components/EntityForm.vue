<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  formModel: { type: Array },
  formTitle: { type: String, default: 'Form' },
})

const emit = defineEmits(['submit'])

const form = ref()
const valid = ref(false)

const values = reactive(
  Object.fromEntries(props.formModel.map((item) => [item.id, '']))
)

async function submit() {
  const { valid: isValid } = await form.value.validate()
  if (isValid) {
    emit('submit', values)
  }
}

async function clear() {
  form.value.reset()
  Object.keys(values).forEach((key) => (values[key] = ''))
}
</script>

<template>
  <section id="form-wrapper">
    <div class="text-center">
      <h2>{{ formTitle }}</h2>
    </div>
    <v-form ref="form" v-model="valid">
      <v-row density="compact">
        <v-col
          v-for="item in formModel"
          :key="item.id"
          cols="12"
          :md="item.cols || 6"
        >
          <BaseInput
            v-if="!item.type || item.type !== 'textarea' && item.type !== 'select'"
            v-model="values[item.id]"
            :type="item.type || 'text'"
            :label="item.label"
            :id="item.id"
            :required="item.required"
          />
          <BaseTextArea
            v-if="item.type === 'textarea'"
            v-model="values[item.id]"
            :label="item.label"
            :id="item.id"
            :required="item.required"
          />
          <BaseSelect
            v-if="item.type === 'select'"
            v-model="values[item.id]"
            :label="item.label"
            :id="item.id"
            :required="item.required"
            :items="item.items"
          />
        </v-col>
      </v-row>
      <v-row density="compact">
        <v-col align="center">
          <BaseButton label="Clear Form" @click="clear" color="secondary"/>
          <BaseButton label="Submit" @click="submit" icon="mdi-send"/>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>

<style scoped>
#form-wrapper {
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
}
</style>
