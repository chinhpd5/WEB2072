<template>
  <div class="border border-1 border-dark rounded">
    <h1>Sản phẩm: {{ name }}</h1>
    <h4>Giá: {{ price }}</h4>
    <h6>Mô tả: {{ description }}</h6>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  price: Number,
  description: String
})
</script>

<style>

</style>