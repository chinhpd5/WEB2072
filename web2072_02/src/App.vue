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

  const product = ref({})
  const handleSubmit = () =>{
    // console.log("submit!!!");
    console.log(product.value);
    
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

    <div class="container">
      <!-- Sự kiện với form -->
       <form @submit.prevent="handleSubmit">

        <div class="mb-3">
          <label for="id" class="form-label">ID</label>
          <input type="text" class="form-control" id="id" v-model="product.id" >
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" id="name" v-model="product.name" >
        </div>

        <div class="mb-3">
          <label for="price" class="form-label">Giá</label>
          <input type="number" class="form-control" id="price" v-model="product.price" >
        </div>

        <div class="mb-3">
          <label for="quantity" class="form-label">Số lượng</label>
          <input type="number" class="form-control" id="quantity" v-model="product.quantity" >
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Trạng thái</label>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="isVisible" v-model="product.isVisible" :value="true" id="active">
            <label class="form-check-label" for="active">
              Kích hoạt
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="isVisible" v-model="product.isVisible" :value="false" id="notActive">
            <label class="form-check-label" for="notActive">
              Không kích hoạt
            </label>
          </div>

        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>


    <div>
      <h1>Danh sách sản phẩm:</h1>
    </div>
  </div>
</template>

<style scoped></style>
