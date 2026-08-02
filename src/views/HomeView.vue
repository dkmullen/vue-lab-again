<script setup>
import { ref } from 'vue'
import SettingsIcon from '@/components/icons/IconSettings.vue'
import BaseButton from '@/components/base-components/BaseButton.vue';
import BaseInput from '@/components/base-components/BaseInput.vue';

const title = ref('Home')
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Hey now!</p>
  <div>
    <v-btn color="primary" prepend-icon="mdi-content-save">Click me</v-btn>
    <v-text-field label="Label"></v-text-field>
    <v-select
      label="Select"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
  </div>
  <div>
    <SettingsIcon />
  </div>
  <BaseInput label="Wha?" />
  <BaseInput inputType="select" label="Choose" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" />
  <BaseInput inputType="textarea" label="Text Area" rows="6" />
  <BaseButton label="Click me" icon="mdi-content-save" color="success" />
</template>
