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
  <p v-for="article in articles" :key="article.id">
    <span class="pseudo-link" @click="fetchArticle(article.id, article.date)">{{ article.title }}</span> -
    <span>{{ article.date }}</span> -
    <span>{{ article.tagline }}</span> -
    <span>{{  article.id }}</span>
  </p>
  <div v-html="articleContent"></div>
</template>
