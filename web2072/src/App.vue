<template>
  <div>
    <!-- if else -->
    <h1>Điểm: {{ mark }}</h1>
    <h2>
      Học lực:
      <span v-if="mark >= 9">Giỏi</span>
      <span v-else-if="mark >= 7">Khá</span>
      <span v-else-if="mark >= 5">Trung bình</span>
      <span v-else>Yếu</span>
    </h2>

    <hr>
    <!-- show -->
    <button v-show="!isLogin" @click="isLogin = !isLogin" class="btn btn-primary">Đăng nhập</button>
    <div v-show="isLogin">
      <h3>Xin chào, admin</h3>
      <button @click="isLogin = !isLogin" class="btn btn-outline-danger">Đăng xuất</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const mark = Math.floor(Math.random()*10);
const isLogin = ref(false);
</script>

<style>

</style>