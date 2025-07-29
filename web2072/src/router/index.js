import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import ProductPage from '../pages/ProductPage.vue';
import ClientLayout from '../layouts/ClientLayout.vue';

const router = createRouter({
  routes: [
    {
      path: '/', component: ClientLayout, children: [
        {path: '/', name: 'home-page', component: HomePage},
        {path: '/product', name: 'product-page', component: ProductPage},
      ]
    }
  ],
  history: createWebHistory()
})

export default router;