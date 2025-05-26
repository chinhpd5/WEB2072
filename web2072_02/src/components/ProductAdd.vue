<template>
  <div class="container">\
      <h1>Thêm mới sản phẩm:</h1>
      <!-- Sự kiện với form -->
       <form @submit.prevent="handleSubmit">

        <div class="mb-3">
          <label for="id" class="form-label">ID</label>
          <input type="number" class="form-control" id="id" v-model="product.id" >
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" id="name" v-model="product.name" >
        </div>

        <div class="mb-3">
          <label for="descripton" class="form-label">Mô tả</label>
          <textarea class="form-control" id="descripton" rows="3" v-model="product.description"></textarea>
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

        <div class="mb-3">
          <label for="" class="form-label">Danh mục</label>
          <select class="form-select" v-model="product.category">
            <option value="laptop">Laptop</option>
            <option value="mobile">Điện thoại</option>
            <option value="tablet">Máy tính bảng</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="image" class="form-label">Hình ảnh</label>
          <input type="text" class="form-control" id="image" v-model="product.image" >
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Tags</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="product.tags" value="gaming" id="gaming">
            <label class="form-check-label" for="gaming">
              Gaming
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="product.tags" value="student" id="student">
            <label class="form-check-label" for="student">
              Student
            </label>
          </div>
           <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="product.tags" value="budget" id="budget">
            <label class="form-check-label" for="budget">
              Budget
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
</template>

<script setup>
  import {ref} from 'vue'
  const product = ref({
    tags: []
  })
  
  const emit = defineEmits(['pushProduct'])

  const handleSubmit = () =>{
    // console.log("submit!!!");
    // console.log(product.value);
    emit('pushProduct', product.value)
  }
</script>

<style>

</style>