<template>
  <div>
    <h1>Trang chi tiết sản phẩm</h1>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { onMounted,ref } from 'vue';
import axios from 'axios';

const id = useRoute().params.id;
const product = ref({})

const getProductById = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    // console.log(res);
    product.value = res.data
    
  } catch (error) {
    
  }
}

// console.log(id);
onMounted(()=>{
  getProductById()
})


</script>

<style>

</style>