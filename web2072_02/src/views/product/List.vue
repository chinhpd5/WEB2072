<template>
  <div>
    <h1>Danh sách sản phẩm</h1>
    <!-- <router-link to="/admin/product/add" class="btn btn-primary">Thêm mới</router-link> -->
    <!-- <router-link to="product/add" class="btn btn-primary">Thêm mới</router-link> -->
    <router-link :to="{name: 'product-add'}" class="btn btn-primary">Thêm mới</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Giá bán</th>
          <th scope="col">Danh mục</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Hình Ảnh</th>
          <th scope="col">Tags</th>
          <th scope="col">Mô tả</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in products" :key="item.id">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.isVisible ? "Kích hoạt": "Ẩn" }}</td>
          <td><img height="70" :src="item.imageUrl" alt=""></td>
          <td>
            <span v-for="(tag,i) in item.tags" :key="i">{{ tag }}, </span>
          </td>
          <td>{{ item.description }}</td>
          <td>
            <button @click="handleDelete(item.id)" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

import { onMounted,ref, TrackOpTypes } from 'vue';
import instanceAxios from '../../utils/configAxios';

const products = ref([])

const getAllProducts = async() =>{
  try {
    const res = await instanceAxios.get(`/products`);
    // console.log(res);
    products.value = res.data
    
  } catch (error) {
    console.log(error);
    
  }
}

const handleDelete = async (id) =>{
  // console.log(id);
  if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
    try {
      await instanceAxios.delete(`/products/${id}`)

      products.value = products.value.filter(item => item.id != id)

    } catch (error) {
      console.log(error);
      
    }
  }
  
}

onMounted(()=>{
  getAllProducts()
})

</script>

<style></style>
