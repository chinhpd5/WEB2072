import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import About from '../views/About.vue';

const router = createRouter({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/product', name: 'product', component: Product},
    {path: '/about', name: 'about', component: About},
  ],
  history: createWebHistory()
})

export default router;