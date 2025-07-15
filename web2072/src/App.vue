<script setup>
import {ref} from 'vue'

const name = "chinhpd5";
const age= 20;
const gender = true;

const count = ref(0);

const handleIncrease = () => {
  count.value++;
  // console.log(count.value);
}

</script>

<template>
  <div>
    <h1 class="text-danger">Họ và tên: {{ name }}</h1>
    <h2>Tuổi: {{ age }}</h2>
    <h3>Giới tính: {{ gender ? "Nam": "Nữ" }}</h3>

    <div>
      <h1>{{ count }}</h1>
      <button @click="handleIncrease" class="btn btn-success">Tăng</button>
      <button class="btn btn-danger">Giảm</button>
      <button class="btn btn-warning">Reset</button>
    </div>
  </div>
</template>

<style scoped>
/* scoped khai phạm css chỉ thỏa mãn trong file vue hiện tại */
</style>
