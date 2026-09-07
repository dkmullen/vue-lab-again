import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function getArticles() {
  return apiClient.get('/articles')
}

export function getArticle(id, date) {
  return apiClient.get(`/articles?id=${id}&date=${date}`)
}

