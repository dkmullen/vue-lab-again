<script setup>
import { ref, onMounted } from 'vue'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { getArticle, getArticles } from '@/services/apiService.js'

onMounted(async () => {
  await fetchArticles()
})

const articles = ref([])
const articleMarkdown = ref('')
const articleContent = ref('')

async function fetchArticles() {
  try {
    const response = await getArticles()
    articles.value = response?.data?.Items ?? []
    articles.value.sort((a, b) => (a.date || '').localeCompare(b.date || ''))
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
}

async function fetchArticle(id, date) {
  try {
    const response = await getArticle(id, date)
    const markdownText = response?.data?.Item?.article ?? ''
    articleMarkdown.value = markdownText
    await loadMarkdown(markdownText)
  } catch (error) {
    console.error('Error fetching article:', error)
  }
}

async function loadMarkdown(markdownText = articleMarkdown.value) {
  try {
    const file = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(markdownText)

    articleContent.value = String(file)
  } catch (error) {
    console.error('Error loading markdown:', error)
  }
}

</script>

<template>
  <h1>Articles</h1>
  <div v-for="article in articles" :key="article.id">
    <p><span class="pseudo-link" @click="fetchArticle(article.id, article.date)">{{ article.title }}</span> -
    {{ article.date.slice(5, 10) }}-{{ article.date.slice(0, 4) }}<br />
    {{ article.tagline }}</p>
  </div>
  <div v-html="articleContent"></div>
</template>
