<template>
  <div>
    <!-- <MyComponent></MyComponent> -->
    <!-- <MyComponent :name="myName" :age="myAge" :gender="myGender"/>
    <MyComponent name="Nguyễn Văn A" :age="21" :gender="false" /> -->
    <!-- <LifeCycle v-if="isShow" />
    <button @click="isShow = !isShow" class="btn btn-danger">Toggle</button> -->
    <ProductAdd @add="addProduct" />
    <ProductList :list="products" @delete="deleteProduct" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MyComponent from './components/MyComponent.vue';
import ProductList from './components/ProductList.vue';
import ProductAdd from './components/ProductAdd.vue';
import LifeCycle from './components/LifeCycle.vue';
import axios from 'axios';

const myName = "chinhpd5";
const myAge = 20;
const myGender = true;
let products = ref([]);
const isShow = ref(true);

// callback
// promise
// async await

onMounted(async () => {
  // lấy dữ liệu
  const response = await axios.get(`http://localhost:3000/products`) // bất đồng bộ

  // Hiển thị dữ liệu // đồng bộ
  // console.log(response);
  products.value = response.data
})

const deleteProduct = (value) =>{
  // console.log(value);
  products.value = products.value.filter((item) => {
    return item.id != value
  })
}

const addProduct = async (value) => {
  // console.log(value);
  await axios.post(`http://localhost:3000/products`,value)
  products.value.push(value)
}
</script>

<style scoped>

</style>