import axios from 'axios'
import { useAppStore } from '@/stores/appstore'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

function withLoading(request) {
  const appStore = useAppStore()
  appStore.setLoading(true)

  return Promise.resolve(request()).finally(() => {
    appStore.setLoading(false)
  })
}

export function getArticles() {
  return withLoading(() => apiClient.get('/articles'))
}

export function getArticle(id, date) {
  return withLoading(() => apiClient.get(`/articles?id=${id}&date=${date}`))
}

