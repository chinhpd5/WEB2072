<template>
  <div>
    <h1>Trang Sản phẩm</h1>
    <!-- Hiển thị danh sách sản phẩm theo dạnh card -->

    <ul>
      <li v-for="(item) in products" :key="item.id">
        <router-link :to="`/product/${item.id}`">{{ item.id }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';

const products = ref([])

onMounted(async() => {
  const response = await axios.get(`http://localhost:3000/products`);
  console.log(response);
  
  products.value = response.data
})


</script>

<style>

</style>