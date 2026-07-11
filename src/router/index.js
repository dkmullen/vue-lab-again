import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/page-two',
      name: 'page-two',
      component: () => import('../views/PageTwo.vue'),
    },
  ],
})

export default router
