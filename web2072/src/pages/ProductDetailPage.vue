<template>
  <div>
    <h1>Chi tiết sản phẩm</h1>
    <!-- Chi tiết sản phẩm -->
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {onMounted} from 'vue'
import axios from 'axios';

const router = useRoute();
const id = router.params.id;

// console.log(id);
onMounted(async() => {
  const response = await axios.get(`http://localhost:3000/products/${id}`)
  console.log(response);
  
})

</script>

<style>

</style>