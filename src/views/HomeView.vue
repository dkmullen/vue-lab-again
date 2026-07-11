<script>
import { ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const title = ref('Home')
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Hey now!</p>
  <div>
    <v-btn>Click me</v-btn>
  </div>
</template>
