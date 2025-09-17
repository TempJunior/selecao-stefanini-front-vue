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
      path: '/autor',
      name: 'autor',
      component: () => import('../views/AutorView.vue'),
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: () => import('../views/ArtworksView.vue'),
    },
  ],
})

export default router
