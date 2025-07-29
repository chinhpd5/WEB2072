# Router

## Mục tiêu bài học
- Làm việc với đường dẫn (`router`) trong `vuejs`
- Tạo `Layout`
- Làm việc với `router-link` và `router-view`

---
## Cách bước thực hiện
1. Cài đặt thư viện: 
```bash
npm i vue-router
```

2. Tạo các `pages`:
- `src/pages/HomePage.vue`;
- `src/pages/ProductPage.vue`;
- `src/pages/AboutPage.vue`;
- `src/pages/ContactPage.vue`;

- Tạo file `src/router/index.js`:
```js
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  routes: [
    {path: '/', name: 'home-page', component: Home},
    {path: '/product', name: 'product-page', component: Product},
    {path: '/about', name: 'about-page', component: About},
    {path: '/contact', name: 'contact-page', component: Contact},
  ],
  history: createWebHistory()
})

export default router;
```

- Thêm nội dung vào `src/main.js`
```js
import router from './router'

createApp(App).use(router).mount('#app')
```

- Tạo `router-view` trong `src/App.vue`
```vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```