<script setup>
  import {ref} from 'vue'
  const score = ref(Math.floor(Math.random()*10)*10);

  const isLoggin = ref(false)
</script>

<template>
  <div>
    <h1>Điểm: {{ score }}</h1>
    <h4>
      Học lực: 
      <span v-if="score >= 90">Giỏi</span>
      <span v-else-if="score >= 70">Khá</span>
      <span v-else-if="score >= 50">Trung bình</span>
      <span v-else>Yếu</span>
    </h4>
    <hr>

    <div class="d-flex">

      <div v-show="isLoggin">
        <div class="d-flex">
          <h5>Xin chào, chinhpd5!</h5>
          <button @click="isLoggin = !isLoggin" class="btn btn-outline-warning">Đăng xuất</button>
        </div>
      </div>

      <button @click="isLoggin = !isLoggin" v-show="!isLoggin" class="btn btn-primary">Đăng nhập</button>
    </div>
  </div>
</template>

<style scoped></style>
