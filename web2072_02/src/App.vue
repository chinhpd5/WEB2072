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
    count.value = 0;
  }

  const text = ref('');
  const message = ref('')

  const handleKey = (event) => {
    // console.log(event.key);
    // if(event.key == 'Enter'){
    //   message.value = text.value
    // }
  }
  
  const showMessage = () =>{
    message.value = text.value
  }


</script>

<template>
  <div>
    
    <div>
      <!-- Sự kiện với chuột -->
      <!-- <button v-on:click="handleAlert" class="btn btn-primary">show</button> -->
      <!-- <button @dblclick="handleAlert" class="btn btn-primary">show</button> -->
      <h1>Count: {{ count }}</h1>

      <button @click="handleIncrease" class="btn btn-primary">Tăng</button>
      <button @click="handleDecrease" class="btn btn-danger">Giảm</button>
      <button @click="handleReset" class="btn btn-warning">Reset</button>
    </div>

    <div>
      <!-- Sự kiện với bàn phím -->
      <input type="text" @keydown="handleKey" @keydown.enter="showMessage" v-model="text">
      <h1>Text: {{ message }}</h1>
    </div>


    <div>
      <h1>Danh sách sản phẩm:</h1>
    </div>
  </div>
</template>

<style scoped></style>
