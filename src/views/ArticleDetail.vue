<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('route', route)
</script>

<template>
  <div class="container">
    <h1>Article {{ route.params.id }}</h1>
  </div>
</template>
