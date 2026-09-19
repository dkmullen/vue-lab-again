import { defineStore } from 'pinia'

export const useAppStore = defineStore('appstore', {
    state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(bool) {
      this.loading = bool
    },
  }
})
