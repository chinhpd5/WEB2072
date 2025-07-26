<template>
  <div>
    <!-- <MyComponent></MyComponent> -->
    <!-- <MyComponent :name="myName" :age="myAge" :gender="myGender"/>
    <MyComponent name="Nguyễn Văn A" :age="21" :gender="false" /> -->
    <ProductAdd @add="addProduct" />
    <ProductList :list="products" @delete="deleteProduct" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MyComponent from './components/MyComponent.vue';
import ProductList from './components/ProductList.vue';
import ProductAdd from './components/ProductAdd.vue';

const myName = "chinhpd5";
const myAge = 20;
const myGender = true;
let products = ref([
  {
    id: 1,
    name: 'Laptop Acer Aspire 7',
    description: 'Laptop gaming giá rẻ cho sinh viên.',
    price: 15000000,
    inStock: true,
    category: 'Laptop',
    rating: 4.2,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2022/10/03/image-removebg-preview-60.png',
    tags: ['gaming', 'student', 'budget'],
    quantity: 10,
    featured: true
  },
  {
    id: 2,
    name: 'MacBook Air M1',
    description: 'Laptop nhẹ, hiệu năng cao cho lập trình viên.',
    price: 22000000,
    inStock: false,
    category: 'Laptop',
    rating: 3.8,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/11/16/mac-m1-ghi-1.png',
    tags: ['apple', 'm1', 'developer'],
    quantity: 0,
    featured: false
  },
  {
    id: 3,
    name: 'Dell XPS 13',
    description: 'Thiết kế cao cấp, hiệu năng ổn định.',
    price: 28000000,
    inStock: true,
    category: 'Laptop',
    rating: 2.6,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/10/17/71034921-1.png',
    tags: ['premium', 'portable'],
    quantity: 5,
    featured: true
  },
  {
    id: 4,
    name: 'HP Pavilion 15',
    description: 'Lựa chọn tầm trung cho công việc văn phòng.',
    price: 17000000,
    inStock: true,
    category: 'Laptop',
    rating: 4.0,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2023/12/22/hp-15s-silver-1.png',
    tags: ['office', 'midrange'],
    quantity: 8,
    featured: false
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad 3',
    description: 'Máy tính xách tay cơ bản cho học sinh.',
    price: 12000000,
    inStock: false,
    category: 'Laptop',
    rating: 3.9,
    imageUrl: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/07/11/lenovo-loq-15iax9-83fq0005vn-1.png',
    tags: ['basic', 'student'],
    quantity: 0,
    featured: false
  },
])

const deleteProduct = (value) =>{
  // console.log(value);
  products.value = products.value.filter((item) => {
    return item.id != value
  })
}

const addProduct = (value) => {
  // console.log(value);
  products.value.push(value)
}
</script>

<style scoped>

</style>