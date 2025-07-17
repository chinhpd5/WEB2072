<template>
  <div>
    <!-- one-way binding -->
    <h1>Họ và tên: {{ name }}</h1>
    <img height="100" v-bind:src="imageURL" v-bind:alt="name">
    <img height="100" :src="imageURL" :alt="name">
    <hr>

    <!-- two-way binding -->
    <input type="text" v-model="text">
    <h1>Content: {{ text }}</h1>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const name = "chinhpd5";
const imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsY-zxNnrhZxqj4a_6Kvuv_tU1oGJWdAY1g&s"

const text = ref("chinhpd5")

</script>

<style>

</style>