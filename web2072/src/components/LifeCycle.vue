<template>
  <div class="container">
    <h1 @click="handleChangeTitle">{{ title }}</h1>
    
  </div>
</template>

<script setup>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';

const isLogin = true;
const title = ref('LifeCycle');

const handleChangeTitle = () => {
  title.value = 'LifeCycle update'
}

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

// Gọi trước component có sự thay đổi
onBeforeUpdate(() =>{
  console.log('onBeforeUpdate');
})

// Gọi sau khi component đã thay đổi xong
onUpdated(() =>{
  console.log('onUpdated');
})
</script>

<style>

</style>