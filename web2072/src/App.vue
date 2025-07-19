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
    <button v-show="!isLogin" @click="isLogin = !isLogin" class="btn btn-primary">
      Đăng nhập
    </button>

    <div v-show="isLogin">
      <h3>Xin chào, admin</h3>
      <button @click="isLogin = !isLogin" class="btn btn-outline-danger">
        Đăng xuất
      </button>
    </div>

    <hr>
    <!-- for -->
    <ul>
      <li v-for="(item, index) in myArray" :key="index">
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mark = Math.floor(Math.random()*10);
const isLogin = ref(false);
const myArray = [
  {name: "Nguyễn Văn A", age: 20},
  {name: "Nguyễn Văn B", age: 21},
  {name: "Nguyễn Văn C", age: 22}
];
</script>

<style>

</style>