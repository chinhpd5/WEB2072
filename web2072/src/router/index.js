import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import ProductPage from '../pages/ProductPage.vue';

const router = createRouter({
  routes: [
    {path: '/', name: 'home-page', component: HomePage},
    {path: '/product', name: 'product-page', component: ProductPage},
  ],
  history: createWebHistory()
})

export default router;