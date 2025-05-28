<script setup>
import { ref } from 'vue'; 
import ProductList from './components/ProductList.vue';
import ProductAdd from './components/ProductAdd.vue';
import { onMounted } from 'vue';
import axios from 'axios';

  const products = ref([])

  onMounted(async ()=>{
    try {
      // call api lấy dữ liệu từ db.json -> bất đồng bộ
      const response = await axios.get(`http://localhost:3000/products`);
      console.log(response); //-> đồng bộ

      // hiển thị dữ liệu ra table -> đồng bộ
      products.value = response.data
    } catch (error) {
      console.log(error);
    }
  })

  const handleAdd = (value) =>{
    // console.log(value);
  
    const findProduct = products.value.find(item => item.id == value.id)

    if(!value.id){
      alert("Không tồn tại id")
      return;
    }

    if(findProduct){
      alert("Đã tồn tại id, vui lòng thay đổi id khác");
      return;
    }

    products.value.push(value);
    alert("Thêm thành công")

  }

  const handleDelete = (value) =>{
    // console.log(value);
    products.value = products.value.filter(item => item.id != value)
  }
  
</script>

<template>
  <div>
    <ProductList :productsList="products" @deleteProduct="handleDelete" />
    <ProductAdd @pushProduct="handleAdd"/>
    
  </div>
</template>

<style scoped></style>
