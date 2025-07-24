<template>
  <div>
    <!-- <MyComponent></MyComponent> -->
    <MyComponent :name="myName" :age="myAge" :gender="myGender"/>
    <MyComponent name="Nguyễn Văn A" :age="21" :gender="false" />
  </div>
</template>

<script setup>
import MyComponent from './components/MyComponent.vue';
const myName = "chinhpd5";
const myAge = 20;
const myGender = true;
</script>

<style scoped>

</style>