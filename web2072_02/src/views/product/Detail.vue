<template>
  <div>
    <h1>Chi tiết sản phẩm</h1>

    <div>
      <h1>Tên sản phẩm: {{ product.name }}</h1>
      <h2>Giá bán: {{ product.price }}</h2>
      <h3>Mô tả: {{ product.description }}</h3>
      <h3>Trang thái: {{ product.isVisible ? "Hiển thị": "Ẩn" }}</h3>
      <h3>Danh mục: {{ product.category }}</h3>
      <h3>Hình ảnh: </h3> <img :src="product.imageUrl" width="200" alt="">
      <h3>Tags: </h3>
      <ul>
        <li v-for="(item,index) in product.tags" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {useRoute} from 'vue-router'
import instanceAxios from '../../utils/configAxios'

const route = useRoute();
const id = route.params.id;
// console.log(id);

const product = ref({
  name: '',
  description: '',
  price: null,
  isVisible: null,
  category: '',
  imageUrl: '',
  tags: [],
  quantity: null
})

const getProductById = async () =>{
  try {
    const res = await instanceAxios.get(`/products/${id}`)
    // console.log(res);
    product.value = res.data

  } catch (error) {
    console.log(error);
  }
}

onMounted(()=>{
  getProductById();
})


</script>

<style>

</style>