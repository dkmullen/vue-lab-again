<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/appstore.js'
import NavBar from './components/NavBar.vue'

const store = useAppStore()
const loading = computed({
  get: () => store.loading,
  set: (value) => store.setLoading(value),
})
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <v-overlay v-model="loading" persistent></v-overlay>
    <v-progress-circular
      v-if="loading"
      :size="70"
      color="primary"
      indeterminate
      id="main-spinner"
      class="centered"
    ></v-progress-circular>
</template>

<style scoped>
.centered {
  position: fixed !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
