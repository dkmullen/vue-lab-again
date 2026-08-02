<script setup>
import { ref } from 'vue'
import EntityForm from '@/components/EntityForm.vue'

const title = ref('Home')

const formModel = [
  { id: 'first-name', label: 'First Name' },
  { id: 'last-name', label: 'Last Name' },
  { id: 'email', label: 'Email', type: 'text' },
  { id: 'phone', label: 'Phone', type: 'phone', required: false },
  { id: 'message', label: 'Message', type: 'textarea', cols: 12 },
]

function handleSubmit(values) {
  console.log(values)
}
</script>

<template>
  <h1>{{ title }}</h1>
  <EntityForm :formModel="formModel" @submit="handleSubmit" />
</template>
