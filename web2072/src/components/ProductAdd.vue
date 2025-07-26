<template>
  <div class="container">
    <h1>Thêm mới sản phẩm</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Tên sản phẩm</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
      </div>

      <div class="mb-3">
        <label for="imageUrl" class="form-label">Hình ảnh</label>
        <input type="text" class="form-control" id="imageUrl" v-model="product.imageUrl">
      </div>

      <div class="mb-3">
        <label for="price" class="form-label">Giá bán</label>
        <input type="number" class="form-control" id="price" v-model="product.price">
      </div>
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const product = ref({
  // name: "abc"
})

const handleSubmit = () =>{
  console.log(product.value);
  
}
</script>

<style></style>