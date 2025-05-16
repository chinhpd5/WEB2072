<script setup>
  import { reactive, ref } from "vue";

  // ref: number, string, boolean
  const name = ref("chinhpd5");
  const count = ref(0)
  
  const increaseCount = () =>{
    count.value += 1
  }

  // reactive : object, array
  const myInfo = reactive({
    name: "Phí Đức Chính",
    age: 20,
    gender: false
  })

</script>

<template>
  <div>
    <!-- ref -->
    <h1>Họ và tên: {{ name }}</h1>
    <h1>Count: {{ count }}</h1>
    <button @click="increaseCount" class="btn btn-primary">Tăng</button>
    <!-- reactive -->
    <h1>Họ và tên: {{ myInfo.name }}</h1>
    <h2>Tuổi: {{ myInfo.age }}</h2>
    <h2>Giới tính: {{ myInfo.gender ? 'Nam': 'Nữ' }}</h2>
  </div>
</template>

<style scoped>

</style>
