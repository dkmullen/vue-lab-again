<script setup>
import { ref } from 'vue'

const articles = ref([
  { id: 1, title: 'Article 1', date: '2026-01-01', tagline: 'This is the tagline for Article 1 ' },
  { id: 2, title: 'Article 2', date: '2026-02-01', tagline: 'This is the tagline for Article 1 ' },
  { id: 3, title: 'Article 3', date: '2026-03-01', tagline: 'This is the tagline for Article 1 ' },
])
</script>

<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h2><a :href="`/articles/${article.id}`">{{ article.title }}</a></h2>
        <p>{{ article.date }}</p>
        <p>{{ article.tagline }}</p>
      </li>
    </ul>
  </div>
</template>
