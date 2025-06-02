<template>
  <div>
    <h1>Trang sản phẩm</h1>
    <div>
      <ul>
        <li v-for="item in products" :key="item.id">
          <router-link :to="`/product/${item.id}`">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  // Xây dựng danh sách sản phẩm dưới dạng card
  // click vào nút chi tiết ->Trang Chi tiết sản phẩm
  // Xây dựng giao diện trang chi tiết sản phẩm

  import { onMounted,ref } from 'vue';
  import axios from 'axios';

  const products = ref([])

  const getAllProduct = async() =>{
    try {
      const res = await axios.get(`http://localhost:3000/products`)
      // console.log(res);
      products.value = res.data;
      
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(() =>{
    getAllProduct()
  })
</script>

<style>

</style>