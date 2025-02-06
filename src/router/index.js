import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PictureInfoView from '../views/PictureInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: HomeView },
    },
    {
      path: '/pictureinfo/:id',
      name: 'pictureinfo',
      components: { default: HomeView, popup: PictureInfoView },
    },
  ],
})

export default router
