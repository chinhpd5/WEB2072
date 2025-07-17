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
    <hr>
    <h1>Todo list:</h1>

    <input type="text" v-model="job">
    <button v-on:click="handleAddJob" class="btn btn-primary">Add job</button>
    <ul>
      <li v-for="(item,index) in jobs" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const name = "chinhpd5";
const imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsY-zxNnrhZxqj4a_6Kvuv_tU1oGJWdAY1g&s"

const text = ref("chinhpd5");
const jobs = reactive(["Ăn", "Ngủ", "Code"])
const job = ref("");

const handleAddJob = () => {
  // console.log(job.value);
  jobs.push(job.value)
  job.value = ""
}
</script>

<style>

</style>