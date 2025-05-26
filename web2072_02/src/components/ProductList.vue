<template>
  <div class="container">
    <h1>Danh sách sản phẩm:</h1>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Giá bán</th>
          <th scope="col">Mô tả</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Danh mục</th>
          <th scope="col">Đánh giá</th>
          <th scope="col">Hình ảnh</th>
          <th scope="col">Tag</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in productsList" :key="item.id">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.rating }}</td>
          <td><img width="70" :src="item.imageUrl" alt=""></td>
          <td>
            <span v-for="(tag,i) in item.tags" :key="i">
              {{ tag }},
            </span>
          </td>
          <td>
            <button class="btn btn-danger">Xóa</button>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  productsList: Array,
});
</script>

<style></style>
