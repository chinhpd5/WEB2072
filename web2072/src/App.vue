<script setup>
const name = "chinhpd5";
const age= 20;
const gender = true;

</script>

<template>
  <div>
    <h1>Họ và tên: {{ name }}</h1>
    <h2>Tuổi: {{ age }}</h2>
    <h3>Giới tính: {{ gender ? "Nam": "Nữ" }}</h3>
  </div>
</template>

<style scoped>
/* scoped khai phạm css chỉ thỏa mãn trong file vue hiện tại */
</style>
