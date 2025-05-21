<script setup>
  import {ref} from 'vue'
  const score = ref(Math.floor(Math.random()*10)*10)
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

  </div>
</template>

<style scoped></style>
