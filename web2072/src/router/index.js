import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import ProductPage from '../pages/ProductPage.vue';
import ClientLayout from '../layouts/ClientLayout.vue';
import ProductDetailPage from '../pages/ProductDetailPage.vue';
import AdminLayout from '../layouts/AdminLayout.vue';
import ListProduct from '../pages/product/List.vue';
import DetailProduct from '../pages/product/Detail.vue';
import AddProduct from '../pages/product/Add.vue';
import EditProduct from '../pages/product/Edit.vue';

const router = createRouter({
  routes: [
    {
      path: '/', component: ClientLayout, children: [
        {path: '/', name: 'home-page', component: HomePage},
        {path: 'product', name: 'product-page', component: ProductPage},
        {path: 'product/:id', name: 'product-detail-page', component: ProductDetailPage},
      ]
    },
    {
      path: '/admin', component: AdminLayout, children: [
        {path: 'product', component: ListProduct, name: 'product-list'},
        {path: 'product/detail/:id', component: DetailProduct, name: 'product-detail'},
        {path: 'product/add', component: AddProduct, name: 'product-add'},
        {path: 'product/edit/:id', component: EditProduct, name: 'product-edit'},
      ]
    }
  ],
  history: createWebHistory()
})

export default router;