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
  </div>
</template>

<script setup>

const mark = Math.floor(Math.random()*10);

</script>

<style>

</style>