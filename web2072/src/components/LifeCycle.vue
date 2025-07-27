<template>
  <div class="container">
    <h1>LifeCycle</h1>
  </div>
</template>

<script setup>
import {onBeforeMount, onMounted } from 'vue';

const isLogin = true;

// gọi trước component được mount vào DOM
onBeforeMount(()=>{
  console.log('onBeforeMount - Trước Component mount');
  if(!isLogin){
    alert("Bạn chưa đăng nhập")
  }
});

// Gọi sau khi Component được mount - Call API
onMounted(() => {
  console.log('onMounted - Gọi sau khi component được mount');
})


</script>

<style>

</style>