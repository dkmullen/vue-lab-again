<script>
import { ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const title = ref('Home')
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Hey now!</p>
  <div>
    <v-btn color="primary">Click me</v-btn>
    <v-text-field label="Label"></v-text-field>
    <v-select
      label="Select"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
  </div>
</template>
