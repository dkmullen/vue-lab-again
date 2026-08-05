<script setup>
import EntityForm from '@/components/EntityForm.vue'

const formModel = [
  { id: 'name', label: 'Name', cols: 3 },
  { id: 'favorite-color', label: 'Favorite Color', cols: 3, type: 'select', items: ['Red', 'Blue', 'Green'] },
  { id: 'pet', label: 'Pet \'s Name', cols: 3 },
  { id: 'phone', label: 'Phone', type: 'phone', required: false, cols: 3 },
  { id: 'message', label: 'Message', type: 'textarea' },
  { id: 'message2', label: 'Message', type: 'textarea' },
]

function handleSubmit(values) {
  console.log(values)
}

</script>
<template>
  <h1>Page Two</h1>
  <p>Heel it now, dig?</p>
   <EntityForm :formModel="formModel" @submit="handleSubmit" />
</template>
