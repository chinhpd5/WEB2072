<template>
  <div>
    <h1>Chi tiết sản phẩm</h1>
    <h2>Tên sản phẩm: {{ product.name }}</h2>
    <h2>Giá sản phẩm: {{ product.price }}</h2>
    <h2>Hình ảnh:</h2>
    <img height="200" :src="product.imageUrl" alt="">
    <h2>Số lượng: {{ product.quantity }}</h2>
    <h2>Danh mục: {{ product.category }}</h2>
    <h2>Mô tả: {{ product.description }}</h2>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import { onMounted, ref } from 'vue';
import instance from '../../utils/configAxios';
const router = useRoute();
const id = router.params.id;
const product = ref({})
// console.log(id);

onMounted(async() => {
  try {
    const res = await instance.get(`/products/${id}`);
    // console.log(res);
    product.value = res.data
  } catch (error) {
    console.log(error);
  }
})

</script>

<style>

</style>