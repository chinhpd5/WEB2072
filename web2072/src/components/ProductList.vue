<template>
  <div class="container">
    <h1>Danh sách sản phẩm</h1>
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Hình ảnh</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Giá bán</th>
          <th scope="col">Danh mục</th>
          <th scope="col">Đánh giá</th>
          <th scope="col">Tag</th>
          <th scope="col">Yêu thích</th>
          <th scope="col">Mô tả</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="item.id">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ item.name }}</td>
          <td>
            <img height="50" :src="item.imageUrl" alt="">
          </td>
          <td>
            <span v-if="item.inStock">{{ item.quantity }}</span>
            <span v-else>Hết hàng</span>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.category }}</td>
          <td>
            <span v-if="item.rating ==5 ">⭐⭐⭐⭐⭐</span>
            <span v-else-if="item.rating >= 4">⭐⭐⭐⭐</span>         
            <span v-else-if="item.rating >= 3">⭐⭐⭐</span>         
            <span v-else-if="item.rating >= 2">⭐⭐</span>         
            <span v-else-if="item.rating >= 1">⭐</span> 
            <span v-else></span>       
          </td>
          <td>
            <span v-for="(tag,i) in item.tags" :key="i">
              {{ tag }}, 
            </span>
          </td>
          <td>
            <span v-show="item.featured">Sản phẩm nổi bật</span>
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
const props = defineProps({
  list: Array,
});
const emit = defineEmits(['delete'])
// console.log(props);

// gửi dữ liệu từ con lên cha -> emit
const handleDelete = (id) =>{
  // console.log(id);
  if(window.confirm("bạn có muốn xóa không?")){
    emit('delete',id)
  }
}
</script>

<style></style>
