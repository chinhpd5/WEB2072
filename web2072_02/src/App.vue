<script setup>
  import {ref} from 'vue'
  // one way binding
  const myName = "chinhpd5";
  const imageURL = "https://camerabox.vn/uploads/thuat-ngu-nhiep-anh.jpg"
  const btnClass = "btn btn-primary";

  const myText = ref('')
  
</script>

<template>
  <div class="pb-5">
    <!-- one way -->
    <h1>Ràng buộc 1 chiều: {{ myName }}</h1>
    <!-- <img v-bind:src="imageURL" v-bind:alt="myName"> -->
    <img :src="imageURL" :alt="myName">
    <button :class="btnClass">Click</button>
    <hr>

    <!-- two way -->
    <h1>Ràng buộc 2 chiều:</h1>
    <input type="text" v-model="myText">
    <h1>text: {{ myText }}</h1>
  </div>
</template>

<style scoped></style>
