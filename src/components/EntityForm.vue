<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  formModel: { type: Array },
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
</script>

<template>
  <section id="form-wrapper">
    <v-form ref="form" v-model="valid">
      <v-row density="compact">
        <v-col
          v-for="item in formModel"
          :key="item.id"
          cols="12"
          :md="item.cols || 6"
        >
          <BaseInput
            v-model="values[item.id]"
            :type="item.type || 'text'"
            :label="item.label"
            :id="item.id"
            :required="item.required"
          />
        </v-col>
      </v-row>
      <v-row density="compact">
        <v-col align="center">
          <BaseButton label="Submit" @click="submit"/>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>

<style scoped>
#form-wrapper {
  max-width: 700px;
  margin: auto;
  margin-bottom: 50px;
}
</style>
