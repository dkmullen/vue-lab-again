<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.change(newTheme)
  localStorage.setItem('theme', newTheme)
}

useRouter()

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.change(savedTheme)
  }
})
</script>

<template>
  <nav class="navbar d-flex justify-space-between align-center">
    <div>
      <router-link class="nav-link mr-4" to="/">Home</router-link>
      <router-link class="nav-link mr-4" to="/page-two">Page Two</router-link>
      <router-link class="nav-link mr-4" to="/about">About</router-link>
      <router-link class="nav-link mr-4" to="/articles">Articles</router-link>
    </div>
    <div>
      <v-btn icon @click="toggleTheme" variant="text">
        <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </div>
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
  color: inherit;
}

a:hover {
  text-decoration: underline;
}
</style>
