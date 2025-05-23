<script setup>

  import { ref } from 'vue';
  const count = ref(0)
 
  const handleAlert = () =>{
    alert("Thông báo")
  }

  const handleIncrease = () => {
    count.value++
  }

  const handleDecrease = () =>{
    count.value--
  }

  const handleReset = () =>{
    count.value = 0
  }
</script>

<template>
  <div>
    
    <!-- <button v-on:click="handleAlert" class="btn btn-primary">show</button> -->
    <!-- <button @dblclick="handleAlert" class="btn btn-primary">show</button> -->
    <h1>Count: {{ count }}</h1>

    <button @click="handleIncrease" class="btn btn-primary">Tăng</button>
    <button @click="handleDecrease" class="btn btn-danger">Giảm</button>
    <button @click="handleReset" class="btn btn-warning">Reset</button>


    <div>
      <h1>Danh sách sản phẩm:</h1>
    </div>
  </div>
</template>

<style scoped></style>
