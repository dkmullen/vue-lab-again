<script setup>
import { ref } from 'vue'

const jpgFile = ref(null)
const pngFile = ref(null)
const selectedFiles = ref([])
const fileError = ref('')

function classifyFile(file) {
  const name = file.name.toLowerCase()
  if (file.type === 'image/jpeg' || name.endsWith('.jpg') || name.endsWith('.jpeg')) {
    return 'jpg'
  }
  if (file.type === 'image/png' || name.endsWith('.png')) {
    return 'png'
  }
  return null
}

function handleFilesChange(files) {
  if (files.length === 0) {
    jpgFile.value = null
    pngFile.value = null
    selectedFiles.value = []
    fileError.value = ''
    return
  }

  fileError.value = ''

  for (const file of files) {
    const kind = classifyFile(file)
    if (kind === 'jpg') {
      jpgFile.value = file
    } else if (kind === 'png') {
      pngFile.value = file
    } else {
      fileError.value = `"${file.name}" is not a JPG or PNG file and was not added.`
    }
  }

  selectedFiles.value = [jpgFile.value, pngFile.value].filter(Boolean)
}
</script>

<template>
  <div class="file-selection" style="max-width: 600px; margin: 0 auto; padding: 2rem">
    <h1>Select Files</h1>
    <v-file-input
      :model-value="selectedFiles"
      label="Choose a JPG and a PNG file"
      outlined
      dense
      accept=".jpg,.jpeg,.png"
      multiple
      :error-messages="fileError ? [fileError] : []"
      @update:model-value="handleFilesChange"
      clearable
    ></v-file-input>
    <p>JPG File: {{ jpgFile?.name || 'No JPG selected' }}</p>
    <p>PNG File: {{ pngFile?.name || 'No PNG selected' }}</p>
    <p v-if="!jpgFile || !pngFile" style="color: #d32f2f; font-size: 0.875rem; margin-top: 1rem">
      Both a JPG and a PNG file are required.
    </p>
  </div>
</template>
