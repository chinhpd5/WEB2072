<script setup>
import { ref } from 'vue'; 
import ProductList from './components/ProductList.vue';
import ProductAdd from './components/ProductAdd.vue';
import { onMounted } from 'vue';
import axios from 'axios';

  const products = ref([])
  const isShow = ref(true)

  onMounted(async ()=>{
    try {
      // call api lấy dữ liệu từ db.json -> bất đồng bộ
      const response = await axios.get(`http://localhost:3000/products`);
      // console.log(response); //-> đồng bộ

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

  const handleDelete = async (value) =>{
    // console.log(value);
    // products.value = products.value.filter(item => item.id != value)

    try {
      // xóa trong db.json
      await axios.delete(`http://localhost:3000/products/${value}`)

      // cập nhật lại giao (xóa sản phẩm tại giao diện)
      products.value = products.value.filter(item => item.id != value)
    } catch (error) {
      console.log(error);
    }
  }
  
</script>

<template>
  <div>
    <button @click="isShow = !isShow" class="btn btn-primary">Toggle</button>
    <ProductList v-if="isShow" :productsList="products" @deleteProduct="handleDelete" />
    <ProductAdd @pushProduct="handleAdd"/>
    
  </div>
</template>

<style scoped></style>
