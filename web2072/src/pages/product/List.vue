<template>
  <div>
    <h1>Danh sách sản phẩm</h1>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Hình ảnh</th>
          <th scope="col">Giá bán</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Danh mục</th>
          <th scope="col">Mô tả</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in products" :key="item.id">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ item.name }}</td>
          <td><img height="50" :src="item.imageUrl" alt=""></td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button @click="handleDelete(item.id)" class="btn btn-danger">Xóa</button>
            <router-link class="btn btn-success" :to="`/admin/product/detail/${item.id}`">Chi tiết</router-link>
            <!-- <router-link class="btn btn-success" :to="`product/detail/${item.id}`">Chi tiết</router-link> -->
            <!-- <router-link class="btn btn-success" :to="{name: 'product-detail', params: {'id': item.id}}">Chi tiết</router-link> -->
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import instance from '../../utils/configAxios';

const products = ref([]);

onMounted(async() => {
  try {
    const res = await instance.get(`/products`);
    // console.log(res);
    products.value = res.data
    
  } catch (error) {
    console.log(error);
  }

})

const handleDelete = async (id) => {
  // console.log(id);
  try {
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      await instance.delete(`/products/${id}`)

      // cập nhật giao diện
      products.value = products.value.filter((item)=>{
        return item.id != id
      })
    }    
  } catch (error) {
    console.log(error);
  }
}

</script>

<style></style>