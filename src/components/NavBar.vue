<script setup>
import { useRouter } from 'vue-router'

useRouter()
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/page-two">Page Two</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

a {
  text-decoration: none;
  color: #0066cc;
}

a:hover {
  text-decoration: underline;
}
</style>
