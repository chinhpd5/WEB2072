<template>
  <div>
    <h1>Xin chào: {{ name }}</h1>

    <div>
      <!-- Sự kiện với chuột -->
      <!-- <button v-on:click="handleAlert" class="btn btn-primary">show</button> -->
      <!-- <button @dblclick="handleAlert" class="btn btn-primary">show</button> -->
      <h1>Count: {{ count }}</h1>

      <button @click="handleIncrease" class="btn btn-primary">Tăng</button>
      <button @click="handleDecrease" class="btn btn-danger">Giảm</button>
      <button @click="handleReset" class="btn btn-warning">Reset</button>
    </div>
  </div>

</template>

<script setup>
  import {ref} from 'vue'
  const name = "Chinhpd5"
  const count = ref(0)
  
  const handleIncrease = () => {
    count.value++
  }

  const handleDecrease = () =>{
    count.value--
  }

  const handleReset = () =>{
    count.value = 0;
  }
</script>

<style scoped>
  .h1{
    color: red
  }
</style>