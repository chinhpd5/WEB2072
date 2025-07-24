<template>
  <div>
    <h1>Họ và tên: {{ name }}</h1>
    <h2>Tuổi: {{ age }}</h2>
    <h3>Giới tính: {{ gender ? "nam": "nữ" }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  age: Number,
  gender: Boolean
})

console.log(props);
</script>

<style scoped>

</style>