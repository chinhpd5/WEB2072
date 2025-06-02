import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import About from '../views/About.vue';
import ClientLayout from '../layouts/ClientLayout.vue';
import ProductDetail from '../views/ProductDetail.vue';

const router = createRouter({
  routes: [
    {
      path: '/', component: ClientLayout, children: [
        {path: '/', name: 'home', component: Home},
        {path: '/product', name: 'product', component: Product},
        {path: '/about', name: 'about', component: About},
        {path: '/product/:id', name: 'product-detail', component: ProductDetail},
      ]
    }
  ],
  history: createWebHistory()
})

export default router;