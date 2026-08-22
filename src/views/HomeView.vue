<script setup>
import { ref, onMounted } from 'vue'
import EntityForm from '@/components/EntityForm.vue'

const title = ref('Home')

const formModel = [
  { id: 'first-name', label: 'First Name' },
  { id: 'last-name', label: 'Last Name' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'phone', label: 'Phone', type: 'phone', required: false },
  { id: 'color', label: 'Favorite Color', type: 'select', required: false, items: ['Red', 'Blue', 'Green'] },
  { id: 'team', label: 'Favorite Team', type: 'select', required: true, items: ['Browns', 'Guardians', 'Cavaliers'] },
  { id: 'message', label: 'Message', type: 'textarea', cols: 12 },
]

function handleSubmit(values) {
  console.log(values)
}

onMounted(() => {
  const input = document.getElementById('first-name')
  console.log('input', input)
  if (input) {
    input.focus()
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
  <EntityForm :formModel="formModel" @submit="handleSubmit" formTitle="Contact Us" />
</template>
