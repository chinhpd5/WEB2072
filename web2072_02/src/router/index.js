import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import About from '../views/About.vue';
import ClientLayout from '../layouts/ClientLayout.vue';
import ProductDetailClient from '../views/ProductDetail.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import ProductList from '../views/product/List.vue';
import ProductAdd from '../views/product/Add.vue';
import ProductEdit from '../views/product/Edit.vue';
import ProductDetail from '../views/product/Detail.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const router = createRouter({
  routes: [
    {
      path: '/', component: ClientLayout, children: [
        {path: '/', name: 'home', component: Home},
        {path: 'product', name: 'product', component: Product},
        {path: 'about', name: 'about', component: About},
        {path: 'product/:id', name: 'product-detail', component: ProductDetailClient},
        {path: 'login', name:'login', component: Login},
        {path: 'register', name:'register', component: Register},
      ]
    },
    {
      path: '/admin', component: AdminLayout, children: [
        {path: 'product', name: 'product-list', component: ProductList},
        {path: 'product/add', name: 'product-add', component: ProductAdd},
        {path: 'product/edit/:id', name: 'product-edit', component: ProductEdit},
        {path: 'product/detail/:id', name: 'product-detail', component: ProductDetail},
      ]
    }
  ],
  history: createWebHistory()
})

export default router;