import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/Layout.vue';

const router = createRouter({
  routes: [
    {
      path: '/', component: Layout, children: []
    }
  ],
  history: createWebHistory()
})

export default router;