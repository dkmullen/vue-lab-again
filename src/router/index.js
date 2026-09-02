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
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      redirect: '/articles-list',
      children: [
        {
          path: '',
          name: 'articles-list',
          component: () => import('../views/ArticlesList.vue'),
        },
        {
          path: ':id',
          name: 'article-detail',
          component: () => import('../views/ArticleDetail.vue'),
        }
      ]
    }
  ]
})

export default router
