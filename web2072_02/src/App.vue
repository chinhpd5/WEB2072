<script setup>
  import {reactive, ref} from 'vue'
  // one way binding
  const myName = "chinhpd5";
  const imageURL = "https://camerabox.vn/uploads/thuat-ngu-nhiep-anh.jpg"
  const btnClass = "btn btn-primary";

  const myText = ref('');

  const jobs = reactive(["Ăn","Ngủ","Code"])

  const handleAdd = () => {
    // console.log(myText.value);
    jobs.push(myText.value);
    myText.value = '';
      
  }

  const handleDelete = (index) =>{
    // console.log(index);
    jobs.splice(index,1);
  }
  
</script>

<template>
  <div class="pb-5">
    <!-- one way -->
    <h1>Ràng buộc 1 chiều: {{ myName }}</h1>
    <!-- <img v-bind:src="imageURL" v-bind:alt="myName"> -->
    <!-- <img :src="imageURL" :alt="myName"> -->
    <button :class="btnClass">Click</button>
    <hr>

    <!-- two way -->
    <h1>Ràng buộc 2 chiều:</h1>
    <input type="text" v-model="myText">
    <button class="btn btn-primary" v-on:click="handleAdd">Add</button>
    <!-- <h1>text: {{ myText }}</h1> -->

    <!-- to do list -->
    <ul>
      <li v-for="(item,index) in jobs" :key="index">
        {{ item }}
        <button class="btn btn-danger" @click="handleDelete(index)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
